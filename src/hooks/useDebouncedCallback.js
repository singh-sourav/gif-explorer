import React from "react";
import {debounce} from "../utils/giphy-util";

/**
 * Custom Hook for debouncing any callback with specified delay
 * To Note : The result is memoised so that multiple renders don't result in re-execution of
 * debounce function
 * @param  {...any} config 
 */
function useDebouncedCallback(...config) {
  const [callback, delay] = config;
  const debouncedCallback = React.useMemo(() => debounce(callback, delay), [
    delay,
    callback
  ]);
  return debouncedCallback;
}

export default useDebouncedCallback;
