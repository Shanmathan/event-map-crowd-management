import { useEffect, useRef, useState } from "react";

export const useEffectOnce = (effect) => {
  const effectFn = useRef(effect);
  const destroyFn = useRef();
  const effectCalled = useRef(false);
  const rendered = useRef(false);
  const [, setVal] = useState(0);

  if (effectCalled.current) {
    rendered.current = true;
  }

  useEffect(() => {
    if (!effectCalled.current) {
      destroyFn.current = effectFn.current();
      effectCalled.current = true;
    }

    setVal((val) => val + 1);

    return () => {
      if (!rendered.current) {
        return;
      }

      if (destroyFn.current) {
        destroyFn.current();
      }
    };
  }, []);
};
