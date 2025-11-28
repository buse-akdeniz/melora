// Melora - JavaScript Dosyası

// ============================================
// ÜRÜN VERİTABANI
// ============================================
const PRODUCTS_DB = [
  {
    name: "Minimal masa üstü dekor seti",
    price: 549,
    category: "ev-yasam",
    image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=800&q=80",
    description: "Mat seramik detaylar ve sıcak tonlar ile çalışma masanızı sakinleştirin."
  },
  {
    name: "Nötr ton yatak örtüsü",
    price: 899,
    category: "ev-yasam",
    image: "https://images.unsplash.com/photo-1484100356142-db6ab6244067?auto=format&fit=crop&w=800&q=80",
    description: "Katmanlı dokusu ve nefes alan kumaşı ile tüm mevsimler için ideal."
  },
  {
    name: "Seramik kahve fincan takımı",
    price: 429,
    category: "ev-yasam",
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=800&q=80",
    description: "El yapımı görünüm ve minimalist hatlar ile kahve ritüelinizi yükseltin."
  },
  {
    name: "Oversize basic sweatshirt",
    price: 599,
    category: "kadin",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    description: "Rahat kalıp, yumuşak iç yüzey ve şehir stiline uyumlu nötr ton."
  },
  {
    name: "Minimal günlük sırt çantası",
    price: 649,
    category: "ayakkabi-canta",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    description: "Hafif gövde, saklama cepleri ve dolu günler için ergonomik tasarım."
  },
  {
    name: "Aromatik oda & vücut spreyi",
    price: 299,
    category: "kadin",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    description: "Bitki esansları ile ferahlatan, gün boyu hafif kalan imza koku."
  },
  {
    name: "Klasik deri cüzdan",
    price: 449,
    category: "ayakkabi-canta",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=80",
    description: "Minimalist tasarım ve dayanıklı deri ile şık bir aksesuar."
  },
  {
    name: "Minimalist saat",
    price: 799,
    category: "erkek",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    description: "Zamansız tasarım ve hassas işçilik ile şık bir aksesuar."
  },
  {
    name: "Organik bebek oyuncağı seti",
    price: 399,
    category: "anne-cocuk",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
    description: "Doğal malzemelerden üretilmiş, güvenli ve eğitici oyuncak koleksiyonu."
  }
];

function getProductByName(name) {
  return PRODUCTS_DB.find(p => p.name === name);
}

// ============================================
// TÜRKİYE İL VE İLÇE VERİLERİ
// ============================================
const turkiyeIller = {
  "Adana": ["Aladağ", "Ceyhan", "Çukurova", "Feke", "İmamoğlu", "Karaisalı", "Karataş", "Kozan", "Pozantı", "Saimbeyli", "Seyhan", "Tufanbeyli", "Yumurtalık", "Yüreğir"],
  "Adıyaman": ["Besni", "Çelikhan", "Gerger", "Gölbaşı", "Kahta", "Merkez", "Samsat", "Sincik", "Tut"],
  "Afyonkarahisar": ["Başmakçı", "Bayat", "Bolvadin", "Çay", "Çobanlar", "Dazkırı", "Dinar", "Emirdağ", "Evciler", "Hocalar", "İhsaniye", "İscehisar", "Kızılören", "Merkez", "Sandıklı", "Sinanpaşa", "Sultandağı", "Şuhut"],
  "Ağrı": ["Diyadin", "Doğubayazıt", "Eleşkirt", "Hamur", "Merkez", "Patnos", "Taşlıçay", "Tutak"],
  "Aksaray": ["Ağaçören", "Eskil", "Gülağaç", "Güzelyurt", "Merkez", "Ortaköy", "Sarıyahşi"],
  "Amasya": ["Göynücek", "Gümüşhacıköy", "Hamamözü", "Merkez", "Merzifon", "Suluova", "Taşova"],
  "Ankara": ["Akyurt", "Altındağ", "Ayaş", "Bala", "Beypazarı", "Çamlıdere", "Çankaya", "Çubuk", "Elmadağ", "Güdül", "Haymana", "Kalecik", "Kızılcahamam", "Nallıhan", "Polatlı", "Şereflikoçhisar", "Yenimahalle", "Gölbaşı", "Keçiören", "Mamak", "Sincan", "Kazan", "Akyurt", "Etimesgut", "Evren", "Pursaklar"],
  "Antalya": ["Akseki", "Alanya", "Demre", "Elmalı", "Finike", "Gazipaşa", "Gündoğmuş", "İbradı", "Kaş", "Kemer", "Korkuteli", "Kumluca", "Manavgat", "Merkez", "Muratpaşa", "Serik"],
  "Ardahan": ["Çıldır", "Damal", "Göle", "Hanak", "Merkez", "Posof"],
  "Artvin": ["Ardanuç", "Arhavi", "Borçka", "Hopa", "Merkez", "Murgul", "Şavşat", "Yusufeli"],
  "Aydın": ["Bozdoğan", "Buharkent", "Çine", "Didim", "Efeler", "Germencik", "İncirliova", "Karacasu", "Karpuzlu", "Koçarlı", "Köşk", "Kuşadası", "Kuyucak", "Nazilli", "Söke", "Sultanhisar", "Yenipazar"],
  "Balıkesir": ["Altıeylül", "Ayvalık", "Balya", "Bandırma", "Bigadiç", "Burhaniye", "Dursunbey", "Edremit", "Erdek", "Gömeç", "Gönen", "Havran", "İvrindi", "Karesi", "Kepsut", "Manyas", "Marmara", "Savaştepe", "Sındırgı", "Susurluk"],
  "Bartın": ["Amasra", "Kurucaşile", "Merkez", "Ulus"],
  "Batman": ["Beşiri", "Gercüş", "Hasankeyf", "Kozluk", "Merkez", "Sason"],
  "Bayburt": ["Aydıntepe", "Demirözü", "Merkez"],
  "Bilecik": ["Bozüyük", "Gölpazarı", "İnhisar", "Merkez", "Osmaneli", "Pazaryeri", "Söğüt", "Yenipazar"],
  "Bingöl": ["Adaklı", "Genç", "Karlıova", "Kiğı", "Merkez", "Solhan", "Yayladere", "Yedisu"],
  "Bitlis": ["Adilcevaz", "Ahlat", "Güroymak", "Hizan", "Merkez", "Mutki", "Tatvan"],
  "Bolu": ["Dörtdivan", "Gerede", "Göynük", "Kıbrıscık", "Mengen", "Merkez", "Mudurnu", "Seben", "Yeniçağa"],
  "Burdur": ["Ağlasun", "Altınyayla", "Bucak", "Çavdır", "Çeltikçi", "Gölhisar", "Karamanlı", "Kemer", "Merkez", "Tefenni", "Yeşilova"],
  "Bursa": ["Büyükorhan", "Gemlik", "Gürsu", "Harmancık", "İnegöl", "İznik", "Karacabey", "Keles", "Kestel", "Mudanya", "Mustafakemalpaşa", "Nilüfer", "Orhaneli", "Orhangazi", "Osmangazi", "Yenişehir", "Yıldırım"],
  "Çanakkale": ["Ayvacık", "Bayramiç", "Biga", "Bozcaada", "Çan", "Eceabat", "Ezine", "Gelibolu", "Gökçeada", "Lapseki", "Merkez", "Yenice"],
  "Çankırı": ["Atkaracalar", "Bayramören", "Çerkeş", "Eldivan", "Ilgaz", "Kızılırmak", "Korgun", "Kurşunlu", "Merkez", "Orta", "Şabanözü", "Yapraklı"],
  "Çorum": ["Alaca", "Bayat", "Boğazkale", "Dodurga", "İskilip", "Kargı", "Laçin", "Mecitözü", "Merkez", "Oğuzlar", "Ortaköy", "Osmancık", "Sungurlu", "Uğurludağ"],
  "Denizli": ["Acıpayam", "Babadağ", "Baklan", "Bekilli", "Beyağaç", "Bozkurt", "Buldan", "Çal", "Çameli", "Çardak", "Çivril", "Güney", "Honaz", "Kale", "Merkezefendi", "Pamukkale", "Sarayköy", "Serinhisar", "Tavas"],
  "Diyarbakır": ["Bağlar", "Bismil", "Çermik", "Çınar", "Çüngüş", "Dicle", "Eğil", "Ergani", "Hani", "Hazro", "Kayapınar", "Kocaköy", "Kulp", "Lice", "Silvan", "Sur", "Yenişehir"],
  "Düzce": ["Akçakoca", "Cumayeri", "Çilimli", "Gölyaka", "Gümüşova", "Kaynaşlı", "Merkez", "Yığılca"],
  "Edirne": ["Enez", "Havsa", "İpsala", "Keşan", "Lalapaşa", "Meriç", "Merkez", "Süloğlu", "Uzunköprü"],
  "Elazığ": ["Ağın", "Alacakaya", "Arıcak", "Baskil", "Karakoçan", "Keban", "Kovancılar", "Maden", "Merkez", "Palu", "Sivrice"],
  "Erzincan": ["Çayırlı", "İliç", "Kemah", "Kemaliye", "Merkez", "Otlukbeli", "Refahiye", "Tercan", "Üzümlü"],
  "Erzurum": ["Aşkale", "Aziziye", "Çat", "Hınıs", "Horasan", "İspir", "Karaçoban", "Karayazı", "Köprüköy", "Narman", "Oltu", "Olur", "Palandöken", "Pasinler", "Pazaryolu", "Şenkaya", "Tekman", "Tortum", "Uzundere", "Yakutiye"],
  "Eskişehir": ["Alpu", "Beylikova", "Çifteler", "Günyüzü", "Han", "İnönü", "Mahmudiye", "Mihalgazi", "Mihalıççık", "Odunpazarı", "Sarıcakaya", "Seyitgazi", "Sivrihisar", "Tepebaşı"],
  "Gaziantep": ["Araban", "İslahiye", "Karkamış", "Nizip", "Nurdağı", "Oğuzeli", "Şahinbey", "Şehitkamil", "Yavuzeli"],
  "Giresun": ["Alucra", "Bulancak", "Çamoluk", "Çanakçı", "Dereli", "Doğankent", "Espiye", "Eynesil", "Görele", "Güce", "Keşap", "Merkez", "Piraziz", "Şebinkarahisar", "Tirebolu", "Yağlıdere"],
  "Gümüşhane": ["Kelkit", "Köse", "Kürtün", "Merkez", "Şiran", "Torul"],
  "Hakkari": ["Çukurca", "Merkez", "Şemdinli", "Yüksekova"],
  "Hatay": ["Altınözü", "Antakya", "Arsuz", "Belen", "Defne", "Dörtyol", "Erzin", "Hassa", "İskenderun", "Kırıkhan", "Kumlu", "Payas", "Reyhanlı", "Samandağ", "Yayladağı"],
  "Iğdır": ["Aralık", "Karakoyunlu", "Merkez", "Tuzluca"],
  "Isparta": ["Aksu", "Atabey", "Eğirdir", "Gelendost", "Gönen", "Keçiborlu", "Merkez", "Senirkent", "Sütçüler", "Şarkikaraağaç", "Uluborlu", "Yalvaç", "Yenişarbademli"],
  "İstanbul": ["Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü", "Beyoğlu", "Büyükçekmece", "Çatalca", "Çekmeköy", "Esenler", "Esenyurt", "Eyüpsultan", "Fatih", "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane", "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer", "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Şişli", "Tuzla", "Ümraniye", "Üsküdar", "Zeytinburnu"],
  "İzmir": ["Aliağa", "Bayındır", "Bayraklı", "Bergama", "Beydağ", "Bornova", "Buca", "Çeşme", "Çiğli", "Dikili", "Foça", "Gaziemir", "Güzelbahçe", "Karabağlar", "Karaburun", "Karşıyaka", "Kemalpaşa", "Kınık", "Kiraz", "Konak", "Menderes", "Menemen", "Narlıdere", "Ödemiş", "Seferihisar", "Selçuk", "Tire", "Torbalı", "Urla"],
  "Kahramanmaraş": ["Afşin", "Andırın", "Çağlayancerit", "Dulkadiroğlu", "Ekinözü", "Elbistan", "Göksun", "Nurhak", "Onikişubat", "Pazarcık", "Türkoğlu"],
  "Karabük": ["Eflani", "Eskipazar", "Merkez", "Ovacık", "Safranbolu", "Yenice"],
  "Karaman": ["Ayrancı", "Başyayla", "Ermenek", "Kazımkarabekir", "Merkez", "Sarıveliler"],
  "Kars": ["Akyaka", "Arpaçay", "Digor", "Kağızman", "Merkez", "Sarıkamış", "Selim", "Susuz"],
  "Kastamonu": ["Abana", "Ağlı", "Araç", "Azdavay", "Bozkurt", "Cide", "Çatalzeytin", "Daday", "Devrekani", "Doğanyurt", "Hanönü", "İhsangazi", "İnebolu", "Küre", "Merkez", "Pınarbaşı", "Seydiler", "Şenpazar", "Taşköprü", "Tosya"],
  "Kayseri": ["Akkışla", "Bünyan", "Develi", "Felahiye", "Hacılar", "İncesu", "Kocasinan", "Melikgazi", "Özvatan", "Pınarbaşı", "Sarıoğlan", "Sarız", "Talas", "Tomarza", "Yahyalı", "Yeşilhisar"],
  "Kırıkkale": ["Bahşılı", "Balışeyh", "Çelebi", "Delice", "Karakeçili", "Keskin", "Merkez", "Sulakyurt", "Yahşihan"],
  "Kırklareli": ["Babaeski", "Demirköy", "Kofçaz", "Lüleburgaz", "Merkez", "Pehlivanköy", "Pınarhisar", "Vize"],
  "Kırşehir": ["Akçakent", "Akpınar", "Boztepe", "Çiçekdağı", "Kaman", "Merkez", "Mucur"],
  "Kilis": ["Elbeyli", "Merkez", "Musabeyli", "Polateli"],
  "Kocaeli": ["Başiskele", "Çayırova", "Darıca", "Derince", "Dilovası", "Gebze", "Gölcük", "İzmit", "Kandıra", "Karamürsel", "Kartepe", "Körfez"],
  "Konya": ["Ahırlı", "Akören", "Akşehir", "Altınekin", "Beyşehir", "Bozkır", "Cihanbeyli", "Çeltik", "Çumra", "Derbent", "Derebucak", "Doğanhisar", "Emirgazi", "Ereğli", "Güneysinir", "Hadim", "Halkapınar", "Hüyük", "Ilgın", "Kadınhanı", "Karapınar", "Karatay", "Kulu", "Meram", "Sarayönü", "Selçuklu", "Seydişehir", "Taşkent", "Tuzlukçu", "Yalıhüyük", "Yunak"],
  "Kütahya": ["Altıntaş", "Aslanapa", "Çavdarhisar", "Domaniç", "Dumlupınar", "Emet", "Gediz", "Hisarcık", "Merkez", "Pazarlar", "Simav", "Şaphane", "Tavşanlı"],
  "Malatya": ["Akçadağ", "Arapgir", "Arguvan", "Battalgazi", "Darende", "Doğanşehir", "Doğanyol", "Hekimhan", "Kale", "Kuluncak", "Pütürge", "Yazıhan", "Yeşilyurt"],
  "Manisa": ["Ahmetli", "Akhisar", "Alaşehir", "Demirci", "Gölmarmara", "Gördes", "Kırkağaç", "Köprübaşı", "Kula", "Salihli", "Sarıgöl", "Saruhanlı", "Selendi", "Soma", "Şehzadeler", "Turgutlu", "Yunusemre"],
  "Mardin": ["Artuklu", "Dargeçit", "Derik", "Kızıltepe", "Mazıdağı", "Midyat", "Nusaybin", "Ömerli", "Savur", "Yeşilli"],
  "Mersin": ["Akdeniz", "Anamur", "Aydıncık", "Bozyazı", "Çamlıyayla", "Erdemli", "Gülnar", "Mezitli", "Mut", "Silifke", "Tarsus", "Toroslar", "Yenişehir"],
  "Muğla": ["Bodrum", "Dalaman", "Datça", "Fethiye", "Kavaklıdere", "Köyceğiz", "Marmaris", "Menteşe", "Milas", "Ortaca", "Seydikemer", "Ula", "Yatağan"],
  "Muş": ["Bulanık", "Hasköy", "Korkut", "Malazgirt", "Merkez", "Varto"],
  "Nevşehir": ["Acıgöl", "Avanos", "Derinkuyu", "Gülşehir", "Hacıbektaş", "Kozaklı", "Merkez", "Ürgüp"],
  "Niğde": ["Altunhisar", "Bor", "Çamardı", "Çiftlik", "Merkez", "Ulukışla"],
  "Ordu": ["Akkuş", "Altınordu", "Aybastı", "Çamaş", "Çatalpınar", "Çaybaşı", "Fatsa", "Gölköy", "Gülyalı", "Gürgentepe", "İkizce", "Kabadüz", "Kabataş", "Korgan", "Kumru", "Mesudiye", "Perşembe", "Ulubey", "Ünye"],
  "Osmaniye": ["Bahçe", "Düziçi", "Hasanbeyli", "Kadirli", "Merkez", "Sumbas", "Toprakkale"],
  "Rize": ["Ardeşen", "Çamlıhemşin", "Çayeli", "Derepazarı", "Fındıklı", "Güneysu", "Hemşin", "İkizdere", "İyidere", "Kalkandere", "Merkez", "Pazar"],
  "Sakarya": ["Adapazarı", "Akyazı", "Arifiye", "Erenler", "Ferizli", "Geyve", "Hendek", "Karapürçek", "Karasu", "Kaynarca", "Kocaali", "Pamukova", "Sapanca", "Serdivan", "Söğütlü", "Taraklı"],
  "Samsun": ["Alaçam", "Asarcık", "Atakum", "Ayvacık", "Bafra", "Canik", "Çarşamba", "Havza", "İlkadım", "Kavak", "Ladik", "Ondokuzmayıs", "Salıpazarı", "Tekkeköy", "Terme", "Vezirköprü", "Yakakent"],
  "Şanlıurfa": ["Akçakale", "Birecik", "Bozova", "Ceylanpınar", "Eyyübiye", "Halfeti", "Haliliye", "Harran", "Hilvan", "Karaköprü", "Siverek", "Suruç", "Viranşehir"],
  "Siirt": ["Baykan", "Eruh", "Kurtalan", "Merkez", "Pervari", "Şirvan", "Tillo"],
  "Sinop": ["Ayancık", "Boyabat", "Dikmen", "Durağan", "Erfelek", "Gerze", "Merkez", "Saraydüzü", "Türkeli"],
  "Sivas": ["Akıncılar", "Altınyayla", "Divriği", "Doğanşar", "Gemerek", "Gölova", "Gürün", "Hafik", "İmranlı", "Kangal", "Koyulhisar", "Merkez", "Şarkışla", "Suşehri", "Ulaş", "Yıldızeli", "Zara"],
  "Tekirdağ": ["Çerkezköy", "Çorlu", "Ergene", "Hayrabolu", "Kapaklı", "Malkara", "Marmaraereğlisi", "Muratlı", "Saray", "Süleymanpaşa", "Şarköy"],
  "Tokat": ["Almus", "Artova", "Başçiftlik", "Erbaa", "Niksar", "Pazar", "Reşadiye", "Sulusaray", "Turhal", "Yeşilyurt", "Zile"],
  "Trabzon": ["Akçaabat", "Araklı", "Arsin", "Beşikdüzü", "Çarşıbaşı", "Çaykara", "Dernekpazarı", "Düzköy", "Hayrat", "Köprübaşı", "Maçka", "Of", "Ortahisar", "Şalpazarı", "Sürmene", "Tonya", "Vakfıkebir", "Yomra"],
  "Tunceli": ["Çemişgezek", "Hozat", "Mazgirt", "Merkez", "Nazımiye", "Ovacık", "Pertek", "Pülümür"],
  "Uşak": ["Banaz", "Eşme", "Karahallı", "Merkez", "Sivaslı", "Ulubey"],
  "Van": ["Bahçesaray", "Başkale", "Çaldıran", "Çatak", "Edremit", "Erciş", "Gevaş", "Gürpınar", "İpekyolu", "Muradiye", "Özalp", "Saray", "Tuşba"],
  "Yalova": ["Altınova", "Armutlu", "Çınarcık", "Çiftlikköy", "Merkez", "Termal"],
  "Yozgat": ["Akdağmadeni", "Aydıncık", "Boğazlıyan", "Çandır", "Çayıralan", "Çekerek", "Kadışehri", "Merkez", "Saraykent", "Sarıkaya", "Sorgun", "Şefaatli", "Yerköy", "Yenifakılı"],
  "Zonguldak": ["Alaplı", "Çaycuma", "Devrek", "Gökçebey", "Kilimli", "Kozlu", "Merkez"]
};

