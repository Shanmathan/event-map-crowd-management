import { useEffect, useRef, useState } from "react";

// A custom hook that runs an effect only once.
export const useEffectOnce = (effect) => {
  const effectFn = useRef(effect); // Holds the effect function.
  const destroyFn = useRef(); // Holds the cleanup function.
  const effectCalled = useRef(false); // Flag to check if the effect has been called.
  const rendered = useRef(false); // Flag to check if the component has been rendered.
  const [, setVal] = useState(0); // State setter function to force a re-render.

  // If the effect has been called, mark the component as rendered.
  if (effectCalled.current) {
    rendered.current = true;
  }

  useEffect(() => {
    // If the effect hasn't been called, call it and store the cleanup function.
    if (!effectCalled.current) {
      destroyFn.current = effectFn.current();
      effectCalled.current = true;
    }

    // Force a re-render.
    setVal((val) => val + 1);

    // Return a cleanup function.
    return () => {
      // If the component hasn't been rendered, don't run the cleanup function.
      if (!rendered.current) {
        return;
      }

      // If a cleanup function exists, run it.
      if (destroyFn.current) {
        destroyFn.current();
      }
    };
  }, []); // Empty dependency array ensures this runs only once.
};
