import { useState } from "react";

type ToggleBtnType = {
  defaultIcon: string;
  toggleIcon: string;
  setNewValue: (value: string) => void;
};

export function ToggleBtn({
  defaultIcon,
  toggleIcon,
  setNewValue,
}: ToggleBtnType) {
  const [iconName, setIconName] = useState(defaultIcon);

  const handleToggle = () => {
    if (iconName == defaultIcon) {
      setIconName(toggleIcon);
      setNewValue(toggleIcon);
    } else {
      setIconName(defaultIcon);
      setNewValue(defaultIcon);
    }
  };

  return (
    <button type="button" onClick={handleToggle}>
      <ion-icon name={iconName} />
    </button>
  );
}
