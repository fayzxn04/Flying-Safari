export interface Itinerary {
  id: number;
  image: string;
  badge: string;
  nights: number;
  locations: number;
  title: string;
  amenities: string[];
  slug: string;
}

export const itinerariesData: Itinerary[] = [
  {
    id: 1,
    image: "/images/itinerary-1.png",
    badge: "Maasai Mara National Reserve",
    nights: 6,
    locations: 4,
    title: "6 Day Maasai Mara Express Adventure Safari",
    amenities: ["car", "tent", "campfire", "hiking", "bed"],
    slug: "6-day-maasai-mara-express-adventure-safari",
  },
  {
    id: 2,
    image: "/images/itinerary-2.png",
    badge: "Maasai Mara National Reserve",
    nights: 5,
    locations: 4,
    title: "5 Day Maasai Mara & Lake Naivasha Adventure",
    amenities: ["car", "tent", "campfire", "hiking", "bed"],
    slug: "5-day-maasai-mara-lake-naivasha-adventure",
  },
  {
    id: 3,
    image: "/images/itinerary-3.png",
    badge: "Maasai Mara National Reserve",
    nights: 7,
    locations: 4,
    title: "7 Day Ultimate Maasai Mara Safari Experience",
    amenities: ["car", "tent", "campfire", "hiking", "bed"],
    slug: "7-day-ultimate-maasai-mara-safari-experience",
  },
  {
    id: 4,
    image: "/images/itinerary-1.png",
    badge: "Maasai Mara National Reserve",
    nights: 6,
    locations: 4,
    title: "6 Day Maasai Mara Express Adventure Safari",
    amenities: ["car", "tent", "campfire", "hiking", "bed"],
    slug: "6-day-maasai-mara-express-adventure-safari-2",
  },
  {
    id: 5,
    image: "/images/itinerary-2.png",
    badge: "Maasai Mara National Reserve",
    nights: 5,
    locations: 4,
    title: "5 Day Maasai Mara & Lake Naivasha Adventure",
    amenities: ["car", "tent", "campfire", "hiking", "bed"],
    slug: "5-day-maasai-mara-lake-naivasha-adventure-2",
  },
  {
    id: 6,
    image: "/images/itinerary-3.png",
    badge: "Maasai Mara National Reserve",
    nights: 7,
    locations: 4,
    title: "7 Day Ultimate Maasai Mara Safari Experience",
    amenities: ["car", "tent", "campfire", "hiking", "bed"],
    slug: "7-day-ultimate-maasai-mara-safari-experience-2",
  },
];
