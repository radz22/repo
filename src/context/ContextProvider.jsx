import React, { createContext, useState, useEffect } from "react";
export const Context = createContext(null);

const ContextProvider = (props) => {
  const [id, setId] = useState(localStorage.getItem("id") || "");

  useEffect(() => {
    const handleStorageChange = () => {
      setId(localStorage.getItem("id") || "");
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setId(localStorage.getItem("id") || "");
    }, 1000); // Update every second

    // Cleanup: clear interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // This effect runs only once on component mount

  const contextValue = { setId, id };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
