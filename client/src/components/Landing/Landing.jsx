import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.container}>
      <div className={style.boxtext}>
        <h1>GOLDEN TRIP</h1>
        <p className={style.paragraph}>
          Explore the world and discover the wonders of each country with
          <span> Golden Trip! </span>
          Welcome to our platform, where you can immerse yourself in the
          diversity of cultures, landscapes and experiences that our beautiful
          planet offers.
        </p>

        <br />
        <p className={style.paragraph}>
          With our countries app, you will have access to detailed basic
          information about each nation. Plus, you will be able to explore a
          wide range of activities available at each destination, from outdoor
          adventures to unforgettable cultural experiences. You can also create
          new activities!
          <br />
          <br />
          <br />
          Join our community of travelers and start your adventure. Click the
          enter button and discover a universe of possibilities waiting to be
          explored. Welcome to the gateway to unique experiences in every corner
          of the globe!
          <br />
          <br />
        </p>
        <button>
          <NavLink to="/home">Get Into</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Landing;
