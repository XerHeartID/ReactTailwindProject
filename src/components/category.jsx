import category_1 from "../assets/category/category_1.png";
import category_2 from "../assets/category/category_2.png";
import category_3 from "../assets/category/category_3.png";
import category_4 from "../assets/category/category_4.png";
import category_5 from "../assets/category/category_5.png";
import category_6 from "../assets/category/category_6.png";
import category_7 from "../assets/category/category_7.png";
import category_8 from "../assets/category/category_8.png";
import category_9 from "../assets/category/category_9.png";
import category_10 from "../assets/category/category_10.png";

function Category() {
  return (
    <div className="border rounded-xl shadow-md mx-16 px-8 pt-4 pb-6">
      <h1 className="text-xl text-left font-bold mb-5">
        Kategori Pilihan
      </h1>

      <div className="grid grid-cols-6 gap-6 justify-center mx-6">
        <a href="" className="text-black hover:text-black">
          <div className="flex flex-col gap-1 items-center text-center font-semibold border-4 rounded-xl p-4">
            <img src={category_1} alt="Wayang" className="w-20 h-20" />
            <h3>Wayang</h3>
          </div>
        </a>
        <a href="" className="text-black hover:text-black">
          <div className="flex flex-col gap-1 items-center text-center font-semibold border-4 rounded-xl p-4">
            <img src={category_2} alt="Batik" className="w-20 h-20" />
            <h3>Batik</h3>
          </div>
        </a>
        <a href="" className="text-black hover:text-black">
          <div className="flex flex-col gap-1 items-center text-center font-semibold border-4 rounded-xl p-4">
            <img src={category_3} alt="Songket" className="w-20 h-20" />
            <h3>Songket</h3>
          </div>
        </a>
        <a href="" className="text-black hover:text-black">
          <div className="flex flex-col gap-1 items-center text-center font-semibold border-4 rounded-xl p-4">
            <img src={category_4} alt="Gerabah" className="w-20 h-20" />
            <h3>Gerabah</h3>
          </div>
        </a>
        <a href="" className="text-black hover:text-black">
          <div className="flex flex-col gap-1 items-center text-center font-semibold border-4 rounded-xl p-4">
            <img src={category_5} alt="Angklung" className="w-20 h-20" />
            <h3>Angklung</h3>
          </div>
        </a>
        <a href="" className="text-black hover:text-black">
          <div className="flex flex-col gap-1 items-center text-center font-semibold border-4 rounded-xl p-4">
            <img src={category_6} alt="Kue Lapis" className="w-20 h-20" />
            <h3>Kue Lapis</h3>
          </div>
        </a>
        <a href="" className="text-black hover:text-black">
          <div className="flex flex-col gap-1 items-center text-center font-semibold border-4 rounded-xl p-4">
            <img src={category_7} alt="Pempek" className="w-20 h-20" />
            <h3>Pempek</h3>
          </div>
        </a>
        <a href="" className="text-black hover:text-black">
          <div className="flex flex-col gap-1 items-center text-center font-semibold border-4 rounded-xl p-4">
            <img src={category_8} alt="Kerupuk" className="w-20 h-20" />
            <h3>Kerupuk</h3>
          </div>
        </a>
        <a href="" className="text-black hover:text-black">
          <div className="flex flex-col gap-1 items-center text-center font-semibold border-4 rounded-xl p-4">
            <img src={category_9} alt="Sambal" className="w-20 h-20" />
            <h3>Sambal</h3>
          </div>
        </a>
        <a href="" className="text-black hover:text-black">
          <div className="flex flex-col gap-1 items-center text-center font-semibold border-4 rounded-xl p-4">
            <img src={category_10} alt="Bakpia" className="w-20 h-20" />
            <h3>Bakpia</h3>
          </div>
        </a>
        <a href="" className="text-black hover:text-black">
          <div className="flex flex-col gap-1 items-center text-center font-semibold border-4 rounded-xl p-4">
            <img src={category_1} alt="Wayang" className="w-20 h-20" />
            <h3>Wayang</h3>
          </div>
        </a>
        <a href="" className="text-black hover:text-black">
          <div className="flex flex-col gap-1 items-center text-center font-semibold border-4 rounded-xl p-4">
            <img src={category_1} alt="Wayang" className="w-20 h-20" />
            <h3>Wayang</h3>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Category;
