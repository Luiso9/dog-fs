const dogsData = {
  filters: {
    gender: ['Male', 'Female'],
    color: ['Red', 'Apricot', 'Black', 'Black and White', 'Silver', 'Tan'],
    price: {
      min: null,
      max: null,
    },
    breed: ['Small', 'Medium', 'Large'],
    sortByPopularity: 'asc',
  },
  dogs: [
    {
      name: 'Buddy',
      image: 'https://picsum.photos/id/237/500/500',
      gender: 'Male',
      color: 'Black and White',
      price: 1200,
      breed: 'Medium',
      popularity: 5,
    },
    {
      name: 'Luna',
      image: 'https://picsum.photos/id/225/500/500',
      gender: 'Female',
      color: 'Apricot',
      price: 1500,
      breed: 'Small',
      popularity: 8,
    },
    {
      name: 'Max',
      image: 'https://picsum.photos/id/256/500/500',
      gender: 'Male',
      color: 'Red',
      price: 1000,
      breed: 'Large',
      popularity: 7,
    },
    {
      name: 'Bella',
      image: 'https://picsum.photos/id/268/500/500',
      gender: 'Female',
      color: 'Silver',
      price: 1300,
      breed: 'Medium',
      popularity: 6,
    },
    {
      name: 'Charlie',
      image: 'https://picsum.photos/id/275/500/500',
      gender: 'Male',
      color: 'Tan',
      price: 1100,
      breed: 'Small',
      popularity: 9,
    },
    {
      name: 'Lucy',
      image: 'https://picsum.photos/id/289/500/500',
      gender: 'Female',
      color: 'Black',
      price: 1400,
      breed: 'Large',
      popularity: 4,
    },
    {
      name: 'Cooper',
      image: 'https://picsum.photos/id/293/500/500',
      gender: 'Male',
      color: 'Apricot',
      price: 1600,
      breed: 'Medium',
      popularity: 8,
    },
    {
      name: 'Daisy',
      image: 'https://picsum.photos/id/302/500/500',
      gender: 'Female',
      color: 'Red',
      price: 900,
      breed: 'Small',
      popularity: 7,
    },
    {
      name: 'Rocky',
      image: 'https://picsum.photos/id/315/500/500',
      gender: 'Male',
      color: 'Black and White',
      price: 1250,
      breed: 'Large',
      popularity: 5,
    },
    {
      name: 'Molly',
      image: 'https://picsum.photos/id/328/500/500',
      gender: 'Female',
      color: 'Silver',
      price: 1350,
      breed: 'Medium',
      popularity: 6,
    },
    {
      name: 'Bear',
      image: 'https://picsum.photos/id/337/500/500',
      gender: 'Male',
      color: 'Tan',
      price: 1150,
      breed: 'Small',
      popularity: 9,
    },
    {
      name: 'Sadie',
      image: 'https://picsum.photos/id/348/500/500',
      gender: 'Female',
      color: 'Black',
      price: 1450,
      breed: 'Large',
      popularity: 4,
    },
    {
      name: 'Duke',
      image: 'https://picsum.photos/id/358/500/500',
      gender: 'Male',
      color: 'Apricot',
      price: 1550,
      breed: 'Medium',
      popularity: 8,
    },
    {
      name: 'Lola',
      image: 'https://picsum.photos/id/366/500/500',
      gender: 'Female',
      color: 'Red',
      price: 950,
      breed: 'Small',
      popularity: 7,
    },
    {
      name: 'Zeus',
      image: 'https://picsum.photos/id/374/500/500',
      gender: 'Male',
      color: 'Black and White',
      price: 1300,
      breed: 'Large',
      popularity: 5,
    },
    {
      name: 'Maggie',
      image: 'https://picsum.photos/id/389/500/500',
      gender: 'Female',
      color: 'Silver',
      price: 1400,
      breed: 'Medium',
      popularity: 6,
    },
    {
      name: 'Jack',
      image: 'https://picsum.photos/id/397/500/500',
      gender: 'Male',
      color: 'Tan',
      price: 1200,
      breed: 'Small',
      popularity: 9,
    },
    {
      name: 'Sophie',
      image: 'https://picsum.photos/id/402/500/500',
      gender: 'Female',
      color: 'Black',
      price: 1500,
      breed: 'Large',
      popularity: 4,
    },
    {
      name: 'Toby',
      image: 'https://picsum.photos/id/414/500/500',
      gender: 'Male',
      color: 'Apricot',
      price: 1600,
      breed: 'Medium',
      popularity: 8,
    },
    {
      name: 'Chloe',
      image: 'https://picsum.photos/id/423/500/500',
      gender: 'Female',
      color: 'Red',
      price: 1000,
      breed: 'Small',
      popularity: 7,
    },
    {
      name: 'Oscar',
      image: 'https://picsum.photos/id/436/500/500',
      gender: 'Male',
      color: 'Black and White',
      price: 1250,
      breed: 'Large',
      popularity: 5,
    },
    {
      name: 'Ruby',
      image: 'https://picsum.photos/id/442/500/500',
      gender: 'Female',
      color: 'Silver',
      price: 1350,
      breed: 'Medium',
      popularity: 6,
    },
    {
      name: 'Riley',
      image: 'https://picsum.photos/id/450/500/500',
      gender: 'Male',
      color: 'Tan',
      price: 1150,
      breed: 'Small',
      popularity: 9,
    },
    {
      name: 'Coco',
      image: 'https://picsum.photos/id/457/500/500',
      gender: 'Female',
      color: 'Black',
      price: 1450,
      breed: 'Large',
      popularity: 4,
    },
    {
      name: 'Teddy',
      image: 'https://picsum.photos/id/463/500/500',
      gender: 'Male',
      color: 'Apricot',
      price: 1550,
      breed: 'Medium',
      popularity: 8,
    },
    {
      name: 'Lily',
      image: 'https://picsum.photos/id/473/500/500',
      gender: 'Female',
      color: 'Red',
      price: 950,
      breed: 'Small',
      popularity: 7,
    },
    {
      name: 'Winston',
      image: 'https://picsum.photos/id/485/500/500',
      gender: 'Male',
      color: 'Black and White',
      price: 1300,
      breed: 'Large',
      popularity: 5,
    },
    {
      name: 'Zoe',
      image: 'https://picsum.photos/id/492/500/500',
      gender: 'Female',
      color: 'Silver',
      price: 1400,
      breed: 'Medium',
      popularity: 6,
    },
    {
      name: 'Oliver',
      image: 'https://picsum.photos/id/500/500/500',
      gender: 'Male',
      color: 'Tan',
      price: 1200,
      breed: 'Small',
      popularity: 9,
    },
    {
      name: 'Stella',
      image: 'https://picsum.photos/id/510/500/500',
      gender: 'Female',
      color: 'Black',
      price: 1500,
      breed: 'Large',
      popularity: 4,
    },
    {
      name: 'Leo',
      image: 'https://picsum.photos/id/515/500/500',
      gender: 'Male',
      color: 'Apricot',
      price: 1600,
      breed: 'Medium',
      popularity: 8,
    },
    {
      name: 'Rosie',
      image: 'https://picsum.photos/id/523/500/500',
      gender: 'Female',
      color: 'Red',
      price: 1000,
      breed: 'Small',
      popularity: 7,
    },
    {
      name: 'Milo',
      image: 'https://picsum.photos/id/534/500/500',
      gender: 'Male',
      color: 'Black and White',
      price: 1250,
      breed: 'Large',
      popularity: 5,
    },
    {
      name: 'Lulu',
      image: 'https://picsum.photos/id/541/500/500',
      gender: 'Female',
      color: 'Silver',
      price: 1350,
      breed: 'Medium',
      popularity: 6,
    },
    {
      name: 'Louie',
      image: 'https://picsum.photos/id/548/500/500',
      gender: 'Male',
      color: 'Tan',
      price: 1150,
      breed: 'Small',
      popularity: 9,
    },
    {
      name: 'Penny',
      image: 'https://picsum.photos/id/553/500/500',
      gender: 'Female',
      color: 'Black',
      price: 1450,
      breed: 'Large',
      popularity: 4,
    },
    {
      name: 'Gus',
      image: 'https://picsum.photos/id/563/500/500',
      gender: 'Male',
      color: 'Apricot',
      price: 1550,
      breed: 'Medium',
      popularity: 8,
    },
    {
      name: 'Nala',
      image: 'https://picsum.photos/id/572/500/500',
      gender: 'Female',
      color: 'Red',
      price: 950,
      breed: 'Small',
      popularity: 7,
    },
    {
      name: 'Henry',
      image: 'https://picsum.photos/id/580/500/500',
      gender: 'Male',
      color: 'Black and White',
      price: 1300,
      breed: 'Large',
      popularity: 5,
    },
    {
      name: 'Ellie',
      image: 'https://picsum.photos/id/593/500/500',
      gender: 'Female',
      color: 'Silver',
      price: 1400,
      breed: 'Medium',
      popularity: 6,
    },
  ],
}

export default dogsData
