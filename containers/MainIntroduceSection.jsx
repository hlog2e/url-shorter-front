import TypewriterComponent from "typewriter-effect";
import Head from "next/head";

export default function MainIntroduceSection() {
  return (
    <>
      <Head>
        <title>test</title>
      </Head>
      <div className="flex flex-col items-center justify-center h-64 text-white bg-blue-600 md:h-96">
        <div className="flex flex-col items-center md:flex-row">
          <h1 className="text-4xl font-semibold md:text-6xl">
            링크 커스터마이징
          </h1>
          <h1 className="ml-5 text-4xl font-semibold md:text-6xl">
            'gourl.kr'
          </h1>
        </div>
        <div className="text-2xl font-semibold md:text-3xl mt-7">
          <TypewriterComponent
            onInit={(type) => {
              type.typeString("gourl.kr/pQdkc2");
              type.pauseFor(1500);
              type.deleteChars(6);
              type.typeString("커스터마이징_URL");
              type.pauseFor(1500);
              type.deleteChars(10);
              type.typeString("원하는_단어_아무거나");
              type.pauseFor(1500);
              type.deleteChars(11);
              type.typeString("100%_무료서비스");
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
      <img
        className="w-full select-none h-10 md:h-28 relative top-[-1px]"
        src="waves.svg"
        draggable="false"
      />
    </>
  );
}
