import Navbar from "./components/Navbar";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Obrázek jako pozadí */}
      <div
        className="relative h-[50vh] sm:h-[40vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpeg')" }}
      >
        {/* Tmavé překrytí */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Obsah na pozadí */}
        <div className="relative h-full flex items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl sm:text-3xl font-bold drop-shadow-lg">
            Vítejte u nás
          </h1>
        </div>
      </div>

      {/* Textový obsah pod pozadím */}
      <div className="bg-white text-gray-900 px-6 sm:px-4 py-12 text-justify max-w-4xl mx-auto leading-relaxed">
        <h2 className="text-2xl sm:text-xl font-bold mb-4 text-center sm:text-left">Vážení obchodní přátelé,</h2>
        <p className="text-lg sm:text-base">
          Stavební firma Jan Slabý stavby s.r.o. úspěšně podniká v mnoha oblastech stavební výroby již řadu let. Z počátku se firma orientovala pouze na výkopové práce spojené s výstavbou inženýrských sítí, zejména vodovody, kanalizace a plynofikace obcí.
        </p>
        <p className="mt-4 text-lg sm:text-base">
          První kroky rozšíření směřovaly k nákupu drtícího zařízení pro recyklace stavebních odpadů, čímž se firmě otevřely nové možnosti v oblasti demolic, odstraňování staveb a následné likvidace stavebních odpadů.
        </p>
        <p className="mt-4 text-lg sm:text-base">
          Firma postupem času rozšířila svou činnost i o další ne ryze stavební činnost, jakou je např. provádění zimní údržby komunikací a chodníků.
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-auto bg-[#393939] text-white py-4 text-center text-sm sm:text-xs">
        <p>© 2025 JAN SLABÝ stavby s.r.o. Všechna práva vyhrazena.</p>
      </footer>
    </div>
  );
};

export default Home;
