// Centralized content for the portfolio.
// Edit this file to update any text shown across the site.

export const profile = {
  name: 'Sanjai S',
  initials: 'SS',
  tagline:
    'Biomedical Engineer | AI in Healthcare | Medical Instrumentation Enthusiast | Embedded Systems Developer',
  roles: [
    'Biomedical Engineer',
    'AI Research Enthusiast',
    'Healthcare Technology Developer',
    'Embedded Systems Engineer',
    'Computer Vision Developer',
  ],
  heroSummary:
    'Biomedical Engineer building intelligent healthcare solutions through Artificial Intelligence, Medical Instrumentation, Embedded Systems, and Computer Vision.',
  about: [
    "I am a Biomedical Engineering student passionate about developing intelligent healthcare solutions that combine medical instrumentation, embedded systems, computer vision, and artificial intelligence. My goal is to bridge the gap between healthcare challenges and technology-driven innovations through practical and impactful engineering solutions.",
    'I have hands-on experience in medical equipment maintenance, prosthetic development, image processing, IoT systems, and AI-powered healthcare applications. I enjoy building projects that can contribute to early diagnosis, patient monitoring, and healthcare accessibility.',
  ],
  location: 'Punjaipuliampatti, Tamil Nadu, India',
  email: 's.sanjai1702006@gmail.com',
  phone: '+91 87784 55505',
  links: {
    linkedin: 'https://www.linkedin.com/in/sanjai-s-placeholder',
    github: 'https://github.com/sanjai-s-placeholder',
    portfolio: 'https://sanjais-placeholder.dev',
  },
  resumeFile: '/Sanjai_S_Resume.pdf',
  photo: '/images/sanjai-photo.jpg',
};

export const stats = [
  { type: 'count', label: 'Major Projects', value: 5, suffix: '+', unit: 'RX' },
  { type: 'count', label: 'Industry Internships', value: 2, suffix: '', unit: 'CLN' },
  { type: 'tag', label: 'AI & Healthcare Focus', unit: 'SYS' },
  { type: 'tag', label: 'Biomedical Engineering Student', unit: 'EDU' },
];

export const education = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Biomedical Engineering',
    institution: 'Currently Pursuing',
    period: 'In Progress',
    detail:
      'Coursework spanning medical instrumentation, biomedical signal processing, embedded systems, and healthcare technology design.',
    status: 'current',
  },
  {
    id: 'edu-2',
    degree: 'Higher Secondary Education',
    institution: 'Model Higher Secondary School, Nambiyur',
    period: '2021 – 2023',
    detail: 'Foundational study in mathematics and the sciences ahead of engineering specialization.',
    status: 'complete',
  },
  {
    id: 'edu-3',
    degree: 'Secondary Education',
    institution: 'SRC M.M. Higher Secondary School, Punjaipuliampatti',
    period: '2020 – 2021',
    detail: 'Built core academic groundwork in science and quantitative reasoning.',
    status: 'complete',
  },
];

export const skillGroups = [
  {
    id: 'programming',
    title: 'Programming',
    readout: 'LANG',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'Java', level: 75 },
      { name: 'C Programming', level: 78 },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    readout: 'NEURAL',
    skills: [
      { name: 'Deep Learning', level: 85 },
      { name: 'Machine Learning', level: 82 },
      { name: 'Computer Vision', level: 80 },
      { name: 'OpenCV', level: 83 },
    ],
  },
  {
    id: 'embedded-iot',
    title: 'Embedded Systems & IoT',
    readout: 'CTRL',
    skills: [
      { name: 'Arduino', level: 87 },
      { name: 'ESP32', level: 80 },
      { name: 'Raspberry Pi', level: 75 },
      { name: 'Sensor Integration', level: 84 },
      { name: 'IoT Systems', level: 82 },
    ],
  },
  {
    id: 'biomedical',
    title: 'Biomedical Engineering',
    readout: 'CLN',
    skills: [
      { name: 'Medical Instrumentation', level: 80 },
      { name: 'Biomedical Signal Processing', level: 76 },
      { name: 'Healthcare Technology', level: 85 },
      { name: 'Medical Device Maintenance', level: 78 },
    ],
  },
  {
    id: 'design-tools',
    title: 'Design & Tools',
    readout: 'TOOL',
    skills: [
      { name: 'Blender', level: 68 },
      { name: '3D Printing', level: 80 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'Figma', level: 70 },
    ],
  },
];

