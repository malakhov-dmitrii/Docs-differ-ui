import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Popover, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  popover: {
    padding: '10px',
    fontSize: '14px',
    maxWidth: '480px',
  },
});

const ColoredSpan = ({ children, color, onMouseEnter }) =>
  <div
    style={{
      'background': color,
      'padding': '3px 4px',
      'marginRight': '2px',
      'borderRadius': '3px',
      'display': 'inline',
    }}
    onMouseEnter={onMouseEnter}
  >{ReactHtmlParser(children)}</div>;

const mkHint = (tag, originalText, highlightColor) => children => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handlePopoverOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handlePopoverClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);

  return (
    <div style={{ 'display': 'inline' }} id={tag}>
      <ColoredSpan
        color={highlightColor}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {originalText}
      </ColoredSpan>
      <Popover
        classes={{
          paper: classes.popover,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        {children}
      </Popover>
    </div>
  );

};


const AppliedHint = ({ tag, text, dispatch }) => mkHint(tag, text, '#efefef')(
  <div id={tag}>
    <p>Вы одобрили применение этого фрагмента, но можете отклонить изменение</p>
    <Button onClick={() => dispatch({ type: 'REJECT', tag: tag })}>Отклонить</Button>
  </div>,
);

const AddHint = ({ tag, text, dispatch }) => mkHint(tag, text, '#74E8B2')(
  <div id={tag}>
    <p>Этот фрагент был добавлен в другой версии документа.<br/>Вы можете принять или отклонить изменение</p>
    <Button onClick={() => dispatch({ type: 'ACCEPT', tag: tag })}>Принять</Button>
    <Button onClick={() => dispatch({ type: 'REJECT', tag: tag })}>Отклонить</Button>
  </div>,
);

const RemoveHint = ({ tag, text, dispatch }) => mkHint(tag, text, '#FF7D7D')(
  <div>
    <p>Этот фрагент был удален в другой версии документа.<br/>Вы можете принять или отклонить изменение</p>
    <Button onClick={() => dispatch({ type: 'ACCEPT', tag: tag })}>Принять</Button>
    <Button onClick={() => dispatch({ type: 'REJECT', tag: tag })}>Отклонить</Button>
  </div>,
);


const ChooseHint = ({ tag, options, dispatch }) => {
  if (options.length) {
    return mkHint(tag, options[0], '#FFEC9B')(
      <div>
        <p>Для данного фрагмента есть несколько вариантов изменений</p>
        {options.map((option, i) =>
          <div onClick={() => dispatch({ type: 'CHOOSE', tag: `${tag}-${i}`})}>
            <input type={'radio'} value={option}/>
            <span>{option}</span>
          </div>,
        )}
      </div>,
    );
  } else {
    return null;
  }
};

const AppliedChooseHint = ({ tag, options, dispatch }) => {
  if (options.length) {
    return mkHint(tag, options[0], '#efefef')(
      <div>
        <p>Для данного фрагмента есть несколько вариантов изменений</p>
        {options.map((option, index) =>
          <div onClick={() => dispatch({ type: 'CHOOSE', tag: `${tag}-${index}` })}>
            <input type={'radio'} value={option}/>
            <span>{option}</span>
          </div>,
        )}
      </div>,
    );
  } else {
    return null;
  }
};


const diffToHint = (diff, row, col, dispatch) => {
  const tag = `${row}-${col}`;

  switch (diff.type) {
    case 'choose':
      return <ChooseHint key={col} tag={tag} options={diff.options} dispatch={dispatch}/>;
    case 'app_choose':
      return <AppliedChooseHint key={col} tag={tag} options={diff.options} dispatch={dispatch}/>;
    case 'add':
      return <AddHint key={col} tag={tag} text={diff.text} dispatch={dispatch}/>;
    case 'remove':
      return <RemoveHint key={col} tag={tag} text={diff.text} dispatch={dispatch}/>;
    case 'reviewed':
      return <AppliedHint key={col} tag={tag} text={diff.text} dispatch={dispatch}/>;
    default:
      return (
        <div style={{ 'display': 'inline' }} id={tag}>
          {ReactHtmlParser(diff.text)}
        </div>
      );
  }
};

const Content = ({ data, dispatch }) => {
    return (
      <div>
        {
          data.map((paragraphContent, row) =>
            <div key={row}
                 style={{ 'padding': '8px 0' }}>{paragraphContent.map((e, idx) => diffToHint(e, row, idx, dispatch))}
            </div>)
        }
      </div>
    );

  }
;


export default Content;