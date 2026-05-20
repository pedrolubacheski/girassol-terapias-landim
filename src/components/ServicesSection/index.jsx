function ServicesSection() {
  const services = [
    {
      name: "Massagem Relaxante",
      price: "R$ 50",
      file: "./assets/images/massagens.png",
    },
    {
      name: "Massagem Terapêutica",
      price: "R$ 100",
      file: "./assets/images/massagem_terapeutica.png",
    },
    {
      name: "Massagem Havaiana",
      price: "R$ 100",
      file: "./assets/images/massagem_havaiana.png",
    },
    {
      name: "Bambuterapia",
      price: "R$ 120",
      file: "./assets/images/bambuterapia.png",
    },
    {
      name: "Argiloterapia",
      price: "R$ 50",
      file: "./assets/images/argiloterapia.png",
    },
    {
      name: "Podologia",
      price: "R$ 50",
      file: "./assets/images/podologia.png",
    },
    {
      name: "Pedras Quentes",
      price: "R$ 100",
      file: "./assets/images/pedras_quentes.png",
    },
    {
      name: "Auriculoterapia",
      price: "R$ 40",
      file: "./assets/images/auriculoterapia.png",
    },
    {
      name: "Acupuntura Eletrônica",
      price: "R$ 50",
      file: "./assets/images/acupuntura_eletronica.png",
    },
  ];

  return (
    <section id="servicos" className="py-20 px-6 bg-white w-full">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[#563A24] text-4xl font-[Cambo] mb-12">
          Nossos Serviços
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:-translate-y-4 hover:border-[#FFEFB3] transition-transform duration-300 flex justify-center items-center flex-col"
            >
              <div className="h-48 w-48 bg-gray-200 flex items-center justify-center rounded-full mt-4 mx-auto">
                <img
                  src={service.file}
                  alt={service.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="p-6">
                <h3 className="text-[#563A24] text-2xl font-[Cambo] mb-2">
                  {service.name}
                </h3>
                <p className="text-[#F1BF4C] text-xl font-bold font-[Cantarell] mb-4">
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
