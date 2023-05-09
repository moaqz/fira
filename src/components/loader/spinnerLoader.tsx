function Spinner({ text }: { text?: string }) {
  const content = text ?? "Loading...";

  return (
    <>
      <svg
        height={24}
        width={24}
        className="spinnerLoader"
        viewBox="25 25 50 50"
      >
        <circle cx="50" cy="50" r="20" strokeWidth={5} />
      </svg>
      {content}
    </>
  );
}

export default Spinner;
