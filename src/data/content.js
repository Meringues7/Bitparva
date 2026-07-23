// All copy and structured content lives here, separate from components.
// Edit this file to change text without touching any component/JSX code.

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'Contact', to: '/contact' },
]

export const hero = {
  eyebrow: 'BITPRAVA — HIMALAYAN SOFTWARE STUDIO',
  titleStart: 'Software built in the ',
  titleEmphasis: 'mountains',
  titleEnd: ', shipped everywhere.',
  subtext:
    "We're a small studio based in Kathmandu, designing and building web products, vertical software, and local integrations for teams around the world.",
  primaryCta: { label: 'Get in touch', to: '/contact' },
  secondaryCta: { label: 'View our work', to: '/work' },
}

export const services = [
  {
    id: 'web',
    title: 'Websites & Web Apps',
    description:
      'Marketing sites, dashboards, and full-stack apps — designed and shipped end to end.',
  },
  {
    id: 'vertical',
    title: 'Vertical Software',
    description:
      'Purpose-built tools for specific industries — inventory, booking, and operations software that fits how you work.',
  },
  {
    id: 'integrations',
    title: 'Local Integrations',
    description:
      'Payment gateways, government APIs, and regional services, wired in correctly the first time.',
  },
]

export const whyUs = [
  {
    number: '01',
    title: 'Small team, direct line',
    description:
      'You work with the people building your product, not a rotating account manager.',
  },
  {
    number: '02',
    title: 'Built for your stack',
    description:
      'No off-the-shelf templates forced into your workflow — every build starts from your actual constraints.',
  },
  {
    number: '03',
    title: 'Timezone-friendly delivery',
    description:
      "An async-first process that keeps projects moving, whether you're in New York or Sydney.",
  },
]

export const process = [
  { step: '01', label: '01 · SCOPE', title: 'Scope', tagline: 'Map the terrain' },
  { step: '02', label: '02 · BUILD', title: 'Build', tagline: 'Lay the trail' },
  { step: '03', label: '03 · SHIP', title: 'Ship', tagline: 'Reach the summit' },
  { step: '04', label: '04 · SUPPORT', title: 'Support', tagline: 'Maintain base camp' },
]

export const cta = {
  quote: '"Have a project in mind?"',
  buttonLabel: 'Start a project',
}

export const footer = {
  tagline: 'Software built in the mountains, shipped everywhere.',
  email: 'hello@bitprava.com',
  location: 'Kathmandu, Nepal',
  year: '2026',
  elevation: 'ELEV. 1400M',
}

// --- Content used by the standalone pages (About, Services, Work, Contact) ---

export const story = {
  eyebrow: 'OUR STORY',
  heading: 'Started on a mountainside, built for anywhere',
  paragraphs: [
    "Bitprava started as a two-person team in Kathmandu, building websites for local businesses that no agency wanted to take on. That scrappiness never left — we still take on the projects that need someone to actually understand the constraints, not just apply a template.",
    "Today we work with clients across timezones, but the way we operate hasn't changed: small team, direct communication, and software that's built for how you actually work.",
  ],
}

export const team = [
  { name: 'Pradeep Bhatt', role: 'Founder & Engineering' },
  { name: 'Bimarsha Uprety', role: 'UI Engineer & Sales' },
  { name: 'Gaurav Shretha', role: 'Frontend Engineer & Design' },
  { name: 'Avash Joshi', role: 'Frontend Engineer' },
  { name: 'Ayush Shretha', role: 'Backend Engineer & Infrastructure' },
  { name: 'Bibek Pandit', role: 'Backend Engineer' },
  { name: 'Mohan Koirala', role: 'DevOps Engineer & AWS Specialist' },
]

export const serviceDetails = [
  {
    id: 'web',
    title: 'Websites & Web Apps',
    description:
      'Marketing sites, dashboards, and full-stack apps — designed and shipped end to end.',
    features: [
      'Marketing & landing pages',
      'Customer dashboards',
      'Full-stack web applications',
      'Ongoing iteration & support',
    ],
  },
  {
    id: 'vertical',
    title: 'Vertical Software',
    description:
      'Purpose-built tools for specific industries — inventory, booking, and operations software that fits how you work.',
    features: [
      'Inventory & operations tools',
      'Booking & scheduling systems',
      'Internal admin dashboards',
      'Workflow-specific tooling',
    ],
  },
  {
    id: 'integrations',
    title: 'Local Integrations',
    description:
      'Payment gateways, government APIs, and regional services, wired in correctly the first time.',
    features: [
      'Payment gateway integration',
      'Government / regulatory APIs',
      'Regional service connectors',
      'Data migration & sync',
    ],
  },
]

export const projects = [
  {
    id: 'trailhead',
    name: 'Trailhead Bookings',
    category: 'Vertical Software',
    description:
      'A booking and scheduling system for a regional trekking operator, replacing spreadsheets with a real-time availability calendar.',
  },
  {
    id: 'sarala-pay',
    name: 'Sarala Pay Checkout',
    category: 'Local Integrations',
    description:
      'A checkout flow integrating two regional payment gateways for an e-commerce client shipping across South Asia.',
  },
  {
    id: 'basecamp-crm',
    name: 'Basecamp CRM',
    category: 'Web App',
    description:
      'A lightweight internal CRM built for a distributed sales team, replacing three disconnected spreadsheets.',
  },
  {
    id: 'ridgeline',
    name: 'Ridgeline Marketing Site',
    category: 'Websites & Web Apps',
    description:
      "A rebrand and marketing site rebuild for a climbing gear company, cutting page load time by half.",
  },
]

// Placeholder endpoint — replace with whatever the backend team stands up
// (e.g. POST /api/contact, a serverless function, or a form service like
// Formspree). See src/api/contact.js for where this is used.
export const CONTACT_API_ENDPOINT = '/api/contact'
