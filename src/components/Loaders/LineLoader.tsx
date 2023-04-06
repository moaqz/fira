export interface LineLoaderProps {
  text?: string;
}

function LineLoader(props: LineLoaderProps) {
  const text = props.text ?? "Loading...";

  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <p className="mb-4 text-lg text-brand-subtext">{text}</p>
      <div className="lineLoader" />
    </div>
  );
}

export default LineLoader;
