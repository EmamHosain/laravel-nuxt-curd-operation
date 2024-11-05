<script setup>
useHead({
    title: 'Edit Product'
})
import { ref, onMounted } from 'vue'
import { useProducts } from '../composables/useProduct'
import { useRoute } from 'vue-router'

const route = useRoute()
const { product: item, editProduct, updateProduct, errors } = useProducts()

const product = ref({
    name: '',
    price: '',
    stock: '',
    description: '',
})

// Fetch product data for editing
onMounted(async () => {
    const productId = route.params.id
    await editProduct(productId)
    if (item.value) {
        product.value = { ...item.value }
    }
})

// Handle form submission for updating the product
const handleUpdate = async () => {
    await updateProduct(route.params.id, product.value)
}
</script>

<template>
    <div class="w-1/2 px-4 bg-white flex flex-col mx-auto md:py-8 mt-8 md:mt-0">
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font text-center">Edit Product</h2>

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
            <textarea v-model="product.description" id="description" name="description"
                placeholder="Enter product description"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            <Error :errorMessage="errors && errors.description ? errors.description[0] : null" />
        </div>

        <!-- Update Button -->
        <button @click="handleUpdate()"
            class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Update Product
        </button>

    </div>
</template>
