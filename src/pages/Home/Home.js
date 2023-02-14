import "./Home.scss";
import Bottom from "../../components/Bottom/Bottom";
import Card from "../../components/Card/Card";
import Hero from "../../components/Hero/Hero";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import michaelprogress from "../../assets/images/michael-progress.png";

export default function Home() {
  return (
    <section className="home">
      <Header />
      <NavBar />
      <Hero />
      <Card />
      <img className="progress" src={michaelprogress} alt="progress" />
      <Bottom />
    </section>
  );
}
