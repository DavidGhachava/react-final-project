import chair from '../assets/chair.webp'
import deskCraft from '../assets/desk-craft.webp'
import desk from '../assets/desk.webp'
import lamp from '../assets/lamp.webp'
import setup from '../assets/setup.webp'
import shelf from '../assets/shelf.webp'
import woodMaterial from '../assets/wood-material.webp'
import workspaceDetail from '../assets/workspace-detail.webp'

export const products = [
  {
    slug: 'oak-work-desk',
    name: 'Oak Work Desk',
    category: 'Desks',
    price: 299,
    image: desk,
    gallery: [desk, deskCraft, woodMaterial],
    description:
      'A warm oak work surface with a quiet profile, made for everyday focus without making the room feel crowded.',
    longDescription:
      'Designed for compact rooms, home offices, and calm work corners, the Oak Work Desk keeps the shape simple and the surface generous. The rounded front edge softens the room while the rear edge leaves space for everyday cable routing.',
    materials: 'Oak veneer, solid wood legs, matte protective finish',
    dimensions: '120 x 60 x 74 cm',
    finish: 'Natural oak / matte clear coat',
    leadTime: 'Dispatches in 3-5 business days',
    care: 'Wipe with a soft damp cloth and avoid standing water.',
    details: ['Cable-friendly rear edge', 'Soft rounded corners', 'Pairs with DeskHaus shelves'],
    specs: [
      { label: 'Width', value: '120 cm' },
      { label: 'Depth', value: '60 cm' },
      { label: 'Height', value: '74 cm' },
      { label: 'Assembly', value: '20 minutes' },
    ],
    pairsWith: ['oak-desk-shelf', 'ergo-chair', 'desk-lamp'],
    featured: true,
  },
  {
    slug: 'ergo-chair',
    name: 'Ergo Chair',
    category: 'Chairs',
    price: 149,
    image: chair,
    gallery: [chair, setup, workspaceDetail],
    description:
      'Supportive seating with a soft home-office look, built for long work sessions and relaxed posture changes.',
    longDescription:
      'The Ergo Chair gives daily work a proper base without bringing a corporate office mood into the room. Breathable support, adjustable touchpoints, and a quieter profile make it easy to pair with warm wood and softer spaces.',
    materials: 'Breathable mesh, molded seat, adjustable metal frame',
    dimensions: '62 x 61 x 109 cm',
    finish: 'Warm gray mesh / satin metal frame',
    leadTime: 'Dispatches in 5-7 business days',
    care: 'Vacuum fabric lightly and spot clean with mild soap.',
    details: ['Adjustable headrest', 'Tilt support', 'Breathable back'],
    specs: [
      { label: 'Seat height', value: '44-53 cm' },
      { label: 'Back height', value: '68 cm' },
      { label: 'Capacity', value: '120 kg' },
      { label: 'Assembly', value: '15 minutes' },
    ],
    pairsWith: ['oak-work-desk', 'oak-desk-shelf', 'desk-lamp'],
    featured: true,
  },
  {
    slug: 'desk-lamp',
    name: 'Desk Lamp',
    category: 'Lighting',
    price: 59,
    image: lamp,
    gallery: [lamp, workspaceDetail, setup],
    description:
      'Soft task lighting for early mornings, late evenings, and focused desk sessions that need less glare.',
    longDescription:
      'The Desk Lamp adds a warmer pool of light without taking over the surface. Its compact base works on desks, shelves, and side tables, while the patterned shade keeps evening work from feeling harsh.',
    materials: 'Matte metal base, textured shade',
    dimensions: '18 x 18 x 46 cm',
    finish: 'Matte black / warm woven shade',
    leadTime: 'Dispatches in 2-4 business days',
    care: 'Dust with a dry cloth and unplug before cleaning.',
    details: ['Warm light tone', 'Compact base', 'Works for desk or shelf lighting'],
    specs: [
      { label: 'Height', value: '46 cm' },
      { label: 'Base', value: '12 cm' },
      { label: 'Bulb', value: 'E27 warm LED' },
      { label: 'Cable', value: '1.8 m' },
    ],
    pairsWith: ['oak-work-desk', 'oak-desk-shelf', 'full-desk-setup'],
    featured: true,
  },
  {
    slug: 'oak-desk-shelf',
    name: 'Oak Desk Shelf',
    category: 'Accessories',
    price: 89,
    image: shelf,
    gallery: [shelf, deskCraft, woodMaterial],
    description:
      'A simple shelf for raising a monitor, clearing the desktop, and giving small tools a proper place.',
    longDescription:
      'The Oak Desk Shelf creates a second level on the desk without visual clutter. It lifts the monitor, tucks small items underneath, and keeps the main work area calm enough to use every day.',
    materials: 'Oak veneer, white metal supports',
    dimensions: '78 x 24 x 14 cm',
    finish: 'Natural oak / soft white supports',
    leadTime: 'Dispatches in 3-5 business days',
    care: 'Wipe clean with a dry or lightly damp microfiber cloth.',
    details: ['Monitor riser height', 'Hidden storage space', 'Matches oak desks'],
    specs: [
      { label: 'Width', value: '78 cm' },
      { label: 'Depth', value: '24 cm' },
      { label: 'Lift', value: '14 cm' },
      { label: 'Load', value: '18 kg' },
    ],
    pairsWith: ['oak-work-desk', 'desk-lamp', 'ergo-chair'],
    featured: true,
  },
  {
    slug: 'full-desk-setup',
    name: 'Full Desk Setup',
    category: 'Setup',
    price: 499,
    image: setup,
    gallery: [setup, workspaceDetail, deskCraft],
    description:
      'A complete DeskHaus setup with the oak desk, chair, shelf, and lamp selected to work together from day one.',
    longDescription:
      'The Full Desk Setup is the fastest path to a finished workspace: one warm surface, one supportive chair, one shelf for vertical order, and one lamp for softer focus hours. Each piece is chosen to feel balanced together.',
    materials: 'Oak, metal, mesh, textile, warm task lighting',
    dimensions: 'Curated multi-piece setup',
    finish: 'Oak, warm gray, matte black, soft white',
    leadTime: 'Dispatches in 5-8 business days',
    care: 'Care instructions are included for each piece in the setup.',
    details: ['Includes desk, chair, shelf, and lamp', 'Best value bundle', 'Ready for a full workspace refresh'],
    specs: [
      { label: 'Pieces', value: '4 included' },
      { label: 'Best for', value: 'Full room refresh' },
      { label: 'Savings', value: '$97 bundle value' },
      { label: 'Delivery', value: 'Grouped shipment' },
    ],
    pairsWith: ['oak-work-desk', 'ergo-chair', 'oak-desk-shelf'],
    featured: true,
  },
]

export const featuredProducts = products.filter((product) => product.featured).slice(0, 4)

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug)
}
