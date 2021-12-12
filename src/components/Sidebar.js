import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
export default function Sidebar({ showSidebar }) {
  function getTransition() {
    return showSidebar ? "-translate-x-full" : "";
  }
  return (
    <aside
      className={`border mt-20 md:mt-0 bg-white p-5 w-64 absolute md:relative md:translate-x-0 inset-y-0 left-0 transform ${getTransition()} transition duration-200 ease-in-out`}
    >
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
  );
}
