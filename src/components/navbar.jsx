import Button from "./button";
import logo from '../assets/logo.png';
import search from '../assets/header/search.png';
import cart from '../assets/header/cart.png';
import bell from '../assets/header/bell.png';

function Navbar() {
  return (
    <div className="bg-white w-full">
      <header className="flex justify-center items-center gap-5 px-10 py-5">
        <a href="" className="flex items-center gap-1">
          <img src={logo} alt="Logo" className="h-8" />
        </a>

        <input
          type="search"
          name="search"
          id="search"
          placeholder="Mau cara apa abangkuh?"
          className="w-3/5 h-8 border rounded-xl px-6 py-5 text-sm focus:outline-none"
        />

        <img
          src={search}
          alt=""
          className="h-10 -ml-16"
          htmlFor="search"
        />

        <label htmlFor="search" className="h-10 w-10 -ml-16"></label>

        <a href="">
          <img src={cart} alt="Cart" className="h-8" />
        </a>

        <a href="">
          <img src={bell} alt="Notification" className="h-8" />
        </a>

        <Button text={"Daftar / Login"} />
      </header>

      <nav className="flex justify-around pb-3 border-b-2">
        <a href="" className="hover:text-amber-400">Rekomendasi</a>
        <a href="" className="hover:text-rose-300">Favorit</a>
        <a href="" className="hover:text-yellow-300">Best Sellers</a>
        <a href="" className="hover:text-sky-400">Summer Sale</a>
        <a href="" className="hover:text-yellow-300">Trending</a>
        <a href="" className="hover:text-red-600">Hot Deals</a>
        <a href="" className="hover:text-stone-300">Lainnya ▶</a>
      </nav>
    </div>
  );
}

export default Navbar;
