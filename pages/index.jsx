import NavBar from "../components/navBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <div className="flex flex-col items-center justify-center text-white h-80 bg-blue-600">
          <h1 className="">url</h1>
          <h1 className="">url</h1>
        </div>
        <div
          className="h-36 relative top-[-1px]"
          style={{
            backgroundImage: "url('/waves.svg')",
          }}
        />
      </div>
    </div>
  );
}
