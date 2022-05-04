import TypewriterComponent from "typewriter-effect";
import Head from "next/head";

export default function MainIntroduceSection() {
  return (
    <>
      <Head>
        <title>test</title>
      </Head>
      <div className="flex flex-col items-center justify-center text-white h-72 md:h-96 bg-blue-600">
        <div className="flex items-center flex-col md:flex-row">
          <h1 className="md:text-6xl font-semibold text-4xl">
            URL 커스터마이징
          </h1>
          <h1 className="md:text-6xl font-semibold text-4xl ml-5">
            'gourl.kr'
          </h1>
        </div>
        <div className="md:text-3xl mt-7 font-semibold text-2xl">
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
      <div
        className="h-16 md:h-28 relative top-[-1px]"
        style={{
          backgroundImage: "url('/waves.svg')",
        }}
      />
    </>
  );
}
