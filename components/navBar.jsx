import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function NavBar() {
  const [dropDownOpened, setDropDownOpened] = useState(false);
  return (
    <div>
      <header className="flex justify-center h-14 ">
        <div className="container flex items-center justify-between max-w-6xl px-6 ">
          <span className=" font">gourl.kr</span>
          <nav className="hidden md:container md:justify-between md:w-1/4 md:flex">
            <div className="cursor-pointer">소개</div>
            <div className="cursor-pointer">지원</div>
            <div className="cursor-pointer">정보</div>
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
      </header>
      {dropDownOpened ? (
        <div className="h-screen">
          <nav className="border-t">
            <div className="p-4 text-xl cursor-pointer hover:bg-gray-200">
              소개
            </div>
            <div className="p-4 text-xl cursor-pointer hover:bg-gray-200">
              지원
            </div>
            <div className="p-4 text-xl cursor-pointer hover:bg-gray-200">
              정보
            </div>
            <div className="p-4 text-xl cursor-pointer hover:bg-gray-200">
              후원
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
