import Navbar from "../components/Navbar";

const references = [
  { year: 2020, projects: [
    "Chodník – Metylovice",
    "Přístavba parkoviště SZŠ a VOŠZ v Ostravě",
    "Sběrný dvůr Hukvaldy",
    "Víceúčelové hřiště u ZŠ - Stará Ves nad Ondřejnicí",
    "Odstranění dvou staveb na p.č. 18842 v k.ú. Moravská Ostrava"
  ]},
  { year: 2019, projects: [
    "Chodníky v obci Pustějov - I.etapa",
    "Rekonstrukce ul. Lagnovská – Klimkovice",
    "Splašková kanalizace stoka A15-1 úsek RS1-RS2 – Stará Ves nad Ondřejnicí",
    "Autobusová zastávka MK Karla Svobody – Ostrava – Plesná",
    "Rekonstrukce chodníku na ul. Boleslavova – Ostrava – Mar. Hory"
  ]},
  { year: 2018, projects: [
    "Parkoviště SEVER – Kopřivnice",
    "Cyklostezka – Kopřivnice",
    "Chodník podél ul.Sportovní a J.Matěje k.ú. Brušperk",
    "Řešení předprostoru ZŠ PASKOV, ul. KIRILOVA",
    "Chodníky hřbitov 2.etapa Stará Ves nad Ondřejnicí"
  ]},
  { year: 2017, projects: [
    "Bezbariérové chodníky a přechody pro chodce ve Studénce",
    "Rekonstrukce ulice Foerstrova",
    "Odstranění objektu na p.c.1205 – Brušperk",
    "Chodník - ul.Jožky Matěje - MS Brušperk",
    "Chodník na ul.Proskovická – Krmelín",
    "Chodník na ul.Petřvaldské a na ul.Proskovické – Stará Ves nad Ondřejnicí",
    "Demolice objektu areál Bochemie a.s. - 2.etapa – Bohumín"
  ]},
  { year: 2016, projects: [
    "Kanalizace ul.Františka Hrubína - Havířov",
    "Komunikace 3018 - Janovice",
    "Dětské a sportovní hříště ZŠ Vojtěcha Martínka - Brušperk",
    "Rekonstrukce tramvajové zastávky ul.Palkovského - Ostrava - Vítkovice",
    "Chodníky hřbitov - Stará Ves nad Ondřejnicí"
  ]},
  { year: 2015, projects: [
    "Výstavba parkoviště na ul. Ke Svaté Vodě – Brušperk",
    "Prodloužení chodníku – Fryčovice",
    "Úprava zpevněných ploch před vstupem do ZUŠ v Brušperku",
    "Úpravy plochy v PZ Mošnov",
    "Oprava ulice Novosady Brušperk, k.ú.Brušperk"
  ]},
  { year: 2014, projects: [
    "Podzemní a polopodzemní kontejnery pro tříděný odpad – Ostrava",
    "Oprava části místní komunikace MK 40b – usměrnění dopravy na ul.Na Drahách, k.ú.Brušperk",
    "Kanalizace a ČOV – Krmelín",
    "Rekonstrukce chodníků na ul.U Tří Líp – Brušperk",
    "Demolice objektů v FnSP Zábřeh – Ostrava"
  ]},
  { year: 2013, projects: [
    "Oprava místní komunikace MK113c na parc.č.1947 a 1960/1 v k.ú. Brušperk",
    "SO 307 – Splašková kanalizace areálová – Stoka S2,S2-1 – Havířov",
    "Oprava kompenzátoru horkovodu ul.Mitušova – Ostrava",
    "Cyklostezka Bílovec, místní část Stará Ves – 1.část II.etapa – Bílovec",
    "Úprava ploch kolem ul.Štramberská 2-18, parkovací stání,chodníky – Ostrava"
  ]},
  { year: 2012, projects: [
    "Technická infrastruktura sídelního útvaru Dubina – Ostrava",
    "Výstavba parkoviště u ZŠ v Brušperku",
    "Úprava křižovatky silnice I/58 x III/48615 Stará Ves nad Ondřejnicí",
    "Rekonstrukce NTL plynovodu MS Ostrava , ul.Tavičská – Ostrava",
    "Demolice objektu p.č.1324/5 v k.ú. Zábřeh – VZ – Ostrava"
  ]},
  { year: 2011, projects: [
    "Odstranění protileteckých krytů v Ostravě – Zábřehu",
    "Modernizace stávajícího systému závlahy fotbalového hřiště – Brušperk",
    "Prodloužení STL plynovodu, vodovodu a zhotovení 15 ks přípojek v k.ú. Stará Ves nad Ondřejnicí",
    "Výstavba parkoviště s VO v areálu bývalé FnSP v Ostravě – Zábřehu",
    "Odstranění objektů v areálu bývalé FnSP v Ostravě – Zábřehu"
  ]},
  { year: 2010, projects: [
    "Stará Ves nad Ondřejnicí – odkanalizování obce",
    "Rekonstrukce dětského hřiště v Trnávce",
    "Odstranění stavby – ½ domu ul.Jasínkova 6/1550 – Ostrava",
    "Dlažba GECO TABAK – Ostrava",
    "Chodníky MŠ Brušperk"
  ]},
  { year: 2009, projects: [
    "Chodník Nošovice",
    "MVR-1080096- chodníkové těleso Stará Ves nad Ondřejnicí podél státní",
    "silnice III/4787 a státní silnice IV/48615 včetně odkanalizování",
    "Zpevněné plochy – bytový dům GEMINI na ul.Krmelínská v Ostravě",
    "Veřejná plnící stanice CNG Ostrava – Vítkovice",
    "Stanoviště na separovaný sběr odpadů – Nová Bělá"
  ]},
  { year: 2008, projects: [
    "Rekonstrukce místní komunikace č.15b na ul. K Náměstí – Brušperk",
    "Rekonstrukce zpevněných ploch při smuteční síni v obci Trnávka",
    "Výstavba technické infrastruktury v lokalitě Pastevník – Brušperk",
    "Demolice objektů v k.ú. Svinov – Dubí – 2",
    "Horkovod – Skanska Office building"
  ]},
  { year: 2007, projects: [
    "Autobusová zastávka a chodník směr Košatkae",
    "Kanalizace Bartovice 2. etapa",
    "Generální oprava horkovodu DN 350 ul.Horní, Ostrava - Dubina",
    "Fotbalový stadion Brušperk - Tribuna",
    "Cyklistická stezka Stará Ves nad Ondřejnicí - Petřvald"
  ]},
  { year: 2006, projects: [
    "Demolice bývalých vojenských objektů Mošnov",
    "Úpravy okolí tělocvičny v Brušperku - zpevněná plocha",
    "Rekonstrukce komunikace ul. Malá Strana II. Studénka",
    "Výstavba kanalizace Bolatice - Borová",
    "Kanalizace Bartovice 1. etapa"
  ]},
  { year: 2005, projects: [
    "Odstranění stavby obytné budovy v k. ú. Mar. Hory",
    "Demolice statek Bartovice",
    "Oprava místní komunikace ul. Dolní ve Frenštátě p. R. - parkoviště",
    "Chodník a kanalizace na ul. Krmelínská",
    "Chodník a dětské hřiště Mateřská škola Brušperk"
  ]},
  { year: 2004, projects: [
    "Plynofikace Horní Datyně – V. etapa, zadavatel Město Vratimov",
    "pan Cabada – vodovodní přípojka",
    "Demolice Balcarova statku – Nová Bělá",
    "Demolice kotelny v Žabni",
    "Horkovod Havířov – Podlesí – Dalkia",
    "Chodníkové těleso Stará Ves nad Ondřejnicí",
    "I. a II. etapa Rekonstrukce dlažby na hřbitově v Ostravě – Krásném Poli",
    "Krmelín – chodníky a cyklostezka",
    "pan Mytyzek – zámecká dlažba Krmelín",
    "Nová Bělá – chodníky a kanalizace",
    "Odkanalizování svodu hřbitov – Krásné Pole,",
    "Oprava plynovodu a přípojek Karviná",
    "Oprava plynovodu a přípojek MS Karviná – Szewmont",
    "Rekonstrukce renesančního zámku ve Staré Vsi nad Ondřejnicí – I. etapa",
    "SO 11 plynovod a přípojky Hrabová ZAPA Beton",
    "Záměna NTL na STL plynovod O-Vítkovice ul. Mostárenská",
    "Autobusové zastávky Nová Bělá 2 x.",
    "stavební úpravy místní kom. a přemostění potoku Kulišovka – Stará Ves nad Ondřejnicí"
  ]},
  { year: 2003, projects: [
    "Plynofikace Horní Datyně – V. etapa, zadavatel Město Vratimov",
    "Oprava NTL plynovodu a přípojek MS Studénka ul. Tovární",
    "Oprava vjezdu k RD manželů Popelářových v Krmelíně",
    "Výměna potrubí DN 300, DN 400 – Košatka nad Odrou",
    "Krmelín – stavba chodníku ul. Bělská – silnice I/58",
    "Rekonstrukce části renesančního zámku ve Staré Vsi nad Ondřejnicí, chodníky, příjezdová komunikace, chodníky",
    "Inženýrské sítě a komunikace pro RD, pan Mácha, Stará Ves nad Ondřejnicí",
    "Úprava černé skládky a oprava dlažby na hřbitově, MěO Krásné Pole",
    "Pěší komunikace podél části ul. Krmelínská včetně kanalizace, Ostrava – Nová Bělá"
  ]}
];

const References: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Background Header */}
      <div className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('/background3.jpeg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-white text-center">
          <h1 className="text-4xl font-bold">Reference</h1>
        </div>
      </div>

      {/* Reference List */}
      <div className="container mx-auto px-4 py-16 text-[#393939] md:max-w-3xl">
        {references.map((section) => (
          <div key={section.year} className="mb-12">
            <h2 className="text-3xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">{section.year}</h2>
            <ul className="space-y-2 text-lg">
              {section.projects.map((project, index) => (
                <li key={index} className="bg-gray-200 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
                  {project}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* Footer */}
      <footer className="mt-auto bg-[#393939] text-white py-4 text-center">
        <p>© 2025 Stavební firma. Všechna práva vyhrazena.</p>
      </footer>
    </div>
  );
};

export default References;
