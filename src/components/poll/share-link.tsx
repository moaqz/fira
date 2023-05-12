"use client";

import { toast } from "sonner";

import { ClipboardIcon } from "@ui/icons";
import { Button } from "@ui/index";
import { BASE_URL } from "@lib/constants";

function PollShareLink({ pollId }: { pollId: string }) {
  const link = `${BASE_URL}/poll/${pollId}`;

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(link);
      toast.success("Link copied to clipboard!");
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while logout. Please try later.");
    }
  };

  return (
    <div className="mx-auto my-6 max-w-3xl space-y-3 border border-brand-surface bg-brand-mantle px-4 py-4 sm:rounded">
      <div className="flex items-center justify-between">
        <h2 className="text-lg text-gray-200">Share the Link</h2>
        <Button onClick={handleClick} aria-label="Copy poll link to clipboard">
          <ClipboardIcon /> Copy
        </Button>
      </div>
      <div className="overflow-hidden text-ellipsis rounded border border-brand-surface bg-brand-crust px-4 py-3 text-gray-300">
        {link}
      </div>
    </div>
  );
}

export default PollShareLink;
