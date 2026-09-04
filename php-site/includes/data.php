<?php
declare(strict_types=1);
/**
 * All site content in one place. Replaces the former React data module.
 */

$PRODUCT_GROUPS = [
    'tarpaulins' => [
        'label' => 'Tarpaulins',
        'items' => [
            [
                'id' => 'hdpe-tarpaulin',
                'name' => 'HDPE Tarpaulin',
                'category' => 'Tarpaulins',
                'image' => 'p-hdpe.jpg',
                'description' => 'Lightweight, waterproof, UV-resistant and highly durable sheets designed for outdoor protection.',
                'applications' => ['Construction materials', 'Agricultural produce', 'Trucks', 'Warehouses', 'Temporary shelters', 'Machinery'],
            ],
            [
                'id' => 'canvas-tarpaulin',
                'name' => 'Canvas Tarpaulin',
                'category' => 'Tarpaulins',
                'image' => 'p-canvas.jpg',
                'description' => 'Strong and breathable protective covers suitable for demanding outdoor applications, protecting from dust, sunlight and weather.',
                'applications' => ['Machinery covering', 'Truck & vehicle covers', 'Construction sites', 'Warehouses', 'Agricultural storage', 'Outdoor equipment'],
            ],
            [
                'id' => 'pond-liner',
                'name' => 'Pond Liner',
                'category' => 'Tarpaulins',
                'image' => 'p-pond-liner.jpg',
                'description' => 'Durable, waterproof sheets designed to prevent water seepage and maintain water levels in ponds and reservoirs.',
                'applications' => ['Fish farming', 'Agricultural ponds', 'Water storage tanks', 'Rainwater harvesting', 'Irrigation ponds', 'Landscaping features'],
            ],
            [
                'id' => 'multi-layer-tarpaulin',
                'name' => 'Multi Layer Multi Axis Tarpaulin',
                'category' => 'Tarpaulins',
                'image' => 'p-multilayer.jpg',
                'description' => 'Engineered with multiple layers for enhanced strength, flexibility and weather resistance in heavy-duty use.',
                'applications' => ['Heavy-duty construction', 'Industrial storage', 'Transportation', 'Agriculture', 'Machinery protection', 'Large-scale covering'],
            ],
            [
                'id' => 'ldpe-tarpaulin',
                'name' => 'LDPE Tarpaulin',
                'category' => 'Tarpaulins',
                'image' => 'p-ldpe.jpg',
                'description' => 'Flexible and reliable protection against moisture, dust and weather exposure for everyday requirements.',
                'applications' => ['Agricultural applications', 'Temporary covers', 'Construction materials', 'Storage areas', 'Packaging', 'Outdoor protection'],
            ],
            [
                'id' => 'nylon-tarpaulin',
                'name' => 'Nylon Tarpaulin',
                'category' => 'Tarpaulins',
                'image' => 'p-nylon.jpg',
                'description' => 'Lightweight yet strong protective covers designed for applications requiring flexibility and durability.',
                'applications' => ['Transportation', 'Camping', 'Temporary shelters', 'Outdoor equipment', 'Industrial applications', 'Vehicle protection'],
            ],
        ],
    ],
    'flooring' => [
        'label' => 'Flooring',
        'items' => [
            [
                'id' => 'vinyl-flooring',
                'name' => 'Vinyl Flooring',
                'category' => 'Flooring',
                'image' => 'f-vinyl.jpg',
                'description' => 'A stylish, durable and easy-to-maintain flooring solution for modern interiors.',
                'applications' => ['Homes', 'Offices', 'Hospitals', 'Hotels', 'Retail stores', 'Schools'],
            ],
            [
                'id' => 'wooden-flooring',
                'name' => 'Wooden Flooring',
                'category' => 'Flooring',
                'image' => 'f-wooden.jpg',
                'description' => 'An elegant and natural appearance that creates a warm, comfortable interior environment.',
                'applications' => ['Residential homes', 'Offices', 'Hotels', 'Showrooms', 'Restaurants', 'Conference rooms'],
            ],
            [
                'id' => 'artificial-grass',
                'name' => 'Artificial Grass',
                'category' => 'Flooring',
                'image' => 'f-grass.jpg',
                'description' => 'A green, attractive appearance without the regular watering and maintenance natural grass requires.',
                'applications' => ['Balconies', 'Terraces', 'Gardens', 'Landscaping', 'Play areas', 'Sports spaces'],
            ],
            [
                'id' => 'luxury-carpets',
                'name' => 'Luxury Carpets',
                'category' => 'Flooring',
                'image' => 'f-carpet.jpg',
                'description' => 'Elegance, comfort and a premium appearance for interior spaces — also available as loop pile carpets, cushion mats, snake mats, noodles mats and spike mats.',
                'applications' => ['Hotels', 'Luxury residences', 'Offices', 'Restaurants', 'Showrooms', 'Conference rooms'],
            ],
        ],
    ],
    'agriculture' => [
        'label' => 'Agriculture',
        'items' => [
            [
                'id' => 'agriculture-shade-net',
                'name' => 'Agriculture Shade Net',
                'category' => 'Agriculture',
                'image' => 'a-shadenet.jpg',
                'description' => 'Regulates sunlight and creates a controlled growing environment for crops and plants.',
                'applications' => ['Greenhouses', 'Nurseries', 'Vegetable farms', 'Flower cultivation', 'Landscaping'],
            ],
            [
                'id' => 'mulching-film',
                'name' => 'Mulching Film',
                'category' => 'Agriculture',
                'image' => 'a-mulching.jpg',
                'description' => 'Controls weeds, conserves soil moisture and maintains suitable soil conditions for crop growth.',
                'applications' => ['Vegetable cultivation', 'Fruit farming', 'Nurseries', 'Horticulture', 'Greenhouse farming'],
            ],
            [
                'id' => 'weed-mat',
                'name' => 'Weed Mat',
                'category' => 'Agriculture',
                'image' => 'a-weedmat.jpg',
                'description' => 'Effective control of unwanted weed growth while allowing water to reach the soil.',
                'applications' => ['Nurseries', 'Gardens', 'Landscaping', 'Plantations', 'Pathways'],
            ],
            [
                'id' => 'cow-mat',
                'name' => 'Cow Mat & Goat Mat',
                'category' => 'Agriculture',
                'image' => 'a-cowmat.jpg',
                'description' => 'A cushioned, comfortable surface for livestock that improves hygiene and reduces contact with hard flooring.',
                'applications' => ['Dairy farms', 'Cattle sheds', 'Livestock housing', 'Milking areas', 'Goat farms'],
            ],
        ],
    ],
    'protection' => [
        'label' => 'Floor Protection & Ropes',
        'items' => [
            [
                'id' => 'pp-sheet',
                'name' => '2 mm & 3 mm PP Sheet',
                'category' => 'Floor Protection',
                'image' => 'fp-ppsheet.jpg',
                'description' => 'Lightweight protection against dust, scratches, minor impacts and construction debris for finished surfaces.',
                'applications' => ['Tiles', 'Marble', 'Granite', 'Wooden floors', 'Vinyl flooring'],
            ],
            [
                'id' => 'bubble-guard',
                'name' => '3 Layer Bubble Guard',
                'category' => 'Floor Protection',
                'image' => 'fp-bubbleguard.jpg',
                'description' => 'Our USP. Multi-layer cushioning that absorbs heavy impacts and protects premium flooring from scratches and dents.',
                'applications' => ['Construction', 'Interior design', 'Painting', 'Renovation', 'Furniture installation'],
            ],
            [
                'id' => 'laminate-foam',
                'name' => 'Blue & White Laminate Foam',
                'category' => 'Floor Protection',
                'image' => 'fp-foam.jpg',
                'description' => 'A soft protective layer in 2 mm and 3 mm that prevents scratches, dust and minor surface damage.',
                'applications' => ['Wooden flooring', 'Vinyl flooring', 'Tiles', 'Marble', 'Interior work'],
            ],
            [
                'id' => 'industrial-ropes',
                'name' => 'Nylon & PP Ropes',
                'category' => 'Ropes',
                'image' => 'r-rope.jpg',
                'description' => 'Industrial ropes manufactured for superior strength, flexibility and long-lasting performance.',
                'applications' => ['Construction', 'Agriculture', 'Packaging', 'Marine', 'Transportation', 'Warehousing'],
            ],
        ],
    ],
    'nets' => [
        'label' => 'Nets & Covers',
        'items' => [
            [
                'id' => 'bird-net',
                'name' => 'Bird Net',
                'category' => 'Nets',
                'image' => 'n-birdnet.jpg',
                'description' => 'An effective physical barrier that prevents birds from entering or nesting in protected areas.',
                'applications' => ['Apartment balconies', 'Warehouses', 'Factories', 'Commercial buildings', 'Agricultural farms'],
            ],
            [
                'id' => 'safety-net',
                'name' => 'Safety Net',
                'category' => 'Nets',
                'image' => 'n-safetynet.jpg',
                'description' => 'Improves workplace safety with protection against accidental falls and falling materials.',
                'applications' => ['Construction sites', 'Buildings under construction', 'Industrial facilities', 'Warehouses', 'High-rise maintenance'],
            ],
            [
                'id' => 'bird-spikes',
                'name' => 'Bird Spikes',
                'category' => 'Nets',
                'image' => 'n-birdspikes.jpg',
                'description' => 'A humane deterrent that stops birds perching on ledges, parapets and signage.',
                'applications' => ['Balconies', 'Window ledges', 'Rooftops', 'Signage', 'Commercial facades'],
            ],
            [
                'id' => 'car-cover',
                'name' => 'Car & Vehicle Covers',
                'category' => 'Covers',
                'image' => 'c-carcover.jpg',
                'description' => 'Tailored protective covers that shield vehicles from dust, sunlight, rain and surface scratches.',
                'applications' => ['Dust protection', 'Sunlight protection', 'Rain protection', 'Scratch resistance'],
            ],
        ],
    ],
];

