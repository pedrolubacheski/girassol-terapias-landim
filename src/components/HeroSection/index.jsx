function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-[800px] md:h-[900px] overflow-hidden"
    >
      <img
        src="/src/assets/images/hero-image.png"
        alt="heroimage"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <h1 className="text-[#0D003D] text-4xl md:text-6xl font-[Lobster] text-center drop-shadow-md">
          Floreça <span className="font-[Lobster-Two]"> bem-estar, </span>{" "}
          <br /> <span className="font-[Lobster-Two]"> renove sua </span>{" "}
          energia.
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
