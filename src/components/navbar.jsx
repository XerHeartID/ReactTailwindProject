function Navbar() {
  return (
    <navbar className="flex justify-between items-center px-6">
      <a href="" className="flex items-center gap-1">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffyb0f-e729e31d-e8ef-43c9-b49a-ae18fde9cd13.png/v1/fill/w_1280,h_1280/dragon_type_symbol_go_by_jormxdos_dffyb0f-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmeWIwZi1lNzI5ZTMxZC1lOGVmLTQzYzktYjQ5YS1hZTE4ZmRlOWNkMTMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.cAQbTY4V4ON5Rfy7lP_5E6M5Eym_2X08CGb646C8_nc"
          alt="Logo"
          className="w-10"
        />
        <p className="font-medium">XerheartID</p>
      </a>

      <nav className="flex gap-6">
        <a href="">Home</a>
        <a href="">Blog</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </nav>
    </navbar>
  );
}

export default Navbar;
