import { useState } from "react";

export default function useInterfaceSettings() {
  const [view, setView] = useState("lockscreen");

  return {
    view,
    setView,
  };
}
