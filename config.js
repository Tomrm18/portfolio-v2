module.exports = {
  siteTitle: 'TM',
  manifestName: 'Resume',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-resume/`, // This path is subpath of your hosting https://domain/portfolio
  firstName: 'Thomas',
  lastName: 'Maguire',
  about:
    'I am an undergraduate Computer Science student at the University of Newcastle (UON) and Software Engineer with a passion for developing and building innovative solutions to solve real-world problems.',
  // social
  socialLinks: [
    {
      icon: 'fab fa-github',
      name: 'Github',
      url: 'https://github.com/Tomrm18',
    },
    {
      icon: 'fab fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/thomas-maguire018/',
    },
    {
      icon: 'far fa-file',
      name: 'Resume',
      url: '',
    },
  ],
  email: 'tmaguire2002@yahoo.com.au',
  experience: [
    {
      company: 'Lockheed Martin Australia',
      role: 'Software Engineer Intern',
      startDate: 'Nov 2022',
      endDate: 'Current',
      priority: '',
      tasks: [
        'Developed Mission-critical systems within an innovative world-first project.',
        'Utilised Kubernetes to deploy and manage applications in a micro-services environment.'
      ],
      imageName: 'lockheed_martin',
      hidden: false,
    },
    {
      company: 'Schenck Process',
      role: 'R&D Digital Engineer Intern',
      startDate: 'July 2022',
      endDate: 'Dec 2022',
      priority: '',
      tasks: [
        'Refactored and transformed demo Python Application to Fully-featured C++ application.',
        'Took charge of project and utilised Atlassian suite of project management tools (Jira, Confluence) to ensure project milestones and deadlines were met.',
        'Successfully delivered application to customer.'
      ],
      imageName: 'schenck_process',
      hidden: false,
    },
    {
      company: 'Gymetrix',
      role: 'Contract Mobile App Developer',
      startDate: 'Apr 2022',
      endDate: 'Jan 2022',
      priority: '',
      tasks: [
        'Developed secure and performant customer facing mobile application using React Native and TypeScript.',
        'Enabled secure login and authentication via Encryption and Biometrics.',
        'Established secure API connections to a fully customised backend to pull and render data from.',
      ],
      imageName: 'gymetrix',
      hidden: false,
    },
    {
      company: 'The University of Newcastle',
      role: 'IT Client Support Assistant',
      startDate: 'Jan 2022',
      endDate: 'July 2022',
      priority: '',
      tasks: [
        'Provided efficient and swift technological support to customers on behalf of the University.',
        'Updated IT knowledge-base articles and documentation, ensuring IT Staff can access up-to-date information in a readable and reliable method. '
      ],
      imageName: 'uon',
      hidden: false,
    },
  ],
  education: [
    {
      school: 'The University of Newcastle',
      items: [
        {
          title: 'Bachelor of Computer Science',
          startDate: 'Feb 2021',
          endDate: 'Dec 2023',
          priority: 'Full-time',
        },
        {
          title: 'CESE Summer Research Scholarship',
          startDate: 'Nov 2022',
          endDate: 'Feb 2023',
          priority: 'Part-time',
        },
      ],
      imageName: 'uon',
    },
  ],
  extracurriculars: {
    studentClubs: [
      {
        name: 'The University of Newcastle Computing Society (UONCS)',
        title: 'Founder & Vice President',
        date: {
          start: 2022,
          end: 2023,
        },
      },
    ],
    personProjects: [],
  },
  interests: [
    'I have a deep passion for Software Engineering. Majority of my experience has been in Full Stack Development, however I am still exploring other area such as Systems Engineering, Application Development, and Mobile App Developemnt.',
  ],
};