/** Flat product list (for dropdowns and detail lookups). */
$ALL_PRODUCTS = [];
foreach ($PRODUCT_GROUPS as $g) {
    foreach ($g['items'] as $p) {
        $ALL_PRODUCTS[] = $p;
    }
}

$APPLICATIONS = [
    ['id' => 'agriculture', 'title' => 'Agriculture & Farming', 'image' => 'app-agriculture.jpg', 'text' => 'Shade nets, mulching films, weed mats and pond liners that improve crop protection, livestock comfort and farming efficiency.'],
    ['id' => 'construction', 'title' => 'Construction', 'image' => 'app-construction.jpg', 'text' => 'Weather-resistant tarpaulins, safety nets and floor protection sheets that keep sites, materials and finished surfaces protected.'],
    ['id' => 'warehousing', 'title' => 'Warehousing & Storage', 'image' => 'app-warehouse.jpg', 'text' => 'Industrial covers and protection systems for stored goods, racking, machinery and long-term material storage.'],
    ['id' => 'transportation', 'title' => 'Transportation', 'image' => 'p-nylon.jpg', 'text' => 'Truck covers and load protection engineered for the road — light to handle, tough against rain, dust and UV.'],
    ['id' => 'commercial', 'title' => 'Commercial Interiors', 'image' => 'f-vinyl.jpg', 'text' => 'Vinyl, wooden flooring and carpets for hotels, offices, showrooms, healthcare and educational interiors.'],
    ['id' => 'residential', 'title' => 'Residential & Outdoor', 'image' => 'n-birdnet.jpg', 'text' => 'Balcony bird nets, artificial grass, car covers and everyday protection solutions for homes.'],
];

