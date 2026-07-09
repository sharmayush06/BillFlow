function TestimonialCard({ quote, name, role }) {
    return (
        <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-200/70">
        <p className="text-base leading-8 text-slate-600">“{quote}”</p>
        <div className="mt-6">
            <p className="font-semibold text-slate-900">{name}</p>
            <p className="text-sm text-slate-500">{role}</p>
        </div>
        </article>
    );
}

export default TestimonialCard;
