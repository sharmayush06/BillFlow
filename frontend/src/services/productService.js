import api from './api'

export const getProducts = async () => {
  const response = await api.get('/products')
  return response.data
}

export const createProduct = async (payload) => {
  const response = await api.post('/products', payload)
  return response.data
}

export const updateProductStock = async (productId, payload, mode = 'stock') => {
  const endpoint = mode === 'increase' ? '/increase-stock' : mode === 'decrease' ? '/decrease-stock' : ''
  const response = await api.put(`/products/${productId}${endpoint}`, payload)
  return response.data
}

export const searchProducts = async (keyword) => {
  const response = await api.get(`/products/search?keyword=${encodeURIComponent(keyword)}`)
  return response.data
}
