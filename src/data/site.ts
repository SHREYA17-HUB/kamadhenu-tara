import pondLiner from "@/assets/p-pond-liner.jpg";
import canvas from "@/assets/p-canvas.jpg";
import hdpe from "@/assets/p-hdpe.jpg";
import multilayer from "@/assets/p-multilayer.jpg";
import ldpe from "@/assets/p-ldpe.jpg";
import nylon from "@/assets/p-nylon.jpg";
import vinyl from "@/assets/f-vinyl.jpg";
import wooden from "@/assets/f-wooden.jpg";
import grass from "@/assets/f-grass.jpg";
import carpet from "@/assets/f-carpet.jpg";
import shadeNet from "@/assets/a-shadenet.jpg";
import mulching from "@/assets/a-mulching.jpg";
import weedMat from "@/assets/a-weedmat.jpg";
import cowMat from "@/assets/a-cowmat.jpg";
import ppSheet from "@/assets/fp-ppsheet.jpg";
import bubbleGuard from "@/assets/fp-bubbleguard.jpg";
import foam from "@/assets/fp-foam.jpg";
import rope from "@/assets/r-rope.jpg";
import birdNet from "@/assets/n-birdnet.jpg";
import safetyNet from "@/assets/n-safetynet.jpg";
import birdSpikes from "@/assets/n-birdspikes.jpg";
import carCover from "@/assets/c-carcover.jpg";
import warehouse from "@/assets/app-warehouse.jpg";
import construction from "@/assets/app-construction.jpg";
import agriculture from "@/assets/app-agriculture.jpg";

export const WHATSAPP_NUMBER = "919019379292";
export const PHONE_DISPLAY = "+91 90193 79292";

export const SOCIALS = {
  instagram: "https://www.instagram.com/kamadhenutarpaulinindustry/",
  facebook: "https://www.facebook.com/profile.php?id=61593326256219",
  youtube: "https://www.youtube.com/@Kamadhenu-z26",
};

export function whatsappLink(product?: string) {
  const message = product
    ? `Hello Kamadhenu Tarpaulin Industry, I am interested in ${product}. Please share more details and pricing.`
    : "Hello Kamadhenu Tarpaulin Industry, I would like to know more about your products.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  applications: string[];
};

export const TARPAULINS: Product[] = [
  {
    id: "hdpe-tarpaulin",
    name: "HDPE Tarpaulin",
    category: "Tarpaulins",
    image: hdpe,
    description:
      "Lightweight, waterproof, UV-resistant and highly durable sheets designed for outdoor protection.",
    applications: [
      "Construction materials",
      "Agricultural produce",
      "Trucks",
      "Warehouses",
      "Temporary shelters",
      "Machinery",
    ],
  },
  {
    id: "canvas-tarpaulin",
    name: "Canvas Tarpaulin",
    category: "Tarpaulins",
    image: canvas,
    description:
      "Strong and breathable protective covers suitable for demanding outdoor applications, protecting from dust, sunlight and weather.",
    applications: [
      "Machinery covering",
      "Truck & vehicle covers",
      "Construction sites",
      "Warehouses",
      "Agricultural storage",
      "Outdoor equipment",
    ],
  },
  {
    id: "pond-liner",
    name: "Pond Liner",
    category: "Tarpaulins",
    image: pondLiner,
    description:
      "Durable, waterproof sheets designed to prevent water seepage and maintain water levels in ponds and reservoirs.",
    applications: [
      "Fish farming",
      "Agricultural ponds",
      "Water storage tanks",
      "Rainwater harvesting",
      "Irrigation ponds",
      "Landscaping features",
    ],
  },
  {
    id: "multi-layer-tarpaulin",
    name: "Multi Layer Multi Axis Tarpaulin",
    category: "Tarpaulins",
    image: multilayer,
    description:
      "Engineered with multiple layers for enhanced strength, flexibility and weather resistance in heavy-duty use.",
    applications: [
      "Heavy-duty construction",
      "Industrial storage",
      "Transportation",
      "Agriculture",
      "Machinery protection",
      "Large-scale covering",
    ],
  },
  {
    id: "ldpe-tarpaulin",
    name: "LDPE Tarpaulin",
    category: "Tarpaulins",
    image: ldpe,
    description:
      "Flexible and reliable protection against moisture, dust and weather exposure for everyday requirements.",
    applications: [
      "Agricultural applications",
      "Temporary covers",
      "Construction materials",
      "Storage areas",
      "Packaging",
      "Outdoor protection",
    ],
  },
  {
    id: "nylon-tarpaulin",
    name: "Nylon Tarpaulin",
    category: "Tarpaulins",
    image: nylon,
    description:
      "Lightweight yet strong protective covers designed for applications requiring flexibility and durability.",
    applications: [
      "Transportation",
      "Camping",
      "Temporary shelters",
      "Outdoor equipment",
      "Industrial applications",
      "Vehicle protection",
    ],
  },
];

