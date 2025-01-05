import navigation from "./navigation";
import dataViewport from "./dataViewport";
import ElementData from "../utils/ElementData";
import appState from "../data/appState";
import { appEvents, appEventsManager } from "../events/appEvents";

export default function dashboard() {
  const element = new ElementData(
    "main",
    "dashboard",
    {
      id: "dashboard",
    },
    [
      navigation(),
      dataViewport(),
    ]
  ).renderElement();

  return element;
}
