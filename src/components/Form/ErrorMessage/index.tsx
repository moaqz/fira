interface ErrorMessageProps {
  children: React.ReactNode;
}

function ErrorMessage(props: ErrorMessageProps) {
  return <p className="text-bold text-red-500">{props.children}</p>;
}

export default ErrorMessage;
