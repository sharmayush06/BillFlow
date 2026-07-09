import { motion } from 'framer-motion';
import { ArrowUpRight, BellRing, CircleDollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

function DashboardPreview() {
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
        >
        <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-blue-400/20 via-cyan-300/10 to-emerald-200/20 blur-3xl" />
        <div className="relative rounded-4xl border border-slate-200 bg-slate-950 p-4 shadow-2xl shadow-slate-400/20 sm:p-6">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white">
            <div>
                <p className="text-sm text-slate-300">Today’s overview</p>
                <p className="text-xl font-semibold">₹ 4,82,300</p>
            </div>
            <div className="rounded-full bg-emerald-500/20 p-2 text-emerald-400">
                <TrendingUp size={18} />
            </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white">
                <div className="flex items-center justify-between">
                <p className="text-sm text-slate-300">Sales</p>
                <CircleDollarSign size={16} className="text-emerald-400" />
                </div>
                <p className="mt-3 text-2xl font-semibold">1,248</p>
                <p className="mt-1 text-sm text-emerald-400">+12.4% vs yesterday</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white">
                <div className="flex items-center justify-between">
                <p className="text-sm text-slate-300">Stock health</p>
                <ShoppingCart size={16} className="text-sky-400" />
                </div>
                <p className="mt-3 text-2xl font-semibold">94%</p>
                <p className="mt-1 text-sm text-slate-300">15 items low stock</p>
            </div>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 p-4">
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-300">Revenue trend</p>
                <div className="flex items-center gap-1 text-sm text-emerald-400">
                <ArrowUpRight size={15} />
                8.2%
                </div>
            </div>
            <div className="mt-4 flex h-24 items-end gap-2">
                {[36, 60, 48, 70, 88, 64].map((height, index) => (
                <div key={index} className="flex-1 rounded-t-xl bg-linear-to-t from-blue-500 to-cyan-400" style={{ height: `${height}%` }} />
                ))}
            </div>
            </div>

            <div className="mt-4 space-y-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-white">
            <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-slate-300">
                <BellRing size={14} />
                Low stock alerts
                </span>
                <span className="text-amber-300">3 urgent</span>
            </div>
            <div className="rounded-xl bg-slate-900/70 p-3 text-sm text-slate-300">
                <p className="font-medium text-white">Milk powder • 4 left</p>
                <p className="mt-1">Reorder recommended before 6 PM</p>
            </div>
            </div>
        </div>
        </motion.div>
    );
}

export default DashboardPreview;
