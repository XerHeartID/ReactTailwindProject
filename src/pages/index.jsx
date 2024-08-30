import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Product from "../components/product";
import ImageSlider from "../components/slider";
import slide_1 from "../assets/slide_1.png";
import slide_2 from "../assets/slide_2.png";

const images = [
  slide_1,
  slide_2,
];

function Homepage() {
  return (
    <>
      <Navbar />

      <ImageSlider images={images} />

      <div className="grid grid-cols-5 gap-4 text-left mx-16 my-6 text-sm">
        <a href="" className="text-black font-normal hover:text-black">
          <Product
            img={"./src/assets/product_1.png"}
            name={"Pie Susu Dhian Original isi 10pcs Oleh Oleh Khas Bali"}
            price={"Rp29.900"}
            sold={"3RB+ Terjual"}
          />
        </a>
        <a href="" className="text-black font-normal hover:text-black">
          <Product
            img={"./src/assets/product_2.png"}
            name={"Keripik Belut Crispy Belut Goreng Tepung Garing..."}
            price={"Rp39.900"}
            sold={"500+ Terjual"}
          />
        </a>
        <a href="" className="text-black font-normal hover:text-black">
          <Product
            img={"./src/assets/product_3.png"}
            name={"ikat kepala sunda tradisional topi totopong atas tidak..."}
            price={"Rp23.900"}
            sold={"1RB+ Terjual"}
          />
        </a>
        <a href="" className="text-black font-normal hover:text-black">
          <Product
            img={"./src/assets/product_4.png"}
            name={"Wayang Kulit Standar Dalang Biasa - Bima..."}
            price={"Rp99.000"}
            sold={"80+ Terjual"}
          />
        </a>
        <a href="" className="text-black font-normal hover:text-black">
          <Product
            img={"./src/assets/product_5.png"}
            name={"papan congklak dakon kayu mainan tradisional"}
            price={"Rp75.000"}
            sold={"250+ Terjual"}
          />
        </a>
        <a href="" className="text-black font-normal hover:text-black">
          <Product
            img={"./src/assets/product_6.png"}
            name={"Jamu tradisional / klutuk bekonang"}
            price={"Rp30.000"}
            sold={"100+ Terjual"}
          />
        </a>
        <a href="" className="text-black font-normal hover:text-black">
          <Product
            img={"./src/assets/product_7.png"}
            name={"Sambal Tempong Indra - Kaca Sambel Oleh Oleh..."}
            price={"Rp113.998"}
            sold={"70+ Terjual"}
          />
        </a>
        <a href="" className="text-black font-normal hover:text-black">
          <Product
            img={"./src/assets/product_8.png"}
            name={"GROSIR Mainan Kapal Otok Otok / Perahu Otok Otok"}
            price={"Rp6.500"}
            sold={"1RB+ Terjual"}
          />
        </a>
      </div>

      <Footer />
    </>
  );
}

export default Homepage;
