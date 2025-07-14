import { ModalContentType } from "@/types/modal";
import { ToggleBtn } from "./ToggleBtn";
import { FILTER, SORT } from "@/util/constants";

type HeaderProps = {
  theme: string;
  toggleTheme: () => void;
  view: string;
  toggleView: () => void;
  openModal: (type: ModalContentType) => void;
};

export function Header({
  theme,
  toggleTheme,
  view,
  toggleView,
  openModal,
}: HeaderProps) {
  return (
    <header className="header">
      <div className="header__title-wrapper">
        <div className="header__title-wrapper__title">Countdown</div>
        <ToggleBtn icon={theme} setToggle={toggleTheme} />
      </div>
      <div className="header__menu">
        <ToggleBtn icon={view} setToggle={toggleView} />
        <button onClick={() => openModal("filter")} className="select-btn">
          <ion-icon name={FILTER}></ion-icon>
        </button>
        <button onClick={() => openModal("sort")} className="select-btn">
          <ion-icon name={SORT}></ion-icon>
        </button>
      </div>
    </header>
  );
}
