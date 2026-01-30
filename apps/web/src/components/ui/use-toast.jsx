import { useState } from "react";

let listeners = [];
let memoryState = [];

function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TOAST":
      return [...state, action.toast];
    case "REMOVE_TOAST":
      return state.filter((t) => t.id !== action.id);
    default:
      return state;
  }
}

export function useToast() {
  const [toasts, setToasts] = useState(memoryState);

  listeners.push(setToasts);

  return {
    toasts,
    toast: ({ title, description }) => {
      const id = Date.now().toString();
      dispatch({
        type: "ADD_TOAST",
        toast: { id, title, description },
      });

      setTimeout(() => {
        dispatch({ type: "REMOVE_TOAST", id });
      }, 3000);
    },
  };
}
