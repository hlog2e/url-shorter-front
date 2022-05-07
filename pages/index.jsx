import NavBar from "../components/NavBar";
import MainIntroduceSection from "../containers/MainIntroduceSection";
import UrlShortSection from "../containers/UrlShortSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <MainIntroduceSection />
      <UrlShortSection />
    </div>
  );
}
