import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import { makeStyles } from '@material-ui/core/styles';
const SideBarItem = ({ text, row, color, onClick }) => {

  return (
    <div onClick={onClick}
         style={{
           'cursor': 'pointer',
           borderRadius: '4px',
           margin: '3px 0',
           padding: '4px',
         }}>
      <div style={{
        'width': 10,
        'height': 10,
        display: 'relative',
        top: 5,
        left: 5,
        background: color,
        borderRadius: '50px',
      }}/>
      {ReactHtmlParser(text)}
    </div>);
};

const wrapAddRem = data => {
    return (<div>
                {data}
                <div style={{"text-align": "right", "margin-right": "35px"}}>
                    <CheckIcon />
                    <CloseIcon color="secondary"/>
                </div>
            </div>);
}

const mkItem = (diff, row, index, onClick) => {
  switch (diff.type) {
    case 'choose':
      return <SideBarItem
        text={diff.options[0]}
        color={'#FFEC9B'}
        row={row}
        onClick={() => onClick(row, index)}
      />;
    case 'add':
      return wrapAddRem(<SideBarItem text={diff.text} color={'#74E8B2'} row={row} onClick={() => onClick(row, index)}/>);
    case 'remove':
      return wrapAddRem(<SideBarItem text={diff.text} color={'#FF7D7D'} row={row} onClick={() => onClick(row, index)}/>);
    default:
      return (<div style={{ 'display': 'inline' }}/>);
  }
};

const scrollToItem = (row, index) => {
  const id = `${row}-${index}`;
  const e = document.getElementById(id);
  if (e != null) {
    e.scrollIntoView();
    const totalScreens = document.body.scrollHeight / window.screen.height;
    const currentScreen = window.scrollY / window.screen.height;
    if (currentScreen < totalScreens - 1) {
      window.scrollBy(0, -100);
    }
  }
};

function iconStyles() {
    return {
      successIcon: {
        color: 'green',
      },
      errorIcon: {
        color: 'red',
      },
    }
}

const SideBar = ({ data }) => (
  <div style={{ maxHeight: '700px', overflow: 'scroll' }}>
    {
      data.map((entries, row) => {
        if (entries.every(e => e.type === 'blank'))
          return <div/>;

        return (
          <div>
            <div style={{
              fontSize: '16px',
              margin: '20px 0',
              borderBottom: '1px solid #dfdfdf',
            }}>Абзац {row + 1}</div>
            {entries.map((e, index) => mkItem(e, row, index, scrollToItem))}
          </div>
        );
      })
    }
  </div>
);

export default SideBar;
