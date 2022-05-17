import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [dropDownOpened, setDropDownOpened] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white ">
        <div className="flex justify-center h-14">
          <div className="container flex items-center justify-between max-w-6xl px-6 ">
            <Link href="/">
              <a className="text-2xl cursor-pointer font-jalnan">GOURL</a>
            </Link>
            <nav className="hidden md:container md:justify-between md:w-1/4 md:flex ">
              <div className="cursor-pointer">링크생성</div>
              <div className="cursor-pointer">소개</div>
              <div className="cursor-pointer">신고</div>
              <div className="cursor-pointer">후원</div>
            </nav>
            {dropDownOpened ? (
              <FontAwesomeIcon
                icon={faXmark}
                className="text-xl cursor-pointer md:hidden"
                onClick={() => {
                  setDropDownOpened(!dropDownOpened);
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="cursor-pointer md:hidden"
                onClick={() => {
                  setDropDownOpened(!dropDownOpened);
                }}
              />
            )}
          </div>
        </div>
      </header>
      {dropDownOpened ? (
        <div className="absolute left-0 right-0 z-50 h-[calc(100vh-56px)] bg-[#f3f3f3] top-14">
          <nav className="border-t">
            <div className="p-4 text-xl cursor-pointer hover:bg-gray-200">
              링크생성
            </div>
            <div className="p-4 text-xl cursor-pointer hover:bg-gray-200">
              소개
            </div>
            <div className="p-4 text-xl cursor-pointer hover:bg-gray-200">
              신고
            </div>
            <div className="p-4 text-xl cursor-pointer hover:bg-gray-200">
              후원
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
