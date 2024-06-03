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
import {
  getTheme,
  getCardsView,
  setTheme,
  setCardsView,
  DEFAULT_THEME,
  TOGGLE_THEME,
  DEFAULT_VIEW,
  TOGGLE_VIEW,
  FILTER,
  SORT,
} from "@/util/index";

export function Header() {
  const countdownTheme: string = getTheme();
  const cardsView: string = getCardsView();

  return (
    <header className="header">
      <div>
        <div className="header__page-title">Countdown</div>
        <ToggleBtn
          defaultIcon={countdownTheme}
          toggleIcon={`${
            countdownTheme == DEFAULT_THEME ? TOGGLE_THEME : DEFAULT_THEME
          }`}
          setNewValue={setTheme}
        />
      </div>
      <div>
        <ToggleBtn
          defaultIcon={cardsView}
          toggleIcon={`${
            cardsView == DEFAULT_VIEW ? TOGGLE_VIEW : DEFAULT_VIEW
          }`}
          setNewValue={setCardsView}
        />
        <SelectBtn iconName={FILTER} />
        <SelectBtn iconName={SORT} />
      </div>
    </header>
  );
}
