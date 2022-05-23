import { useState } from "react";
import Link from "next/link";
import IconXmark from "../public/icons/xmark.svg";
import IconBars from "../public/icons/bars.svg";

export default function NavBar() {
  const [dropDownOpened, setDropDownOpened] = useState(false);
  return (
    <>
      <header className="sticky top-0 left-0 right-0 bg-white ">
        <div className="flex justify-center h-14">
          <div className="container flex items-center justify-between max-w-6xl px-6 ">
            <Link href="/">
              <a className="text-2xl cursor-pointer font-jalnan">GOURL</a>
            </Link>
            <nav className="hidden md:container md:justify-between md:w-1/4 md:flex ">
              <div className="p-1 rounded-lg cursor-pointe hover:bg-slate-200">
                링크생성
              </div>
              <div className="p-1 rounded-lg cursor-pointe hover:bg-slate-200">
                소개
              </div>
              <div
                className="p-1 rounded-lg cursor-pointe hover:bg-slate-200"
                onClick={() => {
                  window.ChannelIO("showMessenger");
                }}
              >
                신고
              </div>
              <div className="p-1 rounded-lg cursor-pointe hover:bg-slate-200">
                후원
              </div>
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
        <div className="absolute z-50 w-2/5 max-w-xs bg-white rounded-lg right-5 top-12">
          <nav className="">
            <div className="p-4 text-xl cursor-pointer hover:bg-gray-200">
              링크생성
            </div>
            <div className="p-4 text-xl border-t cursor-pointer hover:bg-gray-200">
              소개
            </div>
            <div
              className="p-4 text-xl border-t cursor-pointer hover:bg-gray-200"
              onClick={() => {
                window.ChannelIO("showMessenger");
              }}
            >
              신고
            </div>
            <div className="p-4 text-xl border-t cursor-pointer hover:bg-gray-200">
              후원
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
