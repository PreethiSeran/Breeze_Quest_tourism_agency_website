import munnarImg from "@/assets/destinations/munnar.jpg";
import jaipurImg from "@/assets/destinations/jaipur.jpg";
import goaImg from "@/assets/destinations/goa.jpg";
import coorgImg from "@/assets/destinations/coorg.jpg";
import alleppeyImg from "@/assets/destinations/alleppey.jpg";
import rishikeshImg from "@/assets/destinations/rishikesh.jpg";
import ootyImg from "@/assets/destinations/ooty.jpg";
import pondicherryImg from "@/assets/destinations/pondicherry.jpg";
import darjeelingImg from "@/assets/destinations/darjeeling.jpg";
import andamanImg from "@/assets/destinations/andaman.jpg";

export interface Destination {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  bestTime: string;
  activities: string[];
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    id: "munnar",
    name: "Munnar, Kerala",
    shortDescription: "A serene hill station known for lush tea plantations, cool climate, and breathtaking viewpoints.",
    fullDescription: "This destination offers a perfect mix of natural beauty, cultural charm, and unforgettable experiences. Whether you're seeking adventure, relaxation, or scenic landscapes, Munnar has something for every kind of traveler.",
    image: munnarImg,
    bestTime: "October – March",
    activities: ["Sightseeing", "Tea Plantation Tours", "Trekking", "Photography", "Nature Walks"],
    highlights: ["Rolling tea gardens", "Eravikulam National Park", "Mattupetty Dam", "Echo Point"]
  },
  {
    id: "jaipur",
    name: "Jaipur, Rajasthan",
    shortDescription: "The Pink City filled with royal palaces, historic forts, colorful markets, and rich culture.",
    fullDescription: "This destination offers a perfect mix of natural beauty, cultural charm, and unforgettable experiences. Whether you're seeking adventure, relaxation, or scenic landscapes, Jaipur has something for every kind of traveler.",
    image: jaipurImg,
    bestTime: "October – March",
    activities: ["Sightseeing", "Cultural Visits", "Local Food Exploration", "Photography", "Shopping"],
    highlights: ["Hawa Mahal", "Amber Fort", "City Palace", "Jantar Mantar", "Vibrant bazaars"]
  },
  {
    id: "goa",
    name: "Goa",
    shortDescription: "India's favorite beach paradise offering golden beaches, nightlife, water sports, and tropical vibes.",
    fullDescription: "This destination offers a perfect mix of natural beauty, cultural charm, and unforgettable experiences. Whether you're seeking adventure, relaxation, or scenic landscapes, Goa has something for every kind of traveler.",
    image: goaImg,
    bestTime: "October – March",
    activities: ["Water Sports", "Beach Activities", "Nightlife", "Local Food Exploration", "Photography"],
    highlights: ["Golden beaches", "Beach shacks", "Portuguese churches", "Vibrant nightlife", "Water sports"]
  },
  {
    id: "coorg",
    name: "Coorg, Karnataka",
    shortDescription: "A peaceful mountain escape filled with coffee estates, waterfalls, and wildlife adventures.",
    fullDescription: "This destination offers a perfect mix of natural beauty, cultural charm, and unforgettable experiences. Whether you're seeking adventure, relaxation, or scenic landscapes, Coorg has something for every kind of traveler.",
    image: coorgImg,
    bestTime: "October – March",
    activities: ["Coffee Plantation Tours", "Trekking", "Wildlife Safaris", "Photography", "Nature Walks"],
    highlights: ["Coffee plantations", "Abbey Falls", "Raja's Seat", "Dubare Elephant Camp"]
  },
  {
    id: "alleppey",
    name: "Alleppey, Kerala",
    shortDescription: "Known for relaxing backwaters, houseboat stays, and scenic canals surrounded by palms.",
    fullDescription: "This destination offers a perfect mix of natural beauty, cultural charm, and unforgettable experiences. Whether you're seeking adventure, relaxation, or scenic landscapes, Alleppey has something for every kind of traveler.",
    image: alleppeyImg,
    bestTime: "October – March",
    activities: ["Houseboat Cruises", "Sightseeing", "Local Food Exploration", "Photography", "Nature Walks"],
    highlights: ["Backwater cruises", "Houseboats", "Vembanad Lake", "Traditional Kerala cuisine"]
  },
  {
    id: "rishikesh",
    name: "Rishikesh, Uttarakhand",
    shortDescription: "The adventure capital offering river rafting, yoga retreats, Ganga aarti and mountain landscapes.",
    fullDescription: "This destination offers a perfect mix of natural beauty, cultural charm, and unforgettable experiences. Whether you're seeking adventure, relaxation, or scenic landscapes, Rishikesh has something for every kind of traveler.",
    image: rishikeshImg,
    bestTime: "October – March",
    activities: ["River Rafting", "Yoga & Meditation", "Trekking", "Cultural Visits", "Photography"],
    highlights: ["Ganges river", "Lakshman Jhula", "Ram Jhula", "Ganga Aarti", "Adventure sports"]
  },
  {
    id: "ooty",
    name: "Ooty, Tamil Nadu",
    shortDescription: "A calm hill town famous for botanical gardens, toy train rides, and scenic lake views.",
    fullDescription: "This destination offers a perfect mix of natural beauty, cultural charm, and unforgettable experiences. Whether you're seeking adventure, relaxation, or scenic landscapes, Ooty has something for every kind of traveler.",
    image: ootyImg,
    bestTime: "October – March",
    activities: ["Toy Train Ride", "Sightseeing", "Boating", "Photography", "Nature Walks"],
    highlights: ["Nilgiri Mountain Railway", "Ooty Lake", "Botanical Gardens", "Tea estates"]
  },
  {
    id: "pondicherry",
    name: "Pondicherry",
    shortDescription: "A French-style coastal town filled with colorful houses, cafés, beaches, and spiritual centers.",
    fullDescription: "This destination offers a perfect mix of natural beauty, cultural charm, and unforgettable experiences. Whether you're seeking adventure, relaxation, or scenic landscapes, Pondicherry has something for every kind of traveler.",
    image: pondicherryImg,
    bestTime: "October – March",
    activities: ["Beach Activities", "Cultural Visits", "Local Food Exploration", "Photography", "Shopping"],
    highlights: ["French Quarter", "Auroville", "Paradise Beach", "Promenade Beach", "Cafés"]
  },
  {
    id: "darjeeling",
    name: "Darjeeling, West Bengal",
    shortDescription: "The queen of the hills known for tea gardens, sunrise viewpoints, and the iconic toy train.",
    fullDescription: "This destination offers a perfect mix of natural beauty, cultural charm, and unforgettable experiences. Whether you're seeking adventure, relaxation, or scenic landscapes, Darjeeling has something for every kind of traveler.",
    image: darjeelingImg,
    bestTime: "October – March",
    activities: ["Tea Garden Tours", "Toy Train Ride", "Sightseeing", "Trekking", "Photography"],
    highlights: ["Tiger Hill sunrise", "Darjeeling Himalayan Railway", "Tea estates", "Kanchenjunga views"]
  },
  {
    id: "andaman",
    name: "Andaman & Nicobar Islands",
    shortDescription: "Crystal-clear beaches, vibrant coral reefs, blue waters, and unforgettable island experiences.",
    fullDescription: "This destination offers a perfect mix of natural beauty, cultural charm, and unforgettable experiences. Whether you're seeking adventure, relaxation, or scenic landscapes, Andaman has something for every kind of traveler.",
    image: andamanImg,
    bestTime: "October – March",
    activities: ["Snorkeling", "Scuba Diving", "Beach Activities", "Island Hopping", "Photography"],
    highlights: ["Radhanagar Beach", "Cellular Jail", "Havelock Island", "Neil Island", "Coral reefs"]
  }
];
