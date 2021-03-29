import { Link } from "react-router-dom";
// import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import AddButton from "./AddButton";
import back from "../images/arrow-back.svg";
import './Header.css';

function Header(props) {

  // const user = useSelector(state => state.user);

  return (
    <div className="header">
      <Link to='/'>
        <img src={back} className="header__back" alt="back"/>
      </Link>
      <span className="header__title">{props.title}</span>
      {
        //TODO: show / hide button
        props.addButton ? <AddButton /> : <div style={{"min-width": "32px"}}></div>
      }
    </div>
  );
}

export default Header;