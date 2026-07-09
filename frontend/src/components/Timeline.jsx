function Timeline({ items }) {
    return (
        <div className="relative space-y-6">
        {items.map((item, index) => {
            const Icon = item.icon;
            return (
            <div key={item.title} className="relative flex gap-4">
                <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-blue-600 shadow-sm">
                    <Icon size={18} />
                </div>
                {index < items.length - 1 && <div className="mt-2 h-full w-px bg-slate-200" />}
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
                <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Step {index + 1}</span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">{item.tag}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
            </div>
            );
        })}
        </div>
    );
}

export default Timeline;
