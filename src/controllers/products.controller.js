const Product = require("../models/Product");
const { notifySubscribersIfRestocked } = require("./notifications.controller");

function mapProduct(doc) {
  if (!doc) return null;
  const stockNum = Number(doc.stock ?? 0);
  let statusVal = doc.status || "Available";
  if (stockNum <= 0 && statusVal === "Available") {
    statusVal = "Out of Stock";
  }

  let sizePricesObj = {};
  if (doc.size_prices) {
    if (typeof doc.size_prices.toObject === "function") {
      sizePricesObj = doc.size_prices.toObject();
    } else if (doc.size_prices instanceof Map) {
      sizePricesObj = Object.fromEntries(doc.size_prices);
    } else {
      sizePricesObj = doc.size_prices;
    }
  }

  return {
    id: doc._id,
    name: doc.name,
    category: doc.category,
    description: doc.description || "",
    price: Number(doc.price),
    mrp: Number(doc.mrp),
    sizes: doc.sizes || [],
    sizePrices: sizePricesObj,
    tag: doc.tag || "",
    imageUrl: doc.image_url || "",
    stock: stockNum,
    status: statusVal,
    lowStockThreshold: Number(doc.low_stock_threshold || 5),
    avgRating: Number(doc.avg_rating != null && doc.avg_rating > 0 ? doc.avg_rating : 4.5),
    numReviews: Number(doc.num_reviews != null && doc.num_reviews > 0 ? doc.num_reviews : 12),
    isActive: doc.is_active !== undefined ? doc.is_active : true,

    // Product Details
    productType: doc.product_type || doc.productType || "",
    style: doc.style || "",
    pattern: doc.pattern || "",
    color: doc.color || "",
    fabric: doc.fabric || "",
    occasion: doc.occasion || "",
    fit: doc.fit || "",
    sleeveType: doc.sleeve_type || doc.sleeveType || "",
    neckType: doc.neck_type || doc.neckType || "",

    // Product Specifications
    careInstructions: doc.care_instructions || doc.careInstructions || "",
    otherSpecifications: doc.other_specifications || doc.otherSpecifications || "",
  };
}

async function listProducts(req, res, next) {
  try {
    const { category, search, sort } = req.query;
    const filter = { is_active: true };

    if (category) {
      filter.category = category;
    }
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
      ];
    }

    let sortOption = { created_at: -1 };
    if (sort === "low") sortOption = { price: 1 };
    if (sort === "high") sortOption = { price: -1 };
    if (sort === "bestseller") {
      sortOption = { tag: -1, created_at: -1 };
    }

    // High performance lean query execution
    const docs = await Product.find(filter).sort(sortOption).lean();
    res.set("Cache-Control", "public, max-age=30, stale-while-revalidate=60");
    res.json({ products: docs.map(mapProduct) });
  } catch (err) {
    next(err);
  }
}

async function getProduct(req, res, next) {
  try {
    const doc = await Product.findOne({ _id: req.params.id, is_active: true }).lean();
    if (!doc) return res.status(404).json({ error: "Product not found." });
    res.set("Cache-Control", "public, max-age=30, stale-while-revalidate=60");
    res.json({ product: mapProduct(doc) });
  } catch (err) {
    next(err);
  }
}

async function createProduct(req, res, next) {
  try {
    const {
      name, category, description, price, mrp, sizes, sizePrices, size_prices,
      tag, imageUrl, stock, status, lowStockThreshold, avgRating, avg_rating,
      numReviews, num_reviews,
      productType, product_type, style, pattern, color, fabric, occasion, fit,
      sleeveType, sleeve_type, neckType, neck_type,
      careInstructions, care_instructions, otherSpecifications, other_specifications,
    } = req.body;

    if (!name || !category || price == null || mrp == null) {
      return res.status(400).json({ error: "name, category, price and mrp are required." });
    }

    const stockVal = stock ?? 100;
    let initialStatus = status || "Available";
    if (stockVal <= 0) initialStatus = "Out of Stock";

    const ratingVal = avgRating != null ? Number(avgRating) : (avg_rating != null ? Number(avg_rating) : 4.5);
    const reviewsVal = numReviews != null ? Number(numReviews) : (num_reviews != null ? Number(num_reviews) : 12);

    const doc = await Product.create({
      name,
      category,
      description: description || "",
      price,
      mrp,
      sizes: sizes || [],
      size_prices: sizePrices || size_prices || {},
      tag: tag || "",
      image_url: imageUrl || "",
      stock: stockVal,
      status: initialStatus,
      low_stock_threshold: lowStockThreshold ?? 5,
      avg_rating: !isNaN(ratingVal) && ratingVal >= 0 && ratingVal <= 5 ? (ratingVal > 0 ? ratingVal : 4.5) : 4.5,
      num_reviews: !isNaN(reviewsVal) && reviewsVal >= 0 ? reviewsVal : 12,
      product_type: productType || product_type || "",
      style: style || "",
      pattern: pattern || "",
      color: color || "",
      fabric: fabric || "",
      occasion: occasion || "",
      fit: fit || "",
      sleeve_type: sleeveType || sleeve_type || "",
      neck_type: neckType || neck_type || "",
      care_instructions: careInstructions || care_instructions || "",
      other_specifications: otherSpecifications || other_specifications || "",
    });
    res.status(201).json({ product: mapProduct(doc) });
  } catch (err) {
    next(err);
  }
}

