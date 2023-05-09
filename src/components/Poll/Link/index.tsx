import { Button } from "@ui/index";
import { ClipboardIcon } from "@ui/icons";
import { toast } from "sonner";

interface PollLinkProps {
  id: string;
}

function PollLink(props: PollLinkProps) {
  const link = "https://fira.vercel.app/poll/" + props.id;

  const handleClick = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => toast.success("Link Copied to Clipboard!"))
      .catch((err) => {
        console.error(err);
        toast.error("Failed to Copy");
      });
  };

  return (
    <div className="mx-auto my-6 max-w-3xl space-y-3 border border-brand-surface bg-brand-mantle px-4 py-6 sm:rounded">
      <div className="flex items-center justify-between">
        <h2 className="text-lg text-brand-subtext">Share the Link</h2>
        <Button onClick={handleClick}>
          <ClipboardIcon /> Copy
        </Button>
      </div>
      <div className="overflow-hidden text-ellipsis rounded border border-brand-surface bg-brand-crust px-4 py-3">
        {link}
      </div>
    </div>
  );
}

export default PollLink;
