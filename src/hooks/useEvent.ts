import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getFilterAndSortEvents } from "@/util/getFilterAndSortEvents";
import { FilterType } from "@/types/filter";
import { getDrawnColor } from "@/util/color/getDrawnColor";
import { getDateByFilter } from "@/util/date/getDateByFilter";
import { getStoredEvents, storeEvents } from "@/util/storage/events";

export default function useEvent({
  filter,
  sort,
}: {
  filter: FilterType;
  sort: string;
}) {
  const [search, setSearch] = useState("");
  const [events, setEvents] = useState<Array<EventType>>(() => {
    const e = getStoredEvents();
    return getFilterAndSortEvents(filter, sort, e);
  });

  useEffect(() => {
    setEvents(() => {
      const evsFiltered = events.filter(
        (e) =>
          search.toLowerCase().includes(e.desc.toLowerCase()) ||
          e.desc.toLowerCase().includes(search.toLowerCase())
      );

      return search ? evsFiltered : getStoredEvents();
    });
  }, [search]);

  const createEvent = () => {
    const id = uuidv4();
    const dateValid = filter ? getDateByFilter(filter) : new Date();

    const drawnColor =
      events?.length > 0
        ? getDrawnColor(events[events.length - 1].color)
        : getDrawnColor("");

    const event: EventType = {
      id: id,
      desc: "Unamed",
      color: drawnColor,
      date: dateValid,
    };

    setEvents((prevEvents) => {
      const e = [...prevEvents];
      e.push(event);
      storeEvents(e);
      return e;
    });
  };

  const updateEventDesc = (id: string, newDesc: string) => {
    setEvents((prevEvents) => {
      const prevEventsCopy = [...prevEvents];

      for (const e of prevEventsCopy) {
        if (e.id === id) {
          e.desc = newDesc;
        }
      }

      storeEvents(prevEventsCopy);

      return prevEventsCopy;
    });
  };

  const updateEventColor = (id: string, newColor: string) => {
    setEvents((prevEvents) => {
      const prevEventsCopy = [...prevEvents];

      for (const e of prevEventsCopy) {
        if (e.id === id) {
          e.color = newColor;
        }
      }

      storeEvents(prevEventsCopy);

      return prevEventsCopy;
    });
  };

  const updateEventDate = (id: string, newDate: Date) => {
    setEvents((prevEvents) => {
      const prevEventsCopy = [...prevEvents];

      for (const e of prevEventsCopy) {
        if (e.id === id) {
          e.date = newDate;
        }
      }

      storeEvents(prevEventsCopy);

      return prevEventsCopy;
    });
  };

  const deleteEvent = (id: string) => {
    setEvents((prevEvents) => {
      const prevEventsCopy = [...prevEvents];
      const newEvents = prevEventsCopy.filter((e) => e.id !== id);
      storeEvents(newEvents);
      return newEvents;
    });
  };

  return {
    events: getFilterAndSortEvents(filter, sort, events),
    createEvent,
    updateEventDesc,
    updateEventColor,
    updateEventDate,
    deleteEvent,
    handleSearch: (search: string) => setSearch(search),
    search,
  };
}
