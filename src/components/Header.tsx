import { ModalContentType } from "@/types/modal";
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
        <button className="toggle-btn" type="button" onClick={toggleTheme}>
          <ion-icon name={theme} />
        </button>
      </div>
      <div className="header__menu">
        <button className="toggle-btn" type="button" onClick={toggleView}>
          <ion-icon name={view} />
        </button>
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
