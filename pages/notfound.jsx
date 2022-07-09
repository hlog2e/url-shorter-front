import DivWaves from "../public/waves.svg";
import Head from "next/head";

export default function NotFound() {
  return (
    <div className="h-screen ">
      <Head>
        <title>GOURL | Not Found | 404</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex items-center justify-center h-screen">
        <img className="w-96" src="/notfound.svg" />
        <div className="flex flex-col justify-between h-40 ml-32 w-[500px]">
          <div>
            <h1 className="text-2xl font-jalnan">GOURL</h1>
            <h1 className="text-4xl font-bold text-slate-500">404 Not Found</h1>
          </div>
          <div>
            <p className="text-xl font-semibold ">
              URL이 잘못되었거나, 이 세상에 존재하지 않습니다.
            </p>
            <p className="mt-1 font-semibold text-slate-400">
              URL 링크를 다시 한 번 확인해주세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
