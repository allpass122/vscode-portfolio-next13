"use client";

import { useActivityStatus } from "@/utils/useActivityStatus";
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
  const { disabledRecord, setDisabledRecord } = useActivityStatus();

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
