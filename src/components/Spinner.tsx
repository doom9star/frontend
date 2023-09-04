import classNames from "classnames";

type Props = {
  className?: HTMLDivElement["className"];
};

export default function Spinner({ className }: Props) {
  return (
    <div
      className={
        "w-8 h-8 border border-black border-b-0 rounded-full animate-spin" +
        classNames({
          [` ${className}`]: className,
        })
      }
    />
  );
}
