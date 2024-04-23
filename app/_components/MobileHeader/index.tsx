import MobileHeaderSheet from "./MobileHeaderSheet";

export function MobileHeader() {
  return (
    <div className="flex md:hidden">
      <MobileHeaderSheet />
      <h2 className="ml-4 mt-4 font-semibold">JS Quiz</h2>
    </div>
  );
}
