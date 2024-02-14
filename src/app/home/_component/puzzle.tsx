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

export type Word = {
  id: string;
  w: string;
};
function Puzzle() {
  const [activeItem, setActiveItem] = useState<Active | null>(null);
  const [words, setWords] = useState<Word[]>([
    { id: nanoid(), w: "a" },
    { id: nanoid(), w: "b" },
    { id: nanoid(), w: "c" },
  ]);
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
    if (!(over && active.id !== over?.id)) {
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
    <div className="m-2 flex flex-1 flex-col rounded-lg bg-dark-primary">
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
        <div className="flex flex-wrap gap-1 rounded border p-2">
          {"abcdefghijklmnopqrstuvwxyz".split("").map((c) => (
            <Alphabet
              key={c}
              word={{ id: nanoid(), w: c }}
            />
          ))}
        </div>

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
      </DndContext>
    </div>
  );
}

export default Puzzle;
