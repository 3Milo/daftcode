import {useHistory} from "react-router-dom";
import './UserCard.scss';

function UserCard(props) {

  const history = useHistory();

  const onDetailsLinkClick = () => {
    history.push(`/users/${props.user.id}`);
  };

  return (
    <div className="user-card">
      <div className="user-card__title">
        {props.user.name}
      </div>
      <div className="user-card__body">
        <div className="user-card__body__contact">
          <span>{props.user.email}</span>
          <span>{props.user.phone.split(' ')[0]}</span>
          <span>{props.user.website}</span>
        </div>
        <div className="user-card__body__company">
          <span>{props.user.company.name}</span>
          <span>{props.user.company.catchPhrase}</span>
          <span>{props.user.company.bs}</span>
        </div>
      </div>
      <div className="user-card__button" onClick={onDetailsLinkClick}>Details</div>
    </div>
  );
}

export default UserCard;