import { useModal } from "@/context";
import { useEffect } from "react";

interface SelectBtnType {
  iconName: string;
  listOfOptions: Array<string>;
  optionSelected: string;
  handleSelect: (option: string) => void;
}

export function SelectBtn({
  iconName,
  listOfOptions,
  optionSelected,
  handleSelect,
}: SelectBtnType) {
  const modal = useModal();

  useEffect(() => {
    insertModalContent();
  }, [optionSelected]);

  const insertModalContent = () => {
    modal.insertContent(
      <ul className="select-list">
        {listOfOptions.map((option, i) => {
          return (
            <li
              key={i}
              className={option === optionSelected ? "select-list__active" : ""}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <button
      onClick={() => {
        modal.openModal();
        insertModalContent();
      }}
      className="select-btn"
    >
      <ion-icon name={iconName}></ion-icon>
    </button>
  );
}