$WHY_US = [
    ['title' => 'Established in 1985', 'text' => 'A household name in tarpaulins with four decades of trust behind it.'],
    ['title' => 'Premium Quality Products', 'text' => 'Manufactured with consistent GSM, tear-strength and UV-resistance standards.'],
    ['title' => 'Extensive Portfolio', 'text' => 'Tarpaulins, flooring, agriculture, safety nets, ropes and floor protection under one roof.'],
    ['title' => 'Durable & Weather-Resistant', 'text' => "Materials built for India's demanding outdoor conditions."],
    ['title' => 'Timely Delivery Across India', 'text' => 'A reliable logistics network that keeps projects moving.'],
    ['title' => 'Expert Product Guidance', 'text' => 'A team led by engineering expertise, matching products to real applications.'],
    ['title' => 'Customer-Focused Service', 'text' => 'From product selection through to after-sales support.'],
    ['title' => 'Long-Term Value', 'text' => 'Backed by nearly 40 years of manufacturing experience and a reliable supply chain.'],
];

$TIMELINE = [
    ['step' => 'Step 01', 'year' => '1985', 'title' => 'The First Unit', 'text' => 'Kamadhenu Tarpaulin Industry is established in Bengaluru as a single tarpaulin manufacturing unit.'],
    ['step' => 'Step 02', 'year' => 'Growth', 'title' => 'Beyond Tarpaulins', 'text' => 'The portfolio expands into flooring, agriculture products, floor protection sheets, ropes and safety nets.'],
    ['step' => 'Step 03', 'year' => 'Innovation', 'title' => 'Engineering Leadership', 'text' => 'Veerendhra Sachin, a Mechanical Engineer and R.V College alumnus with aerospace experience, joins the family enterprise to drive modern manufacturing and product development.'],
    ['step' => 'Step 04', 'year' => 'Today', 'title' => "South India's Broadest Range", 'text' => 'A trusted industrial brand and one of South India\'s broadest suppliers of protection and flooring solutions, still manufacturing the core of the range in-house.'],
];

