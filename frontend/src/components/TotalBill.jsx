import React from 'react'
import { ReceiptText } from 'lucide-react'

function TotalBill({ bill }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
      <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
        <ReceiptText className="h-4 w-4" /> Current bill summary
      </div>
      <div className="mt-5 space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-slate-300">Subtotal</span>
          <span>₹{bill?.subtotal || 0}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-300">Discount</span>
          <span>₹{bill?.discount || 0}</span>
        </div>
        <div className="flex items-center justify-between border-t border-slate-700 pt-3 text-base font-semibold">
          <span>Total</span>
          <span>₹{bill?.totalAmount || 0}</span>
        </div>
      </div>
    </div>
  )
}

export default TotalBill
