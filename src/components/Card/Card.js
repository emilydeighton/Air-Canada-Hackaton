import "./Card.scss";
import travel from "../../assets/images/travel.jpg";
import upgrade from "../../assets/images/upgrade.jpeg";
import pointFinder from "../../assets/images/point-finder.jpg";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <section className="cards">
      <Link
        className="link"
        to={
          "https://www.aircanada.com/ca/en/aco/home/aeroplan/partners.html#/travel"
        }
        target="_blank"
      >
        <div className="card">
          <h1 className="card__header">Drive In Style</h1>
          <div className="card__container">
            <div className="card__img-container">
              <img className="card__img" src={travel} alt="travel" />
              <div className="card__img-mask"></div>
            </div>
            <div className="card__container-bottom">
              <h2 className="card__title">Earn up to 500 points</h2>
              <hr className="card__hr--short" />
              <p className="card__text">
                Earn up to{" "}
                <span className="bold-text"> 500 Aeroplan points</span> and save
                up to <span className="bold-text">25% off</span> base rates with
                Avis.
              </p>
              <hr className="card__hr--long" />
              <p className="card__link">See how &gt;</p>
              <span className="material-symbols-outlined">thumb_up</span>
              <span className="like">10569</span>
            </div>
          </div>
        </div>
      </Link>

      <Link
        className="link"
        to={
          "https://www.aircanada.com/ca/en/aco/home/fly/onboard/preferred-seats.html#/"
        }
        target="_blank"
      >
        <div className="card">
          <h1 className="card__header">Upgrade Yourself</h1>
          <div className="card__container">
            <div className="card__img-container">
              <img className="card__img" src={upgrade} alt="hotel" />

              <div className="card__img-mask"></div>
            </div>
            <div className="card__container-bottom">
              <h2 className="card__title">Relax with a Preferred Seat</h2>
              <hr className="card__hr--short" />
              <p className="card__text">
                Enjoy some extra space. See how you can{" "}
                <span className="bold-text">Upgrade Yourself</span> and fly in
                style.
              </p>
              <hr className="card__hr--long" />
              <p className="card__link">Book now &gt;</p>
              <span className="material-symbols-outlined">thumb_up</span>
              <span className="like">15769</span>
            </div>
          </div>
        </div>
      </Link>

      <Link
        className="link"
        to={"https://www.aircanada.com/en-ca/points-finder"}
        target="_blank"
      >
        <div className="card">
          <h1 className="card__header">Use Your Points</h1>
          <div className="card__container">
            <div className="card__img-container">
              <img className="card__img" src={pointFinder} alt="travel" />

              <div className="card__img-mask"></div>
            </div>
            <div className="card__container-bottom">
              <h2 className="card__title">Explore your travel options!</h2>
              <hr className="card__hr--short" />
              <p className="card__text">
                Try our <span className="bold-text">Points Finder Tool</span> to
                explore where your{" "}
                <span className="bold-text">Aeroplan points</span> can take you.
              </p>
              <hr className="card__hr--long" />
              <p className="card__link">Get inspired &gt;</p>
              <span className="material-symbols-outlined">thumb_up</span>
              <span className="like">14569</span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Card;