export const FLOORING: Product[] = [
  {
    id: "vinyl-flooring",
    name: "Vinyl Flooring",
    category: "Flooring",
    image: vinyl,
    description:
      "A stylish, durable and easy-to-maintain flooring solution for modern interiors.",
    applications: ["Homes", "Offices", "Hospitals", "Hotels", "Retail stores", "Schools"],
  },
  {
    id: "wooden-flooring",
    name: "Wooden Flooring",
    category: "Flooring",
    image: wooden,
    description:
      "An elegant and natural appearance that creates a warm, comfortable interior environment.",
    applications: [
      "Residential homes",
      "Offices",
      "Hotels",
      "Showrooms",
      "Restaurants",
      "Conference rooms",
    ],
  },
  {
    id: "artificial-grass",
    name: "Artificial Grass",
    category: "Flooring",
    image: grass,
    description:
      "A green, attractive appearance without the regular watering and maintenance natural grass requires.",
    applications: [
      "Balconies",
      "Terraces",
      "Gardens",
      "Landscaping",
      "Play areas",
      "Sports spaces",
    ],
  },
  {
    id: "luxury-carpets",
    name: "Luxury Carpets",
    category: "Flooring",
    image: carpet,
    description:
      "Elegance, comfort and a premium appearance for interior spaces — also available as loop pile carpets, cushion mats, snake mats, noodles mats and spike mats.",
    applications: [
      "Hotels",
      "Luxury residences",
      "Offices",
      "Restaurants",
      "Showrooms",
      "Conference rooms",
    ],
  },
];

export const AGRICULTURE: Product[] = [
  {
    id: "agriculture-shade-net",
    name: "Agriculture Shade Net",
    category: "Agriculture",
    image: shadeNet,
    description:
      "Regulates sunlight and creates a controlled growing environment for crops and plants.",
    applications: [
      "Greenhouses",
      "Nurseries",
      "Vegetable farms",
      "Flower cultivation",
      "Landscaping",
    ],
  },
  {
    id: "mulching-film",
    name: "Mulching Film",
    category: "Agriculture",
    image: mulching,
    description:
      "Controls weeds, conserves soil moisture and maintains suitable soil conditions for crop growth.",
    applications: [
      "Vegetable cultivation",
      "Fruit farming",
      "Nurseries",
      "Horticulture",
      "Greenhouse farming",
    ],
  },
  {
    id: "weed-mat",
    name: "Weed Mat",
    category: "Agriculture",
    image: weedMat,
    description:
      "Effective control of unwanted weed growth while allowing water to reach the soil.",
    applications: ["Nurseries", "Gardens", "Landscaping", "Plantations", "Pathways"],
  },
  {
    id: "cow-mat",
    name: "Cow Mat & Goat Mat",
    category: "Agriculture",
    image: cowMat,
    description:
      "A cushioned, comfortable surface for livestock that improves hygiene and reduces contact with hard flooring.",
    applications: [
      "Dairy farms",
      "Cattle sheds",
      "Livestock housing",
      "Milking areas",
      "Goat farms",
    ],
  },
];

