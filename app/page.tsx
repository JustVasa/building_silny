import Navbar from "./components/Navbar";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Obrázek jako pozadí */}
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/background.jpeg')",
        }}
      >
        {/* Tmavé překrytí */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Obsah na pozadí */}
        <div className="relative h-full flex items-center justify-center text-white text-center">
          <h1 className="text-6xl font-bold drop-shadow-lg">
          </h1>
        </div>
      </div>

      {/* Textový obsah pod pozadím */}
      <div className="bg-white text-gray-900 p-4 pb-24 pt-24 pb text-justify max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Vážení obchodní přátelé,</h2>
        <p>
          Stavební firma Jan Slabý stavby s.r.o. úspěšně podniká v mnoha oblastech stavební výroby již řadu let. Z počátku se firma orientovala pouze na výkopové práce spojené s výstavbou inženýrských sítí, zejména vodovody, kanalizace a plynofikace obcí. V této oblasti firma dosahovala velmi uspokojivých kvalitativních i kvantitativních výsledků a proto se rozhodla dále rozšiřovat své pole působnosti ve stavební výrobě.
        </p>
        <p className="mt-4">
          První kroky rozšíření směřovaly k nákupu drtícího zařízení pro recyklace stavebních odpadů, čímž se firmě otevřely nové možnosti v oblasti demolic, odstraňování staveb a následné likvidace stavebních odpadů. Z toho vyplynula další investice do třídícího zařízení, které umožňuje firmě recyklované odpady dále třídit a následně využít jako druhotný stavební materiál pro základy staveb popřípadě komunikací a chodníků.
        </p>
        <p className="mt-4">
          Firma postupem času rozšířila svou činnost i o další ne ryze stavební činnost, jakou je např. provádění zimní údržby komunikací a chodníků, vysekávání travnatých ploch a další. Cílem firmy je především maximální uspokojení potřeb zákazníků.
        </p>
      </div>

      {/* Footer */}
      {/* Footer */}
      <footer className="mt-auto bg-[#393939] text-white py-4 text-center">
        <p>© 2025 JAN SLABÝ stavby s.r.o. Všechna práva vyhrazena.</p>
      </footer>
    </div>
  );
};

export default Home;