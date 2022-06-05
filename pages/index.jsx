import NavBar from "../components/NavBar";
import MainIntroduceSection from "../components/section/MainIntroduceSection";
import UrlShortSection from "../components/section/UrlShortSection";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SecondIntroduceSection from "../components/section/SecondIntroduceSection";

export default function Home() {
  const [localStorageUrls, setLocalStorageUrls] = useState([]);

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
      <ToastContainer />
      <NextSeo
        title="GOURL | 커스텀 단축 링크"
        description="외우기 쉬운 나만의 단축 링크 GOURL"
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
      <section className="h-[calc(100vh-56px)]" id="secondIntroduceSection">
        <SecondIntroduceSection />
      </section>
    </>
  );
}
