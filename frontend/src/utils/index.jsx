import axios from "axios";

const productionUrl = "https://ketema-farm-backend.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option value={amount} key={amount}>
        {amount}
      </option>
    );
  });
};

export const products = [
  {
    id: 1,
    title: "Golden Wheat",
    description:
      "Premium organic golden wheat grains, freshly harvested from sustainable farms. Perfect for baking artisan bread, pastries, and wholesome breakfast cereals. Rich in fiber and essential nutrients, our wheat maintains all its natural goodness through careful processing. Each grain is selected for optimal size and quality, ensuring consistent results in all your culinary creations. Store in a cool, dry place to preserve freshness.",
    farmerName: "John Doe",
    category: "CEREALS",
    price: 15.99,
    size: "1kg",
    image:
      "https://images.unsplash.com/photo-1533321942807-08e4008b2025?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Sunflower Flowers",
    description:
      "Vibrant sunflower bouquet, hand-picked at peak bloom for maximum freshness and longevity. These cheerful flowers bring sunshine indoors with their large, golden-yellow petals and dark centers. Perfect for centerpieces, gifts, or simply brightening your living space. Each stem measures approximately 18-24 inches with blooms 4-6 inches in diameter. Place in fresh water and trim stems regularly to extend their beauty.",
    farmerName: "Alice Green",
    category: "FLOWERS",
    price: 4.5,
    size: "bunch",
    image:
      "https://plus.unsplash.com/premium_photo-1675366071307-4be5bda2ceda?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Tomato Seedlings",
    description:
      "Healthy, vigorous tomato seedlings ready for transplanting. These robust plants are disease-resistant and produce high yields of juicy, flavorful tomatoes. Grown from heirloom seeds under optimal conditions to ensure strong root development. Each seedling is approximately 6-8 inches tall with 4-6 true leaves. Plant in full sun after last frost, spacing 24-36 inches apart. Includes care instructions for optimal growth.",
    farmerName: "Carlos Silva",
    category: "TOOLS",
    price: 2.99,
    size: "10 seedlings",
    image:
      "https://images.unsplash.com/photo-1662370761575-05ff1ee40d7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Fresh Carrots",
    description:
      "Sweet, crunchy carrots harvested at perfect maturity for maximum flavor and nutrition. These vibrant orange roots are packed with beta-carotene, vitamins, and antioxidants. Grown in mineral-rich soil without synthetic pesticides. Excellent for snacking, juicing, roasting, or adding to soups and stews. Each carrot is hand-selected for uniform size and quality. Refrigerate in plastic bag for extended freshness.",
    farmerName: "Becky Adams",
    category: "VEGETABLES",
    price: 3.0,
    size: "500g",
    image:
      "https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Premium Rice Grains",
    description:
      "High-quality long-grain white rice with excellent cooking properties. Each grain remains separate and fluffy when cooked, perfect for pilafs, stir-fries, and side dishes. Sourced from sustainable paddies and carefully milled to preserve nutrients. Naturally gluten-free and a great source of energy. Cooks in just 15-20 minutes. Store in airtight container in cool, dry place for up to 12 months.",
    farmerName: "Liu Wei",
    category: "CEREALS",
    price: 10.99,
    size: "2kg",
    image:
      "https://plus.unsplash.com/premium_photo-1675365979619-27e23094b87e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Elegant Orchid Bouquet",
    description:
      "Exquisite orchid arrangement featuring delicate blooms in various stages of development for long-lasting beauty. These sophisticated flowers symbolize love, luxury, and strength. Each stem is carefully packaged to prevent damage during transit. Orchids thrive in indirect light with weekly watering. Makes an impressive gift for special occasions or a stunning addition to home or office decor.",
    farmerName: "Maria Lopez",
    category: "FLOWERS",
    price: 20.0,
    size: "set of 5",
    image:
      "https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "Lettuce Seedlings",
    description:
      "Premium lettuce seedlings ready to transform your garden or containers. Variety includes crisphead, romaine, and leaf types for diverse salads. Grown from non-GMO seeds under controlled conditions for uniform growth. Each seedling has strong roots and 3-4 true leaves. Plant 6-8 inches apart in rich, moist soil. Harvest outer leaves for continuous production or whole heads when mature.",
    farmerName: "Sam Brown",
    category: "TOOLS",
    price: 2.5,
    size: "12 seedlings",
    image:
      "https://images.unsplash.com/photo-1590165482129-1b8b27698780?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "Fresh Broccoli",
    description:
      "Nutrient-dense broccoli heads with tight, deep green florets and crisp stalks. Harvested at peak freshness to preserve vitamins C and K, fiber, and antioxidants. Excellent steamed, roasted, or added to stir-fries. The tender stems are equally delicious when peeled and cooked. Grown using sustainable methods without synthetic chemicals. Refrigerate in plastic bag for up to one week.",
    farmerName: "Anna Kim",
    category: "VEGETABLES",
    price: 4.75,
    size: "300g",
    image:
      "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmVnZXRhYmxlfGVufDB8fDB8fHww",
  },
  {
    id: 9,
    title: "Sweet Maize",
    description:
      "Farm-fresh sweet corn with plump, juicy kernels bursting with natural sweetness. Harvested at perfect ripeness for optimal flavor and texture. Excellent grilled, boiled, or roasted. Kernels can also be removed for soups, salads, or freezing. Non-GMO varieties grown with minimal intervention. For best results, cook within 2-3 days of purchase or store in husks in refrigerator.",
    farmerName: "Pedro Martinez",
    category: "CEREALS",
    price: 5.2,
    size: "4 cobs",
    image:
      "https://images.unsplash.com/photo-1606170034765-13ccb20615b5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    title: "Red Rose Bouquet",
    description:
      "Classic red roses symbolizing love and passion, carefully selected for perfect bloom stage. Each velvety petal unfolds beautifully, creating a dramatic display. Stems are thorn-free and approximately 18-22 inches long. Arrives with care instructions to maximize vase life. Ideal for romantic occasions, anniversaries, or as a heartfelt gesture. Remove lower leaves and recut stems diagonally before arranging.",
    farmerName: "Emily White",
    category: "FLOWERS",
    price: 12.0,
    size: "12 roses",
    image:
      "https://plus.unsplash.com/premium_photo-1675365979619-27e23094b87e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    title: "Cucumber Seedlings",
    description:
      "Vigorous cucumber seedlings ready to produce abundant, crisp fruits all season. Disease-resistant varieties selected for reliability and flavor. Each plant has 3-4 true leaves and strong root system. Ideal for trellising or ground culture. Plant after last frost in full sun with plenty of organic matter. Water consistently for straight, sweet cucumbers. Includes growing tips for maximum yield.",
    farmerName: "Tom Harris",
    category: "TOOLS",
    price: 2.75,
    size: "10 seedlings",
    image:
      "https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    title: "Baby Spinach",
    description:
      "Tender young spinach leaves with delicate texture and mild flavor. Packed with iron, vitamins A and C, and antioxidants. Perfect for fresh salads, smoothies, or quick wilting. Carefully washed and ready to eat. Grown using organic methods without synthetic pesticides. Refrigerate in original packaging and consume within 5 days for optimal freshness and nutrient retention.",
    farmerName: "Grace Lee",
    category: "VEGETABLES",
    price: 3.5,
    size: "200g",
    image:
      "https://images.unsplash.com/photo-1590165482129-1b8b27698780?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    title: "Whole Grain Oats",
    description:
      "Nutritious whole grain oats, minimally processed to retain maximum fiber and nutrients. Perfect for hearty breakfast porridge, baking, or homemade granola. Rich in soluble fiber that supports heart health. Cooks in just 5-7 minutes for quick, wholesome meals. Certified gluten-free processing. Store in airtight container in cool, dry place for up to 6 months.",
    farmerName: "David Clark",
    category: "CEREALS",
    price: 6.75,
    size: "1.5kg",
    image:
      "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmVnZXRhYmxlfGVufDB8fDB8fHww",
  },
  {
    id: 14,
    title: "Lavender Bunches",
    description:
      "Fragrant lavender stems with calming aroma, perfect for relaxation and home decor. Each bunch contains 8-10 stems with vibrant purple flowers. Use in sachets, potpourri, or as natural air freshener. The essential oils may help promote restful sleep when placed near bedside. Hang upside down to dry for long-lasting fragrance. Grown without chemical treatments.",
    farmerName: "Sophia Martin",
    category: "FLOWERS",
    price: 8.0,
    size: "bunch",
    image:
      "https://images.unsplash.com/photo-1543218024-57a70143c369?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    title: "Pepper Seedlings",
    description:
      "Robust pepper seedlings offering variety of heat levels from sweet to medium-hot. Strong plants with healthy root systems ready for transplant. Includes colorful bell peppers and classic chili varieties. Each seedling has 4-6 true leaves. Plant in full sun after danger of frost has passed. Stake taller varieties for support. Water consistently for best fruit production.",
    farmerName: "Luis Gomez",
    category: "TOOLS",
    price: 3.0,
    size: "10 seedlings",
    image:
      "https://images.unsplash.com/photo-1543218024-57a70143c369?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    title: "Fresh Cauliflower",
    description:
      "Creamy white cauliflower heads with tight, compact florets and fresh green leaves. Versatile vegetable that can be roasted, mashed, or used as low-carb alternative. Rich in vitamins C and K, and antioxidants. Grown using sustainable practices. Wrap unwashed in plastic and refrigerate for up to one week. Remove outer leaves and core before cooking.",
    farmerName: "Isabel Rodriguez",
    category: "VEGETABLES",
    price: 4.25,
    size: "400g",
    image:
      "https://plus.unsplash.com/premium_photo-1675365979619-27e23094b87e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 17,
    title: "Organic Millet",
    description:
      "Ancient grain millet with nutty flavor and excellent nutritional profile. Gluten-free alternative packed with protein, fiber, and minerals. Cooks quickly for porridge, pilafs, or as rice substitute. Soak before cooking to reduce phytic acid. Stores well in airtight container. Versatile ingredient for both sweet and savory dishes. Source of sustained energy with low glycemic index.",
    farmerName: "Kumar Patel",
    category: "CEREALS",
    price: 9.5,
    size: "1kg",
    image:
      "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmVnZXRhYmxlfGVufDB8fDB8fHww",
  },
  {
    id: 18,
    title: "Daisy Bouquet",
    description:
      "Cheerful daisy arrangement featuring pure white petals with sunny yellow centers. Symbolizes innocence and new beginnings. Each stem bears multiple blooms for full, lush appearance. Long-lasting cut flowers that brighten any space. Change water every 2-3 days and trim stems to prolong vase life. Perfect for casual occasions, get-well gifts, or everyday cheer.",
    farmerName: "Olivia Scott",
    category: "FLOWERS",
    price: 9.0,
    size: "bunch",
    image:
      "https://img.freepik.com/premium-photo/low-section-woman-walking-field_1048944-18762324.jpg?w=996",
  },
  {
    id: 19,
    title: "Eggplant Seedlings",
    description:
      "Healthy eggplant seedlings ready to produce glossy purple fruits. Compact plants ideal for containers or garden beds. Each seedling has 4-6 true leaves and strong stem. Plant in full sun after temperatures consistently exceed 60°F. Space 18-24 inches apart. Harvest when skin is shiny and fruits are firm. Excellent for grilling, roasting, or making dips.",
    farmerName: "Marco Rossi",
    category: "TOOLS",
    price: 2.8,
    size: "10 seedlings",
    image:
      "https://plus.unsplash.com/premium_photo-1675366071307-4be5bda2ceda?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 20,
    title: "Fresh Zucchini",
    description:
      "Young, tender zucchini with thin skin and delicate flavor. Harvested at ideal size (6-8 inches) for best texture. Versatile summer squash excellent grilled, sautéed, baked, or spiralized. Low in calories but high in vitamins and minerals. Grown using organic methods. Store unwashed in plastic bag in refrigerator for up to one week.",
    farmerName: "Natalie Turner",
    category: "VEGETABLES",
    price: 3.75,
    size: "2 pieces",
    image:
      "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmVnZXRhYmxlfGVufDB8fDB8fHww",
  },
];

