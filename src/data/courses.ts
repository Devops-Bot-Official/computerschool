export type Level = 'Beginner' | 'Intermediate' | 'Advanced'

export interface Course {
  id: string
  slug: string
  title: string
  category: string
  level: Level
  duration: string
  shortDesc: string
  syllabus: string[]
}

export const courses: Course[] = [
  {
    id: 'c1',
    slug: 'javascript-basics',
    title: 'JavaScript Fundamentals',
    category: 'Web Development',
    level: 'Beginner',
    duration: '8 weeks',
    shortDesc: 'Start building interactive websites using modern JavaScript.',
    syllabus: [
      'JS syntax and basics',
      'DOM manipulation',
      'Events and listeners',
      'Fetch API and async',
      'Intro to tooling'
    ]
  },
  {
    id: 'c2',
    slug: 'react-for-web',
    title: 'React for Web',
    category: 'Web Development',
    level: 'Intermediate',
    duration: '10 weeks',
    shortDesc: 'Component-driven UI with hooks, state, and routing.',
    syllabus: [
      'Components & JSX',
      'State and effects',
      'Routing with react-router',
      'Forms and validation',
      'Project: small SPA'
    ]
  },
  {
    id: 'c3',
    slug: 'python-for-data',
    title: 'Python for Data',
    category: 'Data Science',
    level: 'Beginner',
    duration: '12 weeks',
    shortDesc: 'Learn Python basics and data analysis with pandas.',
    syllabus: [
      'Python syntax',
      'Data structures',
      'Pandas fundamentals',
      'Data visualization',
      'Mini data project'
    ]
  },
  {
    id: 'c4',
    slug: 'machine-learning',
    title: 'Intro to Machine Learning',
    category: 'Data Science',
    level: 'Advanced',
    duration: '12 weeks',
    shortDesc: 'From linear models to basic neural networks.',
    syllabus: [
      'Supervised learning',
      'Model evaluation',
      'Feature engineering',
      'Intro to neural nets',
      'Project: model pipeline'
    ]
  },
  {
    id: 'c5',
    slug: 'ui-ux-foundations',
    title: 'UI/UX Foundations',
    category: 'Design',
    level: 'Beginner',
    duration: '6 weeks',
    shortDesc: 'Design principles, wireframing, and prototyping basics.',
    syllabus: [
      'Design thinking',
      'Color & typography',
      'Wireframes',
      'Prototyping tools',
      'Usability testing'
    ]
  },
  {
    id: 'c6',
    slug: 'devops-basics',
    title: 'DevOps Basics',
    category: 'Operations',
    level: 'Intermediate',
    duration: '8 weeks',
    shortDesc: 'CI/CD, containers, and basic infrastructure automation.',
    syllabus: [
      'Linux fundamentals',
      'Docker & containers',
      'CI/CD pipelines',
      'Infrastructure as code',
      'Monitoring basics'
    ]
  }
]
