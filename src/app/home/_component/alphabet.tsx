"use client";

import { useDraggable } from "@dnd-kit/core";
import type { Word } from "./puzzle";
import { CSS } from "@dnd-kit/utilities";

function Alphabet({ word }: { word: Word }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: word.id,
    data: { word, source: "alphabet" },
  });
  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.4 : undefined,
  };
  return (
    <div
      style={style}
      className=" flex size-4 cursor-pointer select-none items-center justify-center bg-sky-400"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      {word.w}
    </div>
  );
}

export default Alphabet;
