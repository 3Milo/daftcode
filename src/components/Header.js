import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import AddButton from "./AddButton";
import back from "../images/arrow-back.svg";
import './Header.css';

function Header(props) {

  const userName = useSelector(state => state.userName);

  return (
    <div className="header">
      <Link to='/'>
        <img src={back} className="header__back" alt="back"/>
      </Link>
      <span className="header__title">{userName}</span>
      <AddButton />
    </div>
  );
}

export default Header;