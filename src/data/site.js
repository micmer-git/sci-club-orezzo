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
  { name: 'Industria Chimica Panzeri', url: 'https://www.chimicapanzeri.it/', tier: 'main', desc: 'Chimica industriale — Orio al Serio (BG)' },
  { name: 'Kempatex', url: 'https://www.kempatex.it/', tier: 'main', desc: 'Ausiliari chimici per il tessile — Grassobbio (BG)' },
  { name: 'Brembana Service', url: 'https://www.brembanaservice.it/', tier: 'main', desc: 'Revisioni veicoli — Villa d\'Alme (BG)' },
  { name: 'A&G Chemical', url: 'https://aegchem.com/', tier: 'main', desc: 'Detergenti e prodotti chimici' },
  { name: 'Pedretti Serramenti', url: 'https://pedrettiserramenti.it/', tier: 'technical', desc: 'Serramenti in PVC — Endine Gaiano (BG)' },
  { name: 'Hidrodepur', url: 'https://www.hidrodepur.it/', tier: 'supporter', desc: 'Trattamento acque — Levate (BG)' },
];

export const VENUES = [
  { name: 'Monte Pora', location: 'Castione della Presolana (BG)', desc: 'Sede principale delle gare provinciali FISI. Impianti moderni e piste tecniche tra i 1.500 e i 1.880 metri.' },
  { name: 'Lizzola', location: 'Valbondione (BG)', desc: 'Pista "Due Baite". Sede del Trofeo La Penzana del Merel e del Trofeo Merelli Fiorenza, organizzati dallo Sci Club Orezzo.' },
  { name: 'Spiazzi di Gromo', location: 'Gromo (BG)', desc: 'Circuito provinciale e gare giovanili. Comprensorio a misura di famiglia nel cuore della Val Seriana.' },
  { name: 'Selvino', location: 'Selvino (BG)', desc: 'Gare promozionali e vivaio. Storica stazione sciistica dell\'altopiano.' },
  { name: 'Passo del Tonale', location: 'Ponte di Legno (BS)', desc: 'Campionati regionali children e Super G. Ghiacciaio Presena per allenamenti estivi.' },
  { name: 'Colere', location: 'Colere (BG)', desc: 'Pista Bretella Presolana. Ultime tappe del circuito provinciale e Skicross.' },
];

export const STORIA_MILESTONES = [
  { year: 1968, title: 'Fondazione', text: 'Tarcisio Merelli e un gruppo di amici appassionati di sci fondano lo Sci Club Orezzo nella piccola frazione di Orezzo, a Gazzaniga. La prima sede e la pizzeria di famiglia, "La Penzana del Merel".' },
  { year: 1972, title: 'Affiliazione FISI e CSI', text: 'Il club si affilia al CSI e alla FISI, entrando nel circuito delle gare federali. I primi atleti iniziano a gareggiare nei circuiti provinciali bergamaschi.' },
  { year: 1980, title: 'Generazione d\'oro', text: 'Gli anni Ottanta portano i primi grandi successi. Efrem Merelli, figlio del fondatore, diventa campione italiano di slalom gigante nel 1983 e vince la Coppa Italia nel 1985.' },
  { year: 1990, title: 'Dominio provinciale', text: 'Il club conquista il Trofeo San Simone, battendo Creberg e Radici Group nella classifica generale provinciale. Vittorie in tutte le categorie.' },
  { year: 2000, title: 'Mille atleti formati', text: 'In oltre trent\'anni di attivita, il club ha avviato allo sci piu di mille atleti, producendo oltre 25 sciatori competitivi a livello nazionale. Michela Azzola e Marta Benzoni raggiungono il livello nazionale.' },
  { year: 2010, title: 'Struttura moderna', text: 'Nuova organizzazione societaria con 57 atleti agonisti e 118 tesserati. Partnership consolidate con sponsor locali e presenza costante nei campionati regionali e nazionali.' },
  { year: 2020, title: '50 anni di sci — e il COVID', text: 'Il club celebra mezzo secolo di attivita. Elena Oprandi conquista il pettorale rosso nel circuito Children. Il messaggio del presidente: "Ragazzi, torneremo."' },
  { year: 2025, title: 'Trofeo La Penzana del Merel', text: 'Il club organizza a Lizzola lo Slalom Speciale "Trofeo La Penzana del Merel" e il 43° Trofeo Merelli Fiorenza. Noe Turani vince il pettorale rosso U14. Simone e Michele Bondioli dominano i Ragazzi.' },
];

