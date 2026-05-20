function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-6 bg-[#F1BF4C] w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="/src/assets/images/girassois.png"
              alt="Decoração Girassol"
              className="absolute -top-2 -left-6 w-32 h-32 z-20 object-contain"
            />
            <div className="w-72 h-96 bg-white/40 rounded-t-full shadow-xl border-4 border-white flex items-center justify-center overflow-hidden">
              <span className="text-[#563A24]/50 font-[Cantarell]">
                <img
                  src="/src/assets/images/foto (1).png"
                  alt="Sobre mim"
                  className="w-full h-80 mt-12 ml-2 object-cover"
                />
              </span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-[#563A24] text-4xl font-[Cambo] mb-6">
            Sobre Mim
          </h2>
          <div className="text-[#563A24] font-[Cantarell] space-y-4 text-lg leading-relaxed">
            <p>
              Olá! Sou Alexsandra Lubacheski, terapeuta holística apaixonada por
              ajudar pessoas a encontrarem seu ponto de equilíbrio. Acredito no
              poder da cura natural e na conexão profunda entre nossas emoções e
              nosso corpo físico.
            </p>
            <p>
              No <strong>Espaço Girassol</strong>, criei um ambiente acolhedor e
              seguro, pensado especialmente para o seu florescimento pessoal.
              Meu objetivo é guiar você em uma jornada de autocuidado e
              renovação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
