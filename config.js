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
    'I am an undergraduate Computer Science student and Software Engineer with a passion for developing and building innovative solutions to solve real-world problems.',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/Tomrm18',
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/thomas-maguire018/',
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
      tasks: [],
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
        'Developed software application in C++, refactored from Python codebase to C++.',
        'Employed project management techniques while utilising Atlassian software including Jira, Confluence, and Bitbucket, to ensure each development milestone is tracked and completed on time. ',
        'Leveraged problem solving skills while developing an application throughout its full product lifecycle.',
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
        'Developed secure and performant customer facing gym application using React Native and TypeScript.',
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
        'Utilised University customised ServiceNow platform to manage multiple client tickets.',
        'Communicated with clients, enabling quick and effective customer support.',
        'Updated IT articles ensuring IT Staff can access up-to-date information in a readable and reliable way.',
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
          startDate: 'Feb 2020',
          endDate: 'Current',
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
    // {
    //   school: 'The University of Newcastle',
    //   degree: 'Bachelor of Computer Science',
    //   startDate: 'Feb 2020',
    //   endDate: 'Current',
    //   priority: 'Full-time',
    //   imageName: 'uon',
    // },
    // {
    //   school: 'The University of Newcastle',
    //   degree: 'CESE Summer Research Scholarship',
    //   startDate: 'November 2022',
    //   endDate: 'Current',
    //   priority: 'Part-time',
    //   imageName: 'uon',
    // },
  ],
  extracurriculars: {
    studentClubs: [
      {
        name: 'The University of Newcastle Computing Society (UONCS)',
        title: 'Founder & Vice President',
        date: {
          start: 2022,
          end: 'Current',
        },
      },
    ],
    personProjects: [],
  },
  interests: [
    'I have a deep passion for Software Engineering. Majority of my experience has been in Full Stack Development, however I am still exploring other area such as Systems Engineering, Application Development, and Mobile App Developemnt.',
  ],
};