export const lands = [
  {
    id: 1,
    name: "Organic Baby Spinach Plot",
    description: "Perfect for growing leafy greens with partial sunlight.",
    category: "GARDEN",
    price: 4.99,
    city: "Addis Ababa",
    image:
      "https://img.freepik.com/free-photo/beautiful-view-field-magnificent-clouds-tsavo-west-taita-hills-kenya_181624-7893.jpg?t=st=1746388403~exp=1746392003~hmac=39254da3c5a4a617689f9f4eb70fd67151aafa20688623f0627bd5539e43233a&w=826",
  },
  {
    id: 2,
    name: "Balcony Space - West View",
    description: "Small balcony ideal for container gardening.",
    category: "BALCONY",
    price: 6.99,
    city: "Bahir Dar",
    image:
      "https://img.freepik.com/premium-photo/scenic-view-landscape-against-sky_1048944-30686008.jpg?w=1380",
  },
  {
    id: 3,
    name: "Rooftop Garden Spot",
    description: "Sunny rooftop with space for vertical farming.",
    category: "ROOFTOP",
    price: 5.49,
    city: "Dire Dawa",
    image:
      "https://img.freepik.com/free-photo/beautiful-landscape-wichita-mountains-wildlife-refuge-located-southwestern-oklahoma_181624-41790.jpg?t=st=1746388175~exp=1746391775~hmac=f952dd652abd6c3c6d50906e1747d52403dce59aff1c0759bdea73fc6d79b76c&w=996",
  },
  {
    id: 4,
    name: "Green Corner Plot",
    description: "Lush small garden perfect for herbs and veggies.",
    category: "BACKYARD/GARDEN",
    price: 7.99,
    city: "Hawassa",
    image:
      "https://img.freepik.com/free-photo/beautiful-shot-long-valley-mountains-distance_181624-20114.jpg?t=st=1746388230~exp=1746391830~hmac=78fd163c10d34942e33c236abd1b74ddf884cad692fc207f18f1d74c4ea5a90c&w=996",
  },
  {
    id: 5,
    name: "Unused Rooftop Space",
    description: "Available rooftop area with partial shade.",
    category: "ROOFTOP",
    price: 8.99,
    city: "Mekelle",
    image:
      "https://img.freepik.com/free-photo/beautiful-view-field-magnificent-clouds-tsavo-west-taita-hills-kenya_181624-7893.jpg?t=st=1746388403~exp=1746392003~hmac=39254da3c5a4a617689f9f4eb70fd67151aafa20688623f0627bd5539e43233a&w=826",
  },
  {
    id: 6,
    name: "Balcony Garden Opportunity",
    description: "Cozy balcony facing east, suitable for herbs.",
    category: "BALCONY",
    price: 12.49,
    city: "Adama",
    image:
      "https://img.freepik.com/premium-photo/scenic-view-landscape-against-sky_1048944-30686008.jpg?w=1380",
  },
  {
    id: 7,
    name: "Compact Garden Space",
    description: "Private backyard plot ready for planting.",
    category: "GARDEN",
    price: 6.99,
    city: "Gondar",
    image:
      "https://img.freepik.com/premium-photo/red-outhouse-sits-field-brown-grass_809406-1645.jpg?w=740",
  },
  {
    id: 8,
    name: "Sunny Rooftop Patch",
    description: "Great for tomatoes, peppers, and beans.",
    category: "ROOFTOP",
    price: 14.99,
    city: "Jimma",
    image:
      "https://img.freepik.com/premium-photo/empty-rooftop-balcony-with-sky-background_1312388-4076.jpg?w=1380",
  },
  {
    id: 9,
    name: "Urban Balcony Farm",
    description: "Narrow balcony, perfect for vertical gardens.",
    category: "BALCONY",
    price: 9.99,
    city: "Harar",
    image:
      "https://img.freepik.com/free-photo/view-golden-brown-meadow-with-rocks-tree-cloudy-day-surface_181624-48421.jpg?t=st=1746388446~exp=1746392046~hmac=516aee06b2c99a2ac19264ea6c1d7efc3675a65e1e525ed617a9bc9c6b38a291&w=996",
  },
  {
    id: 10,
    name: "Tiny Garden Hideaway",
    description: "Hidden plot ideal for small vegetable patches.",
    category: "GARDEN",
    price: 7.49,
    city: "Dessie",
    image:
      "https://img.freepik.com/free-photo/wide-shot-zebras-grazing-field-blue-sky-tsavo-west-taita-hills-kenya_181624-7839.jpg?t=st=1746388488~exp=1746392088~hmac=29cc9312a8cac5f930697fad89fafb32b181df9979c4e7b06eb814759365a647&w=1380",
  },
  {
    id: 11,
    name: "Green Rooftop Retreat",
    description: "Open area for serious urban gardeners.",
    category: "ROOFTOP",
    price: 5.99,
    city: "Debre Markos",
    image:
      "https://img.freepik.com/premium-photo/scenic-view-landscape-against-sky_1048944-30686008.jpg?w=1380",
  },
  {
    id: 12,
    name: "Starter Garden Space",
    description: "Beginner-friendly plot with partial shade.",
    category: "GARDEN",
    price: 16.99,
    city: "Wolaita Sodo",
    image:
      "https://img.freepik.com/free-photo/high-angle-shot-exotic-wild-plants-growing-rocks-tatacoa-desert-colombia_181624-17308.jpg?t=st=1746388578~exp=1746392178~hmac=d8919809bac31ff6366cd6d575269a6367e70fce4980d136a1efe94fadb9c5ca&w=996",
  },
];

