import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function CTA({ title, description, primaryLabel = 'Get started', secondaryLabel = 'Talk to sales', primaryHref = '/register', secondaryHref = '/about' }) {
    return (
        <section className="rounded-4xl border border-slate-200 bg-linear-to-br from-blue-600 to-sky-500 p-8 text-white shadow-xl shadow-blue-600/20 sm:p-10 lg:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">Ready to upgrade?</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-8 text-blue-50">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
            <Link to={primaryHref} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5">
                {primaryLabel} <ArrowRight size={15} />
            </Link>
            <Link to={secondaryHref} className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                {secondaryLabel}
            </Link>
            </div>
        </div>
        </section>
    );
}

export default CTA;
