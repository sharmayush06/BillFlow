import api from './api'

export const getUserProfile = async (userId) => {
  const response = await api.get(`/users/${userId}`)
  return response.data
}

export const updateUserProfile = async (userId, payload) => {
  const response = await api.put(`/users/${userId}`, payload)
  return response.data
}

export const getWallet = async (userId) => {
  const response = await api.get(`/wallet/${userId}`)
  return response.data
}

export const getBalance = async (userId) => {
  const response = await api.get(`/wallet/${userId}/balance`)
  return response.data
}

export const transferMoney = async (payload) => {
  const response = await api.post('/transaction/transfer', payload)
  return response.data
}

export const getTransactions = async (userId) => {
  const response = await api.get(`/transaction/history/${userId}`)
  return response.data
}