$GALLERY = [
    ['image' => 'p-hdpe.jpg', 'alt' => 'HDPE tarpaulin roll', 'cat' => 'Tarpaulins'],
    ['image' => 'app-warehouse.jpg', 'alt' => 'Industrial warehouse storage', 'cat' => 'Warehouse'],
    ['image' => 'n-birdnet.jpg', 'alt' => 'Balcony bird net installation', 'cat' => 'Nets'],
    ['image' => 'f-wooden.jpg', 'alt' => 'Wooden flooring interior', 'cat' => 'Flooring'],
    ['image' => 'app-construction.jpg', 'alt' => 'Construction site at sunset', 'cat' => 'Applications'],
    ['image' => 'p-canvas.jpg', 'alt' => 'Canvas tarpaulin cover', 'cat' => 'Tarpaulins'],
    ['image' => 'a-shadenet.jpg', 'alt' => 'Agriculture shade net over nursery', 'cat' => 'Applications'],
    ['image' => 'fp-bubbleguard.jpg', 'alt' => 'Three layer bubble guard roll', 'cat' => 'Flooring'],
    ['image' => 'n-safetynet.jpg', 'alt' => 'Safety net on scaffolding', 'cat' => 'Nets'],
    ['image' => 'f-carpet.jpg', 'alt' => 'Luxury carpet in hotel lobby', 'cat' => 'Flooring'],
    ['image' => 'p-pond-liner.jpg', 'alt' => 'Pond liner in farm reservoir', 'cat' => 'Tarpaulins'],
    ['image' => 'app-agriculture.jpg', 'alt' => 'Farm with greenhouse structures', 'cat' => 'Applications'],
];

$GALLERY_CATEGORIES = ['All', 'Tarpaulins', 'Flooring', 'Nets', 'Applications', 'Warehouse'];
