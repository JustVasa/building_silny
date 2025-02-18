import Navbar from "../components/Navbar";

const Services: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Nadpis */}
      <div className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('/background1.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-white text-center">
        <h1 className="text-4xl font-bold drop-shadow-lg">Poskytované služby</h1>

        </div>
      </div>

      {/* Seznam služeb */}
      <div className="container mx-auto px-4 py-16 text-[#393939] md:max-w-3xl">
        <ul className="space-y-4 text-lg">
          {[ 
            "Výkopové práce ing. sítě (výkopy rýh)",
            "Výstavba ing. sítí",
            "Kanalizace",
            "Vodovody",
            "Plynofikace",
            "Veřejné osvětlení",
            "Výstavba a opravy komunikací",
            "Výstavba chodníků, parkovacích ploch (dlažby, zámkové dlažby, asfalt, litý asfalt, ...)",
            "Asfaltování povrchů (rýh po plynofikaci, vodovodech, kanalizaci, ...)",
            "Demolice a odstraňování staveb (strojně)",
            "Recyklace stavebních odpadů drcením (beton, železobeton, cihlová suť, živičné kry)",
            "Třídění materiálu (zemina, štěrk, suť)",
            "Řezání asfaltových a betonových ploch",
            "Terénní úpravy",
            "Zimní údržba (vyhrnování sněhu, posypy komunikací)",
            "Vysekávání travnatých ploch",
            "Zakládání staveb"
          ].map((service, index) => (
            <li key={index} className="bg-gray-300 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
              {service}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <footer className="mt-auto bg-[#393939] text-white py-4 text-center">
        <p>© 2025 Stavební firma. Všechna práva vyhrazena.</p>
      </footer>
    </div>
  );
};

export default Services;