// Notable athletes — all eras
export const NOTABLE_ATHLETES = [
  { name: 'Efrem Merelli', achievement: 'Campione italiano gigante 1983, Coppa Italia 1985, istruttore nazionale', era: '1980s' },
  { name: 'Michela Azzola', achievement: 'Atleta nazionale, originaria di Albino', era: '2000s' },
  { name: 'Marta Benzoni', achievement: 'Atleta nazionale, originaria di Rovetta', era: '2000s' },
  { name: 'Elena Oprandi', achievement: 'Pettorale rosso circuito Children FISI Bergamo', era: '2020' },
  { name: 'Nicole Giaquinto', achievement: '2a classificata Campionato Children SL', era: '2023' },
  { name: 'Noe Turani', achievement: 'Pettorale rosso U14, vincitore 43° Trofeo Merelli Fiorenza', era: '2025-26' },
  { name: 'Simone Bondioli', achievement: '1° Ragazzi M al 43° Trofeo Merelli, pettorale rosso definitivo', era: '2025-26' },
  { name: 'Michele Bondioli', achievement: '3° Ragazzi M, circuito provinciale FISI Bergamo', era: '2025-26' },
  { name: 'Nathan Galizzi', achievement: '1° Baby 1 M, circuito provinciale Colere', era: '2026' },
  { name: 'Gabriele De Paola', achievement: '1° U14M Super G Passo del Tonale', era: '2026' },
  { name: 'Melissa Caranoni', achievement: '2a U16F al 42° Trofeo Merelli Fiorenza', era: '2025' },
  { name: 'Eva Cassi', achievement: '2a Cuccioli 1 F, circuito provinciale', era: '2026' },
  { name: 'Achille Rota', achievement: '4° U16M Super G Passo del Tonale', era: '2026' },
];

