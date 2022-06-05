import IconGithub from "../../public/icons/github.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-11/12 h-48 p-4 md:w-3/5 ">
        <div className="flex justify-between w-full h-16 p-4 border-b border-gray-300">
          <h1 className="text-2xl font-jalnan">GOURL</h1>
          <Link href="https://github.com/hlog2e">
            <a target="_blank">
              <IconGithub className="w-6 cursor-pointer"></IconGithub>
            </a>
          </Link>
        </div>
        <div className="flex flex-col justify-between h-24 p-3 mt-1 ">
          <div className="flex text-sm font-thin text-slate-600">
            <p className="px-1">개발자 : 김홍록</p>
            <p className="px-1">이메일 : </p>
            <a href="mailto:dev@hongrok.net" className=" hover:underline">
              dev@hongrok.net
            </a>
          </div>
          <div className="flex text-xs font-thin text-slate-600">
            <p className="px-1">Copyright Ⓒ 2022 HongRok All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
