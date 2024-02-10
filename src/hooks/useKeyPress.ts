import { useEffect } from "react";

export function useKeyPress(
  callback: (event: KeyboardEvent) => void, // Type for the callback function
  keyCodes: string[], // Type for the array of key codes
) {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (keyCodes.includes(event.code)) {
        callback(event);
      }
    };

    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [callback, keyCodes]);
}
