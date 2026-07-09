import React from 'react'
import ShopCard from './ShopCard'

function Shop({ shops, onSelect }) {
    if (!shops?.length) {
        return (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
                No shops yet. Add your first shop to get started.
            </div>
        )
    }

    return (
        <div className="grid gap-4 md:grid-cols-2">
            {shops.map((shop) => (
                <ShopCard key={shop.shopId || shop.id} shop={shop} onSelect={onSelect} />
            ))}
        </div>
    )
}

export default Shop
