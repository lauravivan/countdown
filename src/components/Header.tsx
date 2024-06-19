// export function Header() {
//   const [filterSelected, setFilterSelected] = useState(
//     localStorage.getItem("filterApplied") || filterOptions[0]
//   );
//   const [sortSelected, setSortSelected] = useState(
//     localStorage.getItem("sortApplied") || sortOptions[0]
//   );
//   const [events, setEvents] = useState(
//     getSortedEvents(getFilteredEvents(filterSelected), sortSelected)
//   );
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   function updateEvents() {
//     setTimeout(() => {
//       setEvents(
//         getSortedEvents(getFilteredEvents(filterSelected), sortSelected)
//       );
//     }, 200);
//   }

//   function handleFilterSelected(filter, e) {
//     e.stopPropagation();
//     setFilterSelected(filter);
//     setEvents(getFilteredEvents(filter));
//     localStorage.setItem("filterApplied", filter);
//   }

//   function handleSortSelected(sort, e) {
//     e.stopPropagation();
//     setSortSelected(sort);
//     setEvents(getSortedEvents(getFilteredEvents(filterSelected), sort));
//     localStorage.setItem("sortApplied", sort);
//   }

//   function toggleMenu() {
//     setIsMenuOpen(!isMenuOpen);
//   }

//   useEffect(() => {
//     localStorage.setItem("filterOptions", JSON.stringify(filterOptions));
//     localStorage.setItem("sortOptions", JSON.stringify(sortOptions));

//     if (navigator.maxTouchPoints == 0) {
//       setIsMenuOpen(true);
//     }
//   }, []);

//   return (
//     <header>
//       <ToggleBtn
//         storeName="theme"
//         defaultIcon="sunny-sharp"
//         toggleIcon="moon-sharp"
//         toggleClass="dark"
//       />

//       <h1 className="page-title">Countdown</h1>

//       <button className="button menu-mobile" onClick={toggleMenu}>
//         <ion-icon name="menu-sharp"></ion-icon>
//       </button>

//       {isMenuOpen && (
//         <div className="menu">
//           <ToggleBtn
//             storeName="cardsView"
//             defaultIcon="grid-sharp"
//             toggleIcon="list-sharp"
//             toggleClass="list-view"
//           />
//           <SelectBtn iconName="filter-sharp">
//             <ul>
//               {filterOptions.map((option) => (
//                 <li
//                   key={option}
//                   onClick={handleFilterSelected.bind(self, option)}
//                   className={filterSelected == option ? "active" : ""}
//                 >
//                   {option}
//                 </li>
//               ))}
//             </ul>
//           </SelectBtn>
//           <SelectBtn iconName="swap-vertical-sharp">
//             <ul>
//               {sortOptions.map((option) => (
//                 <li
//                   key={option}
//                   onClick={handleSortSelected.bind(self, option)}
//                   className={sortSelected == option ? "active" : ""}
//                 >
//                   {option}
//                 </li>
//               ))}
//             </ul>
//           </SelectBtn>
//         </div>
//       )}
//     </header>
//   );
// }

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
