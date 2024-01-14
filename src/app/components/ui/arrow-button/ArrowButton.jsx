import "./arrow-button.css";
import arrowLeftSvg from "./../../../img/arrow-left.svg";

const ArrowButton = () => {
  return (
    <button className="arrow-button">
      <img src={arrowLeftSvg} alt="Стрелка влево" />
    </button>
  );
};
export default ArrowButton;