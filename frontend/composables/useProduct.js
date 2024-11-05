export const useProducts = () => {
    const products = useState('products', () => [])
    const errors = useState('errors', () => [])
    const product = useState('product', () => { })


    // get product
    const fetchProducts = async () => {
        try {
            const response = await $fetch('http://localhost:8000/api/products')
            products.value = response.data
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching products:', error)
        }
    }


    // add product 
    const addProduct = async (data) => {
        products.value = ref(null);
        errors.value = ref(null);

        try {
            const response = await $fetch('http://localhost:8000/api/products', {
                method: 'POST',
                body: data
            })
            product.value = response.data

        } catch (error) {

            if (error.status === 422) {
                errors.value = error.data.errors
                console.log(errors.value);
            } else {
                console.error('An error occurred while adding the product:', error)
                errors.value = { general: 'An unexpected error occurred. Please try again.' }
            }
        }
    }


    // Edit a specific product (fetch data by ID)
    const editProduct = async (id) => {
        errors.value = ref(null)

        try {
            const response = await $fetch(`http://localhost:8000/api/products/${id}`)
            product.value = response.data
            console.log('Product details for editing:', response.data)
        } catch (error) {
            console.error(`An error occurred while fetching the product with ID ${id}:`, error)
            errors.value = { general: 'An unexpected error occurred. Please try again.' }
        }
    }


    // Update an existing product
    const updateProduct = async (id, data) => {
        errors.value = ref(null)
        try {
            const response = await $fetch(`http://localhost:8000/api/products/${id}`, {
                method: 'PUT',
                body: data
            })
            product.value = response.data
            console.log('Product updated:', response.data)
            // Optionally, refetch products list to reflect changes
            await fetchProducts()
        } catch (error) {
            if (error.status === 422) {
                errors.value = error.data.errors
                console.log(errors.value)
            } else {
                console.error('An error occurred while updating the product:', error)
                errors.value = { general: 'An unexpected error occurred. Please try again.' }
            }
        }
    }

    // Delete a product
    const deleteProduct = async (id) => {
        errors.value = ref(null)
        if (!confirm('Are you sure?')) {
            return;
        }
        try {
            await $fetch(`http://localhost:8000/api/products/${id}`, {
                method: 'DELETE'
            })
            console.log(`Product with ID ${id} deleted.`)
            // Optionally, refetch products list to reflect changes
            await fetchProducts()
        } catch (error) {
            console.error(`An error occurred while deleting the product with ID ${id}:`, error)
            errors.value = { general: 'An unexpected error occurred. Please try again.' }
        }
    }


    return {
        products,
        product,
        errors,
        addProduct,
        fetchProducts,
        editProduct,
        deleteProduct,
        updateProduct
    }
}
