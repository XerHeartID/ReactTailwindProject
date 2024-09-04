import Button from "./button";
import logo from "../assets/logo.png";
import search from "../assets/header/search.png";
import cart from "../assets/header/cart.png";
import bell from "../assets/header/bell.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white w-full">
      <header className="flex justify-center items-center gap-5 px-10 py-5">
        <Link to="/" className="flex items-center gap-1">
          <img src={logo} alt="Logo" className="h-8" />
        </Link>

        <input
          type="search"
          name="search"
          id="search"
          placeholder="Mau cara apa abangkuh?"
          className="w-3/5 h-8 border rounded-xl px-6 py-5 text-sm focus:outline-none"
        />

        <img src={search} alt="" className="h-10 -ml-16" htmlFor="search" />

        <label
          htmlFor="search"
          className="cursor-text h-10 w-10 -ml-16"
        ></label>

        <Link to="/notif">
          <img src={cart} alt="Cart" className="h-8" />
        </Link>

        <Link to="/notif">
          <img src={bell} alt="Notification" className="h-8" />
        </Link>

        <Button text={"Daftar / Login"} />
      </header>

      <nav className="flex justify-around pb-3 border-b-2">
        <Link to="/rekomendasi" className="hover:text-amber-400">
          Rekomendasi
        </Link>
        <Link to="/rekomendasi" className="hover:text-rose-300">
          Favorit
        </Link>
        <Link to="/rekomendasi" className="hover:text-yellow-300">
          Best Sellers
        </Link>
        <Link to="/rekomendasi" className="hover:text-sky-400">
          Summer Sale
        </Link>
        <Link to="/rekomendasi" className="hover:text-yellow-300">
          Trending
        </Link>
        <Link to="/rekomendasi" className="hover:text-red-600">
          Hot Deals
        </Link>
        <Link to="/rekomendasi" className="hover:text-stone-300">
          Lainnya ▶
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
