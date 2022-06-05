import Link from "next/link";
import Fade from "react-reveal/Fade";

export default function SecondIntroduceSection(props) {
  return (
    <div className="flex items-center justify-center w-full py-32 mt-32 bg-white">
      <div className="flex flex-col items-center justify-between w-[1000px] md:flex-row bg-white">
        <Fade duration={2000} bottom>
          <img className="w-[500px]  px-4" src="/link.svg" />
        </Fade>

        <Fade duration={2000} bottom>
          <div className="flex flex-col px-4 ">
            <h1 className="text-4xl font-jalnan">GOURL</h1>
            <h2 className="mt-6 text-3xl font-semibold">
              링크를 빠르고 간편하게
            </h2>
            <h2 className="font-semibold ">
              GOURL은 고등학생 1인 개발자가 만든 서비스입니다.
            </h2>
            <Link href="https://toss.me/hlog2e">
              <a
                target="_blank"
                className="py-3 mt-6 text-lg font-semibold text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 "
              >
                토스로 서버비 후원하기❤️
              </a>
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
}
