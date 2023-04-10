interface EmptyStateProps {
  query: string;
}

function EmptyState(props: EmptyStateProps) {
  return (
    <div className="my-8 overflow-hidden text-ellipsis text-center text-xl">
      <span className="text-xl font-semibold text-brand-subtext">
        No results found for {props.query}
      </span>
    </div>
  );
}

export default EmptyState;
