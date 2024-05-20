/* eslint-disable react/prop-types */
import "uiEl/RemoveIcon/index.css";

export default function RemoveIcon({ onClick, classes }) {
  return (
    <div className={`remove-icon ${classes}`} onClick={onClick}>
      <ion-icon name="close-outline"></ion-icon>
    </div>
  );
}
