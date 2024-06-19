type ToggleBtnType = {
  icon: string;
  setToggle: () => void;
};

export function ToggleBtn({ icon, setToggle }: ToggleBtnType) {
  return (
    <button type="button" onClick={setToggle}>
      <ion-icon name={icon} />
    </button>
  );
}