async function updateProduct(req, res, next) {
  try {
    const {
      name, category, description, price, mrp, sizes, sizePrices, size_prices,
      tag, imageUrl, stock, status, lowStockThreshold, isActive, avgRating, avg_rating,
      numReviews, num_reviews,
      productType, product_type, style, pattern, color, fabric, occasion, fit,
      sleeveType, sleeve_type, neckType, neck_type,
      careInstructions, care_instructions, otherSpecifications, other_specifications,
    } = req.body;
    
    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (category !== undefined) updateData.category = category;
    if (description !== undefined) updateData.description = description;
    if (price !== undefined) updateData.price = price;
    if (mrp !== undefined) updateData.mrp = mrp;
    if (sizes !== undefined) updateData.sizes = sizes;
    if (sizePrices !== undefined || size_prices !== undefined) {
      updateData.size_prices = sizePrices || size_prices || {};
    }
    if (tag !== undefined) updateData.tag = tag;
    if (imageUrl !== undefined) updateData.image_url = imageUrl;
    if (stock !== undefined) {
      updateData.stock = stock;
      if (Number(stock) <= 0) {
        updateData.status = "Out of Stock";
      } else if (status === undefined || status === "Out of Stock") {
        updateData.status = "Available";
      }
    }
    if (status !== undefined) updateData.status = status;
    if (lowStockThreshold !== undefined) updateData.low_stock_threshold = lowStockThreshold;
    if (isActive !== undefined) updateData.is_active = isActive;
    if (avgRating !== undefined || avg_rating !== undefined) {
      const r = Number(avgRating !== undefined ? avgRating : avg_rating);
      if (!isNaN(r) && r >= 0 && r <= 5) updateData.avg_rating = r;
    }
    if (numReviews !== undefined || num_reviews !== undefined) {
      const nr = Number(numReviews !== undefined ? numReviews : num_reviews);
      if (!isNaN(nr) && nr >= 0) updateData.num_reviews = nr;
    }
    if (productType !== undefined || product_type !== undefined) {
      updateData.product_type = productType !== undefined ? productType : product_type;
    }
    if (style !== undefined) updateData.style = style;
    if (pattern !== undefined) updateData.pattern = pattern;
    if (color !== undefined) updateData.color = color;
    if (fabric !== undefined) updateData.fabric = fabric;
    if (occasion !== undefined) updateData.occasion = occasion;
    if (fit !== undefined) updateData.fit = fit;
    if (sleeveType !== undefined || sleeve_type !== undefined) {
      updateData.sleeve_type = sleeveType !== undefined ? sleeveType : sleeve_type;
    }
    if (neckType !== undefined || neck_type !== undefined) {
      updateData.neck_type = neckType !== undefined ? neckType : neck_type;
    }
    if (careInstructions !== undefined || care_instructions !== undefined) {
      updateData.care_instructions = careInstructions !== undefined ? careInstructions : care_instructions;
    }
    if (otherSpecifications !== undefined || other_specifications !== undefined) {
      updateData.other_specifications = otherSpecifications !== undefined ? otherSpecifications : other_specifications;
    }
    updateData.updated_at = Date.now();

    const doc = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: updateData },
      { new: true }
    );
    
    if (!doc) return res.status(404).json({ error: "Product not found." });

    if (doc.stock > 0 && doc.status === "Available") {
      notifySubscribersIfRestocked(doc._id);
    }

    res.json({ product: mapProduct(doc) });
  } catch (err) {
    next(err);
  }
}

async function deleteProduct(req, res, next) {
  try {
    const doc = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: { is_active: false } },
      { new: true }
    );
    if (!doc) return res.status(404).json({ error: "Product not found." });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
}

module.exports = { listProducts, getProduct, createProduct, updateProduct, deleteProduct };
