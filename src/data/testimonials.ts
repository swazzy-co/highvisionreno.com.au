export interface Testimonial {
  name: string;
  quote: string;
  verified?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Mirza Zouk',
    verified: true,
    quote:
      "My husband and I engaged High Vision Renovations around 12 months ago for a renovation project on our kitchen and bathroom. We engaged 2 other companies before meeting Sal, and none had the vision we were after. Sal's vision and level of execution was exactly what we were searching for and his eye for detail was what amazed us the most. The project took around 2 months to complete, which was a whole month less than the other 2 companies had quoted. Thanks for your vision, high vision!",
  },
  {
    name: 'Isabelle Chau',
    verified: true,
    quote:
      'Added a pergola/outdoor area to our backyard. Sal and the team came up with some fantastic ideas that we chose to implement, and so glad we did. Little additions like speakers in the ceiling and recessed lights made the world of a difference both functionality wise and also visually too.',
  },
  {
    name: 'Bas Moretti',
    verified: true,
    quote: 'Great work all round!',
  },
  {
    name: 'Ahmad Ahmad',
    quote: 'Incredible work. Thanks mate.',
  },
  {
    name: 'Charbel Bou Sejaan',
    quote:
      "Sal and the team worked on our office fit out in Geelong. Although the distance was far to travel, we knew we wanted his team handling the renovation. Couldn't be happier and glad we chose High Vision Renos for the project. Thanks again to Sal and the team",
  },
  {
    name: 'Binn Nguyen',
    quote:
      "Had the pleasure of working with Sal and his team. Their work was exceptional and second to none. The wife and I are extremely happy and couldn't recommend any higher!",
  },
];
