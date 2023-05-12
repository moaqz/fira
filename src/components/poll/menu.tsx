import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import dynamic from "next/dynamic";

import { EllipsisVerticalIcon } from "@ui/icons";
import Spinner from "@components/loader/spinnerLoader";

const DeleteButton = dynamic(() => import("./delete-button"), {
  loading: () => (
    <div className="flex items-center justify-center px-3">
      <Spinner />
    </div>
  ),
});

function PollMenu({ pollId }: { pollId: string }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="flex items-center justify-center rounded-md px-3 py-2 text-zinc-400 transition-colors hover:bg-brand-surface"
          aria-label="Open menu"
        >
          <EllipsisVerticalIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="w-56 -translate-x-5 translate-y-2 rounded border border-brand-surface bg-brand-mantle py-1.5 shadow-md">
          <DropdownMenu.Label className="px-3 text-lg text-gray-300">
            Actions
          </DropdownMenu.Label>

          <DropdownMenu.Separator className="my-2 h-[1px] bg-brand-surface" />

          <DeleteButton pollId={pollId} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default PollMenu;
