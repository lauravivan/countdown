import { ToggleBtn, SelectBtn } from "@/components/index";
import { useFilter, useSort, useTheme, useView } from "@/context";
import { FILTER, FILTER_OPTIONS, SORT, SORT_OPTIONS } from "@/util/index";

export function Header() {
  const theme = useTheme();
  const view = useView();
  const filter = useFilter();
  const sort = useSort();

  return (
    <header className="header">
      <div>
        <div className="header__page-title">Countdown</div>
        <ToggleBtn icon={theme.theme} setToggle={theme.toggleTheme} />
      </div>
      <div>
        <ToggleBtn icon={view.view} setToggle={view.toggleView} />
        <SelectBtn
          iconName={FILTER}
          listOfOptions={FILTER_OPTIONS}
          optionSelected={filter.filter}
          handleSelect={filter.selectFilter}
        />
        <SelectBtn
          iconName={SORT}
          listOfOptions={SORT_OPTIONS}
          optionSelected={sort.sort}
          handleSelect={sort.selectSort}
        />
      </div>
    </header>
  );
}
