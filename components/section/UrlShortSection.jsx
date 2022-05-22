import IconLink from "../../public/icons/link.svg";
import IconMagic from "../../public/icons/magic.svg";
import IconCircleDown from "../../public/icons/circle-down.svg";
import { useState } from "react";
import axios from "axios";
import UrlLoggerContainer from "../UrlLogger/UrlLoggerContainer";

export default function UrlShortSection(props) {
  const [urlInput, setUrlInput] = useState({
    originUrl: "",
    alias: "",
  });

  const onChangeUrlInput = (e) => {
    const { name, value } = e.target;
    setUrlInput({ ...urlInput, [name]: value });
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
      });
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center md:-mt-12">
        <form
          className=" flex-col w-9/12  max-w-[550px] md:w-3/5 "
          onSubmit={onSubmitUrlInput}
        >
          <span className="flex mb-2">
            <IconLink className="p-2 w-9" />
            <p className="p-1 font-semibold">단축할 URL</p>
          </span>
          <input
            value={urlInput.originUrl}
            onChange={onChangeUrlInput}
            name="originUrl"
            className="w-full px-3 py-3 border rounded-lg shadow focus:ring focus:outline-none focus:bg-white"
            placeholder="단축이 필요한 URL 입력!"
          />
          <span className="flex mt-6 mb-2">
            <IconMagic className="p-2 w-9" />
            <p className="p-1 font-semibold">커스터마이징 (선택)</p>
          </span>
          <input
            value={urlInput.alias}
            onChange={onChangeUrlInput}
            name="alias"
            className="w-full px-3 py-3 border rounded-lg shadow focus:ring focus:outline-none focus:bg-white"
            placeholder="gourl.kr/"
          />
          <span className="flex justify-end">
            <button className="px-5 py-3 mt-6 font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl">
              단축!
            </button>
          </span>
        </form>
        <UrlLoggerContainer localStorage={props.localStorage} />
      </div>

      <IconCircleDown className="absolute w-6 opacity-25 animate-bounce left-1/2 right-1/2 bottom-10" />
    </>
  );
}
