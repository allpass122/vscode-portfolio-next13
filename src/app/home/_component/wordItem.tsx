"use client";

import { useSortable } from "@dnd-kit/sortable";
import type { Word } from "./puzzle";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/utils/cn";

function WordItem({ word }: { word: Word }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    index,
    isDragging,
    activeIndex,
  } = useSortable({
    id: word.id,
    data: {
      source: "wordItem",
    },
  });
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : undefined,
  };
  return (
    <li
      ref={setNodeRef}
      style={style}
      key={word.id}
      {...attributes}
      {...listeners}
      className={cn(
        "flex size-16 cursor-pointer select-none items-center justify-center rounded-2xl bg-orange-400 text-3xl text-black",
        isDragging && "z-10"
      )}
    >
      {word.w}
    </li>
  );
}
export default WordItem;