export const experience = [
  {
    id: 'exp-1',
    company: 'Madras Medical Mission Hospital',
    period: 'June 2025',
    role: 'Clinical Engineering Intern',
    responsibilities: [
      'Assisted biomedical engineers in equipment maintenance and calibration.',
      'Observed ECG systems, ventilators, and patient monitors.',
      'Learned preventive maintenance procedures.',
      'Gained exposure to clinical engineering practices.',
      'Developed understanding of biomedical equipment management in hospital environments.',
    ],
  },
  {
    id: 'exp-2',
    company: 'Medsby Healthcare & Engineering Solutions',
    period: 'January 2025',
    role: 'Biomedical Engineering Intern',
    responsibilities: [
      'Learned 3D printing workflow and healthcare applications.',
      'Fabricated a prosthetic hand prototype.',
      'Studied prosthetic design methodologies.',
      'Worked with image processing concepts using OpenCV.',
      'Observed healthcare technology integration in rehabilitation engineering.',
    ],
  },
];

export const projects = [
  {
    id: 'proj-1',
    title: 'RetinaAI',
    subtitle: 'Portable AI-Based Ocular Disease Screening Platform',
    description:
      'A lightweight AI-powered platform capable of performing real-time ocular disease screening using retinal images, built for accessible, fast diagnostics in remote healthcare environments.',
    tags: ['Deep Learning', 'Computer Vision', 'Python', 'OpenCV'],
    categories: ['ai-ml', 'biomedical'],
  },
  {
    id: 'proj-2',
    title: 'Smart Moss-Based Air Purification & CO₂ Monitoring',
    subtitle: 'Real-Time Environmental Sensing System',
    description:
      'An IoT-enabled air purification system using moss and environmental sensors to monitor and improve indoor air quality through real-time CO₂ measurement.',
    tags: ['MQ135 Sensor', 'Arduino', 'IoT'],
    categories: ['iot', 'embedded'],
  },
  {
    id: 'proj-3',
    title: 'Lightweight Protein Structure Predictor',
    subtitle: 'Small Protein Structure Prediction Model',
    description:
      'An optimized deep learning model aimed at predicting small protein structures with reduced computational requirements, suitable for constrained hardware.',
    tags: ['Deep Learning', 'Python', 'AI'],
    categories: ['ai-ml'],
  },
];

export const projectFilters = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai-ml', label: 'AI & ML' },
  { id: 'biomedical', label: 'Biomedical' },
  { id: 'iot', label: 'IoT' },
  { id: 'embedded', label: 'Embedded' },
];

export const achievements = [
  {
    id: 'ach-1',
    title: 'Biomedical Engineering Student',
    detail: 'Pursuing a Bachelor of Biomedical Engineering with a focus on healthcare innovation.',
  },
  {
    id: 'ach-2',
    title: 'AI Healthcare Innovator',
    detail: 'Builds AI-driven tools aimed at early diagnosis and accessible healthcare delivery.',
  },
  {
    id: 'ach-3',
    title: 'IoT Developer',
    detail: 'Designs sensor-driven IoT systems for environmental and biomedical monitoring.',
  },
  {
    id: 'ach-4',
    title: 'Medical Instrumentation Enthusiast',
    detail: 'Hands-on with ECG systems, ventilators, and patient monitors in clinical settings.',
  },
  {
    id: 'ach-5',
    title: 'Computer Vision Developer',
    detail: 'Applies OpenCV and deep learning to image-based diagnostic screening.',
  },
];

export const coreExpertise = [
  {
    id: 'expertise-ai',
    title: 'AI & Healthcare',
    icon: 'BrainCircuit',
    items: ['Deep Learning', 'Machine Learning', 'Computer Vision', 'Medical Image Analysis'],
  },
  {
    id: 'expertise-biomedical',
    title: 'Biomedical Engineering',
    icon: 'Stethoscope',
    items: ['Medical Instrumentation', 'Clinical Engineering', 'Biomedical Signal Processing', 'Healthcare Technology'],
  },
  {
    id: 'expertise-embedded',
    title: 'Embedded Systems & IoT',
    icon: 'Cpu',
    items: ['Arduino', 'ESP32', 'Raspberry Pi', 'Sensor Integration', 'IoT Systems'],
  },
  {
    id: 'expertise-tools',
    title: 'Development Tools',
    icon: 'Wrench',
    items: ['Java', 'Python', 'OpenCV', 'Blender', 'Git & GitHub', '3D Printing', 'Figma'],
  },
];

export const researchInterests = [
  'Artificial Intelligence in Healthcare',
  'Medical Image Processing',
  'Computer Vision for Diagnostics',
  'Wearable Healthcare Devices',
  'Smart Medical Devices',
  'IoT-Based Healthcare Monitoring',
  'Biomedical Signal Analysis',
  'Embedded Medical Systems',
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
];
