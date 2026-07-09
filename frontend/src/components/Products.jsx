import React, { useEffect, useState } from 'react'
import { AlertTriangle, Boxes, Search, Sparkles } from 'lucide-react'
import { getProducts, searchProducts } from '../services/productService'
import ProductCard from './ProductCard'

function Products({ selectedShop }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [keyword, setKeyword] = useState('')
  const [error, setError] = useState('')

  const loadProducts = async (searchTerm = '') => {
    try {
      setLoading(true)
      const data = searchTerm
        ? await searchProducts(searchTerm)
        : await getProducts()
      setProducts(Array.isArray(data) ? data : [])
      setError('')
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to load products')
      setProducts([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [selectedShop])

  const handleSearch = (e) => {
    e.preventDefault()
    loadProducts(keyword)
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
            <Boxes className="h-4 w-4" /> Inventory
          </div>
          <h2 className="text-xl font-semibold text-slate-900">Current products</h2>
          <p className="text-sm text-slate-500">Browse the inventory for the selected shop.</p>
        </div>
        <form onSubmit={handleSearch} className="flex w-full max-w-md items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search by name, SKU, category"
            className="w-full bg-transparent outline-none"
          />
        </form>
      </div>

      {error && (
        <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700 flex items-center gap-2">
          <AlertTriangle className="h-4 w-4" /> {error}
        </div>
      )}

      {loading ? (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-200 p-8 text-center text-slate-500">Loading products...</div>
      ) : products.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-200 p-8 text-center text-slate-500">
          <Sparkles className="mx-auto mb-3 h-6 w-6 text-slate-400" />
          No products found for this shop yet.
        </div>
      ) : (
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Products
