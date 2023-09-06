import { Spin } from "antd";

export default function Index() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <p className="text-5xl font-mono">HELLO WORLD!</p>
      <Spin size="large" />
    </div>
  );
}
