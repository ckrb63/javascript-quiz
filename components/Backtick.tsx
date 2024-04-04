export default function BacktickStylingString({ text }: { text: string }) {
  const parts = text.split(/`([^`]+)`/);
  console.log(parts);
  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <span
        key={index}
        className="rounded-[3px] bg-gray-200 px-1 py-[2px] text-sm"
      >
        {part}
      </span>
    ) : (
      part
    ),
  );
}
