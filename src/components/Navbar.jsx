function Navbar() {
  return (
    <nav className="navbar flex w-full justify-between items-center sticky top-0 bg-red p-5 text-white">
      <img src="vite.svg" alt="" className="w-12 h-12" />
      <h1 className="text-4xl">VALORANT CHALLENGE RANDOMIZER</h1>
      <div className="flex gap-5 links text-xl">
        <a href="/rules">Rules</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
}

export default Navbar;
