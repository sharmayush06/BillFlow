import { create } from 'zustand'

const useShopStore = create((set) => ({
    shop: null,
    shopName: '',
    logoUrl: '',
    currency: '',
    city: '',
    setShop: (shop) => set({ shop, shopName: shop?.shopName || '', logoUrl: shop?.logoUrl || '', currency: shop?.currency || '', city: shop?.city || '' }),
    clearShop: () => set({ shop: null, shopName: '', logoUrl: '', currency: '', city: '' }),
}))

export default useShopStore