// ============================================
// İL VE İLÇE YÖNETİMİ
// ============================================
function initCityDistrictSelects() {
  // Tüm il select'lerini bul
  const citySelects = document.querySelectorAll('select[id*="city"], select[id*="il"]');
  
  citySelects.forEach(citySelect => {
    // İl select'ini doldur
    populateCitySelect(citySelect);
    
    // İl değiştiğinde ilçe select'ini güncelle
    citySelect.addEventListener('change', function() {
      const districtSelect = findDistrictSelect(citySelect);
      if (districtSelect) {
        populateDistrictSelect(districtSelect, this.value);
      }
    });
    
    // Sayfa yüklendiğinde varsayılan ilçeleri yükle
    if (citySelect.value) {
      const districtSelect = findDistrictSelect(citySelect);
      if (districtSelect) {
        populateDistrictSelect(districtSelect, citySelect.value);
      }
    }
  });
}

function populateCitySelect(selectElement) {
  // İlk seçeneği ekle
  const firstOption = document.createElement('option');
  firstOption.value = '';
  firstOption.textContent = 'İl Seçiniz';
  selectElement.appendChild(firstOption);
  
  // Tüm illeri alfabetik sırayla ekle
  const cities = Object.keys(turkiyeIller).sort();
  cities.forEach(city => {
    const option = document.createElement('option');
    option.value = city;
    option.textContent = city;
    selectElement.appendChild(option);
  });
}

function findDistrictSelect(citySelect) {
  // İl select'inin ID'sine göre ilçe select'ini bul
  const cityId = citySelect.id;
  let districtId = '';
  
  if (cityId.includes('delivery-city')) {
    districtId = 'delivery-district';
  } else if (cityId.includes('address-city')) {
    districtId = 'address-district';
  } else if (cityId.includes('billing-city')) {
    districtId = 'billing-district';
  } else {
    // Genel arama
    const form = citySelect.closest('form');
    if (form) {
      const districtSelect = form.querySelector('select[id*="district"], select[id*="ilçe"]');
      if (districtSelect) return districtSelect;
    }
  }
  
  return document.getElementById(districtId);
}

function populateDistrictSelect(selectElement, cityName) {
  // Mevcut seçenekleri temizle
  selectElement.innerHTML = '';
  
  // İlk seçeneği ekle
  const firstOption = document.createElement('option');
  firstOption.value = '';
  firstOption.textContent = 'İlçe Seçiniz';
  selectElement.appendChild(firstOption);
  
  // Seçilen ile ait ilçeleri ekle
  if (cityName && turkiyeIller[cityName]) {
    const districts = turkiyeIller[cityName].sort();
    districts.forEach(district => {
      const option = document.createElement('option');
      option.value = district;
      option.textContent = district;
      selectElement.appendChild(option);
    });
  }
}

