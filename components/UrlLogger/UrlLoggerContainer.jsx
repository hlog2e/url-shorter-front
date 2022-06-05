import UrlLoggerItem from "./UrlLoggerItem";
import Fade from "react-reveal/Fade";

export default function UrlLoggerContainer(props) {
  return (
    <Fade bottom>
      <div className="flex flex-col  mt-5  max-w-[550px]">
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
    </Fade>
  );
}
