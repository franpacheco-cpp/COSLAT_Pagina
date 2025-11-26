export type ProjectItem = {
  name: string;
  status: string;
  focus: string;
  color: string;
  link?: string;
};

export let projects: ProjectItem[] = [
  { name: "Nodo de Cómputo Distribuido", status: "En curso", focus: "Infraestructura", color: "border-coslat-accent text-coslat-accent", link: "https://example.com/proyecto1" },
  { name: "Tooling IA en Español", status: "En diseño", focus: "Software", color: "border-coslat-blue text-coslat-blue", link: "https://example.com/proyecto2" },
  { name: "Kit de Hardware Libre", status: "Próximo", focus: "Hardware", color: "border-coslat-dark text-coslat-dark", link: "https://example.com/proyecto3" },
];

export function addProject(item: ProjectItem) {
  projects = [...projects, item];
}

export function replaceProjects(next: ProjectItem[]) {
  projects = next;
}
