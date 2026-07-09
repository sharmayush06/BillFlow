import api from './api'

export const createBill = async (payload) => {
  const response = await api.post('/bills', payload)
  return response.data
}

export const getRecentBills = async () => {
  const response = await api.get('/bills/recent')
  return response.data
}

export const getBillsByShop = async (shopId) => {
  const response = await api.get(`/bills/shop/${shopId}`)
  return response.data
}
