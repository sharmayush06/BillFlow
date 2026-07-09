import React from 'react'
import { Store, ArrowRight, MapPin, BadgeCheck } from 'lucide-react'

function ShopCard({ shop, onSelect }) {
    return (
        <button
            type="button"
            onClick={() => onSelect(shop)}
            className="w-full rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-sky-400 hover:shadow-lg"
        >
            <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                        {shop.logoUrl ? (
                            <img src={shop.logoUrl} alt={shop.shopName} className="h-10 w-10 rounded-lg object-cover" />
                        ) : (
                            <Store className="h-6 w-6" />
                        )}
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900">{shop.shopName}</h3>
                        <p className="text-sm text-slate-500">{shop.city}, {shop.state}</p>
                    </div>
                </div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                    Active
                </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-600">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1">
                    <BadgeCheck className="h-3.5 w-3.5" /> {shop.gstNumber}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1">
                    <MapPin className="h-3.5 w-3.5" /> {shop.address}
                </span>
            </div>

            <div className="mt-5 flex items-center justify-between text-sm text-sky-600">
                <span>Open dashboard</span>
                <ArrowRight className="h-4 w-4" />
            </div>
        </button>
    )
}

export default ShopCard
