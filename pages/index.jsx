import NavBar from "../components/NavBar";
import MainIntroduceSection from "../components/section/MainIntroduceSection";
import UrlShortSection from "../components/section/UrlShortSection";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [localStorageUrls, setLocalStorageUrls] = useState([]);

  const handleChangeLocalStorageUrls = (data) => {
    let long_url = data.origin_url;
    const short_url = "gourl.kr/" + data.alias;

    if (long_url.length > 32) {
      long_url = long_url.substr(0, 32);
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
    window.localStorage.setItem("urls", JSON.stringify(localStorageUrls));
  };

  useEffect(() => {
    setLocalStorageUrls(JSON.parse(window.localStorage.getItem("urls")));
  }, []);
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

      <MainIntroduceSection />
      <UrlShortSection
        localStorage={localStorageUrls}
        handleChangeLocalStorageUrls={handleChangeLocalStorageUrls}
      />
    </>
  );
}
