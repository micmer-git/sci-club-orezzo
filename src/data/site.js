// Sci Club Orezzo Valseriana — Data
// Alpine skiing club, founded 1968 by Tarcisio Merelli
// Orezzo, Gazzaniga (BG), Valle Seriana

export const SITE = {
  name: 'Sci Club Orezzo',
  fullName: 'ASD Sci Club Orezzo Valseriana',
  tagline: 'Sci Alpino dal 1968',
  location: 'Orezzo — Gazzaniga (BG)',
  address: 'Via alla Chiesa 4, 24025 Gazzaniga (BG)',
  founded: 1968,
  athleteCount: 57,
  memberCount: 118,
  url: 'https://www.scicluborezzo.com',
  fisi: 'https://www.fisibergamo.it/',
  fisiCode: '00621',
  coni: 'https://www.coni.it/it/registro-societa-sportive/home/registro-2-0/RegistroDettaglio.html?id_societa=10397',
  social: {
    facebook: 'https://www.facebook.com/scicluborezzo/',
    instagram: 'https://www.instagram.com/scicluborezzo/',
  },
  contacts: {
    phone: '+39 347 852 6602',
    address: 'Via alla Chiesa 4, 24025 Gazzaniga (BG)',
    piva: '01996260160',
  },
};

export const BOARD = [
  { role: 'Presidente / Fondatore', name: 'Tarcisio Merelli', note: 'Fondatore nel 1968, guida il club da oltre mezzo secolo' },
  { role: 'Consigliere', name: 'Efrem Merelli', note: 'Ex sciatore nazionale, campione italiano gigante 1983, istruttore di sci' },
];

export const DISCIPLINES = [
  { name: 'Sci Alpino', icon: '⛷️', desc: 'Slalom speciale, gigante, Super G — il cuore dell\'attivita del club' },
  { name: 'Sci di Fondo', icon: '🏔️', desc: 'Tecnica classica e skating sulle piste nordiche' },
  { name: 'Sci Alpinismo', icon: '🧗', desc: 'Salita e discesa in ambiente alpino' },
];

export const SPONSORS = [
  { name: 'Chimica Panzeri', url: '#', tier: 'main' },
  { name: 'Kempatex', url: '#', tier: 'main' },
  { name: 'Brembana Service', url: '#', tier: 'main' },
  { name: 'A&G Chemical Production', url: 'https://aegchem.com/', tier: 'main' },
  { name: 'BG Refrattari', url: '#', tier: 'technical' },
  { name: 'Pedretti Serramenti', url: '#', tier: 'technical' },
  { name: 'Hidrodepur', url: '#', tier: 'supporter' },
];

export const VENUES = [
  { name: 'Monte Pora', location: 'Castione della Presolana (BG)', desc: 'Sede principale delle gare provinciali FISI. Impianti moderni e piste tecniche tra i 1.500 e i 1.880 metri.' },
  { name: 'Lizzola', location: 'Valbondione (BG)', desc: 'Piste tecniche per slalom e gigante. Sede del Trofeo La Penzana del Merel, organizzato dallo Sci Club Orezzo.' },
  { name: 'Spiazzi di Gromo', location: 'Gromo (BG)', desc: 'Circuito provinciale e gare giovanili. Comprensorio a misura di famiglia nel cuore della Val Seriana.' },
  { name: 'Selvino', location: 'Selvino (BG)', desc: 'Gare promozionali e vivaio. Storica stazione sciistica dell\'altopiano.' },
  { name: 'Passo del Tonale', location: 'Ponte di Legno (BS)', desc: 'Campionati regionali children. Ghiacciaio Presena per allenamenti estivi.' },
];

export const STORIA_MILESTONES = [
  { year: 1968, title: 'Fondazione', text: 'Tarcisio Merelli e un gruppo di amici appassionati di sci fondano lo Sci Club Orezzo nella piccola frazione di Orezzo, a Gazzaniga. La prima sede e la pizzeria di famiglia, "La Penzana del Merel".' },
  { year: 1972, title: 'Affiliazione FISI e CSI', text: 'Il club si affilia al CSI e alla FISI, entrando nel circuito delle gare federali. I primi atleti iniziano a gareggiare nei circuiti provinciali bergamaschi.' },
  { year: 1980, title: 'Generazione d\'oro', text: 'Gli anni Ottanta portano i primi grandi successi. Efrem Merelli, figlio del fondatore, diventa campione italiano di slalom gigante nel 1983 e vince la Coppa Italia nel 1985.' },
  { year: 1990, title: 'Dominio provinciale', text: 'Il club conquista il Trofeo San Simone, battendo Creberg e Radici Group nella classifica generale provinciale. Vittorie in tutte le categorie, dai Pulcini ai Seniores.' },
  { year: 2000, title: 'Mille atleti formati', text: 'In oltre trent\'anni di attivita, il club ha avviato allo sci piu di mille atleti, producendo oltre 25 sciatori competitivi a livello nazionale. Due atlete, Michela Azzola e Marta Benzoni, raggiungono il livello nazionale.' },
  { year: 2010, title: 'Struttura moderna', text: 'Nuova organizzazione societaria con 57 atleti agonisti e 118 tesserati. Partnership consolidate con sponsor locali e presenza costante nei campionati regionali e nazionali.' },
  { year: 2020, title: '50 anni di sci — e il COVID', text: 'Il club celebra mezzo secolo di attivita. Il messaggio del presidente: "Ragazzi, torneremo. E sci bergamasco, non mollare." La passione per la neve e piu forte di tutto.' },
  { year: 2025, title: 'Trofeo La Penzana del Merel', text: 'Il club organizza a Lizzola lo Slalom Speciale "Trofeo La Penzana del Merel" per il circuito provinciale Pulcini FISI Bergamo. Oltre 100 giovani atleti in gara sulle nevi bergamasche.' },
];

