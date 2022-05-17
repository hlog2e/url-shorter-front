import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faWandMagicSparkles,
  faCircleChevronDown,
} from "@fortawesome/free-solid-svg-icons";

export default function UrlShortSection() {
  return (
    <>
      <div className="flex items-center justify-center ">
        <form className=" flex-col w-9/12  max-w-[550px] md:w-3/5 ">
          <span className="flex mb-2">
            <FontAwesomeIcon icon={faLink} className="p-2" />
            <p className="p-1 font-semibold">단축할 URL</p>
          </span>
          <input
            className="w-full px-3 py-3 border rounded-lg shadow focus:ring focus:outline-none focus:bg-white"
            placeholder="단축이 필요한 URL 입력!"
          />
          <span className="flex mt-6 mb-2">
            <FontAwesomeIcon icon={faWandMagicSparkles} className="p-2" />
            <p className="p-1 font-semibold">커스터마이징 (선택)</p>
          </span>
          <input
            className="w-full px-3 py-3 border rounded-lg shadow focus:ring focus:outline-none focus:bg-white"
            placeholder="gourl.kr/"
          />
          <span className="flex justify-end">
            <button className="px-5 py-3 mt-6 font-semibold text-white bg-blue-600 rounded-xl">
              단축!
            </button>
          </span>
        </form>
      </div>

      <FontAwesomeIcon
        icon={faCircleChevronDown}
        className="absolute text-2xl text-gray-400 opacity-50 animate-bounce left-1/2 right-1/2 bottom-10"
      />
    </>
  );
}
