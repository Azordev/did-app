import { Product } from 'src/utils';

export const providerProducts: Product[] = [
  {
    __typename: 'products',
    base_price_sol: 40,
    description: 'Esta carta te permite probar una storybook',
    id: '1',
    image_url:
      'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Yugioh_Card_Back.jpg/250px-Yugioh_Card_Back.jpg',
    name: 'Carta de prueba de storybook',
    available: 1,
    details: 'Nueva',
    provider_id: '1',
    unit_system: 'S',
    with_offer: false,
  },
  {
    __typename: 'products',
    base_price_sol: 40,
    description:
      'Esta carta elimina todos los bugs de tu programa y hace que compile rapido',
    id: '2',
    image_url:
      'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Yugioh_Card_Back.jpg/250px-Yugioh_Card_Back.jpg',
    name: 'Carta de hackerman',
    available: 4,
    details: 'Usada en esta pagina',
    provider_id: '2',
    unit_system: 'S',
    with_offer: false,
  },
];
