const projects = [
  {
    name: 'Scannar (Customer)',
    description: 'Augmented reality pricing solution',
    url: 'https://github.com/Assert-Reconceptualization/ScannAr',
    coverImage: require('./project-photos/scannar-proto-image.png'),
    images: [
      require('./project-photos/scannar-products.png'), 
      require('./project-photos/scannar-ar.png'),
      require('./project-photos/scannar-product.png'),
    ],
  },
  {
    name: 'Scannar (Business)',
    description: 'Augmented reality pricing solution',
    url: 'https://github.com/Assert-Reconceptualization/ScannAr',
    coverImage: require('./project-photos/scannar-ss/scannar-business-login.png'),
    images: [
      require('./project-photos/scannar-ss/scannar-business-no-products.png'),
      require('./project-photos/scannar-ss/scannar-business-create.png'),
      require('./project-photos/scannar-ss/scannar-business-products.png'),
    ],
  },
  {
    name: 'Readr',
    description: 'Reading suggestion / open source reading application',
    url: 'https://github.com/Adopt-A-Pothole/Readr',
    coverImage: require('./project-photos/readr-ss/readr-login.png'),
    images: [
      require('./project-photos/readr-ss/readr-suggestion.png'),
      require('./project-photos/readr-ss/readr-saved.png'),
      require('./project-photos/readr-ss/readr-reader.png'),
    ],
  },
  {
    name: 'Adopt-A-Pothole',
    description: 'This is a crowdfunding application meant to repair the streets of New Orleans. Users can view potholes in their area based on current location, as well as donate to them via PayPal. Users can also report new potholes, which will allow users to start donating to the repair of that pothole.',
    url: 'https://github.com/Adopt-A-Pothole/adopt-a-pothole',
    coverImage: require('./project-photos/adopt-a-pothole-ss/adopt-home.jpg'),
    images: [
      require('./project-photos/adopt-a-pothole-ss/adopt-report.jpg'),
      require('./project-photos/adopt-a-pothole-ss/adopt-map.jpg'),
    ],
  },
];

export default projects;