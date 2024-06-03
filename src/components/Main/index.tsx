// import { getEvents, createEvent, deleteEvent } from "@/data/event";

// export function Main() {
//   function addEvent() {
//     createEvent();
//     updateEvents();
//   }

//   function handleEventDeletion(id) {
//     deleteEvent(id);
//     updateEvents();
//   }

//   return (
//     <main>
//       <div>
//         {events.map((event) => (
//           <Card
//             color={event.color}
//             desc={event.desc}
//             key={event.id}
//             id={event.id}
//             date={event.date}
//             deleteOnClick={handleEventDeletion.bind(self, event.id)}
//           />
//         ))}
//         <div
//           className="card card-add"
//           style={{ textAlign: "center" }}
//           onClick={addEvent}
//         >
//           <div>
//             <ion-icon name="add-outline"></ion-icon>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
