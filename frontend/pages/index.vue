<script setup>
import { useProducts } from '../composables/useProduct'
import { onMounted } from 'vue'

useHead({
    title: 'Home Page'
})
const { products, fetchProducts, editProduct, deleteProduct } = useProducts()

onMounted(() => {
    if (products.length > 0) {
        return;
    } else {
        fetchProducts()
    }
})

</script>

<template>
    <!-- Responsive Table -->

    <div class="mt-6 bg-white rounded-lg shadow-md overflow-x-auto">
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th class="px-6 py-3">Product name</th>
                        <th class="px-6 py-3">Price</th>
                        <th class="px-6 py-3">Stock</th>
                        <th class="px-6 py-3">Description</th>
                        <th class="px-6 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    <tr v-for="(product, index) in products" :key="index"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ product.name }}
                        </th>
                        <td class="px-6 py-4">{{ product.price }}</td>
                        <td class="px-6 py-4">{{ product.stock }}</td>
                        <td class="px-6 py-4">{{ product.description }}</td>
                        <td class="flex space-x-2 px-6 py-4">

                            <!-- Edit Button -->
                            <NuxtLink :to="`/products/${product.id}`"
                                class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                                Edit
                            </NuxtLink>

                            <!-- Delete Button -->
                            <button @click="deleteProduct(product.id)"
                                class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                                Delete
                            </button>
                        </td>
                    </tr>



                </tbody>
            </table>
        </div>
    </div>
</template>