import { useContext, createContext } from "react";
import useInterfaceSettings from "./useInterfaceSettings";

const GlobalContext = createContext(null);

export const GlobalContextProvider = ({ children }: any) => {
  // State
  const interfaceHook = useInterfaceSettings();

  return (
    // @ts-ignore2
    <GlobalContext.Provider value={{ interfaceHook }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