export const FLOOR_PROTECTION: Product[] = [
  {
    id: "pp-sheet",
    name: "2 mm & 3 mm PP Sheet",
    category: "Floor Protection",
    image: ppSheet,
    description:
      "Lightweight protection against dust, scratches, minor impacts and construction debris for finished surfaces.",
    applications: ["Tiles", "Marble", "Granite", "Wooden floors", "Vinyl flooring"],
  },
  {
    id: "bubble-guard",
    name: "3 Layer Bubble Guard",
    category: "Floor Protection",
    image: bubbleGuard,
    description:
      "Our USP. Multi-layer cushioning that absorbs heavy impacts and protects premium flooring from scratches and dents.",
    applications: [
      "Construction",
      "Interior design",
      "Painting",
      "Renovation",
      "Furniture installation",
    ],
  },
  {
    id: "laminate-foam",
    name: "Blue & White Laminate Foam",
    category: "Floor Protection",
    image: foam,
    description:
      "A soft protective layer in 2 mm and 3 mm that prevents scratches, dust and minor surface damage.",
    applications: [
      "Wooden flooring",
      "Vinyl flooring",
      "Tiles",
      "Marble",
      "Interior work",
    ],
  },
  {
    id: "industrial-ropes",
    name: "Nylon & PP Ropes",
    category: "Ropes",
    image: rope,
    description:
      "Industrial ropes manufactured for superior strength, flexibility and long-lasting performance.",
    applications: [
      "Construction",
      "Agriculture",
      "Packaging",
      "Marine",
      "Transportation",
      "Warehousing",
    ],
  },
];

export const NETS: Product[] = [
  {
    id: "bird-net",
    name: "Bird Net",
    category: "Nets",
    image: birdNet,
    description:
      "An effective physical barrier that prevents birds from entering or nesting in protected areas.",
    applications: [
      "Apartment balconies",
      "Warehouses",
      "Factories",
      "Commercial buildings",
      "Agricultural farms",
    ],
  },
  {
    id: "safety-net",
    name: "Safety Net",
    category: "Nets",
    image: safetyNet,
    description:
      "Improves workplace safety with protection against accidental falls and falling materials.",
    applications: [
      "Construction sites",
      "Buildings under construction",
      "Industrial facilities",
      "Warehouses",
      "Sports facilities",
    ],
  },
  {
    id: "bird-spikes",
    name: "Bird Spikes",
    category: "Nets",
    image: birdSpikes,
    description:
      "Discourages birds from landing and nesting on building surfaces without harming them.",
    applications: [
      "Building ledges",
      "Balconies",
      "Rooftops",
      "Warehouses",
      "AC units",
    ],
  },
  {
    id: "car-covers",
    name: "Car Covers",
    category: "Vehicle",
    image: carCover,
    description:
      "Available in 6 varieties. Water-resistant, UV-protective and dust-proof covers with durable stitching.",
    applications: [
      "Dust protection",
      "Sunlight protection",
      "Rain protection",
      "Scratch resistance",
    ],
  },
];

export const ALL_PRODUCTS: Product[] = [
  ...TARPAULINS,
  ...FLOORING,
  ...AGRICULTURE,
  ...FLOOR_PROTECTION,
  ...NETS,
];

