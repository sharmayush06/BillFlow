function StatCard({ icon, value, label }) {
    return (
        <div className="p-8 text-center border-r border-slate-200 last:border-r-0 hover:bg-blue-50 transition">
            <div className="text-blue-600 flex justify-center mb-4">
                {icon}
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
                {value}
            </h3>

            <p className="text-slate-600 mt-1 text-sm">{label}</p>
        </div>
    )
}

export default StatCard
