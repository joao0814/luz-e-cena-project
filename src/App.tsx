import Banner from "./components/Banner";
import Link from "./components/Link";

export default function App() {
  return (
    <>
      <Link href="/" target="_blank">
        Opa
      </Link>
      <Banner
        src="./public/Imagens/Banner Desktop.png"
        alt="Luz e Cena Banner"
      />
    </>
  );
}
