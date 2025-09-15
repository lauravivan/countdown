import { ModalContentType } from "@/types/modal";
import {
  BsFillGridFill,
  BsFillMoonFill,
  BsFillSunFill,
  BsFilter,
  BsList,
} from "react-icons/bs";
import { TbArrowsSort } from "react-icons/tb";

type HeaderProps = {
  theme: string;
  toggleTheme: () => void;
  view: string;
  toggleView: () => void;
  openModal: (type: ModalContentType) => void;
  handleTitle?: (title: string) => void;
};

export function Header({
  theme,
  toggleTheme,
  view,
  toggleView,
  openModal,
  handleTitle,
}: HeaderProps) {
  const handleFilterModal = () => {
    openModal("filter");
    handleTitle?.("Filter");
  };

  const handleSortModal = () => {
    openModal("sort");
    handleTitle?.("Sort");
  };

  return (
    <header className="header">
      <div className="header__title-wrapper">
        <div className="header__title-wrapper__title">Countdown</div>
        <button className="toggle-btn" type="button" onClick={toggleTheme}>
          {theme === "moon" ? <BsFillMoonFill /> : <BsFillSunFill />}
        </button>
      </div>
      <div className="header__menu">
        <button className="toggle-btn" type="button" onClick={toggleView}>
          {view === "grid" ? <BsFillGridFill /> : <BsList />}
        </button>
        <button onClick={handleFilterModal} className="select-btn">
          <BsFilter />
        </button>
        <button onClick={handleSortModal} className="select-btn">
          <TbArrowsSort />
        </button>
      </div>
    </header>
  );
}