// ============================================
// DARK MODE YÖNETİMİ
// ============================================
function initDarkMode() {
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("meloraTheme") || "light";
  
  // Tema'yı uygula
  document.documentElement.setAttribute("data-theme", savedTheme);
  
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("meloraTheme", newTheme);
    });
  }
}

// ============================================
// FAVORİLER YÖNETİMİ
// ============================================
function getFavorites() {
  return JSON.parse(localStorage.getItem("meloraFavorites") || "[]");
}

function saveFavorites(favorites) {
  localStorage.setItem("meloraFavorites", JSON.stringify(favorites));
}

function addToFavorites(productName) {
  const favorites = getFavorites();
  if (!favorites.includes(productName)) {
    favorites.push(productName);
    saveFavorites(favorites);
    updateFavoritesCount();
    return true;
  }
  return false;
}

function removeFromFavorites(productName) {
  const favorites = getFavorites();
  const index = favorites.indexOf(productName);
  if (index > -1) {
    favorites.splice(index, 1);
    saveFavorites(favorites);
    updateFavoritesCount();
    return true;
  }
  return false;
}

function isFavorite(productName) {
  return getFavorites().includes(productName);
}

function updateFavoritesCount() {
  const countEl = document.querySelector("[data-favorites-count]");
  if (countEl) {
    const count = getFavorites().length;
    countEl.textContent = count;
    if (count > 0) {
      countEl.style.display = "inline-flex";
    } else {
      countEl.style.display = "none";
    }
  }
}

function initFavoritesButtons() {
  const favoriteButtons = document.querySelectorAll(".product-cta.ghost[aria-label*='Favori']");
  favoriteButtons.forEach((btn) => {
    const productCard = btn.closest(".product-card");
    const productName = productCard?.querySelector("h3")?.textContent || 
                       productCard?.querySelector("h2")?.textContent || "";
    
    if (isFavorite(productName)) {
      btn.textContent = "♥";
      btn.style.color = "#dc2626";
    }
    
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      if (isFavorite(productName)) {
        removeFromFavorites(productName);
        btn.textContent = "♡";
        btn.style.color = "";
      } else {
        addToFavorites(productName);
        btn.textContent = "♥";
        btn.style.color = "#dc2626";
      }
      
      // Animasyon efekti
      btn.style.transform = "scale(1.2)";
      setTimeout(() => {
        btn.style.transform = "scale(1)";
      }, 200);
      
      // Favoriler panelini güncelle
      renderFavorites();
    });
  });
}

// Favoriler panelini başlat (sadece panel varsa)
function initFavoritesPanel() {
  const favoritesToggle = document.getElementById("favorites-toggle");
  const favoritesClose = document.getElementById("favorites-close");
  const favoritesPanel = document.getElementById("favorites-panel");
  const favoritesOverlay = document.getElementById("favorites-overlay");
  
  // Favoriler butonunu favorites.html sayfasına yönlendir (favorites.html sayfasında değilse)
  if (window.location.pathname.split("/").pop() !== "favorites.html") {
    favoritesToggle?.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "favorites.html";
    });
  }
  
  if (!favoritesPanel) return;
  
  favoritesClose?.addEventListener("click", () => {
    favoritesPanel.classList.remove("show");
    favoritesOverlay?.classList.remove("show");
  });
  
  favoritesOverlay?.addEventListener("click", () => {
    favoritesPanel.classList.remove("show");
    favoritesOverlay.classList.remove("show");
  });
  
  // İlk render
  renderFavorites();
}

// Favorileri listele
function renderFavorites() {
  const favoritesList = document.querySelector("[data-favorites-list]");
  const favoritesEmpty = document.querySelector("[data-favorites-empty]");
  
  if (!favoritesList) return;
  
  const favorites = getFavorites();
  const currency = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  });
  
  if (favorites.length === 0) {
    favoritesList.innerHTML = "";
    if (favoritesEmpty) favoritesEmpty.style.display = "block";
    return;
  }
  
  if (favoritesEmpty) favoritesEmpty.style.display = "none";
  
  favoritesList.innerHTML = favorites.map(productName => {
    const product = getProductByName(productName);
    if (!product) return "";
    
    return `
      <li class="favorite-item">
        <div class="favorite-item-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
        </div>
        <div class="favorite-item-info">
          <h4>${product.name}</h4>
          <p class="favorite-item-price">${currency.format(product.price)}</p>
        </div>
        <div class="favorite-item-actions">
          <button class="favorite-remove-btn" type="button" aria-label="Favorilerden çıkar" data-remove-favorite="${productName}">✕</button>
          <button class="favorite-add-cart-btn" type="button" data-cart-button data-product="${product.name}" data-price="${product.price}">Sepete Ekle</button>
        </div>
      </li>
    `;
  }).join("");
  
  // Favorilerden çıkarma butonları
  favoritesList.querySelectorAll("[data-remove-favorite]").forEach(btn => {
    btn.addEventListener("click", () => {
      const productName = btn.dataset.removeFavorite;
      removeFromFavorites(productName);
      renderFavorites();
      updateFavoritesCount();
      
      // Ürün sayfasındaki butonu da güncelle
      const productBtn = document.querySelector(`[data-product="${productName}"]`)?.closest(".product-card")?.querySelector(".product-cta.ghost[aria-label*='Favori']");
      if (productBtn) {
        productBtn.textContent = "♡";
        productBtn.style.color = "";
      }
    });
  });
  
  // Sepete ekleme butonları
  favoritesList.querySelectorAll("[data-cart-button]").forEach(btn => {
    btn.addEventListener("click", () => {
      const productName = btn.dataset.product;
      const price = parseFloat(btn.dataset.price);
      addToCart(productName, price);
    });
  });
}

// ============================================
// ARAMA FONKSİYONU
// ============================================
function initSearch() {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.querySelector(".search-submit-btn");
  
  function performSearch() {
    const query = searchInput?.value.toLowerCase().trim() || "";
    
    if (window.location.pathname.includes("products.html") || 
        window.location.pathname.endsWith("products.html")) {
      // Products sayfasında filtreleme
      const productCards = document.querySelectorAll(".product-card.pro");
      let visibleCount = 0;
      
      productCards.forEach((card) => {
        const productName = card.querySelector("h3")?.textContent.toLowerCase() || "";
        const productDesc = card.querySelector(".product-meta p")?.textContent.toLowerCase() || "";
        const productCategory = card.querySelector(".product-category")?.textContent.toLowerCase() || "";
        
        if (query === "" || 
            productName.includes(query) || 
            productDesc.includes(query) || 
            productCategory.includes(query)) {
          card.style.display = "block";
          visibleCount++;
        } else {
          card.style.display = "none";
        }
      });
      
      // Sonuç mesajı
      if (query && visibleCount === 0) {
        const existingMessage = document.querySelector(".search-no-results");
        if (!existingMessage) {
          const message = document.createElement("div");
          message.className = "search-no-results";
          message.style.cssText = "text-align: center; padding: 40px; color: #6b7280;";
          message.textContent = `"${query}" için sonuç bulunamadı.`;
          const productsGrid = document.querySelector(".products-grid.pro");
          if (productsGrid) {
            productsGrid.insertAdjacentElement("afterend", message);
          }
        }
      } else {
        const existingMessage = document.querySelector(".search-no-results");
        if (existingMessage) {
          existingMessage.remove();
        }
      }
    } else {
      // Ana sayfada arama yapılırsa products sayfasına yönlendir
      if (query) {
        window.location.href = `products.html?search=${encodeURIComponent(query)}`;
      }
    }
  }
  
  searchInput?.addEventListener("input", performSearch);
  searchInput?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      performSearch();
    }
  });
  
  searchButton?.addEventListener("click", performSearch);
  
  // URL'den arama parametresini kontrol et
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get("search");
  if (searchParam && searchInput) {
    searchInput.value = searchParam;
    performSearch();
  }
}

// Ortak fonksiyonlar
function updateYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// Sepet sayacını güncelle
function updateCartCount() {
  const cartCountEl = document.querySelector("[data-cart-count]");
  if (cartCountEl) {
    const cartData = JSON.parse(localStorage.getItem("meloraCart") || "[]");
    const totalCount = cartData.reduce((sum, item) => sum + (item.quantity || 1), 0);
    cartCountEl.textContent = totalCount;
    if (totalCount > 0) {
      cartCountEl.style.display = "inline-flex";
    } else {
      cartCountEl.style.display = "none";
    }
  }
}

// Auth kontrolü ve güncelleme
function checkAuthStatus() {
  const isLoggedIn = localStorage.getItem("meloraLoggedIn") === "true";
  const userData = JSON.parse(localStorage.getItem("meloraUser") || "{}");
  const authButtons = document.getElementById("auth-buttons");
  
  if (isLoggedIn && userData.email && authButtons) {
    authButtons.innerHTML = `
      <a href="account.html" class="auth-btn primary">Hesabım</a>
      <button class="auth-btn ghost" id="logout-btn">Çıkış Yap</button>
    `;
    const logoutBtn = document.getElementById("logout-btn");
    logoutBtn?.addEventListener("click", () => {
      if (confirm("Çıkış yapmak istediğinize emin misiniz?")) {
        localStorage.removeItem("meloraLoggedIn");
        localStorage.removeItem("meloraUser");
        localStorage.removeItem("meloraCart");
        localStorage.removeItem("meloraAddress");
        window.location.reload();
      }
    });
  }
}

