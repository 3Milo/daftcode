import { useHistory } from "react-router-dom";
import './PostCard.scss';
import trash from "../images/trash.svg";
import arrow from "../images/arrow-right.svg";

function PostCard(props) {

  const history = useHistory();

  const onArrowClick = () => history.push(`/posts/${props.postId}`);

  const onTrashIconClick = e => props.onDelete(props.postId);

  return (
    <div className="post-card">
      <img src={trash} className="post-card__trash" alt="trash" onClick={onTrashIconClick} />
      <span>{props.title}</span>
      <img src={arrow} className="post-card__arrow" alt="arrow" onClick={onArrowClick} />
    </div>
  );
}

export default PostCard;