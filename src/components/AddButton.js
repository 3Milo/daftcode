import './AddButton.scss';

function AddButton(props) {
  return (
    <div className="add-button" onClick={props.onClick}>
      <span>+</span>
    </div>
  );
}

export default AddButton;