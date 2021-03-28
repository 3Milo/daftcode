import {Link} from "react-router-dom";
import './UserCard.css';

function UserCard(props) {
  return (
    <div className="user-card">
      <span className="user-card__title">{props.user.name}</span>
      <div className="user-card__contact">
        <span>{props.user.email}</span>
        <span>{props.user.telephone}</span>
        <span>{props.user.website}</span>
      </div>
      <div className="user-card__description">
        <span>{props.user.description}</span>
      </div>
      <Link to={"/users/" + props.user.id} className="user-card__button">Details</Link>
    </div>
  );
}

export default UserCard;