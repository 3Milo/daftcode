import './CommentCard.css';

function CommentCard() {
  return (
    <div className="comment-card">
      <div className="comment-card__header">
        <span className="comment-card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        <span className="comment-card__mail">daft@daft.com</span>
      </div>
      <span className="comment-card__body">
        Curabitur a egestas sapien. Quisque rutrum nisi sem, a consectetur orci scelerisque vel. Aenean iaculis, ex nec iaculis commodo, risus orci fermentum tellus, et iaculis lorem dolor in enim. In varius vehicula lacus, in feugiat ipsum molestie sit amet. Aliquam erat volutpat. Pellentesque tristique metus lorem, at rutrum nulla viverra ac. Aenean aliquam condimentum massa, vel luctus eros pulvinar in sodales.
      </span>
    </div>
  );
}

export default CommentCard;