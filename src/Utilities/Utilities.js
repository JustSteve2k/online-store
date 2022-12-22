import { useEffect } from "react";

export const useTitleSetter = (newTitle) => useEffect(()=>{
    document.title = newTitle;
  },[newTitle])
  