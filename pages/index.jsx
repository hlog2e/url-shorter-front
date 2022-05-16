import NavBar from "../components/NavBar";
import MainIntroduceSection from "../containers/MainIntroduceSection";
import UrlShortSection from "../containers/UrlShortSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <section className="h-[calc(100vh-56px)] ">
        <MainIntroduceSection />
        <UrlShortSection />
      </section>
    </>
  );
}