// ============================================
// SEPET PANELİ YÖNETİMİ (Ortak Fonksiyon)
// ============================================
function initCartPanel() {
  const cartCountEl = document.querySelector("[data-cart-count]");
  const cartToggle = document.getElementById("cart-toggle");
  const cartClose = document.getElementById("cart-close");
  const cartPanel = document.getElementById("cart-panel");
  const cartOverlay = document.getElementById("cart-overlay");
  const cartToast = document.getElementById("cart-toast");
  const continueShoppingBtn = document.getElementById("continue-shopping");
  const goToCartBtn = document.getElementById("go-to-cart");
  const toastText = document.querySelector("[data-toast-text]");
  const toastCount = document.querySelector("[data-toast-count]");
  const toastPrice = document.querySelector("[data-toast-price]");
  
  // Sepet toast'ını göster
  function showCartToast() {
    if (!cartToast) return;
    
    const cartData = JSON.parse(localStorage.getItem("meloraCart") || "[]");
    const totalCount = cartData.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const total = cartData.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    
    const currency = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      maximumFractionDigits: 0,
    });
    
    if (toastText) {
      toastText.innerHTML = `Sepetinizde <span data-toast-count>${totalCount}</span> ürün var`;
    }
    if (toastCount) {
      toastCount.textContent = totalCount;
    }
    if (toastPrice) {
      toastPrice.textContent = `Toplam: ${currency.format(total)}`;
    }
    
    cartToast.classList.add("show");
  }
  
  // Sepet toast'ını gizle
  function hideCartToast() {
    if (cartToast) {
      cartToast.classList.remove("show");
    }
  }
  
  // Sepet butonuna tıklandığında toast göster (sadece cart.html sayfasında değilse)
  if (window.location.pathname.split("/").pop() !== "cart.html") {
    cartToggle?.addEventListener("click", (e) => {
      e.preventDefault();
      showCartToast();
    });
  }
  
  // Alışverişe Devam butonu
  continueShoppingBtn?.addEventListener("click", () => {
    hideCartToast();
  });
  
  // Sepete Git butonu
  goToCartBtn?.addEventListener("click", () => {
    hideCartToast();
    window.location.href = "cart.html";
  });
  
  // Toast dışına tıklandığında kapat
  cartToast?.addEventListener("click", (e) => {
    if (e.target === cartToast) {
      hideCartToast();
    }
  });
  
  const cartList = document.querySelector("[data-cart-list]");
  const cartEmpty = document.querySelector("[data-cart-empty]");
  const cartTotal = document.querySelector("[data-cart-total]");
  const cartShippingEl = document.querySelector("[data-cart-shipping]");
  const cartGrandTotalEl = document.querySelector("[data-cart-grandtotal]");
  const cartNameEl = document.querySelector("[data-cart-name]");
  const cartPhoneEl = document.querySelector("[data-cart-phone]");
  const cartStreetEl = document.querySelector("[data-cart-street]");
  const editAddressBtn = document.getElementById("edit-address");
  const checkoutBtn = document.querySelector(".checkout-btn");
  
  if (!cartPanel) return; // Sepet paneli yoksa çık
  
  const defaultAddress = {
    name: "Ad Soyad",
    phone: "+90 --- --- -- --",
    street: "Teslimat adresi henüz eklenmedi.",
  };
  
  // Sepet verilerini localStorage'dan yükle
  let cartItems = [];
  let customerAddress = { ...defaultAddress };
  
  // Kaydedilmiş sepet ve adres varsa yükle
  const savedCart = JSON.parse(localStorage.getItem("meloraCart") || "[]");
  if (Array.isArray(savedCart) && savedCart.length > 0) {
    cartItems = savedCart;
  }
  
  const savedAddress = JSON.parse(localStorage.getItem("meloraAddress") || "null");
  if (savedAddress && typeof savedAddress === "object") {
    customerAddress = { ...defaultAddress, ...savedAddress };
  }
  
  const currency = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  });

  function syncAddress() {
    if (cartNameEl) cartNameEl.textContent = customerAddress.name;
    if (cartPhoneEl) {
      const phoneSpan = cartPhoneEl.querySelector('span');
      if (phoneSpan) {
        phoneSpan.textContent = customerAddress.phone;
      } else {
        cartPhoneEl.textContent = customerAddress.phone;
      }
    }
    if (cartStreetEl) cartStreetEl.textContent = customerAddress.street;
  }
  
  function saveCartState() {
    localStorage.setItem("meloraCart", JSON.stringify(cartItems));
    localStorage.setItem("meloraAddress", JSON.stringify(customerAddress));
  }
  
  syncAddress();

  function openCart(fullView = false) {
    if (!cartPanel) return;
    cartPanel.classList.add("show");
    if (fullView) {
      document.body.classList.add("cart-fullscreen");
      if (cartOverlay) cartOverlay.classList.remove("show");
    } else {
      document.body.classList.remove("cart-fullscreen");
      if (cartOverlay) cartOverlay.classList.add("show");
    }
  }

  function closeCart() {
    if (!cartPanel) return;
    cartPanel.classList.remove("show");
    if (cartOverlay) cartOverlay.classList.remove("show");
    document.body.classList.remove("cart-fullscreen");
  }

  function getCartCount() {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  function renderCart() {
    // Sepet verilerini localStorage'dan yeniden yükle
    cartItems = JSON.parse(localStorage.getItem("meloraCart") || "[]");
    
    if (!cartList || !cartEmpty || !cartTotal) return;
    if (cartCountEl) cartCountEl.textContent = getCartCount();
    cartList.innerHTML = "";
    if (cartItems.length === 0) {
      cartEmpty.style.display = "block";
      cartTotal.textContent = currency.format(0);
      if (cartShippingEl) cartShippingEl.textContent = currency.format(0);
      if (cartGrandTotalEl) cartGrandTotalEl.textContent = currency.format(0);
      return;
    }

    cartEmpty.style.display = "none";
    let total = 0;
    cartItems.forEach((item, index) => {
      const lineTotal = item.price * item.quantity;
      total += lineTotal;
      const li = document.createElement("li");
      li.className = "cart-item";
      li.innerHTML = `
        <div class="cart-item-main">
          <p class="cart-item-name">${item.name}</p>
          <p class="cart-item-meta">${item.quantity} adet × ${currency.format(item.price)}</p>
        </div>
        <div class="cart-item-side">
          <span class="cart-item-subtotal">${currency.format(lineTotal)}</span>
          <div class="qty-control">
            <button class="qty-btn" data-qty data-action="decrease" data-index="${index}">-</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn" data-qty data-action="increase" data-index="${index}">+</button>
          </div>
          <button class="cart-item-remove" aria-label="Ürünü sepetten çıkar" data-remove="${index}">✕</button>
        </div>
      `;
      cartList.appendChild(li);
    });
    cartTotal.textContent = currency.format(total);
    const shipping = total >= 1000 ? 0 : 49;
    const freeShippingThreshold = 1000;
    const remainingForFreeShipping = freeShippingThreshold - total;
    
    if (cartShippingEl) {
      if (shipping === 0) {
        cartShippingEl.innerHTML = '<span style="color: #059669; font-weight: 600;">Ücretsiz Kargo ✓</span>';
      } else {
        cartShippingEl.textContent = currency.format(shipping);
      }
    }
    
    // Ücretsiz kargo mesajı ekle/güncelle
    let freeShippingMessage = cartPanel?.querySelector(".free-shipping-message");
    if (shipping === 0) {
      if (!freeShippingMessage) {
        freeShippingMessage = document.createElement("div");
        freeShippingMessage.className = "free-shipping-message";
        freeShippingMessage.style.cssText = "background-color: #ecfdf5; border: 1px solid #10b981; border-radius: 8px; padding: 12px; margin-top: 12px; text-align: center; font-size: 13px; color: #059669; font-weight: 500;";
        freeShippingMessage.textContent = "🎉 Kargo ücretsiz!";
        const cartFooter = cartPanel?.querySelector(".cart-panel-footer");
        if (cartFooter) {
          cartFooter.insertBefore(freeShippingMessage, cartFooter.firstChild);
        }
      }
    } else {
      if (freeShippingMessage) {
        freeShippingMessage.remove();
      }
      // Kalan tutar mesajı
      let remainingMessage = cartPanel?.querySelector(".remaining-shipping-message");
      if (remainingForFreeShipping > 0 && remainingForFreeShipping < freeShippingThreshold) {
        if (!remainingMessage) {
          remainingMessage = document.createElement("div");
          remainingMessage.className = "remaining-shipping-message";
          remainingMessage.style.cssText = "background-color: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 10px; margin-top: 12px; text-align: center; font-size: 12px; color: #d97706;";
          const cartFooter = cartPanel?.querySelector(".cart-panel-footer");
          if (cartFooter) {
            cartFooter.insertBefore(remainingMessage, cartFooter.firstChild);
          }
        }
        remainingMessage.innerHTML = `💰 ${currency.format(remainingForFreeShipping)} daha ekleyin, kargo ücretsiz olsun!`;
      } else {
        if (remainingMessage) {
          remainingMessage.remove();
        }
      }
    }
    
    if (cartGrandTotalEl) {
      cartGrandTotalEl.textContent = currency.format(total + shipping);
    }

    // Event listener'ları ekle
    cartList.querySelectorAll("[data-remove]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.dataset.remove);
        cartItems.splice(idx, 1);
        renderCart();
        saveCartState();
      });
    });

    cartList.querySelectorAll("[data-qty]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.dataset.index);
        const action = btn.dataset.action;
        const item = cartItems[idx];
        if (!item) return;
        if (action === "increase") {
          item.quantity += 1;
        } else if (action === "decrease") {
          if (item.quantity > 1) {
            item.quantity -= 1;
          } else {
            cartItems.splice(idx, 1);
          }
        }
        renderCart();
        saveCartState();
      });
    });
  }
  
  // renderCart fonksiyonunu global olarak erişilebilir yap
  window.renderCart = renderCart;

  // Sepet butonları
  cartToggle?.addEventListener("click", () => openCart(false));
  cartClose?.addEventListener("click", closeCart);
  cartOverlay?.addEventListener("click", closeCart);

  // Adres düzenleme - Adresler sayfasına yönlendir
  editAddressBtn?.addEventListener("click", () => {
    // Sepeti kapat
    closeCart();
    // Adresler sayfasına yönlendir
    window.location.href = "account.html#addresses";
  });

  // Alışverişi Tamamla butonu
  checkoutBtn?.addEventListener("click", () => {
    if (cartItems.length === 0) {
      alert("Sepetiniz boş!");
      return;
    }
    saveCartState();
    window.location.href = "checkout.html";
  });

  // İlk render - kaydedilmiş sepet varsa göster
  if (cartItems.length > 0) {
    renderCart();
  } else {
    renderCart(); // Boş sepeti de render et
  }
}

// Index.html için
function initIndexPage() {
  updateYear();
  updateCartCount();
  updateFavoritesCount();
  checkAuthStatus();
  initCartPanel();

  // Hakkımızda ve İletişim bölümlerini göster/gizle
  const aboutSection = document.getElementById("about");
  const contactSection = document.getElementById("contact");
  const aboutLink = document.getElementById("about-link");
  const contactLink = document.getElementById("contact-link");
  const aboutBtn = document.getElementById("about-btn");

  function showSection(section) {
    [aboutSection, contactSection].forEach((sec) => {
      sec.classList.add("is-hidden");
    });

    section.classList.remove("is-hidden");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (aboutLink) {
    aboutLink.addEventListener("click", (e) => {
      e.preventDefault();
      showSection(aboutSection);
    });
  }

  if (contactLink) {
    contactLink.addEventListener("click", (e) => {
      e.preventDefault();
      showSection(contactSection);
    });
  }

  if (aboutBtn) {
    aboutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showSection(aboutSection);
    });
  }
}

