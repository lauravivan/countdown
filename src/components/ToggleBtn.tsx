type ToggleBtnType = {
  icon: string;
  setToggle: () => void;
};

export function ToggleBtn({ icon, setToggle }: ToggleBtnType) {
  return (
    <button className="toggle-btn" type="button" onClick={setToggle}>
      <ion-icon name={icon} />
    </button>
  );
}
