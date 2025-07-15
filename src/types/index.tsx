export type Categoria = "2D" | "3D";
export type Censura = "Livre" | "10 Anos" | "12 Anos" | "14 Anos" | "16 Anos";

export interface Movie {
  id: number;
  src: string;
  alt: string;
  titulo: string;
  genero: string;
  categoria: Categoria;
  duracao: string;
  censura: Censura;
}
