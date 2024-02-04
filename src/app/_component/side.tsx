"use client";

import { activityItems, lsKey } from "@/utils/useActivityStatus";
import { useState } from "react";
import { useLocalStorage } from "react-use";
import Explorer from "./explorer";
import Sidebar from "./sideBar";

/**
 * for updating Sidebar and Explorer
 * but I don't like pass props
 * maybe can refactor in future
 *
 * @returns
 */
function Side() {
  const [localStorageData, setLocalStorageData, remove] = useLocalStorage<{
    [key: string]: boolean;
  }>(lsKey);
  // const localStorageData = localStorage.getItem(lsKey);
  const [disabledRecord, setDisabledRecord] = useState<{ [key: string]: boolean }>(
    localStorageData ??
      Object.fromEntries(activityItems.map((item) => [item.title, item.disabled ?? false]))
  );

  return (
    <>
      <Sidebar
        disabledRecord={disabledRecord}
        setDisabledRecord={setDisabledRecord}
      />
      <Explorer
        disabledRecord={disabledRecord}
        setDisabledRecord={setDisabledRecord}
      />
    </>
  );
}

export default Side;
