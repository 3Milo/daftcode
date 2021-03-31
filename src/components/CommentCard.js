import './CommentCard.scss';

function CommentCard(props) {
  return (
    <div className="comment-card">
      <div className="comment-card__header">
        <span className="comment-card__name">
          {props.name}
        </span>
        <span className="comment-card__email">
          {props.email}
        </span>
      </div>
      <span className="comment-card__body">
        {props.body}
      </span>
    </div>
  );
}

export default CommentCard;