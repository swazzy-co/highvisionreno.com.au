export interface Project {
  slug: string;
  title: string;
  suburb: string;
  postcode: string;
  summary: string;
  description: string;
  heroImage: string;
  gallery: string[];
  services: string[];
}

export const projects: Project[] = [
  {
    slug: 'toorak',
    title: 'Toorak',
    suburb: 'Toorak',
    postcode: '3142',
    summary:
      'A Toorak renovation blending timeless design with modern elegance — bold green cabinetry, marble benchtops, mirrored splashback, and brass fittings.',
    description:
      'Located in Toorak, VIC 3142, this renovation blends timeless design with modern elegance. The kitchen features bold green cabinetry, marble benchtops, a mirrored splashback, and brass fittings—creating a luxurious focal point that opens to light-filled living spaces and garden views.',
    heroImage: '/images/projects/toorak/01.webp',
    gallery: [
      '/images/projects/toorak/01.webp',
      '/images/projects/toorak/02.webp',
      '/images/projects/toorak/03.webp',
      '/images/projects/toorak/04.webp',
      '/images/projects/toorak/05.webp',
    ],
    services: ['kitchen-renovations', 'bathroom-renovations', 'full-house-renovation'],
  },
  {
    slug: 'burwood',
    title: 'Burwood',
    suburb: 'Burwood',
    postcode: '3125',
    summary:
      'A modern Burwood renovation with a clean, cohesive aesthetic across kitchen, bathroom, and laundry — crisp cabinetry, stone benchtops, and refined detailing.',
    description:
      'This modern renovation in Burwood, VIC 3125, delivers a clean, cohesive aesthetic across the kitchen, bathroom, and laundry. The kitchen features crisp white cabinetry, stone benchtops, sleek appliances, and considered lighting that make everyday living feel effortless.',
    heroImage: '/images/projects/burwood/01.webp',
    gallery: [
      '/images/projects/burwood/01.webp',
      '/images/projects/burwood/02.webp',
      '/images/projects/burwood/03.webp',
      '/images/projects/burwood/04.webp',
      '/images/projects/burwood/05.webp',
    ],
    services: ['kitchen-renovations', 'bathroom-renovations', 'full-house-renovation'],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
