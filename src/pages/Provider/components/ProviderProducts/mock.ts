import { Product } from 'src/utils';

export const providerProducts: Product[] = [
  {
    __typename: 'products',
    base_price_sol: 40,
    description: 'This card allow to you create a Storybook',
    id: '1',
    image_url:
      'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Yugioh_Card_Back.jpg/250px-Yugioh_Card_Back.jpg',
    name: 'Storybook test card',
    available: 5,
    details: 'Nueva',
    provider_id: '1',
    unit_system: 'S',
    with_offer: false,
  },
  {
    __typename: 'products',
    base_price_sol: 40,
    description:
      'This card fix all the bugs of your program and made it compile quickly',
    id: '2',
    image_url:
      'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Yugioh_Card_Back.jpg/250px-Yugioh_Card_Back.jpg',
    name: "Hackerman's card",
    available: 4,
    details: 'Used to develop this page',
    provider_id: '2',
    unit_system: 'S',
    with_offer: false,
  },
];
