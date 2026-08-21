import readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILE = path.join(__dirname, "product.json");

// Get cart
const getCart = async () => {
  try {
    const data = await readFile(FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, create an empty cart
    await writeFile(FILE, "[]");
    return [];
  }
};

// Save cart
const saveCart = async (myCart) => {
  await writeFile(FILE, JSON.stringify(myCart, null, 2));
};

// Add product
const addToCart = async (product) => {
  const myCart = await getCart();

  const isFound = myCart.find((item) => item.id === product.id);

  if (isFound) {
    isFound.qty += product.qty;
  } else {
    myCart.push(product);
  }

  await saveCart(myCart);

  console.log(`Product added/updated with id ${product.id} into cart`);
};

// Show cart
const showCart = async () => {
  const data = await getCart();

  if (data.length === 0) {
    console.log("Cart is empty 🛒");
    return;
  }

  console.table(data);

  const total = data.reduce((total, item) => total + item.qty * item.price, 0);

  console.log("You have to pay: Rs", total);
};

// Remove product
const removeFromCart = async (pid) => {
  const data = await getCart();

  const count = data.length;

  const rawData = data.filter((item) => item.id !== pid);

  const newCount = rawData.length;

  if (count === newCount) {
    console.log("Product ID not found ❌");
  } else {
    await saveCart(rawData);
    console.log("Product deleted successfully ✅");
  }
};

// Update quantity
const updateQuantity = async (pid, newQty) => {
  const data = await getCart();

  const isFound = data.find((item) => item.id === pid);

  if (!isFound) {
    console.log("Product is not found ❌");
    return;
  }

  const updatedQty = isFound.qty + newQty;

  if (updatedQty <= 0) {
    console.log("Quantity must be greater than 0 ❌");
    return;
  }

  isFound.qty = updatedQty;

  await saveCart(data);

  console.log("Product quantity updated successfully ✅");
};

// Main function
const main = async () => {
  let choice;

  const cin = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  do {
    console.log("\nWelcome to Flipkart 🤸");
    console.log("1.......... Show cart");
    console.log("2.......... Add Product");
    console.log("3.......... Remove Product");
    console.log("4.......... Update Quantity");
    console.log("5.......... Checkout");

    choice = await cin.question("Enter your choice: ");

    switch (Number(choice)) {
      // Show cart
      case 1:
        await showCart();
        break;

      // Add product
      case 2: {
        const data = await cin.question("Enter id,name,price,qty: ");

        const [id, name, price, qty] = data
          .split(",")
          .map((item) => item.trim());

        const product = {
          id: Number(id),
          name,
          price: Number(price),
          qty: Number(qty),
        };

        if (!product.id || !product.name || !product.price || !product.qty) {
          console.log("Invalid product details ❌");
          break;
        }

        await addToCart(product);
        break;
      }

      // Remove product
      case 3: {
        const pid = await cin.question("Enter product id to remove: ");

        await removeFromCart(Number(pid));
        break;
      }

      // Update quantity
      case 4: {
        const pid2 = await cin.question("Enter product id to update: ");

        const value = await cin.question("+1 increase, -1 decrease: ");

        await updateQuantity(Number(pid2), Number(value));
        break;
      }

      // Checkout
      case 5:
        console.log("See you later 👋");
        break;

      default:
        console.log("Invalid choice! Try again 🛑");
    }
  } while (Number(choice) !== 5);

  cin.close();
};

main();
