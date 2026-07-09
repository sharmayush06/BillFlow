import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function FAQ({ items }) {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="space-y-3">
        {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
            <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between text-left"
                >
                <span className="font-semibold text-slate-900">{item.question}</span>
                <ChevronDown className={`transition ${isOpen ? 'rotate-180' : ''}`} size={18} />
                </button>
                {isOpen && <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>}
            </div>
            );
        })}
        </div>
    );
}

export default FAQ;
