require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../src/models/User");
const Product = require("../src/models/Product");

const PRODUCTS = [
  {
    name: "Banarasi Silk Saree",
    category: "Sarees",
    description: "An heirloom treasure showcasing luminous handloom golden zari brocade work over rich silk, exuding regal grace for grand Indian celebrations and festive evenings.",
    price: 8999,
    mrp: 12999,
    sizes: ["Free Size"],
    tag: "Bestseller",
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    avgRating: 4.8,
    numReviews: 38,
    productType: "Banarasi Saree",
    style: "Traditional Heritage",
    pattern: "Floral Zari Jaal",
    color: "Crimson Red & Gold",
    fabric: "Pure Katan Silk",
    occasion: "Weddings, Bridal Festivities",
    fit: "Classic Draped 6 Yards",
    sleeveType: "Unstitched Blouse Piece (0.8m)",
    neckType: "Customizable Blouse",
    careInstructions: "Strictly Dry Clean Only. Store wrapped in pure muslin cloth.",
    otherSpecifications: "Weave Type: Kadwa Handloom Jacquard; Zari Quality: Tested Gold Zari; Pallu: Heavy Ornamental Brocade",
  },
  {
    name: "Kanjivaram Silk Saree",
    category: "Sarees",
    description: "Handcrafted with pure mulberry silk and authentic gold zari korvai weaving, featuring sacred temple border motifs designed for weddings and cultural milestones.",
    price: 10999,
    mrp: 15999,
    sizes: ["Free Size"],
    tag: "New",
    imageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80",
    avgRating: 4.9,
    numReviews: 45,
    productType: "Kanjivaram Saree",
    style: "South Indian Classic",
    pattern: "Temple Border with Mayil (Peacock) Motifs",
    color: "Royal Peacock Blue & Emerald Green",
    fabric: "100% Pure Mulberry Silk",
    occasion: "Bridal Ceremonies, Grand Receptions",
    fit: "Structured Draping Silhouette",
    sleeveType: "Unstitched Matching Blouse Piece",
    neckType: "Customizable Tailoring",
    careInstructions: "Dry clean only. Air dry periodically in shade.",
    otherSpecifications: "Silk Mark Certified; Warp & Weft: 3-Ply Pure Silk; Border: Korvai Interlocking Weave",
  },
  {
    name: "Chiffon Party Saree",
    category: "Sarees",
    description: "Ultra-lightweight feather drape embellished with delicate sequin scatter work, offering a glamorous shimmer that moves effortlessly through evening cocktail parties.",
    price: 3499,
    mrp: 4999,
    sizes: ["Free Size"],
    tag: "",
    imageUrl: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80",
    avgRating: 4.4,
    numReviews: 22,
    productType: "Party Wear Saree",
    style: "Contemporary Glamour",
    pattern: "Subtle Sequin Scatter",
    color: "Rose Gold Blush",
    fabric: "Viscose Chiffon",
    occasion: "Cocktail Parties, Sangeet Nights",
    fit: "Fluid Body-Contour Drape",
    sleeveType: "Satin Silk Blouse Fabric Provided",
    neckType: "Customizable Sweetheart/V-Neck",
    careInstructions: "Dry clean recommended or gentle cold hand wash.",
    otherSpecifications: "Finish: Micro-Sequin Embroidery; Hem: Clean Pico Finish; Length: 5.5m Saree + 0.8m Blouse",
  },
  {
    name: "Bridal Red Lehenga",
    category: "Lehengas",
    description: "A showstopping bridal ensemble in deep crimson velvet adorned with opulent zardozi, semi-precious stone work, and a flowing scalloped net dupatta.",
    price: 24999,
    mrp: 34999,
    sizes: ["S", "M", "L", "XL"],
    tag: "Bestseller",
    imageUrl: "https://images.unsplash.com/photo-1609372332255-611485350f25?w=600&q=80",
    avgRating: 5.0,
    numReviews: 52,
    productType: "Bridal Lehenga Choli Set",
    style: "Royal Mughal Heritage",
    pattern: "Zardozi, Resham & Dabka Embroidery",
    color: "Deep Bridal Crimson Red",
    fabric: "Micro Velvet Skirt with Soft Net Dupatta",
    occasion: "Pheras, Wedding Day Ceremony",
    fit: "High-Flared Kalidar Silhouette",
    sleeveType: "Half Sleeves with Embroidered Cuffs",
    neckType: "Deep Sweetheart Neckline",
    careInstructions: "Specialist Dry Clean Only. Avoid direct perfume spray.",
    otherSpecifications: "Flair: 4.5 Meters Gher; Inner: Double Can-Can with Heavy Buckram & Butter Crepe Lining; Fastening: Latkan Drawstring & Side Zip",
  },
  {
    name: "Anarkali Kurti Set",
    category: "Kurtis",
    description: "Floor-sweeping flared silhouette tailored from breathable Chanderi silk with delicate gota patti borders, paired with flared palazzo pants and a coordinated dupatta.",
    price: 2799,
    mrp: 3999,
    sizes: ["S", "M", "L", "XL"],
    tag: "",
    imageUrl: "https://images.unsplash.com/photo-1564201024-c3d29085d77c?w=600&q=80",
    avgRating: 4.3,
    numReviews: 19,
    productType: "3-Piece Anarkali Palazzo Set",
    style: "Ethnic Flared",
    pattern: "Foil Print with Gota Patti Lace",
    color: "Mustard Yellow & Ivory",
    fabric: "Chanderi Cotton Blend",
    occasion: "Haldi Ceremonies, Festive Pujas",
    fit: "Empire Waist Flared Fit",
    sleeveType: "3/4th Sleeves",
    neckType: "Round Neck with Slit Detail",
    careInstructions: "Gentle machine wash inside out or hand wash in cold water.",
    otherSpecifications: "Kurti Length: 50 inches; Palazzo: Elasticated Waist with Pocket; Dupatta: 2.25 Meters Chiffon with Lace Border",
  },
  {
    name: "Chikankari Kurti",
    category: "Kurtis",
    description: "Artisanal hand-embroidered Lucknowi chikankari with delicate shadow and bakhiya stitchery on featherlight breathable cotton, ideal for everyday casual elegance.",
    price: 1899,
    mrp: 2599,
    sizes: ["S", "M", "L", "XL", "XXL"],
    tag: "Bestseller",
    imageUrl: "https://images.unsplash.com/photo-1585914924626-15adac1e6402?w=600&q=80",
    avgRating: 4.9,
    numReviews: 64,
    productType: "Straight Kurti",
    style: "Lucknowi Handloom",
    pattern: "Authentic Chikan Hand Embroidery",
    color: "Powder Blue with White Threadwork",
    fabric: "100% Breathable Fine Cambric Cotton",
    occasion: "Daily Wear, Office, Casual Brunch",
    fit: "Comfort Straight Fit",
    sleeveType: "Full Length Sleeves",
    neckType: "Notched Mandarin Collar",
    careInstructions: "Machine wash cold with similar colors. Line dry in shade.",
    otherSpecifications: "Stitches: Bakhiya, Phanda & Keel Kangan; Length: 44 inches; Side Slits for ease of movement",
  },
  {
    name: "Floral Wrap Dress",
    category: "Western Wear",
    description: "Flattering feminine wrap dress featuring a lively botanical meadow print, cinched with a self-tie waist belt that transitions gracefully from office hours to garden dinners.",
    price: 2499,
    mrp: 3499,
    sizes: ["XS", "S", "M", "L"],
    tag: "",
    imageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80",
    avgRating: 4.5,
    numReviews: 24,
    productType: "Midi Wrap Dress",
    style: "Contemporary Bohemian",
    pattern: "Botanical Floral Print",
    color: "Sage Green & Coral Multi",
    fabric: "Eco-Friendly Viscose Rayon",
    occasion: "Casual Outings, Vacation, Sunday Brunch",
    fit: "Adjustable Wrap Fit with Cinched Waist",
    sleeveType: "Short Flutter Sleeves",
    neckType: "Surplice V-Neck",
    careInstructions: "Machine wash gentle cycle cold. Iron inside-out on medium heat.",
    otherSpecifications: "Length: 46 inches (Midi); Closure: Functional Wrap Tie; Lining: Breathable Half-Lined Bodice",
  },
  {
    name: "Kundan Choker Set",
    category: "Accessories",
    description: "Exquisite royal jadau Kundan choker strung with luminous South Sea faux pearls and emerald droplet bead accents, accompanied by matching statement chandbali earrings.",
    price: 1999,
    mrp: 2999,
    sizes: ["Free Size"],
    tag: "Bestseller",
    imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    avgRating: 4.9,
    numReviews: 43,
    productType: "Choker Necklace & Earrings Set",
    style: "Royal Jadau Rajputana",
    pattern: "Intricate Stone Setting with Pearl Drops",
    color: "22K Gold Antique Polish with Emerald Green & Pearl White",
    fabric: "High-Grade Brass Alloy with Glass Kundan Stones",
    occasion: "Weddings, Receptions, Festive Celebrations",
    fit: "Adjustable Dori/Thread Fastener",
    sleeveType: "Not specified",
    neckType: "Collar Choker Fit",
    careInstructions: "Store in an airtight ziplock pouch. Keep strictly away from moisture, water, and perfumes.",
    otherSpecifications: "Plating: Micron Antique Gold Finish; Closure: Adjustable Zari Cord (fits all neck circumferences); Earring Closure: Push Back",
  }
];

