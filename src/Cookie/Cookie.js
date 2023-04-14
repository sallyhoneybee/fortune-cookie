import "./Cookie.css";
import Fortune from "../Fortune/Fortune";

const Cookie = () => {
  return (
    <div>
      <button className="cookie">
        <div className="cookie-section left"></div>
        <div className="cookie-section right"></div>
        <div className="cookie-crumbs">
          <div className="cookie-crumb"></div>
          <div className="cookie-crumb"></div>
          <div className="cookie-crumb"></div>
          <div className="cookie-crumb"></div>
          <div className="cookie-crumb"></div>
        </div>
        <Fortune />
      </button>
    </div>
  );
};

export default Cookie;
