export interface Destination {
  id: number;
  name: string;
  image: string;
  featured?: boolean;
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "SERENGETI NATIONAL PARK",
    image: "/images/destinations/serengeti.png",
    featured: true,
  },
  {
    id: 2,
    name: "MAASAI MARA NATIONAL RESERVE",
    image: "/images/destinations/masai-mara.png",
    featured: true,
  },
  {
    id: 3,
    name: "NGORONGORO CRATER",
    image: "/images/destinations/ngorongoro.png",
  },
  {
    id: 4,
    name: "LAKE MANYARA NATIONAL PARK",
    image: "/images/destinations/lake-manyara.png",
  },
  {
    id: 5,
    name: "TARANGIRE NATIONAL PARK",
    image: "/images/destinations/tarangire.png",
  },
  {
    id: 6,
    name: "KILIMANJARO NATIONAL PARK",
    image: "/images/destinations/kilimanajaro.png",
  },
  {
    id: 7,
    name: "SERENGETI NATIONAL PARK",
    image: "/images/destinations/serengeti.png",
  },
  {
    id: 8,
    name: "MAASAI MARA NATIONAL RESERVE",
    image: "/images/destinations/masai-mara.png",
  },
  {
    id: 9,
    name: "NGORONGORO CRATER",
    image: "/images/destinations/ngorongoro.png",
  },
];

export const overview = [
  {
    img: "/images/overview-1.png",
    rotation: "rotate(-12deg)",
  },
  {
    img: "/images/overview-2.png",
    rotation: "rotate(0deg)",
  },
  {
    img: "/images/overview-3.png",
    rotation: "rotate(12deg)",
  },
];

export interface Itinerary {
  id: number;
  image: string;
  badge: string;
  nights: number;
  locations: number;
  title: string;
  amenities: string[];
}

// Amenity icons configuration
export const amenityIconTypes = {
  car: "car",
  tent: "tent",
  tree: "tree",
  hiking: "hiking",
  bed: "bed",
} as const;

export const itinerariesData: Itinerary[] = [
  {
    id: 1,
    image: "/images/itinerary-1.png",
    badge: "Arusha National Park",
    nights: 3,
    locations: 4,
    title: "Arusha, Ngorongoro Crater & Serengeti: Migration Safari",
    amenities: ["car", "tent", "tree", "hiking", "bed"],
  },
  {
    id: 2,
    image: "/images/itinerary-2.png",
    badge: "Arusha National Park",
    nights: 8,
    locations: 4,
    title: "Arusha, Tarangire, Ngorongoro & Serengeti: SkySafari",
    amenities: ["car", "tent", "tree", "hiking", "bed"],
  },
  {
    id: 3,
    image: "/images/itinerary-3.png",
    badge: "Arusha National Park",
    nights: 7,
    locations: 4,
    title: "Arusha, Ngorongoro, Serengeti & Zanzibar: Bush to Beach Safari",
    amenities: ["car", "tent", "tree", "hiking", "bed"],
  },
  {
    id: 4,
    image: "/images/itinerary-1.png",
    badge: "Arusha National Park",
    nights: 3,
    locations: 4,
    title: "Arusha, Ngorongoro Crater & Serengeti: Migration Safari",
    amenities: ["car", "tent", "tree", "hiking", "bed"],
  },
  {
    id: 5,
    image: "/images/itinerary-2.png",
    badge: "Arusha National Park",
    nights: 8,
    locations: 4,
    title: "Arusha, Tarangire, Ngorongoro & Serengeti: SkySafari",
    amenities: ["car", "tent", "tree", "hiking", "bed"],
  },
  {
    id: 6,
    image: "/images/itinerary-3.png",
    badge: "Arusha National Park",
    nights: 7,
    locations: 4,
    title: "Arusha, Ngorongoro, Serengeti & Zanzibar: Bush to Beach Safari",
    amenities: ["car", "tent", "tree", "hiking", "bed"],
  },
];

export const benefits = [
  {
    img: "/images/icon-plane.png",
    title: "Seamless Journeys",
    description:
      "Effortlessly combine flight bookings with inspiring safari itineraries.",
  },
  {
    img: "/images/icon-user.png",
    title: "Travel Experts",
    description:
      "Rely on local knowledge and partners for safe, memorable safaris.",
  },
  {
    img: "/images/icon-badge.png",
    title: "Smart Fares",
    description:
      "Enjoy exclusive savings and special offers on Tanzania flight bookings.",
  },
  {
    img: "/images/icon-map.png",
    title: "Curated Itineraries",
    description:
      "Hand-picked safari routes showcasing Tanzania's most iconic destinations.",
  },
];

export const IMAGES = [
  "/images/gallery-1.png",
  "/images/gallery-2.png",
  "/images/gallery-3.png",
  "/images/gallery-4.png",
  "/images/gallery-5.png",
  "/images/gallery-1.png",
  "/images/gallery-2.png",
  "/images/gallery-3.png",
  "/images/gallery-4.png",
  "/images/gallery-5.png",
];

export const blogimage = [
  { image: "/images/blogs-1.png" },
  { image: "/images/blogs-2.png" },
  { image: "/images/blogs-3.png" },
  { image: "/images/blogs-1.png" },
  { image: "/images/blogs-2.png" },
  { image: "/images/blogs-3.png" },
];
