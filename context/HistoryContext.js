import { useState, useContext, createContext } from "react";
import { Cache } from "react-native-cache";
import AsyncStorage from "@react-native-async-storage/async-storage";

const cache = new Cache({
  namespace: "myapp",
  policy: {
    // maxEntries: 10, // if unspecified, it can have unlimited entries
    stdTTL: 0, // the standard ttl as number in seconds, default: 0 (unlimited)
  },
  backend: AsyncStorage,
});

const HistoryContext = createContext();
const CreateHistoryContext = createContext();
const GetHistoryContext = createContext();
const DisplayHistoryContext = createContext();
const ToggleDisplayHistoryContext = createContext();

export function useHistory() {
  return useContext(HistoryContext);
}

export function useCreateHistory() {
  return useContext(CreateHistoryContext);
}

export function useGeteHistory() {
  return useContext(GetHistoryContext);
}

export function useDisplayHistory() {
  return useContext(DisplayHistoryContext);
}

export function useDisplayToggleHistory() {
  return useContext(ToggleDisplayHistoryContext);
}

export function HistoryProvider({ children }) {
  const [toggle, setToggle] = useState(false);
  const [history, setHistory] = useState([]);

  const getAllEnteries = async () => {
    const tempArray = [];
    const data = await cache.getAll();
    for (const [key, val] of Object.entries(data)) {
      tempArray.push(val.value);
    }
    setHistory(tempArray.reverse());
  };

  const createEntry = async (input, result) => {
    key = Object.keys(await cache.getAll()).length + 1;
    await cache.set(key, {
      id: key,
      input: input,
      result: result,
    });
  };

  return (
    <HistoryContext.Provider value={history}>
      <CreateHistoryContext.Provider value={createEntry}>
        <GetHistoryContext.Provider value={getAllEnteries}>
          <DisplayHistoryContext.Provider value={toggle}>
            <ToggleDisplayHistoryContext.Provider value={setToggle}>
              {children}
            </ToggleDisplayHistoryContext.Provider>
          </DisplayHistoryContext.Provider>
        </GetHistoryContext.Provider>
      </CreateHistoryContext.Provider>
    </HistoryContext.Provider>
  );
}