// Competition results — 20 years of key results
export const RESULTS = [
  // === 2026 ===
  { date: '2026-03-01', race: 'Skicross Colere — Circuito Provinciale Finale', athlete: 'Nathan Galizzi', position: 1, category: 'Baby 1 M', note: '1° assoluto', podium: true },
  { date: '2026-03-01', race: 'Skicross Colere — Circuito Provinciale Finale', athlete: 'Eva Cassi', position: 2, category: 'Cuccioli 1 F', podium: true },
  { date: '2026-03-01', race: 'Skicross Colere — Circuito Provinciale Finale', athlete: 'Simone Bondioli', position: 2, category: 'Ragazzi M', note: 'Pettorale rosso definitivo', podium: true },
  { date: '2026-02-17', race: 'Super G Passo del Tonale — Circuito Provinciale', athlete: 'Gabriele De Paola', position: 1, category: 'U14M', note: '1° assoluto', podium: true },
  { date: '2026-02-17', race: 'Super G Passo del Tonale — Circuito Provinciale', athlete: 'Achille Rota', position: 4, category: 'U16M' },
  { date: '2026-02-17', race: 'Super G Passo del Tonale — Circuito Provinciale', athlete: 'Jose Bertasa', position: 4, category: 'U14M' },
  { date: '2026-01-12', race: 'SL Trofeo La Penzana del Merel — Lizzola', athlete: 'Squadra Sci Club Orezzo', position: 0, category: 'Organizzazione', note: 'Oltre 100 atleti, Pulcini FISI Bergamo' },
  { date: '2026-01-06', race: '43° Trofeo Merelli Fiorenza — SL Children Lizzola', athlete: 'Noe Turani', position: 1, category: 'Allievi M (U14)', note: 'Pettorale rosso', podium: true },
  { date: '2026-01-06', race: '43° Trofeo Merelli Fiorenza — SL Children Lizzola', athlete: 'Simone Bondioli', position: 1, category: 'Ragazzi M', podium: true },
  { date: '2026-01-06', race: '43° Trofeo Merelli Fiorenza — SL Children Lizzola', athlete: 'Michele Bondioli', position: 3, category: 'Ragazzi M', podium: true },
  { date: '2026-01-06', race: '43° Trofeo Merelli Fiorenza — SL Children Lizzola', athlete: 'Classifica societa', position: 3, category: 'Societa', note: '3° dietro Radici e 13 Clusone' },
  // === 2025 ===
  { date: '2025-01-03', race: '42° Trofeo Merelli Fiorenza — SL Children Lizzola', athlete: 'Noe Turani', position: 1, category: 'U14M', note: 'Pettorale rosso', podium: true },
  { date: '2025-01-03', race: '42° Trofeo Merelli Fiorenza — SL Children Lizzola', athlete: 'Melissa Caranoni', position: 2, category: 'U16F', podium: true },
  { date: '2025-01-12', race: 'SL Trofeo La Penzana del Merel — Lizzola', athlete: 'Squadra Sci Club Orezzo', position: 0, category: 'Organizzazione', note: 'Circuito Provinciale Pulcini' },
  // === 2024 ===
  { date: '2024-01-01', race: 'Circuito Provinciale — Super G Passo del Tonale', athlete: 'Atleti SC Orezzo', position: 0, category: 'Children', note: 'Buoni risultati tecnici al Tonale (A&G Chemical)' },
  // === 2023 ===
  { date: '2023-01-01', race: 'Campionato Children — SL', athlete: 'Nicole Giaquinto', position: 2, category: 'Children F', note: '2a a 2.23" dalla vincitrice', podium: true },
  // === 2020 ===
  { date: '2020-01-26', race: 'Trofeo Neveplast Super G — Passo del Tonale', athlete: 'Elena Oprandi', position: 1, category: 'Children F', note: 'Pettorale rosso circuito provinciale', podium: true },
  { date: '2020-01-26', race: 'Trofeo Neveplast Super G — Passo del Tonale', athlete: 'Orobie Ski Team / Orezzo', position: 2, category: 'Societa', note: '2a societa dietro Radici Group' },
  { date: '2020-11-01', race: '50 anni dello Sci Club Orezzo', athlete: 'Tutto il club', position: 0, category: 'Celebrazione', note: '"Ragazzi, torneremo. E sci bergamasco, non mollare."' },
  // === Super G podium (A&G Chemical sponsor post) ===
  { date: '2022-01-29', race: 'Super G Passo del Tonale', athlete: 'Kluh', position: 1, category: 'Allieve F', note: '1a assoluta — coraggio e tenacia', podium: true },
  { date: '2022-01-29', race: 'Super G Passo del Tonale', athlete: 'Merelli', position: 4, category: 'Children' },
  // === Trofeo San Simone (Eco di Bergamo) ===
  { date: '2010-01-01', race: 'Trofeo San Simone — GS Provinciale', athlete: 'Federica Cavenasi', position: 1, category: 'Cucciole F', podium: true },
  { date: '2010-01-01', race: 'Trofeo San Simone — GS Provinciale', athlete: 'Guido Colombi', position: 1, category: 'Cuccioli M', podium: true },
  { date: '2010-01-01', race: 'Trofeo San Simone — GS Provinciale', athlete: 'Marta Bordogni', position: 1, category: 'Seniores F', podium: true },
  { date: '2010-01-01', race: 'Trofeo San Simone — GS Provinciale', athlete: 'Luca Agazzi', position: 1, category: 'Seniores M', podium: true },
  { date: '2010-01-01', race: 'Trofeo San Simone — GS Provinciale', athlete: 'Sci Club Orezzo', position: 1, category: 'Societa', note: '1° assoluto, davanti a Creberg e Radici', podium: true },
  // === Historical ===
  { date: '1985-01-01', race: 'Coppa Italia — Sci Alpino', athlete: 'Efrem Merelli', position: 1, category: 'Assoluto', note: 'Vittoria Coppa Italia', podium: true },
  { date: '1983-01-01', race: 'Campionato Italiano GS', athlete: 'Efrem Merelli', position: 1, category: 'Assoluto', note: 'Campione italiano slalom gigante', podium: true },
];

export const FEATURED_EVENT = {
  name: 'Trofeo La Penzana del Merel',
  subtitle: 'Circuito Provinciale FISI Bergamo',
  date: 'Stagione 2025/2026',
  location: 'Lizzola, Valbondione (BG)',
  description: 'Slalom Speciale per la categoria Pulcini, organizzato dallo Sci Club Orezzo nell\'ambito del Circuito Provinciale FISI Bergamo. Oltre 100 giovani atleti in gara sulla pista "Due Baite" delle Orobie.',
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
