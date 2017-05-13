const $ = (queryString) => document.querySelector(queryString);

const shuffle = (array) => [...array].sort(() => 0.5 - Math.random());

let shuffledPeeps = [];

const grabSomePeeps = () => {
  if (shuffledPeeps.length < 3) {
    shuffledPeeps = shuffle(peeps);
  }

  $('#a').innerHTML = shuffledPeeps.pop();
  $('#b').innerHTML = shuffledPeeps.pop();
  $('#c').innerHTML = shuffledPeeps.pop();
};

const peeps = [
  'Al Roker',
  'Adam Levine',
  'Adele',
  'Alicia Keys',
  'Amanda Bynes',
  'Amanda Seyfried',
  'America Ferrera',
  'Amy Adams',
  'Amy Winehouse',
  'Andrew Garfield',
  'Angelina Jolie',
  'Anna Nicole Smith',
  'Anna Paquin',
  'Anne Hathaway',
  'Ashlee Simpson',
  'Ashley Greene',
  'Ashley Olsen',
  'Ashley Tisdale',
  'Ashton Kutcher',
  'Avril Lavigne',
  'Ben Affleck',
  'Beyoncé Knowles',
  'Blake Lively',
  'Blake Shelton',
  'Brad Paisley',
  'Brad Pitt',
  'Bradley Cooper',
  'Britney Spears',
  'Brody Jenner',
  'Brooke Shields',
  'Bruce Willis',
  'Céline Dion',
  'Cameron Diaz',
  'Carmen Electra',
  'Carrie Underwood',
  'Cate Blanchett',
  'Catherine Zeta-Jones',
  'Channing Tatum',
  'Charlie Sheen',
  'Charlize Theron',
  'Chris Brown',
  'Chris Hemsworth',
  'Chris Pine',
  'Chris Pratt',
  'Christian Bale',
  'Christina Aguilera',
  'Christina Applegate',
  'Claire Danes',
  'Clay Aiken',
  'Colin Farrell',
  'Colin Firth',
  'Courteney Cox',
  'Dakota Fanning',
  'Daniel Craig',
  'Daniel Radcliffe',
  'David Archuleta',
  'David Beckham',
  'David Cook',
  'Demi Lovato',
  'Demi Moore',
  'Denise Richards',
  'Denzel Washington',
  'Sean Combs',
  'Drew Barrymore',
  'Ellen DeGeneres',
  'Emily Blunt',
  'Emma Roberts',
  'Emma Stone',
  'Emma Watson',
  'Eva Longoria',
  'Eva Mendes',
  'Evan Rachel Wood',
  'Faith Hill',
  'Fergie',
  'Freddie Mercury',
  'George Clooney',
  'Gerard Butler',
  'Gisele Bündchen',
  'Gwen Stefani',
  'Gwyneth Paltrow',
  'Halle Berry',
  'Hayden Panettiere',
  'Heath Ledger',
  'Heather Locklear',
  'Heidi Klum',
  'Heidi Montag',
  'Hilary Duff',
  'Hugh Jackman',
  'Isla Fisher',
  'Jake Gyllenhaal',
  'Jason Schwartzman',
  'James Franco',
  'Jamie Lynn Spears',
  'Janet Jackson',
  'January Jones',
  'Jennifer Aniston',
  'Jennifer Garner',
  'Jennifer Hudson',
  'Jennifer Lawrence',
  'Jennifer Lopez',
  'Jenny McCarthy',
  'Jessica Alba',
  'Jessica Biel',
  'Jessica Chastain',
  'Jessica Simpson',
  'Joe Jonas',
  'Joel Madden',
  'John Mayer',
  'John Oliver',
  'Johnny Depp',
  'Jon Hamm',
  'Jonas Brothers',
  'Jordin Sparks',
  'Josh Hartnett',
  'Jude Law',
  'Julia Louis-Dreyfus',
  'Julia Roberts',
  'Justin Bieber',
  'Justin Timberlake',
  'Kanye West',
  'Kate Beckinsale',
  'Kate Bosworth',
  'Kate Gosselin',
  'Kate Hudson',
  'Princess Kate',
  'Kate Moss',
  'Kate Winslet',
  'Katherine Heigl',
  'Katie Holmes',
  'Katy Perry',
  'Keanu Reeves',
  'Keira Knightley',
  'Keith Urban',
  'Kelly Clarkson',
  'Kenny Chesney',
  'Keri Russell',
  'Kevin Federline',
  'Khloé Kardashian',
  'Kim Kardashian',
  'Kirsten Dunst',
  'Kirstie Alley',
  'Kourtney Kardashian',
  'Kristen Bell',
  'Kristen Stewart',
  'Kristin Cavallari',
  'Lady Gaga',
  'Lauren Conrad',
  'LeAnn Rimes',
  'Leighton Meester',
  'Leonardo DiCaprio',
  'Liam Hemsworth',
  'Lindsay Lohan',
  'Liv Tyler',
  'Lucy Liu',
  'Madonna',
  'Maggie Gyllenhaal',
  'Mandy Moore',
  'Mariah Carey',
  'Mario Lopez',
  'Mark Wahlberg',
  'Mary-Kate Olsen',
  'Matt Damon',
  'Matthew McConaughey',
  'Megan Fox',
  'Michael Jackson',
  'Michelle Obama',
  'Michelle Williams',
  'Mila Kunis',
  'Miley Cyrus',
  'Milo Yiannopolous', // House rule: Milo *always* has to be killed.
  'Miranda Lambert',
  'Mischa Barton',
  'Naomi Campbell',
  'Naomi Watts',
  'Natalie Portman',
  'Neil Patrick Harris',
  'Nicole Kidman',
  'Nicole Richie',
  'Olivia Wilde',
  'Oprah Winfrey',
  'Orlando Bloom',
  'Owen Wilson',
  'Pamela Anderson',
  'Paris Hilton',
  'Patrick Dempsey',
  'Paula Abdul',
  'Penélope Cruz',
  'Penn Badgley',
  'Pete Wentz',
  'Pink',
  'Prince Harry',
  'Prince William',
  'Queen Latifah',
  'Rachael Ray',
  'Rachel Bilson',
  'Rachel McAdams',
  'Rebecca Romijn',
  'Reese Witherspoon',
  'Renée Zellweger',
  'Rihanna',
  'Robert Downey Jr.',
  'Robert Pattinson',
  'Ron Howard',
  'Rooney Mara',
  'Rosario Dawson',
  'Rosie O’Donnell',
  'Ryan Gosling',
  'Ryan Phillippe',
  'Ryan Reynolds',
  'Ryan Seacrest',
  'Salma Hayek',
  'Sandra Bullock',
  'Sandra Oh',
  'Sarah Jessica Parker',
  'Sarah Michelle Gellar',
  'Scarlett Johansson',
  'Selena Gomez',
  'Shakira',
  'Shania Twain',
  'Sheryl Crow',
  'Shia LaBeouf',
  'Simon Cowell',
  'Sofia Vergara',
  'Taylor Lautner',
  'Taylor Swift',
  'Teri Hatcher',
  'Tiger Woods',
  'Tim McGraw',
  'Tina Fey',
  'Tom Brady',
  'Tom Cruise',
  'Tori Spelling',
  'Tyra Banks',
  'Usher',
  'Vanessa Williams',
  'Victoria Beckham',
  'Vince Vaughn',
  'Whitney Port',
  'Will Smith',
  'Winona Ryder',
  'Zac Efron',
  'Zoë Saldana',
];

grabSomePeeps();
