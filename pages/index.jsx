import NavBar from "../components/NavBar";
import MainIntroduceSection from "../containers/MainIntroduceSection";
import UrlShortSection from "../containers/UrlShortSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GOURL | 커스텀 단축 URL</title>
        <meta
          name="description"
          content="외우기 쉬운 나만의 단축 링크 GOURL"
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <NavBar />
      <section className="h-[calc(100vh-56px)] relative">
        <MainIntroduceSection />
        <UrlShortSection />
      </section>
    </>
  );
}
