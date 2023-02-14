import "./NavBar.scss";

export default function NavBar() {
  return (
    <section className="navbar">
      <ul className="navbar__flex">
        <div className="navbar__active ">
          <li className="navbar__link navflex navbar__link--active">
            My offers
          </li>
        </div>
        <div className="navbar__hover ">
          <li className="navbar__link navbar__hover navflex">Activity</li>
        </div>
        <div className="navbar__hover ">
          <li className="navbar__link navflex">Status</li>
        </div>
        <div className="navbar__hover ">
          <li className="navbar__link navflex">Benefits</li>
        </div>
        <div className="navbar__hover ">
          <li className="navbar__link navflex">Family sharing</li>
        </div>
      </ul>
    </section>
  );
}
