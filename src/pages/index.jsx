import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Product from "../components/product";
import ImageSlider from "../components/slider";
import slide_1 from "../assets/slide/slide_1.png";
import slide_2 from "../assets/slide/slide_2.png";
import Category from "../components/category";
import product_1 from "../assets/product/product_1.png";
import product_2 from "../assets/product/product_2.png";
import product_3 from "../assets/product/product_3.png";
import product_4 from "../assets/product/product_4.png";
import product_5 from "../assets/product/product_5.png";
import product_6 from "../assets/product/product_6.png";
import product_7 from "../assets/product/product_7.png";
import product_8 from "../assets/product/product_8.png";

const images = [
  slide_1,
  slide_2,
];

function Homepage() {
  return (
    <>
      <Navbar />

      <ImageSlider images={images} />

      <Category />

      <div className="grid grid-cols-5 gap-4 text-left mx-16 my-6 text-sm">
        <a href="" className="text-black font-normal hover:text-black">
          <Product
            img={product_1}
            name={"Pie Susu Dhian Original isi 10pcs Oleh Oleh Khas Bali"}
            price={"Rp29.900"}
            sold={"3RB+ Terjual"}
          />
        </a>
        <a href="" className="text-black font-normal hover:text-black">
          <Product
            img={product_2}
            name={"Keripik Belut Crispy Belut Goreng Tepung Garing..."}
            price={"Rp39.900"}
            sold={"500+ Terjual"}
          />
        </a>
        <a href="" className="text-black font-normal hover:text-black">
          <Product
            img={product_3}
            name={"ikat kepala sunda tradisional topi totopong atas tidak..."}
            price={"Rp23.900"}
            sold={"1RB+ Terjual"}
          />
        </a>
        <a href="" className="text-black font-normal hover:text-black">
          <Product
            img={product_4}
            name={"Wayang Kulit Standar Dalang Biasa - Bima..."}
            price={"Rp99.000"}
            sold={"80+ Terjual"}
          />
        </a>
        <a href="" className="text-black font-normal hover:text-black">
          <Product
            img={product_5}
            name={"papan congklak dakon kayu mainan tradisional"}
            price={"Rp75.000"}
            sold={"250+ Terjual"}
          />
        </a>
        <a href="" className="text-black font-normal hover:text-black">
          <Product
            img={product_6}
            name={"Jamu tradisional / klutuk bekonang"}
            price={"Rp30.000"}
            sold={"100+ Terjual"}
          />
        </a>
        <a href="" className="text-black font-normal hover:text-black">
          <Product
            img={product_6}
            name={"Jamu tradisional / klutuk bekonang"}
            price={"Rp30.000"}
            sold={"100+ Terjual"}
          />
        </a>
        <a href="" className="text-black font-normal hover:text-black">
          <Product
            img={product_7}
            name={"Sambal Tempong Indra - Kaca Sambel Oleh Oleh..."}
            price={"Rp113.998"}
            sold={"70+ Terjual"}
          />
        </a>
        <a href="" className="text-black font-normal hover:text-black">
          <Product
            img={product_8}
            name={"GROSIR Mainan Kapal Otok Otok / Perahu Otok Otok"}
            price={"Rp6.500"}
            sold={"1RB+ Terjual"}
          />
        </a>
        <a href="" className="text-black font-normal hover:text-black">
          <Product
            img={product_8}
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