async function seed() {
  try {
    const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/umas_boutique";
    await mongoose.connect(mongoUri);
    console.log("🍃 Connected to MongoDB for seeding...");

    console.log("Seeding admin user...");
    const adminEmail = process.env.ADMIN_EMAIL || "admin@umas.com";
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
    const adminName = process.env.ADMIN_NAME || "Uma Admin";
    
    const existingAdmin = await User.findOne({ email: adminEmail.toLowerCase() });
    if (!existingAdmin) {
      const hash = await bcrypt.hash(adminPassword, 10);
      await User.create({
        name: adminName,
        email: adminEmail.toLowerCase(),
        password_hash: hash,
        is_admin: true,
      });
      console.log(`✅ Admin created: ${adminEmail}`);
    } else {
      console.log("ℹ️  Admin already exists, skipping.");
    }

    console.log("Seeding products...");
    const count = await Product.countDocuments();
    if (count === 0) {
      const docs = PRODUCTS.map((item) => ({
        name: item.name,
        category: item.category,
        description: item.description,
        price: item.price,
        mrp: item.mrp,
        sizes: item.sizes,
        tag: item.tag,
        image_url: item.imageUrl,
        avg_rating: item.avgRating || 4.5,
        num_reviews: item.numReviews || 12,
        product_type: item.productType || "",
        style: item.style || "",
        pattern: item.pattern || "",
        color: item.color || "",
        fabric: item.fabric || "",
        occasion: item.occasion || "",
        fit: item.fit || "",
        sleeve_type: item.sleeveType || "",
        neck_type: item.neckType || "",
        care_instructions: item.careInstructions || "",
        other_specifications: item.otherSpecifications || "",
      }));
      await Product.insertMany(docs);
      console.log(`✅ Inserted ${PRODUCTS.length} products.`);
    } else {
      let updated = 0;
      for (const item of PRODUCTS) {
        const result = await Product.updateOne(
          { name: item.name },
          { 
            $set: { 
              ...(item.imageUrl ? { image_url: item.imageUrl } : {}),
              ...(item.description ? { description: item.description } : {}),
              avg_rating: item.avgRating || 4.5,
              num_reviews: item.numReviews || 12,
              product_type: item.productType || "",
              style: item.style || "",
              pattern: item.pattern || "",
              color: item.color || "",
              fabric: item.fabric || "",
              occasion: item.occasion || "",
              fit: item.fit || "",
              sleeve_type: item.sleeveType || "",
              neck_type: item.neckType || "",
              care_instructions: item.careInstructions || "",
              other_specifications: item.otherSpecifications || "",
            } 
          }
        );
        if (result.modifiedCount > 0) updated++;
      }
      console.log(`ℹ️  Updated ${updated} products with detailed boutique specifications.`);
    }

    console.log("🎉 Seed complete.");
  } catch (err) {
    console.error("❌ Seed failed:", err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seed();
