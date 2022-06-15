import IconLink from "../../public/icons/link.svg";
import IconMagic from "../../public/icons/magic.svg";
import IconCircleDown from "../../public/icons/circle-down.svg";
import { useState } from "react";
import axios from "axios";
import UrlLoggerContainer from "../UrlLogger/UrlLoggerContainer";
import { toast } from "react-toastify";

export default function UrlShortSection(props) {
  const [urlInput, setUrlInput] = useState({
    originUrl: "",
    alias: "",
  });

  const onChangeOriginUrlInput = (e) => {
    setUrlInput({ ...urlInput, originUrl: e.target.value });
  };
  const onChangeAliasInput = (e) => {
    const aliasRegex = /\s|\//;

    if (!aliasRegex.test(e.target.value)) {
      setUrlInput({ ...urlInput, alias: e.target.value });
    } else {
      toast.error("커스텀 URL에 공백 또는 '/'는 사용할 수 없습니다.", {
        position: "bottom-center",
        autoClose: 5000,
      });
    }
  };
  const onSubmitUrlInput = (e) => {
    e.preventDefault();
    axios
      .post("/api/url", {
        origin_url: urlInput.originUrl,
        alias: urlInput.alias,
      })
      .then((res) => {
        props.handleChangeLocalStorageUrls({
          origin_url: res.data.origin_url,
          alias: res.data.alias,
        });
        setUrlInput({
          originUrl: "",
          alias: "",
        });
      })
      .catch((err) => {
        console.error(err);
        if (err.response.status === 400) {
          toast.error(err.response.data.message, {
            position: "bottom-center",
            autoClose: 5000,
          });
        } else {
          toast.error(
            "URL 단축 중 오류가 발생하였습니다. 잠시 후 다시 시도해주세요.",
            {
              position: "bottom-center",
              autoClose: 5000,
            }
          );
        }
      });
  };

  return (
    <>
      <div className="flex flex-col items-center md:-mt-12 ">
        <div className="flex justify-center w-full lg:justify-between ">
          <div className="max-w-[160px] w-full ml-16 lg:block hidden">
            <ins
              className="kakao_ad_area"
              data-ad-unit="DAN-RXMmp4KxTX1fvo3K"
              data-ad-width="160"
              data-ad-height="600"
            ></ins>
          </div>
          <div className="flex-col max-w-[550px] items-center w-9/12 md:w-3/5">
            <form className="w-full" onSubmit={onSubmitUrlInput}>
              <span className="flex mb-2">
                <IconLink className="p-2 w-9" />
                <p className="p-1 font-semibold">단축할 URL</p>
              </span>
              <input
                value={urlInput.originUrl}
                onChange={onChangeOriginUrlInput}
                name="originUrl"
                className="w-full px-3 py-3 border rounded-lg shadow focus:ring focus:outline-none focus:bg-white"
                placeholder="단축이 필요한 URL 입력!"
              />
              <span className="flex mt-6 mb-2">
                <IconMagic className="p-2 w-9" />
                <p className="p-1 font-semibold">커스터마이징 (선택)</p>
              </span>
              <span className="flex">
                <div className="px-3 py-3 font-semibold text-gray-400 bg-white border rounded-tl-lg rounded-bl-lg shadow">
                  gourl.kr/
                </div>
                <input
                  value={urlInput.alias}
                  onChange={onChangeAliasInput}
                  name="alias"
                  className="w-full px-3 py-3 border rounded-tr-lg rounded-br-lg shadow focus:ring focus:outline-none focus:bg-white"
                  placeholder="나만의링크"
                />
              </span>
              <span className="flex justify-end">
                <button className="px-5 py-3 mt-6 font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl">
                  단축!
                </button>
              </span>
            </form>
            <UrlLoggerContainer localStorage={props.localStorage} />
          </div>
          <div className="max-w-[160px] w-full mr-16 lg:block hidden">
            <ins
              className="kakao_ad_area"
              data-ad-unit="DAN-a1LhtjkiJN1WgokW"
              data-ad-width="160"
              data-ad-height="600"
            ></ins>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full h-32 px-2 ">
        <div className="max-w-[400px]  ">
          <iframe
            src="https://ads-partners.coupang.com/widgets.html?id=588224&template=carousel&trackingCode=AF9582893&subId=&width=689&height=128"
            width="100%"
            height="128"
            frameBorder="0"
            className="border rounded-xl"
            scrolling="no"
            referrerpolicy="unsafe-url"
          />
        </div>
        <div className="max-w-[400px]  ">
          <iframe
            src="https://ads-partners.coupang.com/widgets.html?id=588225&template=carousel&trackingCode=AF9582893&subId=&width=680&height=128"
            width="100%"
            height="128"
            className="border rounded-xl"
            frameBorder="0"
            scrolling="no"
            referrerpolicy="unsafe-url"
          />
        </div>
      </div>
      <div className="flex justify-center w-full h-32 px-2">
        <div className="max-w-[400px]  ">
          <iframe
            src="https://ads-partners.coupang.com/widgets.html?id=588329&template=carousel&trackingCode=AF9582893&subId=&width=689&height=128"
            width="100%"
            height="128"
            frameBorder="0"
            className="border rounded-xl"
            scrolling="no"
            referrerpolicy="unsafe-url"
          />
        </div>
        <div className="max-w-[400px]  ">
          <iframe
            src="https://ads-partners.coupang.com/widgets.html?id=588330&template=carousel&trackingCode=AF9582893&subId=&width=680&height=128"
            width="100%"
            height="128"
            className="border rounded-xl"
            frameBorder="0"
            scrolling="no"
            referrerpolicy="unsafe-url"
          />
        </div>
      </div>

      <IconCircleDown className="absolute w-6 opacity-25 animate-bounce left-1/2 right-1/2 bottom-10" />
    </>
  );
}
