// Sci Club Orezzo Valseriana — Data
// "Prima di uno sci club, una famiglia."
// Founded 1968 by Tarcisio Merelli — Orezzo, Gazzaniga (BG)

export const SITE = {
  name: 'Sci Club Orezzo',
  fullName: 'ASD Sci Club Orezzo Valseriana',
  tagline: 'Sci Alpino dal 1968',
  motto: 'Lo sci club del tuo cuore',
  familyQuote: 'Prima di uno sci club, una famiglia.',
  location: 'Orezzo — Gazzaniga (BG)',
  address: 'Via alla Chiesa 4, 24025 Gazzaniga (BG)',
  founded: 1968,
  athleteCount: 57,
  memberCount: 118,
  rosterCurrent: 40,
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

// === BOARD & KEY PEOPLE ===
export const BOARD = [
  { role: 'Presidente / Fondatore', name: 'Tarcisio Merelli', note: 'Fondatore nel 1968, guida il club da oltre mezzo secolo dalla sede storica "La Penzana del Merel"' },
  { role: 'Coordinatore / Consigliere', name: 'Efrem Merelli', note: 'Figlio del fondatore. Campione italiano GS 1983, Coppa Italia 1985. Istruttore nazionale, ex allenatore Coppa del Mondo' },
  { role: 'Allenatore storico', name: 'Giuseppe Panizza', note: 'Coach degli anni \'80, ha formato la generazione d\'oro del club' },
];

// Current coaching staff (from 2022 RaceSkiMagazine article)
export const COACHING_STAFF = [
  { category: 'Giovani', coaches: 'Mattia Gallizzi, Pietro Cortinovis' },
  { category: 'Children', coaches: 'Emilio Belingheri, Aline Poncet, Giandomenico Caranoni' },
  { category: 'Pulcini', coaches: 'Milena Albricci' },
];

// === DISCIPLINES ===
export const DISCIPLINES = [
  { name: 'Sci Alpino', icon: '⛷️', desc: 'Slalom speciale, gigante, Super G — il cuore dell\'attivita del club' },
  { name: 'Sci di Fondo', icon: '🏔️', desc: 'Tecnica classica e skating sulle piste nordiche' },
  { name: 'Sci Alpinismo', icon: '🧗', desc: 'Salita e discesa in ambiente alpino' },
];

// === SPONSORS ===
export const SPONSORS = [
  { name: 'Industria Chimica Panzeri', url: 'https://www.chimicapanzeri.it/', tier: 'main', logo: '/img/sponsors/chimicapanzeri.png', desc: 'Chimica industriale — Orio al Serio (BG)' },
  { name: 'Kempatex', url: 'https://www.kempatex.it/', tier: 'main', logo: '/img/sponsors/kempatex.jpg', desc: 'Ausiliari chimici tessili — Grassobbio (BG)' },
  { name: 'Brembana Service', url: 'https://www.brembanaservice.it/', tier: 'main', logo: '/img/sponsors/brembanaservice.jpg', desc: 'Revisioni veicoli — Villa d\'Alme (BG)' },
  { name: 'A&G Chemical', url: 'https://aegchem.com/', tier: 'main', logo: '/img/sponsors/aegchemical.png', desc: 'Detergenti e prodotti chimici' },
  { name: 'Sitip', url: 'https://sitip.it/', tier: 'storico', logo: '/img/sponsors/sitip.png', desc: 'Tessuti tecnici e innovativi — Cene (BG). Sponsor storico, 600 dipendenti, 120M fatturato' },
  { name: 'Pedretti Serramenti', url: 'https://pedrettiserramenti.it/', tier: 'technical', logo: '/img/sponsors/pedrettiserramenti.png', desc: 'Serramenti PVC — Endine Gaiano (BG)' },
  { name: 'Hidrodepur', url: 'https://www.hidrodepur.it/', tier: 'supporter', logo: '/img/sponsors/hidrodepur.png', desc: 'Trattamento acque — Levate (BG)' },
];

// === VENUES ===
export const VENUES = [
  { name: 'Lizzola', location: 'Valbondione (BG)', desc: 'Pista "Due Baite". Sede del Trofeo La Penzana del Merel e del Trofeo Merelli Fiorenza.' },
  { name: 'Monte Pora', location: 'Castione della Presolana (BG)', desc: 'Sede gare provinciali FISI e campionati regionali Baby. 1.500-1.880m.' },
  { name: 'Spiazzi di Gromo', location: 'Gromo (BG)', desc: 'Circuito provinciale e gare giovanili nel cuore della Val Seriana.' },
  { name: 'Passo del Tonale', location: 'Ponte di Legno (BS)', desc: 'Campionati regionali Children e Super G. Ghiacciaio Presena.' },
  { name: 'Colere', location: 'Colere (BG)', desc: 'Pista Bretella Presolana. Skicross e ultime tappe del circuito.' },
  { name: 'Selvino', location: 'Selvino (BG)', desc: 'Gare promozionali e vivaio giovanile.' },
];

// === STORIA ===
export const STORIA_MILESTONES = [
  { year: 1968, title: 'Fondazione', text: 'Tarcisio Merelli e un gruppo di amici fondano lo Sci Club Orezzo. La prima sede e la pizzeria di famiglia, "La Penzana del Merel". L\'inizio di una storia che dura oltre mezzo secolo.' },
  { year: 1972, title: 'Affiliazione FISI e CSI', text: 'Il club entra nei circuiti federali. I primi atleti gareggiano sulle piste bergamasche. Dai viaggi in autobus alla neve si passa rapidamente allo sci agonistico.' },
  { year: 1983, title: 'Efrem Merelli campione italiano', text: 'Il figlio del fondatore diventa campione italiano di slalom gigante e nel 1985 vince la Coppa Italia. Il coach Giuseppe Panizza plasma la generazione d\'oro.' },
  { year: 1990, title: 'Dominio provinciale', text: 'Il club conquista il Trofeo San Simone battendo Creberg e Radici Group. Vittorie in tutte le categorie, dai Cuccioli ai Seniores. Orezzo e il gigante della provincia.' },
  { year: 2000, title: 'Mille atleti formati', text: 'Oltre 25 sciatori competitivi a livello nazionale. Michela Azzola e Marta Benzoni in nazionale. Luca Agazzi inizia la carriera da allenatore che lo portera a guidare Sofia Goggia.' },
  { year: 2011, title: 'Luca Agazzi in Coppa del Mondo', text: 'L\'ex atleta dello Sci Club Orezzo diventa allenatore di Coppa del Mondo con Lara Gut-Behrami. Poi Canada, due Olimpiadi (PyeongChang 2018, Pechino 2022), e dal 2022 coach di Sofia Goggia.' },
  { year: 2020, title: '50 anni — e il COVID', text: 'Il club celebra mezzo secolo. Elena Oprandi pettorale rosso nel circuito Children. "Ragazzi, torneremo. E sci bergamasco, non mollare." Festa con le vecchie glorie nel 2022.' },
  { year: 2025, title: 'Nuova generazione', text: 'Noe Turani pettorale rosso U14. Simone e Michele Bondioli dominano i Ragazzi. Il 43° Trofeo Merelli Fiorenza e il Trofeo La Penzana del Merel confermano il club tra i riferimenti provinciali.' },
];

// === NOTABLE ATHLETES ===
export const NOTABLE_ATHLETES = [
  { name: 'Efrem Merelli', achievement: 'Campione italiano GS 1983, Coppa Italia 1985. Oggi coordinatore del club', era: '1983' },
  { name: 'Luca Agazzi', achievement: 'Cresciuto allo SC Orezzo. Allenatore Coppa del Mondo, coach di Lara Gut e Sofia Goggia. 2 Olimpiadi.', era: '2000s' },
  { name: 'Michela Azzola', achievement: 'Atleta nazionale, originaria di Albino', era: '2000s' },
  { name: 'Marta Benzoni', achievement: 'Atleta nazionale, originaria di Rovetta', era: '2000s' },
  { name: 'Elena Oprandi', achievement: 'Pettorale rosso circuito Children FISI Bergamo', era: '2020' },
  { name: 'Nicole Giaquinto', achievement: '2a classificata Campionato Children SL', era: '2023' },
  { name: 'Kluh', achievement: '1a assoluta Super G Passo del Tonale', era: '2022' },
  { name: 'Noe Turani', achievement: 'Pettorale rosso U14, vincitore 43° Trofeo Merelli Fiorenza', era: '2025' },
  { name: 'Simone Bondioli', achievement: '1° Ragazzi M al 43° Trofeo Merelli, pettorale rosso definitivo', era: '2026' },
  { name: 'Gabriele De Paola', achievement: '1° U14M Super G Passo del Tonale', era: '2026' },
  { name: 'Nathan Galizzi', achievement: '1° Baby 1 M, Skicross Colere', era: '2026' },
  { name: 'Melissa Caranoni', achievement: '2a U16F al 42° Trofeo Merelli Fiorenza', era: '2025' },
];

// Club legends who attended the 2022 reunion
export const LEGENDS = [
  'Ivano Camozzi', 'Giuseppe Giudici', 'Pino Pozzoni', 'Stefano Gipponi',
  'Cristina Brichetti', 'Aldo Ghislandi', 'Giovanni Filisetti', 'Elena Pecis',
];

// === RESULTS — compact archive ===
export const RESULTS = [
  // 2026
  { date: '2026-03-01', race: 'Skicross Colere — Finale Circuito', athlete: 'Nathan Galizzi', pos: 1, cat: 'Baby 1 M', note: 'Podio', podium: true },
  { date: '2026-03-01', race: 'Skicross Colere — Finale Circuito', athlete: 'Eva Cassi', pos: 2, cat: 'Cuccioli 1 F', podium: true },
  { date: '2026-03-01', race: 'Skicross Colere — Finale Circuito', athlete: 'Simone Bondioli', pos: 2, cat: 'Ragazzi M', note: 'Pettorale rosso definitivo', podium: true },
  { date: '2026-02-17', race: 'Super G Passo del Tonale', athlete: 'Gabriele De Paola', pos: 1, cat: 'U14M', podium: true },
  { date: '2026-02-17', race: 'Super G Passo del Tonale', athlete: 'Achille Rota', pos: 4, cat: 'U16M' },
  { date: '2026-02-17', race: 'Super G Passo del Tonale', athlete: 'Jose Bertasa', pos: 4, cat: 'U14M' },
  { date: '2026-01-06', race: '43° Trofeo Merelli Fiorenza — Lizzola SL', athlete: 'Noe Turani', pos: 1, cat: 'U14M', note: 'Pettorale rosso', podium: true },
  { date: '2026-01-06', race: '43° Trofeo Merelli Fiorenza — Lizzola SL', athlete: 'Simone Bondioli', pos: 1, cat: 'Ragazzi M', podium: true },
  { date: '2026-01-06', race: '43° Trofeo Merelli Fiorenza — Lizzola SL', athlete: 'Michele Bondioli', pos: 3, cat: 'Ragazzi M', podium: true },
  // 2025
  { date: '2025-01-12', race: 'Trofeo La Penzana del Merel — Lizzola SL', athlete: 'Organizzazione SCO', pos: 0, cat: 'Pulcini', note: '100+ atleti in gara' },
  { date: '2025-01-03', race: '42° Trofeo Merelli Fiorenza — Lizzola SL', athlete: 'Noe Turani', pos: 1, cat: 'U14M', note: 'Pettorale rosso', podium: true },
  { date: '2025-01-03', race: '42° Trofeo Merelli Fiorenza — Lizzola SL', athlete: 'Melissa Caranoni', pos: 2, cat: 'U16F', podium: true },
  // 2024
  { date: '2024-03-01', race: 'Super G Passo del Tonale', athlete: 'Atleti SC Orezzo', pos: 0, cat: 'Children', note: 'Buoni risultati (A&G Chemical)' },
  // 2023
  { date: '2023-02-01', race: 'Campionato Children — SL', athlete: 'Nicole Giaquinto', pos: 2, cat: 'Children F', note: '2a a 2.23"', podium: true },
  // 2022
  { date: '2022-11-28', race: 'Festa delle Vecchie Glorie — Orezzo', athlete: 'Tutto il club', pos: 0, cat: 'Evento', note: 'Omaggio a Giuseppe Panizza' },
  { date: '2022-01-29', race: 'Super G Passo del Tonale', athlete: 'Kluh', pos: 1, cat: 'Allieve F', note: '1a assoluta', podium: true },
  { date: '2022-01-29', race: 'Super G Passo del Tonale', athlete: 'Merelli', pos: 4, cat: 'Children' },
  // 2020
  { date: '2020-01-26', race: 'Trofeo Neveplast Super G — Tonale', athlete: 'Elena Oprandi', pos: 1, cat: 'Children F', note: 'Pettorale rosso provinciale', podium: true },
  { date: '2020-01-26', race: 'Trofeo Neveplast Super G — Tonale', athlete: 'Classifica societa', pos: 2, cat: 'Societa', note: '2a dietro Radici Group' },
  // ~2010 — Trofeo San Simone
  { date: '2010-03-01', race: 'Trofeo San Simone — GS Provinciale', athlete: 'Sci Club Orezzo', pos: 1, cat: 'Societa', note: '1° assoluto, davanti a Creberg e Radici', podium: true },
  { date: '2010-03-01', race: 'Trofeo San Simone — GS Provinciale', athlete: 'Federica Cavenasi', pos: 1, cat: 'Cucciole F', podium: true },
  { date: '2010-03-01', race: 'Trofeo San Simone — GS Provinciale', athlete: 'Guido Colombi', pos: 1, cat: 'Cuccioli M', podium: true },
  { date: '2010-03-01', race: 'Trofeo San Simone — GS Provinciale', athlete: 'Marta Bordogni', pos: 1, cat: 'Seniores F', podium: true },
  { date: '2010-03-01', race: 'Trofeo San Simone — GS Provinciale', athlete: 'Luca Agazzi', pos: 1, cat: 'Seniores M', podium: true },
  // Historical
  { date: '1985-01-01', race: 'Coppa Italia Sci Alpino', athlete: 'Efrem Merelli', pos: 1, cat: 'Assoluto', note: 'Vittoria Coppa Italia', podium: true },
  { date: '1983-01-01', race: 'Campionato Italiano GS', athlete: 'Efrem Merelli', pos: 1, cat: 'Assoluto', note: 'Campione italiano', podium: true },
];

// === FEATURED EVENT ===
export const FEATURED_EVENT = {
  name: 'Trofeo La Penzana del Merel',
  subtitle: 'Circuito Provinciale FISI Bergamo',
  date: 'Stagione 2025/2026',
  location: 'Lizzola, Valbondione (BG)',
  description: 'Slalom Speciale per la categoria Pulcini, organizzato dallo Sci Club Orezzo sulla pista "Due Baite". Oltre 100 giovani atleti in gara sulle nevi delle Orobie.',
  categories: 'Baby, Cuccioli, Pulcini',
};

// === GALLERY ===
export const GALLERY_IMAGES = [
  { src: '/img/gruppo.jpg', alt: 'Il gruppo dello Sci Club Orezzo', caption: 'La squadra' },
  { src: '/img/gara-gigante.jpeg', alt: 'Gara di Slalom Gigante 2017', caption: 'Gigante 2017' },
  { src: '/img/gara-lizzola.jpg', alt: 'Gara a Lizzola 2017', caption: 'Lizzola 2017' },
  { src: '/img/event-2019-1.jpg', alt: 'Festa 50 anni Sci Club Orezzo', caption: '50 anni' },
  { src: '/img/event-2019-2.jpg', alt: 'Festa 50 anni Sci Club Orezzo', caption: '50 anni' },
  { src: '/img/event-2019-3.jpg', alt: 'Festa 50 anni Sci Club Orezzo', caption: '50 anni' },
  { src: '/img/event-2019-4.jpg', alt: 'Festa 50 anni Sci Club Orezzo', caption: '50 anni' },
  { src: '/img/event-2019-5.jpg', alt: 'Festa 50 anni Sci Club Orezzo', caption: '50 anni' },
  { src: '/img/event-2019-6.jpg', alt: 'Festa 50 anni Sci Club Orezzo', caption: '50 anni' },
  { src: '/img/event-2019-7.jpg', alt: 'Festa 50 anni Sci Club Orezzo', caption: '50 anni' },
  { src: '/img/event-2019-8.jpg', alt: 'Festa 50 anni Sci Club Orezzo', caption: '50 anni' },
  { src: '/img/event-2019-9.jpg', alt: 'Festa 50 anni Sci Club Orezzo', caption: '50 anni' },
];
