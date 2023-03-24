function Header () {
  return(
    <header className="place-content-center h-screen w-screen ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <nav className="flex text-white items-center justify-between">
          <div className="text-4xl">
            Kenny
          </div>

          <div className="">
            <ul className="flex text-xl space-x-4">
                <li class="nav__item"><a href="#Home" class="nav__link active">Home</a></li>
                <li class="nav__item"><a href="#Experience" class="nav__link">Experience</a></li>
                <li class="nav__item"><a href="#Projects" class="nav__link">Projects</a></li>
                <li class="nav__item"><a href="#About Me" class="nav__link">About Me</a></li>
                <li class="nav__item"><a href="#Contact" class="nav__link">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header