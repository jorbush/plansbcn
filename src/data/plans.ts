export type Plan = {
  id: string;
  date: string; // ISO format or formatted string
  location: string;
  author: string;
  upvotes: number;
  title: {
    ca: string;
    es: string;
    en: string;
  };
  description: {
    ca: string;
    es: string;
    en: string;
  };
};

export const mockPlans: Plan[] = [
  {
    id: '1',
    date: 'Aquest cap de setmana',
    location: 'Gràcia',
    author: 'joan_g',
    upvotes: 42,
    title: {
      ca: 'Vermut electrònica musical a la Plaça del Sol',
      es: 'Vermú electrónico musical en la Plaza del Sol',
      en: 'Electronic music vermouth at Plaça del Sol',
    },
    description: {
      ca: 'Un ambient tranquil i molt de rotllo per començar el diumenge de la millor manera.',
      es: 'Un ambiente tranquilo y muy buen rollo para empezar el domingo de la mejor manera.',
      en: 'A chill atmosphere and great vibes to start your Sunday the best possible way.',
    }
  },
  {
    id: '2',
    date: 'Demà a les 21:00',
    location: 'Poblenou',
    author: 'laura99',
    upvotes: 28,
    title: {
      ca: 'Concert acústic secret a Razzmatazz (Sala 3)',
      es: 'Concierto acústico secreto en Razzmatazz (Sala 3)',
      en: 'Secret acoustic concert at Razzmatazz (Room 3)',
    },
    description: {
      ca: 'Un artista indie local tocarà temes nous en petit comitè.',
      es: 'Un artista indie local tocará temas nuevos en formato íntimo.',
      en: 'A local indie artist will play new tracks in an intimate setting.',
    }
  },
  {
    id: '3',
    date: 'Dissabte 11:00',
    location: 'Sant Antoni',
    author: 'alex_bcn',
    upvotes: 115,
    title: {
      ca: 'Mercat de segona mà i intercanvi de llibres',
      es: 'Mercado de segunda mano e intercambio de libros',
      en: 'Second-hand market and book exchange',
    },
    description: {
      ca: 'Porta els llibres que ja has llegit i canvia\'ls per noves històries. Hi haurà cafè d\'especialitat.',
      es: 'Trae los libros que ya has leído y cámbialos por nuevas historias. Habrá café de especialidad.',
      en: 'Bring the books you\'ve already read and swap them for new stories. Specialty coffee available.',
    }
  },
  {
    id: '4',
    date: 'Diumenge 10:00 – 14:00',
    location: 'Barceloneta',
    author: 'mar_sol',
    upvotes: 77,
    title: {
      ca: 'Esmorzar de pa amb tomàquet davant del mar',
      es: 'Desayuno de pan con tomate frente al mar',
      en: 'Bread with tomato breakfast by the sea',
    },
    description: {
      ca: 'Quedem a la terrassa de sempre. Portem cadascú una cosa: formatge, embotit, suc...',
      es: 'Quedamos en la terraza de siempre. Cada uno trae algo: queso, embutido, zumo...',
      en: 'Meeting at our usual terrace. Everyone brings something: cheese, cold cuts, juice...',
    }
  },
  {
    id: '5',
    date: 'Dissabte 22:30',
    location: 'El Raval',
    author: 'gina_bcn',
    upvotes: 54,
    title: {
      ca: 'Nit de jazz al Bar Marsella',
      es: 'Noche de jazz en el Bar Marsella',
      en: 'Jazz night at Bar Marsella',
    },
    description: {
      ca: 'El bar més antic de Barcelona amb música en directe. Una nit per recordar.',
      es: 'El bar más antiguo de Barcelona con música en directo. Una noche para recordar.',
      en: 'The oldest bar in Barcelona with live music. A night to remember.',
    }
  },
  {
    id: '6',
    date: 'La setmana que ve',
    location: 'Montjuïc',
    author: 'film_bcn',
    upvotes: 31,
    title: {
      ca: 'Cinema a la fresca al castell',
      es: 'Cine de verano en el castillo',
      en: 'Open-air cinema at the castle',
    },
    description: {
      ca: 'Projecció de "El fill d\'en Saül" amb vistes a la ciutat. Porta manta i bona actitud.',
      es: 'Proyección de "El hijo de Saúl" con vistas a la ciudad. Trae manta y buena actitud.',
      en: 'Screening of "Son of Saul" with city views. Bring a blanket and good vibes.',
    }
  },
];
