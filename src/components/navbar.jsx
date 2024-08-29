import Button from "./button";

function Navbar() {
  return (
    <div className="bg-white w-full">
      <header className="flex justify-center items-center gap-5 px-10 py-5">
        <a href="" className="flex items-center gap-1">
          <img src=".\src\assets\logo.png" alt="Logo" className="h-8" />
        </a>

        <input
          type="search"
          name="search"
          id="search"
          placeholder="Mau cara apa abangkuh?"
          className="w-3/5 h-8 border rounded-xl px-6 py-5 text-sm focus:outline-none"
        />

        <img
          src=".\src\assets\search.png"
          alt=""
          className="h-10 -ml-16"
          htmlFor="search"
        />

        <label htmlFor="search" className="h-10 w-10 -ml-16"></label>

        <a href="">
          <img src=".\src\assets\cart.png" alt="Cart" className="h-8" />
        </a>

        <a href="">
          <img src=".\src\assets\bell.png" alt="Notification" className="h-8" />
        </a>

        <Button text={"Daftar / Login"} />
      </header>

      <nav className="flex justify-around pb-3 border-b-2">
        <a href="">Rekomendasi</a>
        <a href="">Favorit</a>
        <a href="">Best Sellers</a>
        <a href="">Summer Sale</a>
        <a href="">Trending</a>
        <a href="">Hot Deals</a>
        <a href="">Lainnya ▶</a>
      </nav>
    </div>
  );
}

export default Navbar;
