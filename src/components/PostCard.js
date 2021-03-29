import {Link} from "react-router-dom";
import './PostCard.css';
import trash from "../images/trash.svg";
import arrow from "../images/arrow-right.svg";

function PostCard(props) {
  return (
    <div className="post-card">
      <img src={trash} className="post-card__trash" alt="trash"/>
      <span>{props.title}</span>
      <Link to={"/posts/" + props.postId}>
        <img src={arrow} className="post-card__arrow" alt="arrow"/>
      </Link>
    </div>
  );
}

export default PostCard;