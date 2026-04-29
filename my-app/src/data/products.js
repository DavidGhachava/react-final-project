import chair from '../assets/chair.webp'
import lamp from '../assets/lamp.webp'
import shelf from '../assets/shelf.webp'
import setup from '../assets/setup.webp'
import desk from '../assets/desk.webp'

export const products = [
  {
    slug: 'oak-work-desk',
    name: 'Oak Work Desk',
    category: 'Desks',
    price: 299,
    image: desk,
    description:
      'A warm oak work surface with a quiet profile, made for everyday focus without making the room feel crowded.',
    materials: 'Oak veneer, solid wood legs, matte protective finish',
    dimensions: '120 x 60 x 74 cm',
    details: ['Cable-friendly rear edge', 'Soft rounded corners', 'Pairs with DeskHaus shelves'],
    featured: true,
  },
  {
    slug: 'ergo-chair',
    name: 'Ergo Chair',
    category: 'Chairs',
    price: 149,
    image: chair,
    description:
      'Supportive seating with a soft home-office look, built for long work sessions and relaxed posture changes.',
    materials: 'Breathable mesh, molded seat, adjustable metal frame',
    dimensions: '62 x 61 x 109 cm',
    details: ['Adjustable headrest', 'Tilt support', 'Breathable back'],
    featured: true,
  },
  {
    slug: 'desk-lamp',
    name: 'Desk Lamp',
    category: 'Lighting',
    price: 59,
    image: lamp,
    description:
      'Soft task lighting for early mornings, late evenings, and focused desk sessions that need less glare.',
    materials: 'Matte metal base, textured shade',
    dimensions: '18 x 18 x 46 cm',
    details: ['Warm light tone', 'Compact base', 'Works for desk or shelf lighting'],
    featured: true,
  },
  {
    slug: 'oak-desk-shelf',
    name: 'Oak Desk Shelf',
    category: 'Accessories',
    price: 89,
    image: shelf,
    description:
      'A simple shelf for raising a monitor, clearing the desktop, and giving small tools a proper place.',
    materials: 'Oak veneer, white metal supports',
    dimensions: '78 x 24 x 14 cm',
    details: ['Monitor riser height', 'Hidden storage space', 'Matches oak desks'],
    featured: true,
  },
  {
    slug: 'full-desk-setup',
    name: 'Full Desk Setup',
    category: 'Setup',
    price: 499,
    image: setup,
    description:
      'A complete DeskHaus setup with the oak desk, chair, shelf, and lamp selected to work together from day one.',
    materials: 'Oak, metal, mesh, textile, warm task lighting',
    dimensions: 'Curated multi-piece setup',
    details: ['Includes desk, chair, shelf, and lamp', 'Best value bundle', 'Ready for a full workspace refresh'],
    featured: true,
  },
]

export const featuredProducts = products.filter((product) => product.featured).slice(0, 4)

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug)
}
