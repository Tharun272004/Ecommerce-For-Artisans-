// Get product id from URL
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

// Find product
const product = products.find(p => p.id === productId);

// Category-based default descriptions
const categoryDescriptions = {
  handmade_gifts:
    "Unique handcrafted gift items made by skilled artisans. Perfect for special occasions and home décor.",

  leather_crafts:
    "Premium handmade leather products crafted using traditional techniques and high-quality materials.",

  home_decor:
    "Beautiful handcrafted décor items designed to enhance the elegance of your living space.",

  pottery:
    "Handmade pottery products crafted from natural clay using traditional methods.",

  handloom:
    "Authentic handwoven fabrics created by artisans using traditional looms.",

  wooden:
    "Eco-friendly wooden crafts carved and finished by expert craftsmen.",

  terracotta:
    "Traditional terracotta products made from natural clay, ideal for décor and utility.",

  bamboo_cane:
    "Lightweight, eco-friendly bamboo and cane products handcrafted by artisans.",

  metal_crafts:
    "Intricately designed metal crafts made using brass, copper, and iron."
};

// Quantity state
let selectedQty = 1;

// Change quantity
function changeQty(change) {
  selectedQty += change;
  if (selectedQty < 1) selectedQty = 1;
  document.getElementById("qtyValue").innerText = selectedQty;
}

// Add to cart from product details page
function addToCartFromDetails() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qty += selectedQty;
  } else {
    cart.push({ ...product, qty: selectedQty });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

// Show similar products by category
function showSimilarProducts() {
  const similar = products.filter(p =>
    p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const container = document.getElementById("similarProducts");
  if (!container) return;

  container.innerHTML = "";

  similar.forEach(item => {
    container.innerHTML += `
      <div class="product-card product-click"
           onclick="openProduct(${item.id})">
        <img src="${item.image}"
             onerror="this.src='images/placeholder.jpg'">
        <h4>${item.name}</h4>
        <p>₹${item.price}</p>
      </div>
    `;
  });
}

// Load product details
if (product) {
  document.getElementById("productImage").src = product.image;
  document.getElementById("productName").innerText = product.name;
  document.getElementById("productCategory").innerText = product.category;
  document.getElementById("productPrice").innerText = `₹${product.price}`;

  // Description (product-specific or category default)
  document.querySelector(".description").innerHTML = `
    <h3>Description</h3>
    <p>
      ${product.description ||
        categoryDescriptions[product.category] ||
        "This is a beautifully handcrafted product made by skilled artisans."}
    </p>
  `;

  showSimilarProducts();
} else {
  document.body.innerHTML = "<h2>Product not found</h2>";
}

