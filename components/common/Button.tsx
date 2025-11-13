/* eslint-disable @next/next/no-img-element */

export default function Button({
  onPrev,
  onNext,
}: {
  onPrev?: () => void;
  onNext?: () => void;
}) {
  return (
    <div className="space-x-10 flex">
      <img
        src="/images/arrow-left.png"
        alt="left-arrow"
        className="w-20 cursor-pointer"
        onClick={onPrev}
      />
      <img
        src="/images/arrow-right.png"
        alt="right-arrow"
        className="w-20 cursor-pointer"
        onClick={onNext}
      />
    </div>
  );
}
