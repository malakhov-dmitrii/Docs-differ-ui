import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Popover, Button, Radio, RadioGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  popover: {
    padding: '10px',
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

const mkHint = (originalText, highlightColor) => children => {
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
    <div style={{ 'display': 'inline' }}>
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

const AddHint = ({ text }) => mkHint(text, '#74E8B2')(
  <div>
    <p>Этот фрагент был добавлен в другой версии документа.<br/>Вы можете принять или отклонить изменение</p>
    <Button>Принять</Button>
    <Button>Отклонить</Button>
  </div>,
);
const RemoveHint = ({ text }) => mkHint(text, '#FF7D7D')(
  <div>
    <p>Этот фрагент был удален в другой версии документа.<br/>Вы можете принять или отклонить изменение</p>
    <Button>Принять</Button>
    <Button>Отклонить</Button>
  </div>,
);


const ChooseHint = ({ options }) => {
  if (options.length) {
    return mkHint(options[0], '#FFEC9B')(
      <div>
        <p>Для данного фрагмента есть несколько вариантов изменений</p>
        {options.map((option, i) =>
          <div>
            <input type={'radio'} value={option}/>
            <span>{option}</span>
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }
};


const diffToHint = diff => {
  switch (diff.type) {
    case 'choose':
      return <ChooseHint options={diff.options}/>;
    case 'add':
      return <AddHint text={diff.text}/>;
    case 'remove':
      return <RemoveHint text={diff.text}/>;
    default:
      return (
        <div style={{ 'display': 'inline' }}>
          {ReactHtmlParser(diff.text)}
        </div>
      );
  }
};

const Content = ({ data }) => {
    return (
      <div>
        {data.map((paragraphContent, index) =>
          <div key={index}
               style={{ 'padding': '8px 0 8px 0' }}>{paragraphContent.map(diffToHint)}</div>)}
      </div>
    );

  }
;


export default Content;