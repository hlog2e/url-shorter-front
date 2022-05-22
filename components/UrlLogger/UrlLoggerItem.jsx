import IconLink from "../../public/icons/link.svg";
import CopyToClipboard from "react-copy-to-clipboard";

export default function UrlLoggerItem(props) {
  return (
    <div className="flex flex-col justify-between w-full h-24 px-4 py-3 mb-1 bg-white rounded-lg shadow md:py-1 md:items-center md:h-10 md:flex-row">
      <div className="flex">
        <IconLink className="hidden px-2 md:block w-9 " />
        <p className="text-sm text-gray-500 ">{props.long_url}</p>
      </div>

      <div className="flex flex-col md:flex-row">
        <strong className="text-sm text-gray-500 md:text-base">
          {props.short_url}
        </strong>
        <CopyToClipboard text={props.short_url}>
          <button className="mt-2 text-white text-blue-400 rounded-lg hover:bg-blue-200 md:m-0 bg-sky-100 md:px-2 md:ml-3">
            복사
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}