// Products.html için
function initProductsPage() {
  updateYear();
  updateFavoritesCount();
  initCartPanel();
  
  (function () {
    const cartCountEl = document.querySelector("[data-cart-count]");
    const toastEl = document.getElementById("cart-toast");
    const cartButtons = document.querySelectorAll("[data-cart-button]");
    let cartItems = JSON.parse(localStorage.getItem("meloraCart") || "[]");
    let toastTimer = null;
    const toastText = document.querySelector("[data-toast-text]");
    const toastPrice = document.querySelector("[data-toast-price]");
    const continueShoppingBtn = document.getElementById("continue-shopping");
    const goToCartBtn = document.getElementById("go-to-cart");
    const cartPanel = document.getElementById("cart-panel");
    const cartOverlay = document.getElementById("cart-overlay");
    
    const currency = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      maximumFractionDigits: 0,
    });

    function openCart(fullView = false) {
      if (!cartPanel) return;
      cartPanel.classList.add("show");
      if (fullView) {
        document.body.classList.add("cart-fullscreen");
        if (cartOverlay) cartOverlay.classList.remove("show");
      } else {
        document.body.classList.remove("cart-fullscreen");
        if (cartOverlay) cartOverlay.classList.add("show");
      }
    }

    continueShoppingBtn?.addEventListener("click", () => {
      if (toastEl) toastEl.classList.remove("show");
    });

    goToCartBtn?.addEventListener("click", () => openCart(true));

    cartButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const price = Number(button.dataset.price || 0);
        const productName = button.dataset.product || "Ürün";
        const existing = cartItems.find((item) => item.name === productName);
        if (existing) {
          existing.quantity += 1;
        } else {
          cartItems.push({ name: productName, price, quantity: 1 });
        }
        
        // Sepet sayacını güncelle
        updateCartCount();
        
        // Sepet panelini yeniden render et
        if (window.renderCart) {
          window.renderCart();
        }
        
        // Sepet durumunu kaydet
        localStorage.setItem("meloraCart", JSON.stringify(cartItems));
        
        // Toast göster
        if (toastEl) {
          if (toastText) toastText.textContent = `${productName} sepete eklendi`;
          if (toastPrice) toastPrice.textContent = currency.format(price);
          toastEl.classList.add("show");
          if (toastTimer) {
            clearTimeout(toastTimer);
          }
          toastTimer = setTimeout(() => {
            if (toastEl) toastEl.classList.remove("show");
          }, 2000);
        }
        
        openCart();
      });
    });

    // Giriş durumunu kontrol et
    checkAuthStatus();

    // Kategori filtreleme
    const categoryFilterBtn = document.getElementById("category-filter-btn");
    const categoryPanel = document.getElementById("category-panel");
    const categoryOptions = document.querySelectorAll(".category-option");
    const categoryMainOptions = document.querySelectorAll(".category-main");
    const categorySubOptions = document.querySelectorAll(".category-suboption");
    const productCards = document.querySelectorAll("[data-product-category]");

    function filterProducts(category) {
      productCards.forEach((card) => {
        if (category === "all") {
          card.style.display = "block";
        } else {
          // Ana kategori veya alt kategori kontrolü
          const cardCategory = card.dataset.productCategory;
          const isMainCategory = cardCategory === category;
          
          // Alt kategori eşleşmesi kontrolü
          let isSubCategoryMatch = false;
          if (category.includes("-")) {
            // Alt kategori ise, ana kategoriye göre kontrol et
            const mainCategoryMap = {
              "alt-giyim": "kadin",
              "ust-giyim": "kadin",
              "dis-giyim": "kadin",
              "elbise": "kadin",
              "spor-giyim": "kadin",
              "bluz": "kadin",
              "kazak": "kadin",
              "hirka": "kadin",
              "ceket": "kadin",
              "pantolon": "kadin",
              "jean": "kadin",
              "erkek-alt-giyim": "erkek",
              "erkek-ust-giyim": "erkek",
              "erkek-dis-giyim": "erkek",
              "erkek-spor": "erkek",
              "erkek-gomlek": "erkek",
              "erkek-tisort": "erkek",
              "erkek-pantolon": "erkek",
              "erkek-jean": "erkek",
              "erkek-ceket": "erkek",
              "erkek-mont": "erkek",
              "ayakkabi-kadin": "ayakkabi-canta",
              "ayakkabi-erkek": "ayakkabi-canta",
              "spor-ayakkabi": "ayakkabi-canta",
              "bot": "ayakkabi-canta",
              "cizme": "ayakkabi-canta",
              "canta": "ayakkabi-canta",
              "sirt-cantasi": "ayakkabi-canta",
              "cuzdan": "ayakkabi-canta",
              "aksesuar": "ayakkabi-canta",
              "spor-kadin": "spor",
              "spor-erkek": "spor",
              "spor-canta": "spor",
              "spor-aksesuar": "spor",
              "fitness": "spor",
              "kosu": "spor",
              "yoga": "spor",
              "bebek-giyim": "anne-cocuk",
              "cocuk-giyim": "anne-cocuk",
              "hamile-giyim": "anne-cocuk",
              "oyuncak": "anne-cocuk",
              "bebek-bakim": "anne-cocuk",
              "cocuk-ayakkabi": "anne-cocuk",
              "bebek-odasi": "anne-cocuk",
              "anne-cocuk-aksesuar": "anne-cocuk",
              "dekorasyon": "ev-yasam",
              "mutfak": "ev-yasam",
              "yatak-odasi": "ev-yasam",
              "banyo": "ev-yasam",
              "oturma-odasi": "ev-yasam",
              "aydinlatma": "ev-yasam",
              "tekstil": "ev-yasam",
              "organizasyon": "ev-yasam",
              "bahce": "ev-yasam"
            };
            
            const mainCategory = mainCategoryMap[category];
            if (mainCategory && cardCategory === mainCategory) {
              isSubCategoryMatch = true;
            }
          }
          
          if (isMainCategory || isSubCategoryMatch) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        }
      });
    }

    categoryFilterBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      categoryPanel?.classList.toggle("show");
    });

    // Ana kategori butonları - alt kategorileri aç/kapat
    categoryMainOptions.forEach((option) => {
      option.addEventListener("click", (e) => {
        e.stopPropagation();
        const categoryGroup = option.closest(".category-group");
        const subcategories = categoryGroup?.querySelector(".category-subcategories");
        
        if (subcategories) {
          subcategories.classList.toggle("show");
        }
        
        // Filtreleme yap
        const category = option.dataset.category;
        categoryOptions.forEach((opt) => opt.classList.remove("active"));
        option.classList.add("active");
        filterProducts(category);
      });
    });

    // Alt kategori butonları
    categorySubOptions.forEach((option) => {
      option.addEventListener("click", (e) => {
        e.stopPropagation();
        const category = option.dataset.category;
        categoryOptions.forEach((opt) => opt.classList.remove("active"));
        option.classList.add("active");
        filterProducts(category);
        categoryPanel?.classList.remove("show");
      });
    });

    // Tümü butonu
    const allOption = document.querySelector('[data-category="all"]');
    allOption?.addEventListener("click", () => {
      categoryOptions.forEach((opt) => opt.classList.remove("active"));
      allOption.classList.add("active");
      filterProducts("all");
      categoryPanel?.classList.remove("show");
    });

    document.addEventListener("click", (e) => {
      if (categoryPanel && !categoryPanel.contains(e.target) && !categoryFilterBtn?.contains(e.target)) {
        categoryPanel.classList.remove("show");
      }
    });

    // Sayfa yüklendiğinde tüm ürünleri göster
    filterProducts("all");
    
    // Filtre Paneli
    const filterBtn = document.getElementById("filter-btn");
    const filterPanel = document.getElementById("filter-panel");
    const filterClose = document.getElementById("filter-close");
    const filterApply = document.getElementById("filter-apply");
    const filterClear = document.getElementById("filter-clear");
    const sortSelect = document.getElementById("sort-select");
    const priceMin = document.getElementById("price-min");
    const priceMax = document.getElementById("price-max");
    
    let currentFilters = {
      sort: "default",
      priceMin: null,
      priceMax: null,
      sizes: [],
      shoeSizes: [],
      colors: [],
      ages: []
    };
    
    filterBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      filterPanel?.classList.toggle("show");
    });
    
    filterClose?.addEventListener("click", () => {
      filterPanel?.classList.remove("show");
    });
    
    filterClear?.addEventListener("click", () => {
      // Tüm filtreleri temizle
      sortSelect.value = "default";
      priceMin.value = "";
      priceMax.value = "";
      document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
      currentFilters = {
        sort: "default",
        priceMin: null,
        priceMax: null,
        sizes: [],
        shoeSizes: [],
        colors: [],
        ages: []
      };
      applyFilters();
    });
    
    filterApply?.addEventListener("click", () => {
      applyFilters();
      filterPanel?.classList.remove("show");
    });
    
    // Filtre değişikliklerini dinle
    sortSelect?.addEventListener("change", () => {
      currentFilters.sort = sortSelect.value;
    });
    
    priceMin?.addEventListener("input", () => {
      currentFilters.priceMin = priceMin.value ? parseFloat(priceMin.value) : null;
    });
    
    priceMax?.addEventListener("input", () => {
      currentFilters.priceMax = priceMax.value ? parseFloat(priceMax.value) : null;
    });
    
    document.querySelectorAll('input[name="size"]').forEach(cb => {
      cb.addEventListener("change", () => {
        currentFilters.sizes = Array.from(document.querySelectorAll('input[name="size"]:checked')).map(c => c.value);
      });
    });
    
    document.querySelectorAll('input[name="shoe-size"]').forEach(cb => {
      cb.addEventListener("change", () => {
        currentFilters.shoeSizes = Array.from(document.querySelectorAll('input[name="shoe-size"]:checked')).map(c => c.value);
      });
    });
    
    document.querySelectorAll('input[name="color"]').forEach(cb => {
      cb.addEventListener("change", () => {
        currentFilters.colors = Array.from(document.querySelectorAll('input[name="color"]:checked')).map(c => c.value);
      });
    });
    
    document.querySelectorAll('input[name="age"]').forEach(cb => {
      cb.addEventListener("change", () => {
        currentFilters.ages = Array.from(document.querySelectorAll('input[name="age"]:checked')).map(c => c.value);
      });
    });
    
    function applyFilters() {
      const cards = Array.from(productCards);
      let filteredCards = cards;
      
      // Fiyat aralığı filtresi
      if (currentFilters.priceMin !== null || currentFilters.priceMax !== null) {
        filteredCards = filteredCards.filter(card => {
          const priceText = card.querySelector("[data-price]")?.dataset.price || 
                           card.querySelector(".product-cta[data-price]")?.dataset.price;
          if (!priceText) return true;
          const price = parseFloat(priceText);
          if (currentFilters.priceMin !== null && price < currentFilters.priceMin) return false;
          if (currentFilters.priceMax !== null && price > currentFilters.priceMax) return false;
          return true;
        });
      }
      
      // Sıralama
      if (currentFilters.sort !== "default") {
        filteredCards.sort((a, b) => {
          const priceA = parseFloat(a.querySelector("[data-price]")?.dataset.price || 
                                   a.querySelector(".product-cta[data-price]")?.dataset.price || 0);
          const priceB = parseFloat(b.querySelector("[data-price]")?.dataset.price || 
                                   b.querySelector(".product-cta[data-price]")?.dataset.price || 0);
          const nameA = a.querySelector("h3")?.textContent || a.querySelector("h2")?.textContent || "";
          const nameB = b.querySelector("h3")?.textContent || b.querySelector("h2")?.textContent || "";
          
          switch(currentFilters.sort) {
            case "price-low":
              return priceA - priceB;
            case "price-high":
              return priceB - priceA;
            case "name-asc":
              return nameA.localeCompare(nameB, "tr");
            case "name-desc":
              return nameB.localeCompare(nameA, "tr");
            default:
              return 0;
          }
        });
      }
      
      // Görünürlüğü güncelle
      const productsGrid = document.querySelector(".products-grid.pro");
      if (productsGrid) {
        // Sıralamayı uygula
        filteredCards.forEach(card => {
          productsGrid.appendChild(card);
        });
        
        // Görünürlüğü ayarla
        cards.forEach(card => {
          if (filteredCards.includes(card)) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      }
    }
    
    document.addEventListener("click", (e) => {
      if (filterPanel && !filterPanel.contains(e.target) && !filterBtn?.contains(e.target)) {
        filterPanel.classList.remove("show");
      }
    });
  })();
}

