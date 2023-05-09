function LineLoader({ text }: { text?: string }) {
  const content = text ?? "Loading...";

  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <p className="mb-4 text-lg text-brand-subtext">{content}</p>
      <div className="lineLoader" />
    </div>
  );
}

export default LineLoader;
