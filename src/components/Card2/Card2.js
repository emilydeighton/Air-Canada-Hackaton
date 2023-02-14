import partners from "../../assets/images/partners.jpeg";
import destination from "../../assets/images/new-destination.jpg";
import promo from "../../assets/images/promo.webp";
import "../../components/Card/Card.scss";
import { Link } from "react-router-dom";

const Card2 = () => {
  return (
    <section className="cards">
      <Link
        className="link"
        to={
          "https://vacations.aircanada.com/en/all-deals/100058/las-vegas-blowout"
        }
        target="_blank"
      >
        <div className="card">
          <h1 className="card__header">Book A New Destination</h1>
          <div className="card__container">
            <div className="card__img-container">
              <img className="card__img" src={destination} alt="travel" />
              <div className="card__img-mask"></div>
            </div>
            <div className="card__container-bottom">
              <h2 className="card__title">Las Vegas Blowout</h2>
              <hr className="card__hr--short" />
              <p className="card__text">
                It's always showtime for deals to Las Vegas. Enjoy flexible
                <span className="bold-text"> PAYMENT OPTIONS</span> and 1st
                check bag <span className="bold-text">FREE</span>.
              </p>
              <hr className="card__hr--long" />
              <p className="card__link">Check promos &gt;</p>
              <span className="material-symbols-outlined">thumb_up</span>
              <span className="like">11469</span>
            </div>
          </div>
        </div>
      </Link>

      <Link
        className="link"
        to={
          "https://www.aircanada.com/ca/en/aco/home/aeroplan/earn/everyday.html#/"
        }
        target="_blank"
      >
        <div className="card">
          <h1 className="card__header">Credit Card Offers</h1>
          <div className="card__container">
            <div className="card__img-container">
              <img className="card__img" src={partners} alt="travel" />
              <div className="card__img-mask"></div>
            </div>
            <div className="card__container-bottom">
              <h2 className="card__title">Earn Points Everyday</h2>
              <hr className="card__hr--short" />
              <p className="card__text">
                Earn points just by{" "}
                <span className="bold-text">doing what you do every day </span>
                with Aeroplan retail partners.
              </p>
              <hr className="card__hr--long" />
              <p className="card__link">Link with partners &gt;</p>
              <span className="material-symbols-outlined">thumb_up</span>
              <span className="like">19569</span>
            </div>
          </div>
        </div>
      </Link>

      <Link
        className="link"
        to={
          "https://www.aircanada.com/ca/en/aco/home/aeroplan/promotions.html#/"
        }
        target="_blank"
      >
        <div className="card">
          <h1 className="card__header">Promotions</h1>
          <div className="card__container">
            <div className="card__img-container">
              <img className="card__img" src={promo} alt="travel" />
              <div className="card__img-mask"></div>
            </div>
            <div className="card__container-bottom">
              <h2 className="card__title">Discover Our Latest Offers</h2>
              <hr className="card__hr--short" />
              <p className="card__text">
                <span className="bold-text">Purchase points for less</span> and
                reach your next
                <span className="bold-text"> reward sooner.</span>
              </p>
              <hr className="card__hr--long" />
              <p className="card__link">See offers &gt;</p>
              <span className="material-symbols-outlined">thumb_up</span>
              <span className="like">13869</span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Card2;
