# Inventory & Sales Management Dashboard

Welcome! This project will test your skills in Laravel, Vue, and Nuxt by building a small-scale inventory and sales tracking system. You’ll work with backend APIs, a frontend UI, and, optionally, image storage using an external filesystem. Good luck, and feel free to use AI tools like ChatGPT or v0.dev to assist along the way!

---

## Project Structure

Organize your code as follows:
- **Backend** (Laravel): Place in the `/backend` folder.
- **Frontend** (Nuxt): Place in the `/frontend` folder.

This setup will help organize backend and frontend within a single repository for easy management and deployment.

---

## Project Overview

Build an inventory management and sales tracking dashboard:
- **Backend**: Laravel (API with database)
- **Frontend**: Nuxt.js (UI using Vue with Nuxt capabilities)
- **Database**: MySQL/PostgreSQL (or SQLite for simplicity)

---

## Branching and PR Instructions

1. **Create a New Branch**:
   - Create a separate branch for each challenge with the naming convention `feature/challenge-name`. For example:
      - `feature/inventory-management`
      - `feature/sales-tracking`
      - `feature/monthly-sales-report`

2. **Push Changes and Make PRs**:
   - Once you’ve completed a challenge, push your branch to the repository.
   - Create a Pull Request (PR) for each branch and assign it to me for review.
   - **Note**: Avoid making any changes to the `main` branch directly.

3. **Optional Filesystem Integration**:
   - You can use the existing filesystem repository to manage file storage for product images or any additional files. This can be found here: [Filesystem Repo](https://github.com/mehedi8gb/pws).
   - Integrating the filesystem is optional but recommended to show your ability to handle media uploads efficiently.
   - If you need to make any adjustments to the filesystem repository for compatibility, please include these changes in your PR and note them in the `README.md`.

---

## Challenges

### Challenge 1: Product Inventory Management
Implement CRUD functionality to manage products in the inventory.

**Requirements**:
1. Create a Laravel API with these routes:
   - **POST /products**: Add a new product.
   - **GET /products**: List all products.
   - **PUT /products/{id}**: Update product details.
   - **DELETE /products/{id}**: Delete a product.

2. Product Attributes:
   - `name` (string, required)
   - `price` (decimal, required)
   - `stock` (integer, required)
   - `description` (string, optional)

3. Frontend:
   - A form to add products and a table to display products from the backend.

4. **Optional**: Use the filesystem to store product images.

---

### Challenge 2: Sales Tracking with Summary View
Enable users to record sales transactions and view a summary of total sales.

**Requirements**:
1. **POST /sales** API endpoint:
   - Accepts `product_id`, `quantity`, calculates `total_price` based on product price, and deducts `quantity` from product stock.

2. **GET /sales/summary** API endpoint:
   - Returns total sales amount and total number of transactions.

3. Frontend:
   - Form for creating a sale and a summary section showing total sales amount and transactions.

---

### Optional Challenge: Monthly Sales Report
Generate and display a monthly sales report.

**Requirements**:
1. **GET /sales/report** API endpoint:
   - Returns sales data broken down by month.

2. Frontend:
   - Render a bar chart of sales data for the last 6 months. (Chart.js or similar library acceptable)

---

## Notes

- **Documentation** and **readability** are important. Organize files in a logical structure.
- Feel free to use **ChatGPT or v0.dev** to brainstorm or troubleshoot code.
- Add a brief write-up in this `README.md` about your approach, any challenges you encountered, and what you'd improve with more time.

---

### Submission
1. Commit and push your code to this repository.
2. Update this `README.md` with any notes or reflections.
3. Create PRs for each challenge branch as described above.

Good luck, and happy coding!