export const tools = [
  {
    id: 1,
    title: "Organic Pest Control Spray",
    description:
      "A powerful organic pesticide designed to eliminate common urban pests without harming your crops or soil. Ideal for leafy greens and fruiting plants.",
    category: "PESTICIDE",
    price: 35.76,
    location: "Jimma",
    image:
      "https://img.freepik.com/free-photo/still-life-with-gardening-concept_23-2148127837.jpg?t=st=1746388886~exp=1746392486~hmac=67c0c913cd13a1cd1252bea3c907679bfd4080892c518b6a5642694f84252fc1&w=740",
  },
  {
    id: 2,
    title: "Urban Farming Starter Kit",
    description:
      "Everything you need to begin your urban farming journey: seeds, mini planters, soil mix, and an instructional guide.",
    category: "STARTER-KIT",
    price: 64.11,
    location: "Dessie",
    image:
      "https://img.freepik.com/premium-photo/wooden-table-are-three-young-seedlings-tomato-pepper-plastic-cups_1048944-11936220.jpg?w=996",
  },
  {
    id: 3,
    title: "All-Purpose Organic Fertilizer",
    description:
      "Boost your plant growth naturally with this nutrient-rich, slow-release fertilizer suitable for a wide range of crops.",
    category: "FERTILIZER",
    price: 60.46,
    location: "Mekelle",
    image:
      "https://img.freepik.com/premium-photo/cropped-hand-woman-holding-plant_1048944-15701045.jpg?w=996",
  },
  {
    id: 4,
    title: "Neem-Based Insect Repellent",
    description:
      "Natural pesticide made from neem extracts, effective against mites, aphids, and whiteflies. Safe for indoor use.",
    category: "PESTICIDE",
    price: 59.22,
    location: "Hawassa",
    image:
      "https://img.freepik.com/free-photo/woman-growing-plants_23-2148918534.jpg?t=st=1746389077~exp=1746392677~hmac=7737e4987d41404b362d07a59748a7efa718b20a5414c302afc7955c8698c43b&w=740",
  },
  {
    id: 5,
    title: "Compost-Based Fertilizer",
    description:
      "Eco-friendly compost blend packed with micronutrients to support healthy root development and improve soil structure.",
    category: "FERTILIZER",
    price: 14.38,
    location: "Adama",
    image:
      "https://img.freepik.com/premium-photo/biodegradable-waste-materials-ready-compost_419341-123925.jpg?w=996",
  },
  {
    id: 6,
    title: "Nitrogen-Rich Growth Enhancer",
    description:
      "Ideal for leafy vegetables, this fertilizer enhances green foliage and supports faster photosynthesis.",
    category: "FERTILIZER",
    price: 31.14,
    location: "Bahir Dar",
    image:
      "https://img.freepik.com/premium-photo/low-section-woman-walking-field_1048944-18762324.jpg?w=996",
  },
  {
    id: 7,
    title: "Balanced Vegetable Fertilizer",
    description:
      "A well-balanced blend of NPK nutrients specially formulated for vegetables in containers and garden beds.",
    category: "FERTILIZER",
    price: 29.98,
    location: "Hawassa",
    image:
      "https://img.freepik.com/premium-photo/fertilizer-sack_39396-8.jpg?w=996",
  },
  {
    id: 8,
    title: "High-Yield Plant Fertilizer",
    description:
      "Maximize your harvests with this performance-grade fertilizer designed for fruiting plants and herbs.",
    category: "FERTILIZER",
    price: 51.11,
    location: "Dire Dawa",
    image:
      "https://img.freepik.com/premium-photo/chemical-fertilizer-planting-plantation_63046-5612.jpg?w=1380",
  },
  {
    id: 9,
    title: "Soil Health Booster",
    description:
      "Improves soil texture and microbial activity while supplying essential nutrients for robust plant growth.",
    category: "FERTILIZER",
    price: 14.88,
    location: "Dessie",
    image:
      "https://img.freepik.com/premium-photo/low-section-woman-walking-field_1048944-18762324.jpg?w=996",
  },
  {
    id: 10,
    title: "Multi-Crop Fertilizer Blend",
    description:
      "A versatile fertilizer perfect for different crops including tomatoes, lettuce, beans, and peppers.",
    category: "FERTILIZER",
    price: 51.06,
    location: "Bahir Dar",
    image:
      "https://img.freepik.com/premium-photo/fertilizer-sack_39396-8.jpg?w=996",
  },
  {
    id: 11,
    title: "Basic Home Farming Kit",
    description:
      "Includes biodegradable pots, natural compost, and guides to help beginners start growing herbs and veggies at home.",
    category: "STARTER-KIT",
    price: 14.25,
    location: "Dire Dawa",
    image:
      "https://img.freepik.com/free-photo/still-life-with-gardening-concept_23-2148127837.jpg?t=st=1746388886~exp=1746392486~hmac=67c0c913cd13a1cd1252bea3c907679bfd4080892c518b6a5642694f84252fc1&w=740",
  },
  {
    id: 12,
    title: "Compact Urban Garden Set",
    description:
      "Perfect for balconies and rooftops—includes small containers, seeds, and a manual for efficient space usage.",
    category: "STARTER-KIT",
    price: 38.09,
    location: "Harar",
    image:
      "https://img.freepik.com/free-photo/woman-growing-plants_23-2148918534.jpg?t=st=1746389077~exp=1746392677~hmac=7737e4987d41404b362d07a59748a7efa718b20a5414c302afc7955c8698c43b&w=740",
  },
  {
    id: 13,
    title: "Hydroponic Starter Pack",
    description:
      "Begin your soil-less farming with this all-in-one kit, which includes hydroponic nutrients, pipes, and seedlings.",
    category: "STARTER-KIT",
    price: 51.75,
    location: "Mekelle",
    image:
      "https://img.freepik.com/premium-photo/low-section-woman-walking-field_1048944-18762324.jpg?w=996",
  },
  {
    id: 14,
    title: "Insect Control Concentrate",
    description:
      "Highly effective concentrate that deters a wide range of pests. Best diluted and sprayed weekly.",
    category: "PESTICIDE",
    price: 64.57,
    location: "Jimma",
    image:
      "https://img.freepik.com/free-photo/adult-reusing-objects-creative-ways_23-2149411785.jpg?t=st=1746389376~exp=1746392976~hmac=f3b69b53f0bed14ba5a54adb610b1bbea07b6cedb4983d433f38d9f898a39138&w=996",
  },
  {
    id: 15,
    title: "Dual-Action Pest Spray",
    description:
      "Targets both larvae and adult insects while remaining safe for edible plants. Ideal for organic farming.",
    category: "PESTICIDE",
    price: 60.01,
    location: "Addis Ababa",
    image:
      "https://img.freepik.com/premium-photo/chemical-fertilizer-planting-plantation_63046-5612.jpg?w=1380",
  },
  {
    id: 16,
    title: "Herbal Pest Defense Spray",
    description:
      "An herbal-based pesticide combining neem, eucalyptus, and garlic extracts for broad pest protection.",
    category: "PESTICIDE",
    price: 53.85,
    location: "Harar",
    image:
      "https://img.freepik.com/free-photo/still-life-with-gardening-concept_23-2148127837.jpg?t=st=1746388886~exp=1746392486~hmac=67c0c913cd13a1cd1252bea3c907679bfd4080892c518b6a5642694f84252fc1&w=740",
  },
  {
    id: 17,
    title: "Premium Organic Fertilizer",
    description:
      "Enriched with humic acid and beneficial microbes for faster nutrient absorption and long-term soil improvement.",
    category: "FERTILIZER",
    price: 86.14,
    location: "Adama",
    image:
      "https://img.freepik.com/premium-photo/chemical-fertilizer-planting-plantation_63046-5612.jpg?w=1380",
  },
  {
    id: 18,
    title: "Plant Growing Container Set",
    description:
      "Durable containers ideal for growing vegetables or herbs in compact urban environments like balconies and rooftops.",
    category: "CONTAINERS",
    price: 26.99,
    location: "Adama",
    image:
      "https://img.freepik.com/premium-photo/low-section-woman-walking-field_1048944-18762324.jpg?w=996",
  },
  {
    id: 19,
    title: "Self-Watering Plant Pots",
    description:
      "Innovative container system that reduces watering frequency and supports steady root moisture.",
    category: "CONTAINERS",
    price: 28.58,
    location: "Hawassa",
    image:
      "https://img.freepik.com/premium-photo/fertilizer-sack_39396-8.jpg?w=996",
  },
  {
    id: 20,
    title: "Advanced Crop Fertilizer",
    description:
      "Scientifically balanced formula for serious growers looking to boost flowering and fruiting stages.",
    category: "FERTILIZER",
    price: 80.36,
    location: "Bahir Dar",
    image:
      "https://img.freepik.com/free-photo/adult-reusing-objects-creative-ways_23-2149411785.jpg?t=st=1746389376~exp=1746392976~hmac=f3b69b53f0bed14ba5a54adb610b1bbea07b6cedb4983d433f38d9f898a39138&w=996",
  },
];
