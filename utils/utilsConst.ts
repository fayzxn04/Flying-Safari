export interface Destination {
  id: number;
  name: string;
  image: string;
  featured?: boolean;
}

export const destinationsData: Destination[] = [
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

export const blogData = [
  {
    heading: "Addressing Challenges and Unlocking Potential",
    content: `Africa, a continent of breathtaking landscapes, diverse cultures, and rich history, has long been a dream destination for travelers worldwide. However, despite its allure, the cost of travel within Africa has remained a significant obstacle for both international tourists and local residents. From soaring flight prices to limited transportation options and expensive visa regulations, exploring the vast and mesmerizing continent comes with its challenges. This article delves into the complexities of expensive travel within Africa, highlights contributing factors, and discusses potential solutions for fostering accessible and sustainable tourism.

      One of the most prominent factors contributing to the high cost of travel within Africa is the exorbitant airfare. The continent’s vast distances, coupled with limited direct flights between certain destinations, lead to increased prices. Moreover, a lack of competition among airlines in some regions further exacerbates the problem. This results in higher ticket costs and makes it difficult for budget-conscious travelers to explore multiple African countries during a single trip.`,
  },
  {
    heading: "Addressing the Changes",
    content: `African governments should prioritize cooperation to develop a more integrated transportation system. This includes investing in better road and rail networks, which would not only reduce travel costs but also enhance connectivity between regions. Encouraging open skies policies among African countries can lead to increased competition among airlines, resulting in reduced airfare. This approach has the potential to make travel within Africa more affordable and attractive.
          
     Harmonizing visa regulations and reducing fees could significantly boost intracontinental tourism. Simplified visa procedures and more accessible e-visa options would encourage travelers to explore multiple destinations within Africa. Governments and tourism boards should actively promote local tourism by investing in infrastructure, supporting small and medium-sized enterprises, and fostering sustainable eco-tourism initiatives. This approach can create employment opportunities and contribute to the economic growth of host communities.`,
  },
  {
    heading: "Conculsion",
    content: `African governments should prioritize cooperation to develop a more integrated transportation system. 
This includes investing in better road and rail networks, which would not only reduce travel costs but also enhance connectivity between regions. 
Encouraging open skies policies among African countries can lead to increased competition among airlines, resulting in reduced airfare. 
This approach has the potential to make travel within Africa more affordable and attractive.

Harmonizing visa regulations and reducing fees could significantly boost intracontinental tourism. Simplified visa procedures and more accessible e-visa options would encourage travelers to explore multiple destinations within Africa. Governments and tourism boards should actively promote local tourism by investing in infrastructure, supporting small and medium-sized enterprises, and fostering sustainable eco-tourism initiatives. This approach can create employment opportunities and contribute to the economic growth of host communities.`,
  },
];

export const socialLinks = [
  { name: "Instagram", icon: "/images/insta.png", url: "#" },
  { name: "Facebook", icon: "/images/facebook.png", url: "#" },
  { name: "LinkedIn", icon: "/images/linkedin.png", url: "#" },
  { name: "Twitter", icon: "/images/x.png", url: "#" },
];

export const destinations = [
  "Arusha",
  "Serengeti",
  "Kilimanjaro",
  "Ngorongoro Crater",
  "Lake Manyara",
  "Tarangire",
  "Mabele Mountains",
];

export const resources = [
  { name: "About Us", href: "/about" },
  { name: "Itineraries", href: "/itineraries" },
  { name: "Destination", href: "/destination" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact" },
];

export const contactInfo = [
  { type: "tel", value: "+255 76894 8945", href: "tel:+255768948945" },
  {
    type: "email",
    value: "info@flyingsafari.ae",
    href: "mailto:info@flyingsafari.ae",
  },
  {
    type: "email",
    value: "contact@flyingsafari.ae",
    href: "mailto:contact@flyingsafari.ae",
  },
];

export const images = [
  { image: "/images/gallery-11.webp" },
  { image: "/images/gallery-22.webp" },
  { image: "/images/gallery-33.webp" },
  { image: "/images/gallery-44.webp" },
  { image: "/images/gallery-55.webp" },
  { image: "/images/gallery-66.webp" },
  { image: "/images/gallery-77.webp" },
  { image: "/images/gallery-88.webp" },
];
