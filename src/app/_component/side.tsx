"use client";

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
  return (
    <>
      <Sidebar />
      <Explorer />
    </>
  );
}

export default Side;
