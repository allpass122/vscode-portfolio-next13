"use client";

import { useDroppable } from "@dnd-kit/core";

function Droppable({ children }: React.PropsWithChildren) {
  const { setNodeRef } = useDroppable({
    id: "droppable",
  });
  return (
    <div
      className="h-24 w-full rounded-3xl bg-white bg-opacity-10"
      ref={setNodeRef}
    >
      <ul className="m-4 flex w-fit flex-row gap-1">{children}</ul>
    </div>
  );
}
export default Droppable;