export const CATEGORIES = [
  { name: 'Baby', ages: '5-8 anni', desc: 'Primi passi sulla neve, approccio giocoso allo sci' },
  { name: 'Cuccioli', ages: '9-10 anni', desc: 'Fondamentali della tecnica sciistica' },
  { name: 'Pulcini', ages: '11-12 anni', desc: 'Primi tracciati di slalom e gigante' },
  { name: 'Children', ages: '13-15 anni', desc: 'Competizioni regionali e nazionali FISI' },
  { name: 'Giovani', ages: '16-20 anni', desc: 'Alto livello agonistico' },
  { name: 'Seniores', ages: '21+ anni', desc: 'Categoria assoluta' },
  { name: 'Master', ages: '30+ anni', desc: 'Competizioni agonistiche veterani' },
];

// Athletes from the club's history (photos from WordPress backup)
export const ATHLETES_ARCHIVE = [
  'Begnis', 'Belotti Francesco', 'Camozzi', 'Filisetti',
  'Ghislandi', 'Gipponi', 'Giudici', 'Grassi',
  'Locatelli', 'Moro', 'Pecis', 'Pozzoni', 'Simoncelli',
];

// Notable athletes
export const NOTABLE_ATHLETES = [
  { name: 'Efrem Merelli', achievement: 'Campione italiano gigante 1983, Coppa Italia 1985', era: '1980s' },
  { name: 'Michela Azzola', achievement: 'Atleta nazionale, originaria di Albino', era: '2000s' },
  { name: 'Marta Benzoni', achievement: 'Atleta nazionale, originaria di Rovetta', era: '2000s' },
];

// Featured event
export const FEATURED_EVENT = {
  name: 'Trofeo La Penzana del Merel',
  subtitle: 'Circuito Provinciale FISI Bergamo',
  date: 'Stagione 2025/2026',
  location: 'Lizzola, Valbondione (BG)',
  description: 'Slalom Speciale per la categoria Pulcini, organizzato dallo Sci Club Orezzo nell\'ambito del Circuito Provinciale FISI Bergamo. Oltre 100 giovani atleti in gara sulle nevi delle Orobie.',
  categories: 'Baby, Cuccioli, Pulcini',
};

// Gallery images from backup
export const GALLERY_IMAGES = [
  { src: '/img/gruppo.jpg', alt: 'Il gruppo dello Sci Club Orezzo', caption: 'La squadra' },
  { src: '/img/gara-gigante.jpeg', alt: 'Gara di Slalom Gigante 2017', caption: 'Gigante 2017' },
  { src: '/img/gara-lizzola.jpg', alt: 'Gara a Lizzola 2017', caption: 'Lizzola 2017' },
  { src: '/img/event-2019-1.jpg', alt: 'Evento Sci Club Orezzo 2019', caption: '50 anni' },
  { src: '/img/event-2019-2.jpg', alt: 'Evento Sci Club Orezzo 2019', caption: '50 anni' },
  { src: '/img/event-2019-3.jpg', alt: 'Evento Sci Club Orezzo 2019', caption: '50 anni' },
  { src: '/img/event-2019-4.jpg', alt: 'Evento Sci Club Orezzo 2019', caption: '50 anni' },
  { src: '/img/event-2019-5.jpg', alt: 'Evento Sci Club Orezzo 2019', caption: '50 anni' },
  { src: '/img/event-2019-6.jpg', alt: 'Evento Sci Club Orezzo 2019', caption: '50 anni' },
  { src: '/img/event-2019-7.jpg', alt: 'Evento Sci Club Orezzo 2019', caption: '50 anni' },
  { src: '/img/event-2019-8.jpg', alt: 'Evento Sci Club Orezzo 2019', caption: '50 anni' },
  { src: '/img/event-2019-9.jpg', alt: 'Evento Sci Club Orezzo 2019', caption: '50 anni' },
];
