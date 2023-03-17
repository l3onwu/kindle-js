import { useContext, createContext } from "react";
import useInterfaceSettings from "./useInterfaceSettings";
import useLibrarySettings, { LibraryHookType } from "./useLibrarySettings";

const GlobalContext = createContext(null);

export const GlobalContextProvider = ({ children }: any) => {
  // State
  const interfaceHook = useInterfaceSettings();
  const libraryHook: LibraryHookType = useLibrarySettings();

  return (
    // @ts-ignore2
    <GlobalContext.Provider value={{ interfaceHook, libraryHook }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
