import useEvent from "@/hooks/useEvent";
import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import useView from "@/hooks/useView";
import useFilter from "@/hooks/useFilter";
import useSort from "@/hooks/useSort";
import useTheme from "@/hooks/useTheme";

export default function Homepage() {
  const { events, createEvent, updateEventDesc, deleteEvent, updateEventDate } =
    useEvent();
  const { view, toggleView } = useView();
  const { filter, selectFilter } = useFilter();
  const { selectSort, sort } = useSort();
  const { theme, toggleTheme } = useTheme();

  return (
    <div id="app">
      <Header
        filter={filter}
        selectFilter={selectFilter}
        selectSort={selectSort}
        sort={sort}
        toggleTheme={toggleTheme}
        toggleView={toggleView}
        view={view}
        theme={theme}
      />
      <main className="main">
        <div className={`main__cards-view-${view} main__cards`}>
          <div
            className="main__card main__add-event"
            style={{ textAlign: "center" }}
            onClick={createEvent}
            aria-label="Adicionar evento"
          >
            <ion-icon name="add-outline"></ion-icon>
          </div>
          {events.map((event: EventType) => (
            <Card
              event={event}
              key={event.id}
              updateEventDesc={updateEventDesc}
              deleteEvent={deleteEvent}
              updateEventDate={updateEventDate}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
