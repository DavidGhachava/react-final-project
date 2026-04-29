import chair from '../assets/chair.webp'
import lamp from '../assets/lamp.webp'
import shelf from '../assets/shelf.webp'
import setup from '../assets/setup.webp'
import desk from '../assets/desk.webp'
import woodMaterial from '../assets/wood-material.webp'
import workspaceDetail from '../assets/workspace-detail.webp'

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
    slug: 'compact-writing-desk',
    name: 'Compact Writing Desk',
    category: 'Desks',
    price: 249,
    image: workspaceDetail,
    description:
      'A smaller desk for apartments, bedrooms, and study corners where the surface still needs to feel intentional.',
    materials: 'Oak veneer, powder-coated frame',
    dimensions: '95 x 52 x 74 cm',
    details: ['Slim footprint', 'Warm wood grain', 'Good for laptop setups'],
    featured: false,
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
    slug: 'soft-task-chair',
    name: 'Soft Task Chair',
    category: 'Chairs',
    price: 179,
    image: chair,
    description:
      'A more cushioned chair option for people who want comfort without the heavy corporate-office feeling.',
    materials: 'Textile upholstery, foam cushion, powder-coated base',
    dimensions: '61 x 60 x 103 cm',
    details: ['Cushioned seat', 'Quiet neutral finish', 'Smooth rolling base'],
    featured: false,
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
    slug: 'wood-desk-tray',
    name: 'Wood Desk Tray',
    category: 'Accessories',
    price: 39,
    image: woodMaterial,
    description:
      'A small catch-all tray for notebooks, cables, pens, and the objects that usually drift across a desk.',
    materials: 'Oak wood, smooth sealed finish',
    dimensions: '28 x 18 x 3 cm',
    details: ['Keeps small items grouped', 'Low profile', 'Natural grain variation'],
    featured: false,
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
