import { SetStateAction, useState } from "react";

export const useSessionStorage = (key: string) => {
  const [value, setValue] = useState(() => {
    const searchedVal = sessionStorage.getItem(key);

    return searchedVal !== null ? JSON.parse(searchedVal) : null;
  });

  function setSessionStorage(data: SetStateAction<string>): any {
    setValue(data);
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  return [value, setSessionStorage];
};
