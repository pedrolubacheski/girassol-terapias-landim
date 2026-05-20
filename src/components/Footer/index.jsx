function Footer() {
  return (
    <footer className="relative bg-[#563A24] pt-12 pb-6 px-6 overflow-hidden w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center z-10 relative">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-[#F1BF4C] text-3xl font-[Cambo]">
            Espaço Girassol
          </h2>
          <p className="text-white/80 font-[Cantarell] tracking-[0.2em] text-sm mt-1">
            TERAPIAS
          </p>
        </div>

        <div className="text-white/60 text-sm font-[Cantarell] text-center">
          &copy; {new Date().getFullYear()} Espaço Girassol. Todos os direitos
          reservados.
        </div>
      </div>

      <div className="absolute right-[-20px] bottom-[-20px] w-48 opacity-50 pointer-events-none">
        <img
          src="./assets/images/girassois.png"
          alt="girassóis"
          className="w-full h-auto"
        />
      </div>
    </footer>
  );
}

export default Footer;
