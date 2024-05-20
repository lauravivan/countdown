/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function ToggleBtn({
  defaultIcon,
  toggleIcon,
  toggleClass,
  storeName,
}) {
  const stored = localStorage.getItem(storeName) || "";
  const [toggle, setToogle] = useState(stored);

  useEffect(() => {
    if (toggle === toggleClass) {
      document.body.classList.add(toggle);
    }
  }, [toggle, toggleClass]);

  function toToggle() {
    if (toggle === toggleClass) {
      localStorage.removeItem(storeName);
      document.body.classList.remove(toggleClass);
      setToogle("");
    } else {
      localStorage.setItem(storeName, toggleClass);
      document.body.classList.add(toggleClass);
      setToogle(toggleClass);
    }
  }

  return (
    <button
      onClick={toToggle}
      className={`toggle-btn ${toggle === toggleClass ? "off" : "on"}`}
    >
      <ion-icon
        name={`${toggle === toggleClass ? toggleIcon : defaultIcon}`}
      ></ion-icon>
    </button>
  );
}
