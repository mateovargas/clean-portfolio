const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/mateovargas',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mateo Vargas',
  role: 'Full Stack Developer',
  description:
    'Software Developer, hobbyist game developer, and traveler. Find me working on code or playing some video games.',
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/mateo-vargas-03896189/',
    github: 'https://github.com/mateovargas',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Star Wars Search',
    description:
      'Search for your favorite characters from the Star Wars extended universe.',
    stack: ['TypeScript', 'React'],
    sourceCode: 'https://github.com/mateovargas/star-wars-search',
    livePreview: 'https://star-wars-search-react.herokuapp.com/',
  },
  {
    name: 'Great Quotes',
    description:
      'Add and sort quotes from famous figures.',
    stack: ['Javascript', 'Firebase', 'React'],
    sourceCode: 'https://github.com/mateovargas/quote-app',
    livePreview: 'https://quote-app-9b5cf.web.app/quotes',
  },
  {
    name: 'Diner Pass',
    description:
      'Sample restaurant application.',
    stack: ['Javascript', 'Firebase', 'React'],
    sourceCode: 'https://github.com/mateovargas/order-app',
    livePreview: 'https://diner-pass.herokuapp.com/',
  },
  {
    name: 'Xenoplague',
    description:
      'Prototype game to interact with the SIR model of epidemics.',
    stack: ['Unity2D', 'C#'],
    sourceCode: 'https://github.com/mateovargas/dissertation',
    livePreview: 'https://mateovargas.itch.io/discrete-sir-games-for-understanding-epidemics'
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Axios',
  'Express',
  'NodeJS',
  'MongoDB',
  'MySQL',
  'Python',
  'Django',
  'Unity',
  'C#',
  'Git',
  'Firebase',
  'Heroku'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mateovargas5@gmail.com',
}

export { header, about, projects, skills, contact }
