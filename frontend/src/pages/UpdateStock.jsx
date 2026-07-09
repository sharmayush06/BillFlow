import React, { useEffect, useState } from 'react'
import { ArrowLeft, Package2, RefreshCcw, TrendingDown, TrendingUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { getProducts, updateProductStock } from '../services/productService'

function UpdateStock() {
  const [products, setProducts] = useState([])
  const [selectedProductId, setSelectedProductId] = useState('')
  const [quantity, setQuantity] = useState('')
  const [mode, setMode] = useState('stock')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts()
        setProducts(Array.isArray(data) ? data : [])
      } catch (err) {
        setError('Unable to load products')
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setMessage('')

    if (!selectedProductId || !quantity) {
      setError('Please choose a product and enter quantity')
      return
    }

    try {
      await updateProductStock(selectedProductId, { updatedStock: Number(quantity) }, mode)
      setMessage(`Stock ${mode === 'increase' ? 'increased' : mode === 'decrease' ? 'decreased' : 'updated'} successfully`)
      setQuantity('')
      setSelectedProductId('')
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to update stock')
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
        <div className="border-b border-slate-200 px-6 py-6 md:px-10">
          <button onClick={() => navigate(-1)} className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-sky-600">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">Stock Update</p>
              <h1 className="text-3xl font-bold text-slate-900">Adjust inventory quickly</h1>
              <p className="mt-2 text-sm text-slate-500">Update stock counts or apply increase/decrease actions branch-wise.</p>
            </div>
            <div className="rounded-2xl bg-sky-100 p-4 text-sky-700">
              <Package2 className="h-8 w-8" />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-8 px-6 py-8 md:grid-cols-[1fr_0.8fr] md:px-10">
          <div className="space-y-4">
            <label className="space-y-2 text-sm font-medium text-slate-700">
              <span>Select product</span>
              <select value={selectedProductId} onChange={(e) => setSelectedProductId(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2.5">
                <option value="">Choose a product</option>
                {products.map((product) => (
                  <option key={product.productId} value={product.productId}>{product.name}</option>
                ))}
              </select>
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-700">
              <span>Quantity</span>
              <input type="number" min="0" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2.5" />
            </label>

            <div className="flex gap-3">
              <button type="button" onClick={() => setMode('stock')} className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium ${mode === 'stock' ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                <RefreshCcw className="h-4 w-4" /> Set stock
              </button>
              <button type="button" onClick={() => setMode('increase')} className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium ${mode === 'increase' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                <TrendingUp className="h-4 w-4" /> Increase
              </button>
              <button type="button" onClick={() => setMode('decrease')} className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium ${mode === 'decrease' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                <TrendingDown className="h-4 w-4" /> Decrease
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            {loading ? (
              <p className="text-sm text-slate-500">Loading inventory...</p>
            ) : (
              <>
                <p className="text-sm font-semibold text-slate-700">Stock action preview</p>
                <p className="mt-2 text-sm text-slate-500">The selected action will directly update the backend product inventory for the chosen item.</p>
                {message && <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-600">{message}</div>}
                {error && <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">{error}</div>}
                <button type="submit" className="mt-6 w-full rounded-xl bg-sky-600 px-4 py-3 font-semibold text-white transition hover:bg-sky-700">
                  Apply stock change
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateStock
