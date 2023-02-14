import "./Hero.scss";
import michael from "../../assets/images/michael.png";
import plane from "../../assets/images/plane.png";
import clouds from "../../assets/images/clouds.png";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <img className="hero__card" src={michael} alt="card" />
          <div className="hero__text">
            <h2 className="hero__header">Hello, MICHAEL</h2>
            <p className="hero__p">We recognize our most frequent flyers.</p>
          </div>
        </div>
        <div className="hero__plane">
          <img className="hero__plane--pic" src={plane} alt="plane" />
        </div>
        {/* <div className="hero__clouds"> */}
        <img className="hero__clouds" src={clouds} alt="clouds" />
        {/* </div> */}
      </section>
      <section className="offers">
        <h3 className="offers__header">Your Exclusive Offers</h3>
        <div className="offers__line"></div>
        <p className="offers__text">
          Based off of your recent activity, we have collected these travel
          offers for you to earn even more points.
        </p>
      </section>
    </>
  );
}
