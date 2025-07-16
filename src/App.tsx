import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";

export default function App() {
  return (
    <>
      <Header />
      <Banner
        src="./public/Imagens/Banner Desktop.png"
        alt="Luz e Cena Banner"
      />
      <MovieSection />
    </>
  );
}
