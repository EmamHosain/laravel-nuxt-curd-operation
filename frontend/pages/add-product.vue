<script setup>
import { ref, onMounted } from 'vue'
import { useProducts } from '../composables/useProduct'
useHead({
  title: 'Add Product'
})

const { addProduct, getProducts, errors } = useProducts()

const product = ref({
  name: '',
  price: '',
  stock: '',
  description: '',
  image: null,
})


const handleImageUpload = (event) => {
  product.value.image = event.target.files[0]
}

const handleSubmit = async () => {
  const formData = new FormData()
  formData.append('name', product.value.name)
  formData.append('price', product.value.price)
  formData.append('stock', product.value.stock)
  formData.append('description', product.value.description)
  if (product.value.image) {
    formData.append('image', product.value.image)
  }

  await addProduct(formData)

  // Reset the product data after successful submission
  product.value = {
    name: '',
    price: '',
    stock: '',
    description: '',
    image: null,
  }

  // Refresh products list
  getProducts()
}
</script>

<template>
  <div class="w-1/2 px-4 bg-white flex flex-col mx-auto md:py-8 mt-8 md:mt-0">
    <h2 class="text-gray-900 text-lg mb-1 font-medium title-font text-center">Add Product</h2>

    <!-- Product Name -->
    <div class="relative mb-4">
      <label for="name" class="leading-7 text-sm text-gray-600">Product Name</label>
      <input v-model="product.name" type="text" id="name" name="name" placeholder="Enter product name"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      <Error :errorMessage="errors && errors.name ? errors.name[0] : null" />
    </div>

    <!-- Product Price -->
    <div class="relative mb-4">
      <label for="price" class="leading-7 text-sm text-gray-600">Price</label>
      <input v-model="product.price" type="number" id="price" name="price" placeholder="Enter product price"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      <Error :errorMessage="errors && errors.price ? errors.price[0] : null" />
    </div>

    <!-- Product Stock -->
    <div class="relative mb-4">
      <label for="stock" class="leading-7 text-sm text-gray-600">Stock Quantity</label>
      <input v-model="product.stock" type="number" id="stock" name="stock" placeholder="Enter stock quantity"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      <Error :errorMessage="errors && errors.stock ? errors.stock[0] : null" />

    </div>

    <!-- Product Description -->
    <div class="relative mb-4">
      <label for="description" class="leading-7 text-sm text-gray-600">Description</label>
      <textarea v-model="product.description" id="description" name="description" placeholder="Enter product description"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      <Error :errorMessage="errors && errors.description ? errors.description[0] : null" />
    </div>


    <!-- Product Image -->
    <div class="relative mb-4">
      <label for="image" class="leading-7 text-sm text-gray-600">Product Image</label>
      <input type="file" id="image" name="image" @change="handleImageUpload"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      <Error :errorMessage="errors && errors.image ? errors.image[0] : null" />
    </div>
    <!-- <img v-if="product.image_url" :src="prod.image_url" alt="Product Image" class="mt-2 w-32 h-32 object-cover" /> -->


    <!-- Submit Button -->
    <button @click="handleSubmit()"
      class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      Add Product
    </button>

  </div>
</template>
