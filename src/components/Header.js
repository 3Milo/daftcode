import { useHistory } from "react-router-dom";

import AddButton from "./AddButton";

import back from "../images/arrow-back.svg";



import './Header.scss';

function Header(props) {

  const history = useHistory();

  const onBackArrowClick = () => {
    history.goBack();
  };
  const onAddButtonClick = () => props.onAddButtonClick();


  return (
    <div className="header">
      <img src={back} className="header__back" alt="back" onClick={onBackArrowClick}/>
      <span className="header__title">{props.title}</span>
      {
        //TODO: show / hide button
        props.addButton ? <AddButton onClick={onAddButtonClick}/> : <div style={{"minWidth": "32px"}}></div>
      }
    </div>
  );
}

export default Header;