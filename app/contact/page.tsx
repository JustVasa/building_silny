import Navbar from "../components/Navbar";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Nadpis */}
      <div className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('/background2.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-white text-center">
          <h1 className="text-4xl font-bold drop-shadow-lg">Kontakt</h1>
        </div>
      </div>

      {/* Informace o kontaktu */}
      <div className="container mx-auto px-4 py-16 text-[#393939] md:max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">Sídlo firmy</h2>
        <p className="text-lg text-center font-semibold">JAN SLABÝ stavby s.r.o.</p>
        <p className="text-lg text-center">Fryčovická 196, 739 44 BRUŠPERK</p>
        <p className="text-lg text-center font-semibold mt-4">Telefon: <a href="tel:+420558666442" className="text-[#C02424]">+420 558 666 442</a></p>
        <p className="text-lg text-center font-semibold">E-mail: <a href="mailto:sekretariat@slabyjan.cz" className="text-[#C02424]">sekretariat@slabyjan.cz</a></p>
      </div>

      {/* Identifikační údaje */}
      <div className="container mx-auto px-4 text-[#393939] md:max-w-3xl text-center">
        <h3 className="text-2xl font-bold mb-4">Identifikační údaje společnosti</h3>
        <p className="text-lg">IČO: 09544640</p>
        <p className="text-lg">DIČ: CZ09544640</p>
      </div>

      {/* Mapa */}
      <div className="container mx-auto text-gray-600 px-4 py-16 md:max-w-4xl">
        <h3 className="text-2xl font-bold text-center mb-8">Najdete nás zde</h3>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe 
            className="w-full h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d645.2370355344704!2d18.227380938025256!3d49.692949375156445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713f033b54c1819%3A0x596090dadc7b308!2sJAN%20SLAB%C3%9D%20stavby%20s.r.o.!5e0!3m2!1scs!2scz!4v1738279095528!5m2!1scs!2scz"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto bg-[#393939] text-white py-4 text-center">
        <p>© 2025 JAN SLABÝ stavby s.r.o. Všechna práva vyhrazena.</p>
      </footer>
    </div>
  );
};

export default Contact;
