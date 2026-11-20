export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  image: string;
  highlights: string[];
  body: string[];
}

export const services: Service[] = [
  {
    slug: 'bathroom-renovations',
    title: 'Bathroom Renovations Melbourne',
    shortTitle: 'Bathroom Renovations',
    summary:
      "Transform your bathroom into a luxurious sanctuary with High Vision Renovations' bespoke bathroom renovation services in Melbourne. Expert craftsmanship meets elegant design.",
    description:
      'Luxury bathroom renovations in Melbourne with waterproofing, premium fixtures, and meticulous finishing.',
    image: '/images/services/bathroom-renovations.webp',
    highlights: [
      'Full gut renovations and layout reconfigurations',
      'Compliant waterproofing for Melbourne wet areas',
      'Premium fixtures, tiling, and joinery',
      'Coordinated plumbing and electrical works',
    ],
    body: [
      'A bathroom renovation should feel considered from the first layout conversation through to the final sealant line. We plan wet areas around how you actually use the space — storage, ventilation, accessibility, and the relationship to adjoining rooms.',
      'Melbourne bathrooms demand careful waterproofing, falls to waste, and material selections that perform in humid conditions. We coordinate demolition, plumbing, electrical, tiling, and finishing so each trade arrives in sequence and the waterproofing warranty remains intact.',
      'Whether you want a spa-like ensuite, a compact powder room refresh, or a family bathroom rebuilt for longevity, we focus on buildable detailing and finishes that hold up to daily use.',
    ],
  },
  {
    slug: 'full-house-renovation',
    title: 'Full House Renovation Melbourne',
    shortTitle: 'Full House Renovation',
    summary:
      'Transform your Melbourne home with High Vision Renovations\' luxury full house renovation services. Expert craftsmanship, innovative design, and premium materials create stunning living spaces.',
    description:
      'Whole-home renovations across Melbourne with coordinated planning, structural work, and premium finishes.',
    image: '/images/services/full-house-renovation.webp',
    highlights: [
      'Whole-home scope planning and staging',
      'Structural and services coordination',
      'Kitchen, bathroom, and living upgrades together',
      'Clear programme and handover documentation',
    ],
    body: [
      'Full house renovations succeed when scope, structure, and services are planned together. We map the workroom by room, identify what must happen first, and stage construction so occupied homes remain as liveable as possible.',
      'From opening walls to refreshing every finish, our team coordinates joinery, wet areas, flooring, painting, and exterior works under one accountable process. You get a single point of contact, documented decisions, and quality checks at key stages.',
      'We help you prioritise investment where it improves daily life and property value — not just surface upgrades — so the finished home feels coherent and enduring.',
    ],
  },
  {
    slug: 'home-extensions',
    title: 'Home Extensions Melbourne',
    shortTitle: 'Home Extensions',
    summary:
      'Transform your Melbourne home with luxury extensions that seamlessly blend style and functionality. Our bespoke additions increase living space, property value and enhance your lifestyle.',
    description:
      'Single and double-storey home extensions in Melbourne with planning, design coordination, and quality construction.',
    image: '/images/services/home-extensions.webp',
    highlights: [
      'Single and double-storey additions',
      'Planning and council pathway support',
      'Seamless connection to existing fabric',
      'Light-filled living, kitchen, and outdoor links',
    ],
    body: [
      'Extensions should feel like they belong to the original home — in proportion, material, and circulation. We start with how you want to live, then test ideas against site constraints, setbacks, heritage overlays, and structural realities.',
      'Our team coordinates design, engineering, and construction so the new volume connects cleanly to existing floors, roofs, and services. Open-plan kitchen living, upper-level retreats, and rear garden links are planned for Melbourne light and climate.',
      'Clear communication around permits, budgets, and sequencing keeps extension projects predictable from groundbreaking through practical completion.',
    ],
  },
  {
    slug: 'home-repairs-and-maintenance',
    title: 'Home Repairs and Maintenance Melbourne',
    shortTitle: 'Home Repairs and Maintenance',
    summary:
      "Professional home repairs and maintenance services in Melbourne. Expert care to preserve your luxury property's value, quality, and elegance through comprehensive maintenance solutions.",
    description:
      'Professional repairs and ongoing maintenance for Melbourne homes, protecting quality finishes and building fabric.',
    image: '/images/services/home-repairs-and-maintenance.webp',
    highlights: [
      'Targeted repairs and defect remediation',
      'Scheduled maintenance programmes',
      'Trade coordination for urgent works',
      'Protecting previous renovation investment',
    ],
    body: [
      'Luxury finishes and structural fabric need ongoing care. We provide repairs and maintenance that respect existing materials — matching details, fixing water ingress risks, and addressing wear before it becomes a larger project.',
      'From joinery adjustments and tiling repairs to broader building maintenance, our tradespeople treat your home with the same precision as a full renovation. Where emergency response is needed, we prioritise making spaces safe and waterproof first.',
      'Regular professional maintenance extends the life of kitchens, bathrooms, exteriors, and outdoor areas — preserving both comfort and resale presentation.',
    ],
  },
  {
    slug: 'kitchen-renovations',
    title: 'Kitchen Renovations Melbourne',
    shortTitle: 'Kitchen Renovations',
    summary:
      "Transform your kitchen into a luxurious, functional masterpiece with bespoke designs and premium materials. High Vision Renovations delivers exceptional craftsmanship for Melbourne's most discerning homeowners.",
    description:
      'Bespoke kitchen renovations in Melbourne featuring custom joinery, premium stone, and refined detailing.',
    image: '/images/services/kitchen-renovations.webp',
    highlights: [
      'Custom cabinetry and stone benchtops',
      'Layout planning for workflow and light',
      'Appliance integration and services rough-in',
      'Typical programmes of 6–12 weeks',
    ],
    body: [
      'The kitchen is where layout, storage, light, and material quality meet every day. We design around how you cook and gather — zoning prep, cooking, cleaning, and circulation — then specify joinery and surfaces that perform under real use.',
      'High-end kitchen renovations in Melbourne typically range from $40,000 to $120,000 depending on size, materials, and custom features. We guide selections honestly so budget lands on the details that matter most.',
      'Our team manages demolition, plumbing, electrical, plaster, painting, and installation as one coordinated package, with temporary kitchen setups where you remain on site.',
    ],
  },
  {
    slug: 'outdoor-entertainment-areas',
    title: 'Outdoor Entertainment Areas Melbourne',
    shortTitle: 'Outdoor Entertainment Areas',
    summary:
      "Transform your outdoor space into a luxury entertainment haven with High Vision Renovations. Bespoke alfresco areas designed for Melbourne's climate, seamlessly blending comfort with style.",
    description:
      'Alfresco kitchens, pergolas, and outdoor living spaces designed for Melbourne weather and lifestyle.',
    image: '/images/services/outdoor-entertainment-areas.webp',
    highlights: [
      'Pergolas, decks, and covered outdoor rooms',
      'Outdoor kitchens and integrated lighting',
      'Climate-aware detailing for Melbourne',
      'Indoor–outdoor connection planning',
    ],
    body: [
      'Outdoor entertainment areas should work in Melbourne’s variable weather — shade, drainage, durable finishes, and lighting that extends usable hours. We design alfresco spaces that feel connected to the home rather than bolted on.',
      'Projects may include pergolas, decks, outdoor kitchens, recessed lighting, speakers, and landscaping interfaces. We advise on council requirements early so permit pathways do not surprise the programme.',
      'Thoughtful outdoor rooms increase liveability and presentation, especially when materials and joinery echo the interior renovation language.',
    ],
  },
  {
    slug: 'presale-makeover',
    title: 'Presale Makeover Melbourne',
    shortTitle: 'Presale Makeover',
    summary:
      "Maximise your property's sale potential with strategic presale makeovers. Professional renovations targeting key areas to enhance appeal, increase value, and secure premium offers in Melbourne's competitive market.",
    description:
      'Strategic presale renovations targeting high-impact rooms to strengthen presentation and sale outcomes.',
    image: '/images/services/presale-makeover.webp',
    highlights: [
      'High-impact kitchen and bathroom refreshes',
      'Budget-aware scope for sale timing',
      'Presentation-focused finishes',
      'Fast, coordinated delivery windows',
    ],
    body: [
      'Presale makeovers focus investment where buyers notice first — kitchens, bathrooms, flooring, paint, lighting, and street appeal. We help you decide what to upgrade versus what to leave for the next owner.',
      'Timelines are often tight. We define a clear scope, sequence trades efficiently, and keep communication sharp so listing dates stay realistic. Staying in the home during works is often possible for lighter scopes.',
      'The goal is a polished, market-ready home that photographs well and feels cared for during inspections — without overcapitalising.',
    ],
  },
  {
    slug: 'planning-and-design',
    title: 'Planning and Design Melbourne',
    shortTitle: 'Planning and Design',
    summary:
      'Professional planning and design services for luxury renovations in Melbourne. Transform your vision into reality with bespoke solutions, innovative concepts, and meticulous attention to detail.',
    description:
      'Renovation planning and design coordination covering layout, approvals pathways, and buildable detailing.',
    image: '/images/services/planning-and-design.webp',
    highlights: [
      'Brief development and layout options',
      'Buildability and services checks',
      'Approvals and consultant coordination',
      '3D visualisation support where useful',
    ],
    body: [
      'Strong renovations start with planning — not finishes. We clarify how you live, then test layouts against structure, plumbing, electrical, access, and council constraints before drawings harden.',
      'We can lead design in-house or collaborate with your architect or interior designer. Either way, the focus is a buildable scope with realistic allowances and a clear path into construction.',
      'Early planning reduces mid-project changes, protects budgets, and gives you confidence before demolition begins.',
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const suburbServiceSlugs = [
  ...services.map((s) => s.slug),
  'heritage-home-restoration',
] as const;
