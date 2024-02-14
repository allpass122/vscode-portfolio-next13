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
        "flex size-4 cursor-pointer select-none items-center justify-center bg-orange-400",
        isDragging && "z-10"
      )}
    >
      {word.w}
    </li>
  );
}
export default WordItem;
