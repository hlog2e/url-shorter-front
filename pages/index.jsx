import NavBar from "../components/NavBar";
import MainIntroduceSection from "../components/section/MainIntroduceSection";
import UrlShortSection from "../components/section/UrlShortSection";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SecondIntroduceSection from "../components/section/SecondIntroduceSection";
import Footer from "../components/section/Footer";
import Head from "next/head";
import PopUp from "../components/PopUp";

export default function Home() {
  const [localStorageUrls, setLocalStorageUrls] = useState([]);
  const [popUpOpen,setPopUpOpen] = useState(true);

  const handleChangeLocalStorageUrls = (data) => {
    let long_url = data.origin_url;
    const short_url = "gourl.kr/" + data.alias;

    if (long_url.length > 25) {
      long_url = long_url.substr(0, 25);
      long_url = long_url + "...";
    }
    let dumpLocalStorageUrlsState = [];
    if (localStorageUrls) {
      dumpLocalStorageUrlsState = [...localStorageUrls];
    }
    dumpLocalStorageUrlsState.unshift({
      long_url: long_url,
      short_url: short_url,
    });

    if (dumpLocalStorageUrlsState.length > 3) {
      dumpLocalStorageUrlsState = dumpLocalStorageUrlsState.slice(0, 3);
    }

    setLocalStorageUrls(dumpLocalStorageUrlsState);
    window.localStorage.setItem(
      "urls",
      JSON.stringify(dumpLocalStorageUrlsState)
    );
  };

  useEffect(() => {
    setLocalStorageUrls(JSON.parse(window.localStorage.getItem("urls")));
    var ads = document.getElementsByClassName("adsbygoogle").length;
    for (var i = 0; i < ads; i++) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
    }
  }, []);

  return (
    <>
        <PopUp show={popUpOpen} onClose={()=>{setPopUpOpen(false)}} title={"⚠ 경고 ⚠"} content={"최근 GOURL 서비스를 활용한 피싱 범죄\n가 발생하고 있습니다. GOURL은 절대\n사용자에게 로또를 분석해 준다는 내용,\n사법기관을 사칭하는 등의 문자메시지를\n전송하지 않습니다.\n\nGOURL은 수사기관 협조의 적극 협력하여\n피해자가 발생하지 않도록 노력하겠습니다.\n\n신고된 피싱링크 유형:\n검찰조회, 사건조회, 간편조회등 검찰사칭\n로또 무료분석 등"}/>
      <ToastContainer />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title="GOURL | 커스텀 단축 링크 - URL 단축"
        description="GOURL, 단축URL, URL단축, 링크줄이기, URL줄이기, 주소줄이기, 링크단축, 단축링크, 단축주소, 주소단축, URL단축서비스, 인터넷주소줄이기"
        openGraph={{
          type: "website",
          url: "https://gourl.kr",
          title: "GOURL | 커스텀 단축 링크",
          description: "나만의 단축 링크를 생성해보세요!",
          images: [
            {
              url: "/og_gourl.png",
            },
          ],
        }}
      />
      <NavBar />
      <section className="min-h-screen" id="shortSection">
        <MainIntroduceSection />
        <UrlShortSection
          localStorage={localStorageUrls}
          handleChangeLocalStorageUrls={handleChangeLocalStorageUrls}
        />
      </section>
      <section id="secondIntroduceSection">
        <SecondIntroduceSection />
      </section>
      <Footer />
    </>
  );
}
