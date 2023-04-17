import { Poll } from "@/pages/dash";
import Link from "next/link";

interface PollCardProps extends Poll {}

function PollCard(props: PollCardProps) {
  const { title, id, description } = props;

  const pollUrl = "http://localhost:3000/poll/" + id;

  return (
    <Link
      href={pollUrl}
      className="rounded border border-brand-surface bg-brand-mantle p-4 hover:-translate-y-1 hover:bg-brand-surface hover:transition-all"
    >
      <article>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-4 text-brand-subtext">
          {description || "No description."}
        </p>
      </article>
    </Link>
  );
}

export default PollCard;
