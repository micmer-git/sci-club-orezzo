// Sci Club Orezzo — Data
// Alpine skiing club, Gazzaniga (BG), founded ~1970

export const SITE = {
  name: 'Sci Club Orezzo',
  fullName: 'ASD Sci Club Orezzo',
  tagline: 'Sci Alpino dal 1970',
  location: 'Gazzaniga (BG)',
  address: 'Via alla Chiesa 4, 24025 Gazzaniga (BG)',
  founded: 1970,
  url: 'https://www.scicluborezzo.com',
  fisi: 'https://www.fisibergamo.it/',
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
  { role: 'Presidente', name: 'Da confermare' },
  { role: 'Vice Presidente', name: 'Da confermare' },
  { role: 'Segretario', name: 'Da confermare' },
  { role: 'Consigliere', name: 'Da confermare' },
];

export const DISCIPLINES = [
  { name: 'Slalom Speciale', icon: '⛷️', desc: 'Tecnica tra i pali stretti' },
  { name: 'Slalom Gigante', icon: '🎿', desc: 'Velocita e precisione nelle curve ampie' },
  { name: 'Super G', icon: '🏔️', desc: 'La combinazione di velocita e tecnica' },
  { name: 'Sci di Fondo', icon: '🏃', desc: 'Resistenza sulle piste nordiche' },
];

export const SPONSORS = [
  { name: 'Chimica Panzeri', url: '#', tier: 'main' },
  { name: 'Kempatex', url: '#', tier: 'main' },
  { name: 'Brembana Service', url: '#', tier: 'main' },
  { name: 'BG Refrattari', url: '#', tier: 'technical' },
  { name: 'Pedretti Serramenti', url: '#', tier: 'technical' },
  { name: 'Hidrodepur', url: '#', tier: 'supporter' },
];

// Key venues where the club competes
export const VENUES = [
  { name: 'Monte Pora', location: 'Castione della Presolana (BG)', desc: 'Sede principale delle gare provinciali' },
  { name: 'Lizzola', location: 'Valbondione (BG)', desc: 'Piste tecniche per slalom e gigante' },
  { name: 'Spiazzi di Gromo', location: 'Gromo (BG)', desc: 'Circuito provinciale e gare giovanili' },
  { name: 'Selvino', location: 'Selvino (BG)', desc: 'Gare promozionali e vivaio' },
  { name: 'Temu', location: 'Ponte di Legno (BS)', desc: 'Campionati regionali children' },
];

// Club milestones
export const STORIA_MILESTONES = [
  { year: 1970, title: 'Fondazione', text: 'Un gruppo di appassionati di sci della frazione di Orezzo, nel comune di Gazzaniga, fonda lo Sci Club Orezzo. Le prime gare sulle piste della bergamasca.' },
  { year: 1980, title: 'Crescita del vivaio', text: 'Il club investe nel settore giovanile, formando generazioni di sciatori sulle piste di Monte Pora, Lizzola e Spiazzi di Gromo.' },
  { year: 1990, title: 'Primi titoli provinciali', text: 'Gli atleti dello Sci Club Orezzo iniziano a dominare i circuiti provinciali FISI, con vittorie in slalom speciale e gigante.' },
  { year: 2000, title: 'Espansione competitiva', text: 'Il club partecipa regolarmente ai campionati regionali e nazionali nelle categorie children e giovani, affermandosi nel panorama lombardo.' },
  { year: 2010, title: 'Struttura moderna', text: 'Nuova organizzazione societaria, partnership con sponsor locali e consolidamento come punto di riferimento per lo sci alpino nella Valle Seriana.' },
  { year: 2020, title: '50 anni di sci', text: 'Mezzo secolo di attivita. Il club celebra cinquant\'anni di passione, tecnica e montagna con una festa nella storica sede di Orezzo.' },
  { year: 2024, title: 'Trofeo Penzana del Merel', text: 'Organizzazione dello Slalom Speciale "Trofeo La Penzana del Merel" per la categoria Pulcini a Lizzola, nell\'ambito del Circuito Provinciale FISI Bergamo.' },
];

// Race categories
export const CATEGORIES = [
  { name: 'Baby', ages: '5-8 anni', desc: 'Primi passi sulla neve' },
  { name: 'Cuccioli', ages: '9-10 anni', desc: 'Approccio alla tecnica' },
  { name: 'Pulcini', ages: '11-12 anni', desc: 'Primi tracciati di slalom' },
  { name: 'Children', ages: '13-15 anni', desc: 'Competizioni regionali e nazionali' },
  { name: 'Giovani', ages: '16-20 anni', desc: 'Alto livello agonistico' },
  { name: 'Seniores', ages: '21+ anni', desc: 'Categoria assoluta' },
  { name: 'Master', ages: '30+ anni', desc: 'Competizioni amatoriali e agonistiche' },
];
