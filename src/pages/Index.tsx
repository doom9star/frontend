import Spinner from "../components/Spinner";

export default function Index() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <p className="text-5xl font-mono">HELLO WORLD!</p>
      <Spinner className="absolute w-12 h-12" />
    </div>
  );
}
