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
      className=" flex size-16 cursor-pointer select-none items-center justify-center rounded-2xl bg-sky-400 text-3xl text-black"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      {word.w}
    </div>
  );
}

export default Alphabet;
