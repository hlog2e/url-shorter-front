import UrlLoggerItem from "./UrlLoggerItem";

export default function UrlLoggerContainer(props) {
  return (
    <div className="flex flex-col w-9/12 mt-5 md:w-3/5 max-w-[550px]">
      {props.localStorage ? (
        <>
          {props.localStorage.map((item) => (
            <UrlLoggerItem
              key={item.short_url}
              long_url={item.long_url}
              short_url={item.short_url}
            />
          ))}
        </>
      ) : null}
    </div>
  );
}
