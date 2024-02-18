"use client";
import type { Active, DragEndEvent } from "@dnd-kit/core";
import { DndContext, DragOverlay, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { useMemo, useState } from "react";
import { SortableContext, arrayMove, horizontalListSortingStrategy } from "@dnd-kit/sortable";
import WordItem from "./wordItem";
import { nanoid } from "nanoid";
import Alphabet from "./alphabet";
import Droppable from "./droppable";
import React from "react";
import { cn } from "@/utils/cn";
import { GiStarSwirl } from "react-icons/gi";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

export type Word = {
  id: string;
  w: string;
};
function Puzzle() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeItem, setActiveItem] = useState<Active | null>(null);
  const [words, setWords] = useState<Word[]>([
    { id: nanoid(), w: "a" },
    { id: nanoid(), w: "b" },
    { id: nanoid(), w: "t" },
    { id: nanoid(), w: "o" },
    { id: nanoid(), w: "u" },
  ]);
  const pathNow = words.map((word) => word.w).join("");
  const isValidPath = ["about", "article", "github", "project", "contact", "leetcode"].includes(
    pathNow
  );

  const activeElement = useMemo(() => {
    if (activeItem?.data.current?.source === "alphabet") {
      return <Alphabet word={activeItem?.data.current?.word} />;
    }
    const word = words.find((item) => item.id === activeItem?.id);
    return word ? <WordItem word={word} /> : null;
  }, [activeItem, words]);

  const sensors = useSensors(useSensor(PointerSensor));

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    // console.log(active);
    // console.log(over);
    if (!over) {
      setWords((prev) => prev.filter((p) => p.id !== active.id));
      setActiveItem(null);
      return;
    }
    if (!(over && active.id !== over?.id) || words.length >= 8) {
      setActiveItem(null);
      return;
    }
    if (activeItem?.data.current?.source === "alphabet") {
      setWords((prev) => [...prev, activeItem?.data.current?.word as unknown as Word]);
      setActiveItem(null);
      return;
    }
    setWords((prev) => {
      const activeIndex = prev.findIndex((word) => word.id === active.id);
      const overIndex = prev.findIndex((word) => word.id === over?.id);
      const arr = arrayMove(prev, activeIndex, overIndex);
      return arr;
    });
    setActiveItem(null);
  };

  return (
    <div className="bg-base-200 m-2 flex flex-1 flex-col rounded-lg p-4 font-cmono">
      <span className="flex w-full flex-row items-center justify-between whitespace-pre text-4xl font-bold">
        <span className="text-sky-400">
          Puzzle <span className="text-orange-400">Playgorund</span>
        </span>
        <Image
          rel="preload"
          className="text-right"
          src="/dnd-kit-logo.svg"
          width={91}
          height={36}
          alt="dnd-kit_logo"
        />
      </span>
      <span className=" font-cmono text-base">finish puzzle to navigate!</span>
      <div className="flex flex-1 flex-col justify-evenly">
        <DndContext
          id={"context1"}
          sensors={sensors}
          onDragEnd={onDragEnd}
          onDragStart={({ active }) => {
            setActiveItem(active);
          }}
          onDragCancel={() => {
            setActiveItem(null);
          }}
        >
          <div className="flex flex-wrap gap-1 rounded p-2">
            {"abcdefghijklmnopqrstuvwxyz".split("").map((c) => (
              <Alphabet
                key={c}
                word={{ id: nanoid(), w: c }}
              />
            ))}
            {
              <GiStarSwirl
                className={cn(
                  " size-16  text-transparent",
                  isValidPath && "cursor-pointer text-yellow-400"
                )}
                onClick={() => {
                  router.push(`${pathNow}?${searchParams.toString()}`);
                }}
              />
            }
          </div>

          <span
            className={cn("flex", isValidPath && "[&_li]:animate-[pulse_2s_ease-in-out_infinite]")}
          >
            <SortableContext
              items={words}
              strategy={horizontalListSortingStrategy}
            >
              <Droppable>
                {words.map((word) => (
                  <WordItem
                    key={word.id}
                    word={word}
                  />
                ))}
                <DragOverlay>{activeElement ?? null}</DragOverlay>
              </Droppable>
            </SortableContext>
          </span>
        </DndContext>
      </div>
    </div>
  );
}

export default Puzzle;
