export type EventItem = {
  title: string;
  date: string;
  location: string;
  tag: string;
  link?: string;
};

export let events: EventItem[] = [
  { title: "Conversatorio de Autonomía Digital", date: "15 JUN 2024", location: "Online", tag: "charla", link: "https://example.com/evento1" },
  { title: "Taller de Hardware Libre", date: "22 JUN 2024", location: "Buenos Aires", tag: "taller", link: "https://example.com/evento2" },
  { title: "Mesa Abierta de Gobernanza", date: "29 JUN 2024", location: "Online", tag: "debate", link: "https://example.com/evento3" },
];

export function addEvent(item: EventItem) {
  events = [...events, item];
}

export function replaceEvents(next: EventItem[]) {
  events = next;
}
