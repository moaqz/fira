import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { useState } from "react";

import { TrashIcon } from "@ui/icons";
import { Button } from "@ui/index";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function DeleteButton({ pollId }: { pollId: string }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handlePollDeleting = async () => {
    setIsDeleting(true);

    try {
      const res = await fetch(`/api/poll/${pollId}/delete`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete poll");
      }

      router.push("/dash");
    } catch (error) {
      setIsDeleting(false);
      toast.error("Failed to delete poll. Please try later.");
    }
  };

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button
          type="button"
          className="flex h-10 w-full select-none items-center gap-3 px-4 font-semibold text-red-400 outline-none transition-colors hover:bg-brand-surface"
          aria-label="Delete poll"
        >
          <TrashIcon /> <span>Delete</span>
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <AlertDialog.Overlay className="fixed inset-0 z-50 bg-gray-950/50" />

          <AlertDialog.Content className="fixed z-50 w-full max-w-md rounded border border-brand-surface bg-brand-mantle p-6 shadow-lg">
            <AlertDialog.Title className="mb-3 text-xl font-medium text-gray-300">
              Delete poll
            </AlertDialog.Title>
            <AlertDialog.Description className="mb-6 leading-normal text-gray-400">
              Are you sure you want to delete this poll? All associated data
              will be removed. This action cannot be undone.
            </AlertDialog.Description>

            <div className="flex items-center gap-3">
              <AlertDialog.Cancel asChild>
                <Button>Cancel</Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild onClick={handlePollDeleting}>
                <Button
                  variant="pink"
                  isDisabled={isDeleting}
                  isLoading={isDeleting}
                >
                  Yes, delete poll
                </Button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </div>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}

export default DeleteButton;