// Account.html için
function initAccountPage() {
  updateYear();
  initCartPanel();

  // Kullanıcı bilgilerini yükle
  const userData = JSON.parse(localStorage.getItem("meloraUser") || "{}");
  const profileNameEl = document.getElementById("profile-name");
  const profileEmailEl = document.getElementById("profile-email");
  const profilePhoneEl = document.getElementById("profile-phone");
  
  if (userData.name && profileNameEl) {
    profileNameEl.value = userData.name || "";
  }
  if (userData.email && profileEmailEl) {
    profileEmailEl.value = userData.email || "";
  }
  if (userData.phone && profilePhoneEl) {
    profilePhoneEl.value = userData.phone || "";
  }

  // Profil güncelleme
  const profileForm = document.getElementById("profile-form");
  profileForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };
    localStorage.setItem("meloraUser", JSON.stringify(updatedData));
    alert("Bilgileriniz güncellendi!");
  });

  // Çıkış yap
  const logoutBtn = document.getElementById("logout-btn");
  logoutBtn?.addEventListener("click", () => {
    if (confirm("Çıkış yapmak istediğinize emin misiniz?")) {
      localStorage.removeItem("meloraUser");
      localStorage.removeItem("meloraLoggedIn");
      localStorage.removeItem("meloraCart");
      localStorage.removeItem("meloraAddress");
      window.location.href = "index.html";
    }
  });

  // URL hash'inden bölümü aç
  function openSectionFromHash() {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const targetLink = document.querySelector(`.account-nav-link[data-section="${hash}"]`);
      if (targetLink) {
        targetLink.click();
      }
    }
  }
  
  // Sayfa yüklendiğinde hash varsa ilgili bölümü aç
  openSectionFromHash();
  
  // Hash değişikliklerini dinle
  window.addEventListener("hashchange", openSectionFromHash);

  // Hesap navigasyonu
  document.querySelectorAll(".account-nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const section = link.dataset.section;
      document.querySelectorAll(".account-nav-link").forEach((l) => l.classList.remove("active"));
      document.querySelectorAll(".account-section").forEach((s) => s.classList.remove("active"));
      link.classList.add("active");
      const targetSection = document.getElementById(`${section}-section`);
      if (targetSection) targetSection.classList.add("active");
      
      // URL hash'ini güncelle
      window.location.hash = section;
      
      // Siparişler bölümüne tıklandığında siparişleri yükle
      if (section === "orders") {
        loadOrders();
      }
    });
  });
  
  // Siparişleri yükle ve göster
  function loadOrders() {
    const ordersList = document.getElementById("orders-list");
    if (!ordersList) return;
    
    const savedOrders = JSON.parse(localStorage.getItem("meloraOrders") || "[]");
    
    if (savedOrders.length === 0) {
      ordersList.innerHTML = '<p class="empty-state">Henüz siparişiniz bulunmamaktadır.</p>';
      return;
    }
    
    ordersList.innerHTML = "";
    const currency = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      maximumFractionDigits: 0,
    });
    
    savedOrders.forEach((order) => {
      const orderDate = new Date(order.date);
      const formattedDate = orderDate.toLocaleDateString("tr-TR", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
      
      const total = order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const shipping = total >= 1000 ? 0 : 49;
      const grandTotal = total + shipping;
      
      const orderCard = document.createElement("div");
      orderCard.className = "order-card";
      orderCard.innerHTML = `
        <div class="order-card-header">
          <div>
            <h4>Sipariş #${order.id.slice(-6)}</h4>
            <p class="order-date">${formattedDate}</p>
          </div>
          <span class="order-status">${order.status}</span>
        </div>
        <div class="order-card-body">
          <div class="order-items-preview">
            ${order.items.slice(0, 3).map(item => `
              <span class="order-item-name">${item.name} (${item.quantity}x)</span>
            `).join("")}
            ${order.items.length > 3 ? `<span class="order-item-more">+${order.items.length - 3} ürün daha</span>` : ""}
          </div>
          <div class="order-delivery-info">
            <p class="order-delivery-address">
              <strong>Teslimat:</strong> ${order.delivery.address}, ${order.delivery.district}, ${order.delivery.city}
            </p>
            <p class="order-delivery-estimate">
              <strong>Tahmini teslimat:</strong> ${order.estimatedDelivery}
            </p>
          </div>
        </div>
        <div class="order-card-footer">
          <span class="order-total">Toplam: ${currency.format(grandTotal)}</span>
        </div>
      `;
      ordersList.appendChild(orderCard);
    });
  }
  
  // Sayfa yüklendiğinde siparişler bölümü aktifse siparişleri yükle
  const ordersSection = document.getElementById("orders-section");
  if (ordersSection && ordersSection.classList.contains("active")) {
    loadOrders();
  }

  // Adres yönetimi
  const addressesList = document.getElementById("addresses-list");
  const addressFormContainer = document.getElementById("address-form-container");
  const addAddressBtn = document.getElementById("add-address-btn");
  const cancelAddressBtn = document.getElementById("cancel-address-btn");
  const addressForm = document.getElementById("address-form");

  // Kayıtlı adresleri yükle
  function loadAddresses() {
    const savedAddresses = JSON.parse(localStorage.getItem("meloraAddresses") || "[]");
    if (!addressesList) return;
    
    if (savedAddresses.length === 0) {
      addressesList.innerHTML = '<p class="empty-state">Henüz kayıtlı adresiniz bulunmamaktadır.</p>';
      return;
    }
    addressesList.innerHTML = "";
    savedAddresses.forEach((address, index) => {
      const addressCard = document.createElement("div");
      addressCard.className = "address-card";
      addressCard.innerHTML = `
        <div class="address-card-content">
          <h4>${address.title}</h4>
          <p>${address.street}</p>
          <p>${address.district}, ${address.city} ${address.postal}</p>
        </div>
        <button type="button" class="address-delete-btn" data-index="${index}">Sil</button>
      `;
      addressesList.appendChild(addressCard);
    });
    
    // Sil butonlarına event listener ekle
    addressesList.querySelectorAll(".address-delete-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const index = Number(btn.dataset.index);
        const savedAddresses = JSON.parse(localStorage.getItem("meloraAddresses") || "[]");
        savedAddresses.splice(index, 1);
        localStorage.setItem("meloraAddresses", JSON.stringify(savedAddresses));
        loadAddresses();
      });
    });
  }

  // Yeni adres ekle butonu
  addAddressBtn?.addEventListener("click", () => {
    if (addressFormContainer) addressFormContainer.style.display = "block";
    if (addAddressBtn) addAddressBtn.style.display = "none";
    if (addressForm) addressForm.reset();
  });

  // İptal butonu
  cancelAddressBtn?.addEventListener("click", () => {
    if (addressFormContainer) addressFormContainer.style.display = "none";
    if (addAddressBtn) addAddressBtn.style.display = "block";
    if (addressForm) addressForm.reset();
  });

  // Adres formu gönderimi
  addressForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newAddress = {
      title: formData.get("title"),
      city: formData.get("city"),
      district: formData.get("district"),
      postal: formData.get("postal"),
      street: formData.get("street"),
    };
    
    const savedAddresses = JSON.parse(localStorage.getItem("meloraAddresses") || "[]");
    savedAddresses.push(newAddress);
    localStorage.setItem("meloraAddresses", JSON.stringify(savedAddresses));
    
    if (addressFormContainer) addressFormContainer.style.display = "none";
    if (addAddressBtn) addAddressBtn.style.display = "block";
    if (addressForm) addressForm.reset();
    loadAddresses();
    alert("Adres başarıyla kaydedildi!");
  });

  // Sayfa yüklendiğinde adresleri yükle
  loadAddresses();
}

// Login.html için
function initLoginPage() {
  updateYear();
  initCartPanel();
  
  const loginForm = document.getElementById("login-form");
  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    
    // Kullanıcı bilgilerini localStorage'a kaydet
    const userData = {
      email: email,
      name: email.split("@")[0], // E-postadan isim türet
      loginTime: new Date().toISOString(),
    };
    localStorage.setItem("meloraUser", JSON.stringify(userData));
    localStorage.setItem("meloraLoggedIn", "true");
    
    alert("Giriş başarılı! Yönlendiriliyorsunuz...");
    window.location.href = "products.html";
  });
}

// Signup.html için
function initSignupPage() {
  updateYear();
  initCartPanel();
  
  const signupForm = document.getElementById("signup-form");
  signupForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const password = formData.get("password");
    const passwordConfirm = formData.get("passwordConfirm");
    if (password !== passwordConfirm) {
      alert("Şifreler eşleşmiyor!");
      return;
    }
    
    // Kullanıcı bilgilerini localStorage'a kaydet
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      signupTime: new Date().toISOString(),
    };
    localStorage.setItem("meloraUser", JSON.stringify(userData));
    localStorage.setItem("meloraLoggedIn", "true");
    
    alert("Üyelik başarıyla oluşturuldu! Yönlendiriliyorsunuz...");
    window.location.href = "products.html";
  });
}

