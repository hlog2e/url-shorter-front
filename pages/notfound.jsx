import DivWaves from "../public/waves.svg";
import Head from "next/head";

export default function NotFound() {
  return (
    <div className="h-screen ">
      <Head>
        <title>GOURL | Not Found | 404</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col items-center justify-center text-white bg-blue-600 h-2/5">
        <div className="flex flex-col items-center ">
          <h1 className="text-4xl font-semibold md:text-6xl">404 Not Found</h1>
          <h1 className="ml-5 text-3xl font-semibold md:text-6xl">
            존재하지 않는 URL 입니다.
          </h1>
        </div>
      </div>
      <DivWaves className="w-full  h-10 md:h-28 relative top-[-1px] " />
    </div>
  );
}
