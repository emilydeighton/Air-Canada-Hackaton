import "./HomeAlt.scss";
import Bottom from "../../components/Bottom/Bottom";
import Card2 from "../../components/Card2/Card2";
import Hero2 from "../../components/Hero2/Hero2";
import Header2 from "../../components/Header2/Header2";
import NavBar from "../../components/NavBar/NavBar";
import rachelprogress from "../../assets/images/rachel-progress.png";

export default function HomeAlt() {
  return (
    <section className="homealt">
      <Header2 />
      <NavBar />
      <Hero2 />
      <Card2 />
      <img className="progressalt" src={rachelprogress} alt="progress" />

      <Bottom />
    </section>
  );
}
