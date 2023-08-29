import { useState } from "react";

export function useLocalStoredValue<T>() {
  const [storedValue, setStoredValue] = useState<T>({} as T);

  const storeValue = (key: string, value: T) => {
    const formattedValue = { ...storedValue, [key]: value };
    setStoredValue(formattedValue);
    localStorage.setItem("storedValue", JSON.stringify(formattedValue));
  };

  const retrieveValue = (key: string) => {
    const storedValue = localStorage.getItem("storedValue");
    if (storedValue) {
      const parsedValue = JSON.parse(storedValue);
      const parsedValueToGet = parsedValue[key];
      if (parsedValueToGet) {
        return parsedValueToGet;
      }
      throw new Error("Value not found");
    }
    throw new Error("Stored Value not Initialized");
  };

  return { storedValue, storeValue, retrieveValue };
}
