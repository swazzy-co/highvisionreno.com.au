export const site = {
  name: 'High Vision Renovations',
  shortName: 'High Vision Reno',
  url: 'https://highvisionreno.com.au',
  description:
    "Bespoke luxury renovations and fitouts in Melbourne's prestigious suburbs. Meticulous craftsmanship, refined design, and exceptional quality for discerning clients.",
  email: 'info@highvisionreno.com.au',
  phone: '+61370332008',
  phoneDisplay: '(03) 7033 2008',
  abn: '88 661 992 187',
  address: {
    street: '37 High St',
    locality: 'Preston',
    region: 'VIC',
    postalCode: '3072',
    country: 'AU',
    full: '37 High St, Preston, VIC 3072',
  },
  hours: [
    { day: 'Monday', opens: '7:00 AM', closes: '7:00 PM' },
    { day: 'Tuesday', opens: '7:00 AM', closes: '7:00 PM' },
    { day: 'Wednesday', opens: '7:00 AM', closes: '7:00 PM' },
    { day: 'Thursday', opens: '7:00 AM', closes: '7:00 PM' },
    { day: 'Friday', opens: '7:00 AM', closes: '7:00 PM' },
    { day: 'Saturday', opens: '7:00 AM', closes: '7:00 PM' },
    { day: 'Sunday', opens: null, closes: null },
  ],
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about-high-vision-renovations' },
    { label: 'Services', href: '/renovation-services' },
    { label: 'Projects', href: '/renovation-projects' },
    { label: 'Contact', href: '/contact-high-vision-renovations' },
  ],
  social: {
    googlePlaceId: 'ChIJO_1Vk2pF1moRYd0-rGHioZo',
  },
} as const;

export const formOptions = {
  services: [
    'Kitchen Renovations',
    'Bathroom Renovations',
    'Home Extensions',
    'Full House Renovation',
    'Outdoor Entertainment Areas',
    'Presale Makeover',
    'Home Repairs and Maintenance',
    'Planning and Design',
    'Other / Not Sure',
  ],
  budgets: [
    'Under $50,000',
    '$50,000 – $100,000',
    '$100,000 – $200,000',
    '$200,000 – $400,000',
    '$400,000+',
    'Not sure yet',
  ],
  timeframes: [
    'As soon as possible',
    '1 – 3 months',
    '3 – 6 months',
    '6 – 12 months',
    '12+ months / exploring',
  ],
} as const;
