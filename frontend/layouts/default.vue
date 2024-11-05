<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
    <div class="bg-gray-100 font-sans leading-normal tracking-normal">
        <!-- Responsive Wrapper -->
        <div class="flex flex-col md:flex-row h-screen">
            <!-- Sidebar (Collapsible on Mobile) -->
            <div class="bg-gray-800 w-full md:w-64 text-white flex flex-col h-full">
                <div class="py-6 px-4 text-center text-2xl font-bold">Admin Panel</div>
                <nav class="mt-8 flex-1 h-full">
                    <NuxtLink to="/" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                        :class="{ active: route.path === '/' }">
                        Products
                    </NuxtLink>

                    <NuxtLink to="/add-product" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                        :class="{ active: route.path === '/add-product' }">
                        Add Product
                    </NuxtLink>
                </nav>
            </div>

            <!-- Main Content Area -->
            <div class="flex-1 flex flex-col">
                <!-- Top Navbar -->
                <header class="flex items-center justify-between bg-white shadow-md py-4 px-6">
                    <h1 class="text-2xl font-semibold text-gray-700">Dashboard</h1>
                    <div class="flex items-center space-x-4">
                        <button class="p-2 bg-gray-200 rounded-full hover:bg-gray-300">🔔</button>
                        <button class="p-2 bg-gray-200 rounded-full hover:bg-gray-300">👤</button>
                    </div>
                </header>

                <!-- Main Dashboard Content -->
                <main class="flex-1 p-6">
                    <slot />
                </main>
            </div>
        </div>
    </div>
</template>

<style scoped>
.active {
    background-color: rgba(128, 128, 128, 0.178);
}
</style>
