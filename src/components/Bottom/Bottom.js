import "./Bottom.scss";
import card1 from "../../assets/images/card1.PNG";
import card2 from "../../assets/images/card2.PNG";
import card3 from "../../assets/images/card3.PNG";
import card4 from "../../assets/images/card4.PNG";
import card5 from "../../assets/images/card5.PNG";
import card6 from "../../assets/images/card6.PNG";
import { Link } from "react-router-dom";

export default function Bottom() {
  return (
    <section className="home">
      <div className="bottom">
        <h2 className="bottom__header">
          Use Aeroplan points for more than flights
        </h2>
        <div className="bottom__divider"></div>
        <p className="bottom__text">
          Your points can get you a whole range of great rewards beyond flights.
          You can redeem for:
        </p>
        <div className="bottom-wrapper">
          <div className="card1-container">
            <div className="card1-top-container">
              <Link
                className="link"
                to={
                  "https://www.aircanada.com/ca/en/aco/home/aeroplan/hotel-savers.html#/"
                }
                target="_blank"
              >
                <div className="card1">
                  <img className="card1__image" src={card1} alt="" />
                </div>
              </Link>

              <Link
                className="link"
                to={
                  "https://aeroplan.cxloyalty.com/search/cars?code=st2.s.AcbH8OdCJg.KjXYpfY1j--SZIfXLPz6UwaP6dvwV4WygCqbZV0jCFpMsRRlIkA0EmJYqA6YV8IAtUIRBglNzEfAr4PfMwHenSbYG1lR1tTYtaAYRXOZqpQ.fiw-BBxFM4cpAGFTN6MqjfsxhCOwxJYrh6CVEUr-oRqqeW1OKwInTvsclmsbiboe-BomJcx1p--Nm8iL3wY1yA.sc3&state=landingpage%3Dcar&lcid=4105&_gl=1*10784oe*_ga*MTAxOTI5OTE3Ny4xNjc1Mzc1MTE2*_ga_7N5VYT4981*MTY3NTQzNjgxNy40LjEuMTY3NTQ0OTY4Ni40OC4wLjA.&page=landingpage&landingpage=car&deeplink=true"
                }
                target="_blank"
              >
                <div className="card1">
                  <img className="card1__image" src={card2} alt="" />
                </div>
              </Link>

              <Link
                className="link"
                to={"https://vacations.aircanada.com/"}
                target="_blank"
              >
                <div className="card1">
                  <img className="card1__image" src={card3} alt="" />
                </div>
              </Link>
            </div>

            <div className="card1-bottom-container">
              <Link
                className="link"
                to={
                  "https://aeroplan.rewardops.com/en-CA/category-details/CAT_APM_000002?_gl=1%2A1f31nfg%2A_ga%2AMTAxOTI5OTE3Ny4xNjc1Mzc1MTE2%2A_ga_7N5VYT4981%2AMTY3NTQzNjgxNy40LjEuMTY3NTQ0OTY5Ni4zOC4wLjA."
                }
                target="_blank"
              >
                <div className="card1">
                  <img className="card1__image" src={card4} alt="" />
                </div>
              </Link>

              <Link
                className="link"
                to={
                  "https://aeroplan.rewardops.com/en-CA/home/products?_gl=1%2A1chd23o%2A_ga%2AMTAxOTI5OTE3Ny4xNjc1Mzc1MTE2%2A_ga_7N5VYT4981%2AMTY3NTQzNjgxNy40LjEuMTY3NTQ0OTc2OS42MC4wLjA."
                }
                target="_blank"
              >
                <div className="card1">
                  <img className="card1__image" src={card5} alt="" />
                </div>
              </Link>

              <Link
                className="link"
                to={
                  "https://aeroplan.rewardops.com/en-CA/category-details/CAT_APM_000010?_gl=1%2Akdg883%2A_ga%2AMTAxOTI5OTE3Ny4xNjc1Mzc1MTE2%2A_ga_7N5VYT4981%2AMTY3NTQzNjgxNy40LjEuMTY3NTQ0OTc2OS42MC4wLjA."
                }
                target="_blank"
              >
                <div className="card1">
                  <img className="card1__image" src={card6} alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
