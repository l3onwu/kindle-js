import { useState, useEffect } from "react";
import localforage from "localforage";

export interface LibraryHookType {
  directory: any;
  setDirectory: Function;
  contents: any[];
  setContents: Function;
  firstLoad: boolean;
  setFirstLoad: Function;
}

export interface BookType {
  name: string;
}

export default function useLibrarySettings() {
  const [directory, setDirectory] = useState(null);
  const [contents, setContents] = useState<any[]>([]);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    let getSavedDirectory = async () => {
      let savedDirectory = await localforage.getItem("directory");
      if (savedDirectory) {
        //@ts-ignore
        await savedDirectory.requestPermission();
        // @ts-ignore
        setDirectory(savedDirectory);
      }
    };
    getSavedDirectory();
  }, [firstLoad]);

  return {
    directory,
    setDirectory,
    contents,
    setContents,
    firstLoad,
    setFirstLoad,
  };
}
