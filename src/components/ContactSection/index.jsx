function ContactSection() {
  return (
    <section id="contato" className="py-20 px-6 bg-[#F1BF4C]/20 w-full">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[#563A24] text-4xl font-[Cambo] mb-8">
          Vamos Florescer Juntos?
        </h2>
        <p className="text-[#563A24] text-lg font-[Cantarell] mb-10">
          Entre em contato para agendar sua sessão ou tirar dúvidas. Estou aqui
          para ajudar você.
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d226.3721555103179!2d-53.296025666120514!3d-24.79701190667273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1778618225366!5m2!1spt-BR!2sbr"
          title="External Content"
          width="100%"
          height="500px"
          style={{ border: "none" }}
          className="gap-12 mb-12 rounded-lg shadow-lg"
        />

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <a
            href="https://wa.me/5541985245402?text=Olá%2C+tudo+bem%3F+Gostaria+de+agendar+um+horário&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnJc-TfE1Qut1Z_S4yVGWRLi_I_IfvsHmGHwMZRy80gM22viBebRyNJdGB0a8_aem_9sf2GGRpkdl1hD_eRIy2lA&brid=YWdncwEwkbxFEvbJEzKttAY3ZpNG"
            className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-[Cantarell] text-lg shadow-lg hover:bg-green-600 transition-colors"
          >
            <img
              src="./assets/icons/whatsapp.png"
              alt="WhatsApp"
              className="w-6 h-6"
              onError={(e) => (e.target.style.display = "none")}
            />
            Agendar pelo WhatsApp
          </a>

          <div className="flex flex-col text-[#563A24] font-[Cantarell] text-left">
            <span className="flex items-center gap-2">
              <img
                src="./assets/icons/instagram.png"
                alt="Insta"
                className="w-5 h-5"
                onError={(e) => (e.target.style.display = "none")}
              />
              @espaco_girassol_terapias
            </span>
            <span className="flex items-center gap-2 mt-2">
              <img
                src="./assets/icons/location.png"
                alt="Local"
                className="w-5 h-5"
                onError={(e) => (e.target.style.display = "none")}
              />
              Rua Minas Gerais - Centro, Corbélia - PR, 85420-000
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
