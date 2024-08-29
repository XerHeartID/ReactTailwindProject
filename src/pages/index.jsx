import Navbar from "../components/navbar";
import Restaurant from "../components/restaurant";

function Homepage() {
  return (
    <>
      <Navbar />
      <h1 className="font-bold text-xl my-8">Rekomendasi Restoran</h1>
      <Restaurant />
      
    </>
  );
}

export default Homepage;
