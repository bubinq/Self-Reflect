import { SetStateAction, useState } from "react";

export const useLocalStorage = (key: string) => {
  const [value, setValue] = useState(() => {
    const searchedVal = localStorage.getItem(key);

    return searchedVal !== null ? JSON.parse(searchedVal) : null;
  });

  function setLocalStorage(data: SetStateAction<string>): any {
    setValue(data);
    localStorage.setItem(key, JSON.stringify(data));
  }

  return [value, setLocalStorage];
};
