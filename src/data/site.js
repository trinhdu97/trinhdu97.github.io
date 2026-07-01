// Single source of truth for site content. Edit here; the page renders from it.

export const profile = {
  name: 'Xuan Du Trinh',
  role: 'Ph.D. Student in Computer Science',
  affiliation: 'Stony Brook University',
  location: 'Stony Brook, NY, USA',
  email: 'xtrinh@cs.stonybrook.edu',
  cv: '/files/Xuan_Du_Trinh_CV.pdf',
  socials: [
    { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=yx9RYz0AAAAJ&hl=en' },
    { label: 'GitHub', url: 'https://github.com/trinhdu97' },
    { label: 'X / Twitter', url: 'https://twitter.com/XuanDu97' },
    { label: 'Email', url: 'mailto:xtrinh@cs.stonybrook.edu' },
  ],
};

// A short, honest bio. Keep claims measured.
export const aboutParagraphs = [
  `I am Xuan Du Trinh, a Ph.D. student conducting research in Quantum Information at the
   Department of Computer Science, Stony Brook University. I am particularly interested in
   physics questions in entanglement theory.`,
  `Previously I completed master's degrees in Quantum Information at Sorbonne Université
   (2023) and in Theoretical Physics at the ENS de Paris (2022), after graduating from
   the Engineering Program at École Polytechnique (X) in 2021.`,
  `Outside of research I spend a lot of time behind a camera. The photography section
   below collects places I have travelled to and moments worth keeping.`,
];

export const aboutQuote = {
  en: `Life is a stop between two lives … and your body is a bus you take to the next one, where you descend and go on another.`,
  fr: `La vie n'est pas quelque chose de différent qu'un arrêt entre deux vies… et ton corps est un bus qui t'emmène à la prochaine vie, où tu descends pour prendre un(e) autre.`,
};

// Photos used across the About collage.
export const lifePhotos = [
  { src: '/images/profile.jpeg', alt: 'Portrait' },
];

export const researchInterests = [
  'Quantum information & computation',
  'Verification of quantum circuits',
  'Quantum learning & channel estimation',
  'Entanglement and nonlocality',
];

export const researchIntro =
  `I work in quantum information, on the verification of quantum circuits, quantum
   channel learning, entanglement and nonlocality certification, and quantum network
   protocols.`;

// Author names: my own name is wrapped so the page can bold it.
const ME = 'Xuan Du Trinh';

export const publications = [
  {
    title: 'Rethinking Quantum Network Design Using a Verification-Based Quantum Transmission Protocol',
    authors: `Yiming Zeng, Zhengyu Wu, ${ME}, Yuanyuan Yang, Nengkun Yu, Aruna Balasubramanian`,
    venue: 'IEEE ICDCS 2026',
    year: '2026',
    award: 'Distinguished Paper Award',
    summary: 'A verification-based quantum transmission (VBQT) protocol that treats noise as a first-class design goal, coupling entanglement verification with hop-by-hop teleportation so that only high-fidelity pairs are used across repeaters, substantially improving the fidelity and goodput of multi-hop quantum communication.',
    url: '',
  },
  {
    title: 'Absorption Capacity of Separable Noise: Bell-Mixing Thresholds on Separability and Teleportation',
    authors: `${ME}`,
    venue: 'arXiv:2606.31243',
    year: '2026',
    summary: 'Closed-form thresholds for how much entanglement a separable noise state can absorb in a Bell-mixing line before the state becomes entangled and reaches a teleportation advantage over classical strategies.',
    url: 'https://doi.org/10.48550/arXiv.2606.31243',
  },
  {
    title: 'On the Emergence of Classical Stochasticity',
    authors: `${ME}, Ismaël Septembre, Hai-Chau Nguyen`,
    venue: 'arXiv:2602.04633',
    year: '2026',
    summary: 'Examines how classical stochasticity emerges from a quantum system governed by a Pauli-type master equation, showing that assuming the system has a definite state at intermediate times, though not automatically justified, is essential for computing stochastic quantities such as persistence and first arrival times.',
    url: 'https://doi.org/10.48550/arXiv.2602.04633',
  },
  {
    title: 'Manjushri: A Tool for Equivalence Checking of Quantum Circuits',
    authors: `${ME}, Meghana Sistla, Nengkun Yu, Thomas Reps`,
    venue: 'arXiv:2601.22372',
    year: '2026',
    summary: 'A tool for equivalence checking of quantum circuits, especially efficient for low-depth circuits with a large number of qubits, benchmarked against other methods and under active development.',
    url: 'https://doi.org/10.48550/arXiv.2601.22372',
  },
  {
    title: 'Scalable Equivalence Checking and Verification of Shallow Quantum Circuits',
    authors: `Nengkun Yu, ${ME}, Thomas Reps`,
    venue: 'Proc. ACM Program. Lang. (OOPSLA 2)',
    year: '2025',
    summary: 'Algorithms for checking equivalence and verifying shallow quantum circuits at scale.',
    url: 'https://doi.org/10.1145/3763153',
  },
  {
    title: 'Adaptivity Is Not Helpful for Pauli Channel Learning',
    authors: `${ME}, Nengkun Yu`,
    venue: 'Quantum 9, 1864',
    year: '2025',
    summary: 'Shows that adaptive strategies do not improve Pauli channel learning when maximally entangled states are available, and provides an optimal algorithm and the complexity of the problem in this setting.',
    url: 'https://doi.org/10.22331/q-2025-09-24-1864',
  },
  {
    title: 'Entanglement Certification by Measuring Nonlocality',
    authors: `${ME}, Zhengyu Wu, Junlin Bai, Huan-Hsin Tseng, Nengkun Yu, Aruna Balasubramanian`,
    venue: 'arXiv:2507.18066',
    year: '2025',
    summary: 'Certifying entanglement by measuring nonlocality, with applications to quantum networks.',
    url: 'https://doi.org/10.48550/arXiv.2507.18066',
  },
];

// Photography / travel / memories. Captions are placeholders; edit freely.
export const gallery = [
  {
    src: '/images/Narita-Airport-Japan.jpeg',
    place: 'Narita Airport, Japan',
    year: '',
    caption: '',
  },
  {
    src: '/images/Cornell-University-Ithaca-2024.jpeg',
    place: 'Cornell University, Ithaca, New York',
    year: '2024',
    caption: 'A trip to Ithaca.',
  },
  {
    src: '/images/Rainier-Mount-Washington-CVPR-2024-trip.jpeg',
    place: 'Mount Rainier National Park, Washington',
    year: '2024',
    caption: 'Snow in summer.',
  },
  {
    src: '/images/Rainier-Mount-Washington-CVPR-2024-2.jpeg',
    place: 'Mount Rainier National Park, Washington',
    year: '2024',
    caption: 'Snow in summer.',
  },
  {
    src: '/images/Rainier-Mount-Washington-CVPR-2024-3.jpeg',
    place: 'Mount Rainier National Park, Washington',
    year: '2024',
    caption: 'Snow in summer.',
  },
  {
    src: '/images/Rainier-Mount-Washington-CVPR-2024-4.jpeg',
    place: 'Mount Rainier National Park, Washington',
    year: '2024',
    caption: 'Snow in summer.',
  },
  {
    src: '/images/Rainier-Mount-Washington-CVPR-2024-5.jpeg',
    place: 'Mount Rainier National Park, Washington',
    year: '2024',
    caption: 'Snow in summer.',
  },
  {
    src: '/images/Rainier-Mount-Washington-CVPR-2024-6.jpeg',
    place: 'Mount Rainier National Park, Washington',
    year: '2024',
    caption: 'Snow in summer.',
  },
  {
    src: '/images/Port-Orchard-Bremerton-Washington.jpeg',
    place: 'Port Orchard, Washington',
    year: '2024',
    caption: 'From the CVPR trip.',
  },
  {
    src: '/images/Rich-Passage-Bremerton-Washington.jpeg',
    place: 'Rich Passage, Bremerton, Washington',
    year: '2024',
    caption: 'From the CVPR trip.',
  },
  {
    src: '/images/West-Meadow-Beach-Long-Island.jpeg',
    place: 'West Meadow Beach, New York',
    year: '',
    caption: 'Sunset breaking on the shore.',
  },
  {
    src: '/images/West-Meadow-Beach-Long-Island-2.jpeg',
    place: 'West Meadow Beach, New York',
    year: '',
    caption: '',
  },
  {
    src: '/images/Robert-Moses-State-Park-Babylon-New-York.jpeg',
    place: 'Robert Moses State Park, Babylon, New York',
    year: '',
    caption: '',
  },
  {
    src: '/images/Cold-Spring-Harbor-Cove-Neck-New-York.jpeg',
    place: 'Cold Spring Harbor, Cove Neck, New York',
    year: '',
    caption: 'Before flying to Singapore for OOPSLA 2025.',
  },
  {
    src: '/images/Salt-Fields-Bach-Long-Nam-Dinh-Vietnam.jpeg',
    place: 'Bạch Long, Nam Định, Vietnam',
    year: '',
    caption: "The salt fields of Bạch Long, my mother's maternal home village.",
  },
  {
    src: '/images/Hobart-Beach-Eatons-Neck.jpeg',
    place: 'Hobart Beach, Eatons Neck, New York',
    year: '',
    caption: 'Boats and boulders at dusk.',
  },
  {
    src: '/images/Hobart-Beach-Eatons-Neck-2.jpeg',
    place: 'Hobart Beach, Eatons Neck, New York',
    year: '',
    caption: '',
  },
  {
    src: '/images/Jones-Beach-State-Park.jpeg',
    place: 'Jones Beach State Park, New York',
    year: '',
    caption: 'A quiet evening by the ocean.',
  },
  {
    src: '/images/Short-Beach-Nissequogue-New-York.jpeg',
    place: 'Short Beach, Nissequogue, New York',
    year: '',
    caption: 'My first trip with my first car.',
  },
  {
    src: '/images/hero.jpeg',
    place: 'On the train from Nice to Agen, France',
    year: '',
    caption: 'Sunset from the window.',
  },
  {
    src: '/images/Villeneuve-sur-Lot.jpeg',
    place: 'Villeneuve-sur-Lot, France',
    year: '2018',
    caption: 'Summer light over the Lot valley.',
  },
  {
    src: '/images/Rainbow-Villeneuve-sur-Lot.jpeg',
    place: 'Villeneuve-sur-Lot, France',
    year: '',
    caption: 'A rainbow that made everyone stop and look up.',
  },
  {
    src: '/images/Sainte-Livrade-sur-Lot.jpeg',
    place: 'Sainte-Livrade-sur-Lot, France',
    year: '',
    caption: '',
  },
  {
    src: '/images/Octobre-Rose-Sainte-Livrade-sur-Lot-2018.jpeg',
    place: 'Sainte-Livrade-sur-Lot, France',
    year: '2018',
    caption: 'Octobre Rose, my first month abroad.',
  },
  {
    src: '/images/First-Christmas-Sainte-Livrade-sur-Lot.jpeg',
    place: 'Sainte-Livrade-sur-Lot, France',
    year: '',
    caption: 'First Christmas in France with la famille DE CRUZ, a lot of red wine and joy.',
  },
  {
    src: '/images/Jardin-du-Luxembourg-Paris-2022.jpeg',
    place: 'Jardin du Luxembourg, Paris, France',
    year: '2022',
    caption: 'Spring while I studied at the ENS de Paris.',
  },
  {
    src: '/images/Musee-du-Louvre-Paris.jpeg',
    place: 'Musée du Louvre, Paris, France',
    year: '',
    caption: "À côté d'une fenêtre du Musée du Louvre.",
  },
  {
    src: '/images/Ecole-Polytechnique-Palaiseau-2019.jpeg',
    place: 'École Polytechnique, Palaiseau, France',
    year: '2019',
    caption: 'My first spring in France.',
  },
  {
    src: '/images/Thien-Vien-Truc-Lam-Villebon-sur-Yvette-2023.jpeg',
    place: 'Thiền Viện Trúc Lâm, Villebon-sur-Yvette, France',
    year: '2023',
    caption: 'La paix intérieure.',
  },
  {
    src: '/images/Moulin-de-Porcheres-Saint-Seurin-sur-l-Isle.jpeg',
    place: 'Saint-Jean-de-Duras, Nouvelle-Aquitaine, France',
    year: '',
    caption: "On the way to Moulin de Porchères, Saint-Seurin-sur-l'Isle, with Régine DE CRUZ and my camarades.",
  },
  {
    src: '/images/Orsay-Ville-France.jpeg',
    place: 'Orsay, France',
    year: '',
    caption: 'Just my last spring in France.',
  },
  {
    src: '/images/1432-Rte-de-Jean-Gay-Sainte-Livrade-sur-Lot-Nouvelle-Aquitaine.png',
    place: 'Sainte-Livrade-sur-Lot, France',
    year: '',
    caption: '1432 Rte de Jean Gay, Nouvelle-Aquitaine.',
  },
  {
    src: '/images/a-game-with-rating-2.png',
    place: 'A ranked game worth keeping',
    year: '',
    caption: 'Some wins from a good night.',
  },
];
