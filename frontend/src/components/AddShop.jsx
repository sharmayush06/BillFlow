import React from 'react'
import { Link } from 'react-router-dom'
import { PlusCircle } from 'lucide-react'

function AddShop() {
    return (
        <Link
            to="/add-shop"
            className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-sky-400 bg-sky-50 px-5 py-5 font-medium text-sky-700 transition hover:bg-sky-100"
        >
            <PlusCircle className="h-5 w-5" />
            Add New Shop
        </Link>
    )
}

export default AddShop
