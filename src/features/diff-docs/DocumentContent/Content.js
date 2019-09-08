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

const ColoredSpan = ({ children, className, onMouseEnter }) =>
  <div
    className={className}
    style={{
      'padding': '3px 4px',
      'marginRight': '2px',
      'borderRadius': '3px',
      'display': 'inline',
    }}
    onMouseEnter={onMouseEnter}
  >{ReactHtmlParser(children)}</div>;

const mkHint = (tag, originalText, highlightColor, isTable) => children => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handlePopoverOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handlePopoverClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);

  const popover = (
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
  );

  if (isTable) {
    return ReactHtmlParser(originalText, {
      preprocessNodes: (nodes) => {
        nodes[0].attribs = {
          'class': highlightColor,
          'onmouseenter': handlePopoverOpen,
          'onmouseleave': handlePopoverClose,
        };
        return nodes;
      },
    });
  }

  return (
    <div style={{ 'display': 'inline' }} id={tag}>
      <ColoredSpan
        className={highlightColor}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {originalText}
      </ColoredSpan>
      {popover}
    </div>
  );

};


const AppliedHint = ({ tag, text, dispatch, isTable }) => mkHint(tag, text, 'applied', isTable)(
  <div id={tag}>
    <p>Вы одобрили применение этого фрагмента, но можете отклонить изменение</p>
    <Button onClick={() => dispatch({ type: 'REJECT', tag: tag })}>Отклонить</Button>
  </div>,
);

const AddHint = ({ tag, text, dispatch, isTable }) => mkHint(tag, text, 'add', isTable)(
  <div id={tag}>
    <p>Этот фрагент был добавлен в другой версии документа.<br/>Вы можете принять или отклонить изменение</p>
    <Button onClick={() => dispatch({ type: 'ACCEPT', tag: tag })}>Принять</Button>
    <Button onClick={() => dispatch({ type: 'REJECT', tag: tag })}>Отклонить</Button>
  </div>,
);

const RemoveHint = ({ tag, text, dispatch, isTable }) => mkHint(tag, text, 'remove', isTable)(
  <div>
    <p>Этот фрагент был удален в другой версии документа.<br/>Вы можете принять или отклонить изменение</p>
    <Button onClick={() => dispatch({ type: 'ACCEPT', tag: tag })}>Принять</Button>
    <Button onClick={() => dispatch({ type: 'REJECT', tag: tag })}>Отклонить</Button>
  </div>,
);

const TableWrapper = ({ tag, content, dispatch }) => (
  <table>
    <tbody>
    {content.map((row, idx) => diffToHint(row, tag, idx, dispatch, true))}
    </tbody>
  </table>
);


const ChooseHint = ({ tag, options, dispatch }) => {
  if (options.length) {
    return mkHint(tag, options[0], 'choose')(
      <div>
        <p>Для данного фрагмента есть несколько вариантов изменений</p>
        {options.map((option, i) =>
          <div onClick={() => dispatch({ type: 'CHOOSE', tag: `${tag}-${i}` })}>
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
    return mkHint(tag, options[0], 'applied')(
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


const diffToHint = (diff, row, col, dispatch, isTable) => {
  const tag = `${row}-${col}`;

  switch (diff.type) {
    case 'choose':
      return <ChooseHint key={col} tag={tag} options={diff.options} dispatch={dispatch}/>;
    case 'app_choose':
      return <AppliedChooseHint key={col} tag={tag} options={diff.options} dispatch={dispatch}/>;
    case 'add':
      return <AddHint key={col} tag={tag} text={diff.text} dispatch={dispatch} isTable={isTable}/>;
    case 'remove':
      return <RemoveHint key={col} tag={tag} text={diff.text} dispatch={dispatch} isTable={isTable}/>;
    case 'reviewed':
      return <AppliedHint key={col} tag={tag} text={diff.text} dispatch={dispatch} isTable={isTable}/>;
    case 'table':
      return <TableWrapper content={diff.content} tag={tag} dispatch={dispatch}/>;
    default:
      if (isTable) {
        return ReactHtmlParser(diff.text);
      } else {
        return (
          <div style={{ 'display': 'inline' }} id={tag}>
            {ReactHtmlParser(diff.text)}
          </div>
        );
      }

  }
};

const Content = ({ data, dispatch }) => {
    return (
      <div className={'diff-wrapper'}>
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