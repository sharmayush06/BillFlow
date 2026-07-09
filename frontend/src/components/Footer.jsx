import { ArrowRight, Store, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
                <div className="flex items-center gap-2 text-white">
                <div className="rounded-xl bg-blue-600/20 p-2 text-blue-400">
                    <Store size={18} />
                </div>
                <span className="text-lg font-semibold">BillFlow</span>
                </div>
                <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
                Premium POS and inventory software for modern retail teams that want speed, clarity, and control.
                </p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                <ShieldCheck size={15} className="text-emerald-400" />
                Secure by design
                </div>
            </div>

            <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Product</h3>
                <ul className="mt-4 space-y-3 text-sm">
                <li><Link to="/features" className="transition hover:text-white">Features</Link></li>
                <li><Link to="/how-it-works" className="transition hover:text-white">How it works</Link></li>
                <li><Link to="/about" className="transition hover:text-white">About</Link></li>
                </ul>
            </div>

            <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Get started</h3>
                <ul className="mt-4 space-y-3 text-sm">
                <li><Link to="/register" className="transition hover:text-white">Create account</Link></li>
                <li><Link to="/login" className="transition hover:text-white">Sign in</Link></li>
                <li><a href="mailto:hello@billflow.io" className="transition hover:text-white">hello@billflow.io</a></li>
                </ul>
            </div>
            </div>

            <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 BillFlow. All rights reserved.</p>
            <Link to="/register" className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white">
                Book a demo <ArrowRight size={15} />
            </Link>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
