import api from './api'

export const getShops = async () => {
  const response = await api.get('/shops')
  return response.data
}

export const createShop = async (payload) => {
  const response = await api.post('/shops', payload)
  return response.data
}
