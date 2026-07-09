import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

function Hero({
    eyebrow,
    title,
    description,
    primaryLabel,
    secondaryLabel,
    primaryHref = '/register',
    secondaryHref = '/features',
    children,
    stats = [],
    }) {
    return (
        <section className="relative overflow-hidden bg-[radial-linear(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_40%),linear-gradient(135deg,_#f8fbff_0%,_#ffffff_55%,_#f1f8ff_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                {eyebrow}
                </div>

                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                {title}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                {description}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                <Link
                    to={primaryHref}
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                    {primaryLabel}
                    <ArrowRight size={16} />
                </Link>
                <Link
                    to={secondaryHref}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50"
                >
                    <Play size={16} />
                    {secondaryLabel}
                </Link>
                </div>

                {stats.length > 0 && (
                <div className="mt-10 flex flex-wrap gap-4">
                    {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm">
                        <p className="text-lg font-semibold text-slate-900">{stat.value}</p>
                        <p className="text-sm text-slate-500">{stat.label}</p>
                    </div>
                    ))}
                </div>
                )}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                {children}
            </motion.div>
            </div>
        </div>
        </section>
    );
}

export default Hero;
