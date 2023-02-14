import "../Hero/Hero.scss";
import rachel from "../../assets/images/rachel.png";
import purchases from "../../assets/images/purchases.png";

export default function Hero2() {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <img className="hero__card" src={rachel} alt="card" />
          <div className="hero__text">
            <h2 className="hero__header">Hello, RACHEL</h2>
            <p className="hero__p">
              We recognize our most loyal everyday earners.
            </p>
          </div>
        </div>
        <div className="hero__purchases">
          <img
            className="hero__purchases--pic"
            src={purchases}
            alt="purchases"
          />
        </div>
        {/* <div className="hero__clouds"> */}
        {/* <img className="hero__clouds" src={clouds} alt="clouds" /> */}
        {/* </div> */}
      </section>
      <section className="offers">
        <h3 className="offers__header">Your Exclusive Offers</h3>
        <div className="offers__line"></div>
        <p className="offers__text">
          Based on your recent activity, we have collected these offers for you
          to earn even more points to reach Aeroplan 25K status.
        </p>
      </section>
    </>
  );
}
