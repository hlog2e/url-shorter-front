import { useState } from "react";
import Link from "next/link";
import IconXmark from "../public/icons/xmark.svg";
import IconBars from "../public/icons/bars.svg";
import scroller from "react-scroll/modules/mixins/scroller";

export default function NavBar() {
  const [dropDownOpened, setDropDownOpened] = useState(false);
  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-10 bg-white border-b">
        <div className="flex justify-center h-14">
          <div className="container flex items-center justify-between max-w-6xl px-6 ">
            <Link href="/">
              <a className="text-2xl cursor-pointer font-jalnan">GOURL</a>
            </Link>
            <nav className="hidden md:container md:justify-between md:w-1/4 md:flex ">
              <button
                className="p-1 font-semibold rounded-lg hover:bg-slate-200"
                onClick={() => {
                  scroller.scrollTo("shortSection", {
                    duration: 500,
                    delay: 100,
                    smooth: true,
                    offset: 50,
                  });
                }}
              >
                링크생성
              </button>
              <button
                className="p-1 font-semibold rounded-lg hover:bg-slate-200"
                onClick={() => {
                  scroller.scrollTo("secondIntroduceSection", {
                    duration: 500,
                    delay: 100,
                    smooth: true,
                    offset: 50,
                  });
                }}
              >
                소개
              </button>
              <button
                className="p-1 font-semibold rounded-lg hover:bg-slate-200"
                onClick={() => {
                  scroller.scrollTo("secondIntroduceSection", {
                    duration: 500,
                    delay: 100,
                    smooth: true,
                    offset: 50,
                  });
                }}
              >
                후원
              </button>
              <button
                className="p-1 font-semibold rounded-lg hover:bg-slate-200"
                onClick={() => {
                  window.ChannelIO("showMessenger");
                }}
              >
                신고
              </button>
            </nav>
            {dropDownOpened ? (
              <IconXmark
                className="w-4 cursor-pointer select-none md:hidden"
                onClick={() => {
                  setDropDownOpened(!dropDownOpened);
                }}
              />
            ) : (
              <IconBars
                className="w-4 cursor-pointer select-none md:hidden"
                onClick={() => {
                  setDropDownOpened(!dropDownOpened);
                }}
              />
            )}
          </div>
        </div>
      </header>
      {dropDownOpened ? (
        <div className="fixed z-50 w-2/5 max-w-xs bg-white border rounded-lg shadow right-5 top-12">
          <nav className="">
            <div
              className="p-4 text-xl font-semibold cursor-pointer hover:bg-gray-200"
              onClick={() => {
                scroller.scrollTo("shortSection", {
                  duration: 500,
                  delay: 100,
                  smooth: true,
                  offset: 50,
                });
                setDropDownOpened(false);
              }}
            >
              링크생성
            </div>
            <div
              className="p-4 text-xl font-semibold border-t cursor-pointer hover:bg-gray-200"
              onClick={() => {
                scroller.scrollTo("secondIntroduceSection", {
                  duration: 500,
                  delay: 100,
                  smooth: true,
                  offset: 50,
                });
                setDropDownOpened(false);
              }}
            >
              소개
            </div>
            <div
              className="p-4 text-xl font-semibold border-t cursor-pointer hover:bg-gray-200"
              onClick={() => {
                scroller.scrollTo("secondIntroduceSection", {
                  duration: 500,
                  delay: 100,
                  smooth: true,
                  offset: 50,
                });
                setDropDownOpened(false);
              }}
            >
              후원
            </div>
            <div
              className="p-4 text-xl font-semibold border-t cursor-pointer hover:bg-gray-200"
              onClick={() => {
                window.ChannelIO("showMessenger");
                setDropDownOpened(false);
              }}
            >
              신고
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
