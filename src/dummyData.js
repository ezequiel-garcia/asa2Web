export const events = [
  {
    id: 1,
    date: new Date(2023, 10, 7),
    time: '10:25',

    title: 'Asado ',
    location: 'Hertzel 20, Tel Aviv',

    description: 'Asadito con los pi',
    image:
      'https://cdn.pixabay.com/photo/2019/07/08/06/41/fire-4323960__480.jpg',
    shareBills: true,
    shareTasks: true,
    participants: [
      { name: 'pepe', id: '1' },
      { name: 'juan', id: '2' },
      { name: 'Tu vieja', id: '3' },
      { name: 'ags', id: '4' },
    ],
  },
  {
    id: 2,
    time: '10:25',
    date: new Date(2022, 7, 25),
    title: 'Camping',
    location: 'Hertzel 20, Tel Aviv',

    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed elit tristique, bibendum magna ac, dapibus nunc. Ut ornare venenatis.',
    image:
      'https://cdn.pixabay.com/photo/2017/06/17/03/17/gongga-snow-mountain-2411069__480.jpg',
    shareBills: true,
    shareTasks: true,
  },

  {
    id: 3,
    time: '10:25',
    date: new Date(2023, 6, 6),
    title: 'Fiesta',
    location: 'Hertzel 20, Tel Aviv',

    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed elit tristique, bibendum magna ac, dapibus nunc. Ut ornare venenatis.',

    image:
      'https://cdn.pixabay.com/photo/2018/01/11/11/41/carnival-3075912__340.jpg',
    shareBills: true,
    shareTasks: true,
  },
  {
    id: 4,
    time: '10:25',
    date: new Date(2022, 6, 15),
    title: 'Previa',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id.',
    location: 'Hertzel 20, Tel Aviv',
    image:
      'https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446__340.jpg',
    shareBills: true,
    shareTasks: true,
  },

  {
    id: 5,
    time: '10:25',
    date: new Date(2022, 4, 2),
    title: 'Asadito',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id.',
    location: 'Hertzel 20, Tel Aviv',

    image:
      'https://cdn.pixabay.com/photo/2019/07/08/06/41/fire-4323960__480.jpg',
    shareBills: true,
    shareTasks: true,
  },
  {
    id: 6,
    time: '10:25',
    location: 'Hertzel 20, Tel Aviv',

    date: new Date(2022, 8, 24),
    title: 'Moro Homo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed elit tristique, bibendum magna ac, dapibus nunc. Ut ornare venenatis.',
    image:
      'https://cdn.pixabay.com/photo/2016/09/09/23/27/the-ostrich-1658267__340.jpg',
    shareBills: true,
    shareTasks: true,
  },
];

export const users = [
  {
    name: 'Josh',
    email: 'pepe@pepe.com',
    profilePicture:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    id: 1,
  },
  {
    name: 'Laura',
    email: 'laura@pepe.com',
    profilePicture:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    id: 2,
  },
];
