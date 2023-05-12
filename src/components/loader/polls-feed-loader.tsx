import Spinner from "./spinnerLoader";

function PollsFeedLoader() {
  return (
    <div className="flex h-20 items-center justify-center rounded border border-brand-surface bg-brand-mantle">
      <Spinner text="Loading polls..." />
    </div>
  );
}

export default PollsFeedLoader;