// Favorites.html için
function initFavoritesPage() {
  updateYear();
  updateCartCount();
  updateFavoritesCount();
  checkAuthStatus();
  initCartPanel();
  
  const favoritesGrid = document.querySelector("[data-favorites-grid]");
  const favoritesEmptyState = document.querySelector("[data-favorites-empty-state]");
  
  if (!favoritesGrid) return;
  
  const currency = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  });
  
  function renderFavoritesPage() {
    const favorites = getFavorites();
    
    if (favorites.length === 0) {
      if (favoritesEmptyState) favoritesEmptyState.style.display = "flex";
      favoritesGrid.innerHTML = "";
      const favoritesActions = document.querySelector("[data-favorites-actions]");
      if (favoritesActions) favoritesActions.style.display = "none";
      return;
    }
    
    if (favoritesEmptyState) favoritesEmptyState.style.display = "none";
    updateFavoritesActions();
    
    favoritesGrid.innerHTML = favorites.map(productName => {
      const product = getProductByName(productName);
      if (!product) return "";
      
      return `
        <article class="favorite-product-card" data-product-detail="${productName}" style="cursor: pointer;">
          <label class="favorite-item-checkbox-label">
            <input type="checkbox" class="favorite-item-checkbox" data-favorite-item="${productName}" onclick="event.stopPropagation();" />
          </label>
          <div class="favorite-product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
            <button class="favorite-product-remove" type="button" aria-label="Favorilerden çıkar" data-remove-favorite="${productName}" onclick="event.stopPropagation();">
              <span>✕</span>
            </button>
          </div>
          <div class="favorite-product-info">
            <h3>${product.name}</h3>
            <p class="favorite-product-description">${product.description}</p>
            <div class="favorite-product-footer">
              <span class="favorite-product-price">${currency.format(product.price)}</span>
              <button class="favorite-product-add-cart" type="button" data-cart-button data-product="${product.name}" data-price="${product.price}" onclick="event.stopPropagation();">
                Sepete Ekle
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");
    
    // Favorilerden çıkarma butonları
    favoritesGrid.querySelectorAll("[data-remove-favorite]").forEach(btn => {
      btn.addEventListener("click", () => {
        const productName = btn.dataset.removeFavorite;
        removeFromFavorites(productName);
        renderFavoritesPage();
        updateFavoritesCount();
        
        // Ürün sayfasındaki butonu da güncelle
        const productBtn = document.querySelector(`[data-product="${productName}"]`)?.closest(".product-card")?.querySelector(".product-cta.ghost[aria-label*='Favori']");
        if (productBtn) {
          productBtn.textContent = "♡";
          productBtn.style.color = "";
        }
      });
    });
    
    // Sepete ekleme butonları
    favoritesGrid.querySelectorAll("[data-cart-button]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const productName = btn.dataset.product;
        const price = parseFloat(btn.dataset.price);
        
        // Sepete ekle
        let cartItems = JSON.parse(localStorage.getItem("meloraCart") || "[]");
        const existingItem = cartItems.find(item => item.name === productName);
        
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cartItems.push({
            name: productName,
            price: price,
            quantity: 1
          });
        }
        
        localStorage.setItem("meloraCart", JSON.stringify(cartItems));
        updateCartCount();
        
        // Buton metnini güncelle
        btn.textContent = "Sepete Eklendi";
        btn.style.opacity = "0.7";
        setTimeout(() => {
          btn.textContent = "Sepete Ekle";
          btn.style.opacity = "1";
        }, 1000);
      });
    });
    
    // Ürün kartlarına tıklama event'i
    favoritesGrid.querySelectorAll("[data-product-detail]").forEach(card => {
      card.addEventListener("click", (e) => {
        if (e.target.closest("button")) return; // Butonlara tıklanırsa modal açılmasın
        const productName = card.dataset.productDetail;
        showProductDetail(productName);
      });
    });
  }
  
  // Ürün detay modalı
  const productDetailModal = document.getElementById("product-detail-modal");
  const productDetailOverlay = document.getElementById("product-detail-overlay");
  const productDetailClose = document.getElementById("product-detail-close");
  
  function showProductDetail(productName) {
    const product = getProductByName(productName);
    if (!product || !productDetailModal) return;
    
    const currency = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      maximumFractionDigits: 0,
    });
    
    document.getElementById("product-detail-img").src = product.image;
    document.getElementById("product-detail-img").alt = product.name;
    document.getElementById("product-detail-name").textContent = product.name;
    document.getElementById("product-detail-description").textContent = product.description;
    document.getElementById("product-detail-price").textContent = currency.format(product.price);
    
    productDetailModal.style.display = "flex";
    document.body.style.overflow = "hidden";
    
    // Sepete ekle butonu
    const addToCartBtn = document.getElementById("product-detail-add-cart");
    if (addToCartBtn) {
      addToCartBtn.onclick = () => {
        let cartItems = JSON.parse(localStorage.getItem("meloraCart") || "[]");
        const existingItem = cartItems.find(item => item.name === productName);
        
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cartItems.push({
            name: productName,
            price: product.price,
            quantity: 1
          });
        }
        
        localStorage.setItem("meloraCart", JSON.stringify(cartItems));
        updateCartCount();
        hideProductDetail();
      };
    }
  }
  
  function hideProductDetail() {
    if (productDetailModal) {
      productDetailModal.style.display = "none";
      document.body.style.overflow = "";
    }
  }
  
  productDetailClose?.addEventListener("click", hideProductDetail);
  productDetailOverlay?.addEventListener("click", hideProductDetail);
  
  // Favoriler sayfası action butonları
  const favoritesActions = document.querySelector("[data-favorites-actions]");
  const selectAllCheckbox = document.getElementById("favorites-select-all");
  const removeSelectedBtn = document.getElementById("favorites-remove-selected");
  const addSelectedBtn = document.getElementById("favorites-add-selected");
  
  function updateFavoritesActions() {
    const favorites = getFavorites();
    if (favorites.length > 0 && favoritesActions) {
      favoritesActions.style.display = "flex";
    } else if (favoritesActions) {
      favoritesActions.style.display = "none";
    }
  }
  
  selectAllCheckbox?.addEventListener("change", (e) => {
    const checkboxes = favoritesGrid.querySelectorAll(".favorite-item-checkbox");
    checkboxes.forEach(cb => {
      cb.checked = e.target.checked;
    });
  });
  
  removeSelectedBtn?.addEventListener("click", () => {
    const checkboxes = favoritesGrid.querySelectorAll(".favorite-item-checkbox:checked");
    checkboxes.forEach(cb => {
      const productName = cb.dataset.favoriteItem;
      removeFromFavorites(productName);
    });
    if (selectAllCheckbox) selectAllCheckbox.checked = false;
    renderFavoritesPage();
    updateFavoritesCount();
  });
  
  addSelectedBtn?.addEventListener("click", () => {
    const checkboxes = favoritesGrid.querySelectorAll(".favorite-item-checkbox:checked");
    let cartItems = JSON.parse(localStorage.getItem("meloraCart") || "[]");
    
    checkboxes.forEach(cb => {
      const productName = cb.dataset.favoriteItem;
      const product = getProductByName(productName);
      if (product) {
        const existingItem = cartItems.find(item => item.name === productName);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cartItems.push({
            name: productName,
            price: product.price,
            quantity: 1
          });
        }
      }
    });
    
    localStorage.setItem("meloraCart", JSON.stringify(cartItems));
    updateCartCount();
    if (selectAllCheckbox) selectAllCheckbox.checked = false;
    renderFavoritesPage();
  });
  
  renderFavoritesPage();
}

// Cart.html için
function initCartPage() {
  updateYear();
  updateCartCount();
  updateFavoritesCount();
  checkAuthStatus();
  
  const cartList = document.querySelector("[data-cart-list]");
  const cartEmpty = document.querySelector("[data-cart-empty]");
  const cartEmptyMessage = document.querySelector(".cart-empty-message");
  const cartTotal = document.querySelector("[data-cart-total]");
  const cartShippingEl = document.querySelector("[data-cart-shipping]");
  const cartGrandTotalEl = document.querySelector("[data-cart-grandtotal]");
  const cartNameEl = document.querySelector("[data-cart-name]");
  const cartPhoneEl = document.querySelector("[data-cart-phone]");
  const cartStreetEl = document.querySelector("[data-cart-street]");
  const editAddressBtn = document.getElementById("edit-address");
  const checkoutBtn = document.getElementById("checkout-btn");
  const cartSelectAll = document.getElementById("cart-select-all");
  const cartRemoveSelected = document.getElementById("cart-remove-selected");
  
  let cartItems = JSON.parse(localStorage.getItem("meloraCart") || "[]");
  const defaultAddress = {
    name: "Ad Soyad",
    phone: "+90 --- --- -- --",
    street: "Teslimat adresi henüz eklenmedi."
  };
  let customerAddress = JSON.parse(localStorage.getItem("meloraAddress") || JSON.stringify(defaultAddress));
  
  const currency = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  });
  
  function renderCart() {
    if (!cartList) return;
    
    cartList.innerHTML = "";
    
    if (cartItems.length === 0) {
      if (cartEmpty) cartEmpty.style.display = "block";
      if (cartEmptyMessage) cartEmptyMessage.style.display = "block";
      if (cartTotal) cartTotal.textContent = currency.format(0);
      if (cartShippingEl) cartShippingEl.textContent = currency.format(0);
      if (cartGrandTotalEl) cartGrandTotalEl.textContent = currency.format(0);
      // Action buttons'ı gizle
      const cartActions = document.querySelector("[data-cart-actions]");
      if (cartActions) cartActions.style.display = "none";
      return;
    }
    
    if (cartEmpty) cartEmpty.style.display = "none";
    if (cartEmptyMessage) cartEmptyMessage.style.display = "none";
    
    // Action buttons'ı göster
    const cartActions = document.querySelector("[data-cart-actions]");
    if (cartActions) cartActions.style.display = "flex";
    
    let total = 0;
    cartItems.forEach((item, index) => {
      const lineTotal = item.price * item.quantity;
      total += lineTotal;
      const product = getProductByName(item.name);
      const productImage = product?.image || "https://via.placeholder.com/100?text=Ürün";
      
      const li = document.createElement("li");
      li.className = "cart-item";
      li.innerHTML = `
        <label class="cart-item-checkbox-label">
          <input type="checkbox" class="cart-item-checkbox" data-cart-item-checkbox="${index}" />
        </label>
        <div class="cart-item-image" data-product-detail="${item.name}" style="cursor: pointer;">
          <img src="${productImage}" alt="${item.name}" loading="lazy" />
        </div>
        <div class="cart-item-main" data-product-detail="${item.name}" style="cursor: pointer;">
          <p class="cart-item-name">${item.name}</p>
          <p class="cart-item-meta">${item.quantity} adet × ${currency.format(item.price)}</p>
        </div>
        <div class="cart-item-side">
          <span class="cart-item-subtotal">${currency.format(lineTotal)}</span>
          <div class="qty-control">
            <button class="qty-btn" data-qty data-action="decrease" data-index="${index}">-</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn" data-qty data-action="increase" data-index="${index}">+</button>
          </div>
          <button class="cart-item-remove" aria-label="Ürünü sepetten çıkar" data-remove="${index}">✕</button>
        </div>
      `;
      cartList.appendChild(li);
      
      // Ürün detayı için tıklama event'i
      const productDetailTriggers = li.querySelectorAll("[data-product-detail]");
      productDetailTriggers.forEach(trigger => {
        trigger.addEventListener("click", (e) => {
          e.stopPropagation();
          showProductDetail(item.name);
        });
      });
    });
    
    if (cartTotal) cartTotal.textContent = currency.format(total);
    const shipping = total >= 1000 ? 0 : 49;
    const freeShippingThreshold = 1000;
    const remainingForFreeShipping = freeShippingThreshold - total;
    
    if (cartShippingEl) {
      if (shipping === 0) {
        cartShippingEl.innerHTML = '<span style="color: #059669; font-weight: 600;">Ücretsiz Kargo ✓</span>';
      } else {
        cartShippingEl.textContent = currency.format(shipping);
      }
    }
    
    // Ücretsiz kargo mesajı (cart.html sayfası için)
    const cartSummary = document.querySelector(".cart-summary");
    let freeShippingMessage = cartSummary?.querySelector(".free-shipping-message");
    let remainingMessage = cartSummary?.querySelector(".remaining-shipping-message");
    
    if (shipping === 0) {
      if (remainingMessage) remainingMessage.remove();
      if (!freeShippingMessage) {
        freeShippingMessage = document.createElement("div");
        freeShippingMessage.className = "free-shipping-message";
        freeShippingMessage.style.cssText = "background-color: #ecfdf5; border: 1px solid #10b981; border-radius: 8px; padding: 12px; margin: 12px 0; text-align: center; font-size: 13px; color: #059669; font-weight: 500;";
        freeShippingMessage.textContent = "🎉 Kargo ücretsiz!";
        const cartSummaryDivider = cartSummary?.querySelector(".cart-summary-divider");
        if (cartSummaryDivider) {
          cartSummaryDivider.insertAdjacentElement("afterend", freeShippingMessage);
        }
      }
    } else {
      if (freeShippingMessage) freeShippingMessage.remove();
      if (remainingForFreeShipping > 0 && remainingForFreeShipping < freeShippingThreshold) {
        if (!remainingMessage) {
          remainingMessage = document.createElement("div");
          remainingMessage.className = "remaining-shipping-message";
          remainingMessage.style.cssText = "background-color: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 10px; margin: 12px 0; text-align: center; font-size: 12px; color: #d97706;";
          const cartSummaryDivider = cartSummary?.querySelector(".cart-summary-divider");
          if (cartSummaryDivider) {
            cartSummaryDivider.insertAdjacentElement("afterend", remainingMessage);
          }
        }
        remainingMessage.innerHTML = `💰 ${currency.format(remainingForFreeShipping)} daha ekleyin, kargo ücretsiz olsun!`;
      } else {
        if (remainingMessage) remainingMessage.remove();
      }
    }
    
    if (cartGrandTotalEl) {
      cartGrandTotalEl.textContent = currency.format(total + shipping);
    }
    
    // Event listener'ları ekle
    cartList.querySelectorAll("[data-remove]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.dataset.remove);
        cartItems.splice(idx, 1);
        localStorage.setItem("meloraCart", JSON.stringify(cartItems));
        renderCart();
        updateCartCount();
      });
    });
    
    cartList.querySelectorAll("[data-qty]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.dataset.index);
        const action = btn.dataset.action;
        const item = cartItems[idx];
        if (!item) return;
        if (action === "increase") {
          item.quantity += 1;
        } else if (action === "decrease" && item.quantity > 1) {
          item.quantity -= 1;
        }
        localStorage.setItem("meloraCart", JSON.stringify(cartItems));
        renderCart();
        updateCartCount();
      });
    });
    
    // Select all checkbox
    if (cartSelectAll) {
      cartSelectAll.addEventListener("change", (e) => {
        const checkboxes = cartList.querySelectorAll(".cart-item-checkbox");
        checkboxes.forEach(cb => {
          cb.checked = e.target.checked;
        });
      });
    }
    
    // Remove selected
    if (cartRemoveSelected) {
      cartRemoveSelected.addEventListener("click", () => {
        const checkboxes = cartList.querySelectorAll(".cart-item-checkbox:checked");
        const indicesToRemove = Array.from(checkboxes).map(cb => Number(cb.dataset.cartItemCheckbox)).sort((a, b) => b - a);
        indicesToRemove.forEach(idx => {
          cartItems.splice(idx, 1);
        });
        localStorage.setItem("meloraCart", JSON.stringify(cartItems));
        if (cartSelectAll) cartSelectAll.checked = false;
        renderCart();
        updateCartCount();
      });
    }
  }
  
  function syncAddress() {
    if (cartNameEl) cartNameEl.textContent = customerAddress.name || defaultAddress.name;
    if (cartPhoneEl) cartPhoneEl.textContent = customerAddress.phone || defaultAddress.phone;
    if (cartStreetEl) cartStreetEl.textContent = customerAddress.street || defaultAddress.street;
  }
  
  // Kaydedilmiş sepet ve adres varsa yükle
  const savedCart = JSON.parse(localStorage.getItem("meloraCart") || "[]");
  if (Array.isArray(savedCart) && savedCart.length > 0) {
    cartItems = savedCart;
  }
  const savedAddress = JSON.parse(localStorage.getItem("meloraAddress") || "null");
  if (savedAddress && typeof savedAddress === "object") {
    customerAddress = { ...defaultAddress, ...savedAddress };
  }
  
  syncAddress();
  renderCart();
  
  editAddressBtn?.addEventListener("click", () => {
    window.location.href = "account.html#addresses";
  });
  
  checkoutBtn?.addEventListener("click", () => {
    if (cartItems.length === 0) {
      alert("Sepetiniz boş!");
      return;
    }
    localStorage.setItem("meloraCart", JSON.stringify(cartItems));
    window.location.href = "checkout.html";
  });
  
  // Ürün detay modalı
  const productDetailModal = document.getElementById("product-detail-modal");
  const productDetailOverlay = document.getElementById("product-detail-overlay");
  const productDetailClose = document.getElementById("product-detail-close");
  
  function showProductDetail(productName) {
    const product = getProductByName(productName);
    if (!product || !productDetailModal) return;
    
    const currency = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      maximumFractionDigits: 0,
    });
    
    document.getElementById("product-detail-img").src = product.image;
    document.getElementById("product-detail-img").alt = product.name;
    document.getElementById("product-detail-name").textContent = product.name;
    document.getElementById("product-detail-description").textContent = product.description;
    document.getElementById("product-detail-price").textContent = currency.format(product.price);
    
    productDetailModal.style.display = "flex";
    document.body.style.overflow = "hidden";
    
    // Sepete ekle butonu
    const addToCartBtn = document.getElementById("product-detail-add-cart");
    if (addToCartBtn) {
      addToCartBtn.onclick = () => {
        let cartItems = JSON.parse(localStorage.getItem("meloraCart") || "[]");
        const existingItem = cartItems.find(item => item.name === productName);
        
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cartItems.push({
            name: productName,
            price: product.price,
            quantity: 1
          });
        }
        
        localStorage.setItem("meloraCart", JSON.stringify(cartItems));
        updateCartCount();
        hideProductDetail();
        renderCart();
      };
    }
  }
  
  function hideProductDetail() {
    if (productDetailModal) {
      productDetailModal.style.display = "none";
      document.body.style.overflow = "";
    }
  }
  
  productDetailClose?.addEventListener("click", hideProductDetail);
  productDetailOverlay?.addEventListener("click", hideProductDetail);
}

// Checkout.html için
function initCheckoutPage() {
  updateYear();
  initCartPanel();

  // URL'den sepet verilerini al (localStorage veya URL params)
  const cartData = JSON.parse(localStorage.getItem("meloraCart") || "[]");
  const cartAddress = JSON.parse(localStorage.getItem("meloraAddress") || "{}");

  const currency = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  });

  // Sipariş özetini göster
  function renderOrderSummary() {
    const orderItemsEl = document.getElementById("order-items");
    const orderSubtotalEl = document.getElementById("order-subtotal");
    const orderShippingEl = document.getElementById("order-shipping");
    const orderGrandtotalEl = document.getElementById("order-grandtotal");

    if (!orderItemsEl) return;

    if (cartData.length === 0) {
      orderItemsEl.innerHTML = "<p>Sipariş bulunamadı. <a href='products.html'>Alışverişe dön</a></p>";
      return;
    }

    let subtotal = 0;
    orderItemsEl.innerHTML = "";
    cartData.forEach((item) => {
      const lineTotal = item.price * item.quantity;
      subtotal += lineTotal;
      const li = document.createElement("div");
      li.className = "order-item";
      li.innerHTML = `
        <div>
          <strong>${item.name}</strong>
          <span>${item.quantity} adet × ${currency.format(item.price)}</span>
        </div>
        <span>${currency.format(lineTotal)}</span>
      `;
      orderItemsEl.appendChild(li);
    });

    // Kargo seçimini kontrol et
    const selectedShipping = document.querySelector('input[name="shipping"]:checked');
    let shipping = 49; // Varsayılan standart kargo
    
    if (selectedShipping) {
      if (selectedShipping.value === "express") {
        shipping = 79;
      } else if (selectedShipping.value === "free") {
        // Ücretsiz kargo için minimum tutar kontrolü
        shipping = subtotal >= 500 ? 0 : 49;
      } else if (selectedShipping.value === "standard") {
        shipping = subtotal >= 1000 ? 0 : 49;
      }
    } else {
      // Varsayılan: 1000 TL üzeri ücretsiz
      shipping = subtotal >= 1000 ? 0 : 49;
    }
    
    const grandtotal = subtotal + shipping;

    if (orderSubtotalEl) orderSubtotalEl.textContent = currency.format(subtotal);
    if (orderShippingEl) orderShippingEl.textContent = shipping === 0 ? "Ücretsiz" : currency.format(shipping);
    if (orderGrandtotalEl) orderGrandtotalEl.textContent = currency.format(grandtotal);
  }
  
  // Kargo seçeneklerini dinle
  document.querySelectorAll('input[name="shipping"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      renderOrderSummary();
    });
  });

  // Teslimat bilgilerini doldur
  const deliveryNameEl = document.getElementById("delivery-name");
  const deliveryPhoneEl = document.getElementById("delivery-phone");
  const deliveryAddressEl = document.getElementById("delivery-address");
  
  if (cartAddress.name && deliveryNameEl) {
    deliveryNameEl.value = cartAddress.name;
  }
  if (cartAddress.phone && deliveryPhoneEl) {
    deliveryPhoneEl.value = cartAddress.phone;
  }
  if (cartAddress.street && deliveryAddressEl) {
    deliveryAddressEl.value = cartAddress.street;
  }

  // Ödeme yöntemi değiştiğinde
  document.querySelectorAll('input[name="payment"]').forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const cardDetails = document.getElementById("card-details");
      if (cardDetails) {
        if (e.target.value === "credit-card") {
          cardDetails.style.display = "block";
        } else {
          cardDetails.style.display = "none";
        }
      }
    });
  });

  // Fatura bilgileri checkbox
  const sameAsDeliveryEl = document.getElementById("same-as-delivery");
  sameAsDeliveryEl?.addEventListener("change", (e) => {
    const billingForm = document.getElementById("billing-form");
    if (billingForm) {
      billingForm.style.display = e.target.checked ? "none" : "block";
    }
  });

  // Kart numarası formatla
  const cardNumberEl = document.getElementById("card-number");
  cardNumberEl?.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\s/g, "");
    value = value.match(/.{1,4}/g)?.join(" ") || value;
    e.target.value = value;
  });

  // Son kullanma tarihi formatla
  const cardExpiryEl = document.getElementById("card-expiry");
  cardExpiryEl?.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length >= 2) {
      value = value.substring(0, 2) + "/" + value.substring(2, 4);
    }
    e.target.value = value;
  });

  // CVV sadece sayı
  const cardCvvEl = document.getElementById("card-cvv");
  cardCvvEl?.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  });

  // 3D Secure Modal Yönetimi
  const secure3dOverlay = document.getElementById("secure3d-overlay");
  const secure3dCodeInput = document.getElementById("secure3d-code");
  const cancel3dBtn = document.getElementById("cancel-3d");
  const verify3dBtn = document.getElementById("verify-3d");
  
  function show3DSecure() {
    if (secure3dOverlay) {
      secure3dOverlay.style.display = "flex";
      if (secure3dCodeInput) {
        secure3dCodeInput.focus();
        secure3dCodeInput.value = "";
      }
    }
  }
  
  function hide3DSecure() {
    if (secure3dOverlay) {
      secure3dOverlay.style.display = "none";
    }
  }
  
  cancel3dBtn?.addEventListener("click", () => {
    hide3DSecure();
  });
  
  secure3dOverlay?.addEventListener("click", (e) => {
    if (e.target === secure3dOverlay) {
      hide3DSecure();
    }
  });
  
  // 3D Secure kodunu sadece sayı olarak kabul et
  secure3dCodeInput?.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  });
  
  // 3D Secure doğrulama
  verify3dBtn?.addEventListener("click", () => {
    const code = secure3dCodeInput?.value.trim();
    if (!code || code.length !== 6) {
      alert("Lütfen 6 haneli doğrulama kodunu girin.");
      return;
    }
    
    // Doğrulama başarılı - siparişi tamamla
    hide3DSecure();
    completeOrder();
  });
  
  // Siparişi tamamlama fonksiyonu
  function completeOrder() {
    const deliveryForm = document.getElementById("delivery-form");
    if (!deliveryForm || !deliveryForm.checkValidity()) {
      if (deliveryForm) deliveryForm.reportValidity();
      return;
    }

    const paymentMethod = document.querySelector('input[name="payment"]:checked');
    if (paymentMethod && paymentMethod.value === "credit-card") {
      const cardNumber = document.getElementById("card-number")?.value;
      const cardExpiry = document.getElementById("card-expiry")?.value;
      const cardCvv = document.getElementById("card-cvv")?.value;
      if (!cardNumber || !cardExpiry || !cardCvv) {
        alert("Lütfen kart bilgilerini eksiksiz doldurun.");
        return;
      }
    }

    // Siparişi kaydet
    const cartData = JSON.parse(localStorage.getItem("meloraCart") || "[]");
    const orderData = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      items: cartData,
      delivery: {
        name: document.getElementById("delivery-name")?.value || "",
        phone: document.getElementById("delivery-phone")?.value || "",
        address: document.getElementById("delivery-address")?.value || "",
        city: document.getElementById("delivery-city")?.value || "",
        district: document.getElementById("delivery-district")?.value || "",
        postal: document.getElementById("delivery-postal")?.value || "",
      },
      payment: paymentMethod?.value || "",
      estimatedDelivery: "2-4 iş günü içinde",
      status: "Hazırlanıyor"
    };
    
    const savedOrders = JSON.parse(localStorage.getItem("meloraOrders") || "[]");
    savedOrders.unshift(orderData); // En yeni sipariş en üstte
    localStorage.setItem("meloraOrders", JSON.stringify(savedOrders));
    
    alert("Siparişiniz alındı! Teşekkür ederiz.");
    localStorage.removeItem("meloraCart");
    localStorage.removeItem("meloraAddress");
    window.location.href = "products.html";
  }

  // Sipariş tamamlama butonu
  const completeOrderBtn = document.getElementById("complete-order");
  completeOrderBtn?.addEventListener("click", () => {
    const paymentMethod = document.querySelector('input[name="payment"]:checked');
    if (paymentMethod && paymentMethod.value === "credit-card") {
      show3DSecure();
    } else {
      completeOrder();
    }
  });

  renderOrderSummary();
  checkAuthStatus();
}

// Sayfa yüklendiğinde ilgili fonksiyonu çalıştır
document.addEventListener("DOMContentLoaded", () => {
  // Her sayfada çalışacak fonksiyonlar
  updateYear();
  initDarkMode();
  updateCartCount();
  updateFavoritesCount();
  initSearch();
  initCityDistrictSelects();
  
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  
  if (currentPage === "index.html" || currentPage === "") {
    initIndexPage();
  } else if (currentPage === "products.html") {
    initProductsPage();
    initFavoritesButtons();
  } else if (currentPage === "account.html") {
    initAccountPage();
  } else if (currentPage === "login.html") {
    initLoginPage();
  } else if (currentPage === "signup.html") {
    initSignupPage();
  } else if (currentPage === "checkout.html") {
    initCheckoutPage();
  } else if (currentPage === "cart.html") {
    initCartPage();
  } else if (currentPage === "favorites.html") {
    initFavoritesPage();
  }
  
  // Tüm sayfalarda favoriler panelini başlat
  initFavoritesPanel();
});

