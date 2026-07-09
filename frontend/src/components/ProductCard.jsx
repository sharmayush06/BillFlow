import React from 'react'
import { Box, DollarSign, Package, TrendingUp } from 'lucide-react'

function ProductCard({ product }) {
  const stockState = product.quantity <= (product.minQuantity || 0) ? 'Low stock' : 'In stock'

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">{product.name}</p>
          <p className="text-xs text-slate-500">{product.category || 'General'}</p>
        </div>
        <div className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${stockState === 'Low stock' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
          {stockState}
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <Box className="h-4 w-4 text-sky-600" />
          <span>SKU: {product.sku || '—'}</span>
        </div>
        <div className="flex items-center gap-2">
          <Package className="h-4 w-4 text-sky-600" />
          <span>Qty: {product.quantity}</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-sky-600" />
          <span>Sell: ₹{product.sellingPrice}</span>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-sky-600" />
          <span>Cost: ₹{product.purchasingPrice}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
