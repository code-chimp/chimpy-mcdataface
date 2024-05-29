import { faker } from '@faker-js/faker';

import IContact from './IContact.ts';

export const setupFactory = (
  input: HTMLInputElement,
  button: HTMLButtonElement,
  output: HTMLTextAreaElement,
): void => {
  button.addEventListener('click', () => {
    let data = dataFactory(Number(input.value));

    output.value = JSON.stringify(data, null, 2);
  });
};

export function dataFactory(x: number): Array<IContact> {
  const avatars = [
    'user-1.jpg',
    'user-2.jpg',
    'user-3.jpg',
    'user-4.jpg',
    'user-5.jpg',
    'user-6.jpg',
  ];
  let result: Array<IContact> = [];

  for (let i = 0; i < x; i++) {
    result.push({
      id: `c${i + 1}`,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: {
        mobile: faker.phone.number(),
        work: faker.phone.number(),
      },
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      postalCode: faker.location.zipCode(),
      country: 'USA',
      avatar: avatars[Math.floor(Math.random() * avatars.length)],
      notes: '',
      createdAt: faker.date.recent().toISOString(),
      updatedAt: null,
    });
  }

  // make it easy to copy
  console.info(result);

  return result;
}
