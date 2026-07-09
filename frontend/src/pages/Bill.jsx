import React, { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, PlusCircle, ReceiptText, Search, ShoppingCart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { getProducts, searchProducts } from '../services/productService'
import { createBill } from '../services/billService'
import TotalBill from '../components/TotalBill'

function Bill() {
  const [products, setProducts] = useState([])
  const [selectedShop, setSelectedShop] = useState(null)
  const [keyword, setKeyword] = useState('')
  const [cart, setCart] = useState([])
  const [discount, setDiscount] = useState('0')
  const [paymentMethod, setPaymentMethod] = useState('CASH')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const activeShop = JSON.parse(localStorage.getItem('activeShop') || 'null')
    setSelectedShop(activeShop)

    const loadProducts = async () => {
      try {
        const data = await getProducts()
        setProducts(Array.isArray(data) ? data : [])
      } catch (err) {
        console.error(err)
      }
    }

    loadProducts()
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!keyword.trim()) {
      const data = await getProducts()
      setProducts(Array.isArray(data) ? data : [])
      return
    }

    try {
      const data = await searchProducts(keyword)
      setProducts(Array.isArray(data) ? data : [])
    } catch (err) {
      setProducts([])
    }
  }

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.productId === product.productId)
      if (existing) {
        return prev.map((item) => (item.productId === product.productId ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const changeQty = (productId, delta) => {
    setCart((prev) => prev.flatMap((item) => {
      if (item.productId !== productId) return [item]
      const nextQty = item.quantity + delta
      return nextQty > 0 ? [{ ...item, quantity: nextQty }] : []
    }))
  }

  const billSummary = useMemo(() => {
    const subtotal = cart.reduce((sum, item) => sum + item.sellingPrice * item.quantity, 0)
    const discountValue = Number(discount || 0)
    const totalAmount = subtotal - discountValue
    return { subtotal, discount: discountValue, totalAmount }
  }, [cart, discount])

  const createInvoice = async () => {
    if (!selectedShop?.shopId) {
      setError('Select a shop before creating a bill')
      return
    }

    if (cart.length === 0) {
      setError('Add at least one product to the bill')
      return
    }

    try {
      const payload = {
        shopId: selectedShop.shopId,
        discount: Number(discount || 0),
        billItemRequests: cart.map((item) => ({ productId: item.productId, quantity: item.quantity })),
        paymentMethod,
        paymentStatus: 'PAID',
      }
      const response = await createBill(payload)
      setMessage(`Invoice created successfully: ${response.billNumber}`)
      setCart([])
      setDiscount('0')
      setPaymentMethod('CASH')
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to create invoice')
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-7xl rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
        <div className="border-b border-slate-200 px-6 py-6 md:px-10">
          <button onClick={() => navigate(-1)} className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-sky-600">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">Billing</p>
              <h1 className="text-3xl font-bold text-slate-900">Create a new invoice</h1>
              <p className="mt-2 text-sm text-slate-500">Search inventory items, build the bill, and post it to the backend.</p>
            </div>
            <div className="rounded-2xl bg-sky-100 p-4 text-sky-700">
              <ReceiptText className="h-8 w-8" />
            </div>
          </div>
        </div>

        <div className="grid gap-8 px-6 py-8 md:grid-cols-[1.1fr_0.9fr] md:px-10">
          <div className="space-y-6">
            <form onSubmit={handleSearch} className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
              <Search className="h-4 w-4 text-slate-400" />
              <input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Search product" className="w-full bg-transparent outline-none" />
            </form>

            <div className="grid gap-4 md:grid-cols-2">
              {products.map((product) => (
                <div key={product.productId} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-900">{product.name}</p>
                      <p className="text-sm text-slate-500">{product.category}</p>
                    </div>
                    <div className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">{product.quantity} left</div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-700">₹{product.sellingPrice}</p>
                    <button onClick={() => addToCart(product)} className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-3 py-2 text-sm font-medium text-white">
                      <PlusCircle className="h-4 w-4" /> Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <TotalBill bill={billSummary} />

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <ShoppingCart className="h-4 w-4 text-sky-600" /> Current cart
              </div>
              <div className="mt-4 space-y-3">
                {cart.length === 0 ? (
                  <p className="text-sm text-slate-500">No items added yet.</p>
                ) : cart.map((item) => (
                  <div key={item.productId} className="flex items-center justify-between rounded-2xl bg-white px-3 py-3 shadow-sm">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{item.name}</p>
                      <p className="text-xs text-slate-500">₹{item.sellingPrice}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => changeQty(item.productId, -1)} className="rounded-lg border border-slate-200 px-2 py-1 text-sm">-</button>
                      <span className="min-w-6 text-center text-sm font-semibold">{item.quantity}</span>
                      <button onClick={() => changeQty(item.productId, 1)} className="rounded-lg border border-slate-200 px-2 py-1 text-sm">+</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-3">
                <label className="space-y-2 text-sm font-medium text-slate-700">
                  <span>Discount</span>
                  <input type="number" min="0" value={discount} onChange={(e) => setDiscount(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5" />
                </label>
                <label className="space-y-2 text-sm font-medium text-slate-700">
                  <span>Payment method</span>
                  <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5">
                    <option value="CASH">Cash</option>
                    <option value="CARD">Card</option>
                    <option value="UPI">UPI</option>
                  </select>
                </label>
              </div>

              {message && <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-600">{message}</div>}
              {error && <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">{error}</div>}

              <button onClick={createInvoice} className="mt-6 w-full rounded-xl bg-sky-600 px-4 py-3 font-semibold text-white transition hover:bg-sky-700">
                Save bill
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bill
