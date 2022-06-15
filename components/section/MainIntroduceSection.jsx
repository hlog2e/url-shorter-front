import TypewriterComponent from "typewriter-effect";
import DivWaves from "../../public/waves.svg";

export default function MainIntroduceSection() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-56 text-white bg-blue-600 md:h-80">
        <div className="flex flex-col items-center md:flex-row">
          <h1 className="text-4xl font-semibold md:text-6xl">
            링크 커스터마이징
          </h1>
          <h1 className="ml-5 text-4xl font-semibold md:text-6xl">gourl.kr</h1>
        </div>
        <div className="text-2xl font-semibold md:text-3xl mt-7">
          <TypewriterComponent
            onInit={(type) => {
              type.typeString("기억하기 힘든 링크 말고");
              type.pauseFor(1500);
              type.deleteAll();
              type.typeString("나만의 링크로 기억하기 쉽게!");
              type.pauseFor(1500);
              type.deleteAll();
              type.typeString("gourl.kr/나만의링크");
              type.pauseFor(1500);
              type.deleteAll();
              type.typeString("단축 링크는 gourl.kr");
              type.pauseFor(5000);
              type.start();
            }}
            options={{ loop: true }}
          />
        </div>
      </div>
      <div className="w-full md:h-40">
        <DivWaves className="w-full h-10 -mt-[1px] md:h-28" />
      </div>
    </>
  );
}