export const APPLICATIONS = [
  {
    id: "agriculture",
    title: "Agriculture & Farming",
    image: agriculture,
    text: "Shade nets, mulching films, weed mats and pond liners that improve crop protection, livestock comfort and farming efficiency.",
  },
  {
    id: "construction",
    title: "Construction",
    image: construction,
    text: "Weather-resistant tarpaulins, safety nets and floor protection sheets that keep sites, materials and finished surfaces protected.",
  },
  {
    id: "warehousing",
    title: "Warehousing & Storage",
    image: warehouse,
    text: "Industrial covers and protection systems for stored goods, racking, machinery and long-term material storage.",
  },
  {
    id: "transportation",
    title: "Transportation",
    image: nylon,
    text: "Truck covers and load protection engineered for the road — light to handle, tough against rain, dust and UV.",
  },
  {
    id: "commercial",
    title: "Commercial Interiors",
    image: vinyl,
    text: "Vinyl, wooden flooring and carpets for hotels, offices, showrooms, healthcare and educational interiors.",
  },
  {
    id: "residential",
    title: "Residential & Outdoor",
    image: birdNet,
    text: "Balcony bird nets, artificial grass, car covers and everyday protection solutions for homes.",
  },
];

export const WHY_US = [
  {
    title: "Established in 1985",
    text: "A household name in tarpaulins with four decades of trust behind it.",
  },
  {
    title: "Premium Quality Products",
    text: "Manufactured with consistent GSM, tear-strength and UV-resistance standards.",
  },
  {
    title: "Extensive Portfolio",
    text: "Tarpaulins, flooring, agriculture, safety nets, ropes and floor protection under one roof.",
  },
  {
    title: "Durable & Weather-Resistant",
    text: "Materials built for India's demanding outdoor conditions.",
  },
  {
    title: "Timely Delivery Across India",
    text: "A reliable logistics network that keeps projects moving.",
  },
  {
    title: "Expert Product Guidance",
    text: "A team led by engineering expertise, matching products to real applications.",
  },
  {
    title: "Customer-Focused Service",
    text: "From product selection through to after-sales support.",
  },
  {
    title: "Long-Term Value",
    text: "Backed by nearly 40 years of manufacturing experience and a reliable supply chain.",
  },
];

export const TIMELINE = [
  {
    year: "1985",
    title: "The First Unit",
    text: "Kamadhenu Tarpaulin Industry is established as a single tarpaulin manufacturing unit.",
  },
  {
    year: "Growth",
    title: "Beyond Tarpaulins",
    text: "The portfolio expands into flooring, agriculture products, floor protection sheets, ropes and safety nets.",
  },
  {
    year: "Expertise",
    title: "Engineering Leadership",
    text: "Veerendhra Sachin, a Mechanical Engineer and R.V College alumnus with aerospace experience, joins the family enterprise to drive innovation and growth.",
  },
  {
    year: "Today",
    title: "South India's Broadest Range",
    text: "One of South India's broadest suppliers of protection and flooring solutions, still manufacturing the core of the range in-house.",
  },
];

export const GALLERY = [
  { image: hdpe, alt: "HDPE tarpaulin roll", cat: "Tarpaulins" },
  { image: warehouse, alt: "Industrial warehouse storage", cat: "Warehouse" },
  { image: birdNet, alt: "Balcony bird net installation", cat: "Nets" },
  { image: wooden, alt: "Wooden flooring interior", cat: "Flooring" },
  { image: construction, alt: "Construction site at sunset", cat: "Applications" },
  { image: canvas, alt: "Canvas tarpaulin cover", cat: "Tarpaulins" },
  { image: shadeNet, alt: "Agriculture shade net over nursery", cat: "Applications" },
  { image: bubbleGuard, alt: "Three layer bubble guard roll", cat: "Flooring" },
  { image: safetyNet, alt: "Safety net on scaffolding", cat: "Nets" },
  { image: carpet, alt: "Luxury carpet in hotel lobby", cat: "Flooring" },
  { image: pondLiner, alt: "Pond liner in farm reservoir", cat: "Tarpaulins" },
  { image: agriculture, alt: "Farm with greenhouse structures", cat: "Applications" },
];

export const GALLERY_CATEGORIES = [
  "All",
  "Tarpaulins",
  "Flooring",
  "Nets",
  "Applications",
  "Warehouse",
];
