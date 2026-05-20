import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative bg-[#F1BF4C] min-h-[10rem] md:h-40 flex flex-col items-center justify-center w-full overflow-hidden py-6 md:py-0 transition-all duration-300">
      <button
        onClick={toggleMenu}
        className="md:hidden absolute right-6 top-6 text-[#563A24] focus:outline-none z-20"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <div className="flex flex-col items-center justify-center z-10 w-full px-6 md:px-0">
        <img
          src="./assets/icons/logo.png"
          alt="logo"
          className="w-24 md:w-28 lg:w-32 mb-4 md:mb-0 md:absolute md:left-8 md:top-1/2 md:-translate-y-1/2"
        />

        <h1 className="text-[#563A24] text-3xl md:text-4xl lg:text-5xl font-[Cambo] text-center">
          Espaço Girassol
        </h1>

        <h2 className="text-[#563A24] text-xl md:text-2xl lg:text-3xl font-[Cantarell] tracking-[0.2em] md:tracking-[0.3em] mt-1 text-center">
          TERAPIAS
        </h2>

        <nav
          className={`${isMenuOpen ? "flex" : "hidden"} md:flex mt-6 md:mt-4 w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-10 text-[#563A24] text-lg font-[Cantarell] w-full pb-4 md:pb-0">
            <li>
              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-white duration-300 cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#beneficios"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-white duration-300 cursor-pointer"
              >
                Benefícios
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-white duration-300 cursor-pointer"
              >
                Sobre Mim
              </a>
            </li>
            <li>
              <a
                href="#servicos"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-white duration-300 cursor-pointer"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#contato"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-white duration-300 cursor-pointer"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="hidden md:block absolute right-0 top-0 h-full overflow-hidden z-0">
        <img
          src="./assets/images/image21.png"
          alt="girassóis"
          className="lg:w-60 object-cover"
        />
      </div>
    </header>
  );
}

export default Header;
