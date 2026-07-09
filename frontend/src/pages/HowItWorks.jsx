import { ArrowRight, BarChart3, Boxes, CreditCard, Package, Play, Store, TrendingUp, UserRoundPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';

const steps = [
  { title: 'Create Account', description: 'Set up your workspace, invite your team, and configure your branding in minutes.', tag: '01', icon: UserRoundPlus },
  { title: 'Create Shop', description: 'Add your first store, define your inventory rules, and connect your preferred payment options.', tag: '02', icon: Store },
  { title: 'Add Products', description: 'Upload your catalog, assign categories, and define pricing, units, and stock levels.', tag: '03', icon: Package },
  { title: 'Manage Inventory', description: 'Track low stock, receive reorder alerts, and control items across your shelves in real time.', tag: '04', icon: Boxes },
  { title: 'Generate Bills', description: 'Process sales instantly with a fast, polished checkout experience for every customer.', tag: '05', icon: CreditCard },
  { title: 'Track Sales', description: 'Monitor each transaction, apply discounts, and keep daily revenue organized and accurate.', tag: '06', icon: TrendingUp },
  { title: 'View Analytics', description: 'Discover sales trends, inventory health, and top-performing categories with live reports.', tag: '07', icon: BarChart3 },
  { title: 'Grow Business', description: 'Use your insights to expand, optimize, and scale your retail operations confidently.', tag: '08', icon: Play },
];

const faqs = [
  { question: 'How long does onboarding take?', answer: 'Most teams are fully set up in a day with guided onboarding and a simple data import process.' },
  { question: 'Can BillFlow support multiple branches?', answer: 'Yes. The platform is designed for multi-location retail teams that need a consistent operating system.' },
  { question: 'Do I need technical experience?', answer: 'No. BillFlow is built to be simple for operators while still powerful for growing businesses.' },
];

function HowItWorks() {
  return (
    <div className="bg-white">
      <Hero
        eyebrow="How it works"
        title="From store setup to growth, every step is designed to feel effortless."
        description="BillFlow guides you through a simple workflow that turns inventory, billing, and reporting into one premium retail operating system."
        primaryLabel="Start now"
        secondaryLabel="View features"
        primaryHref="/register"
        secondaryHref="/features"
      >
        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl">
          <p className="text-sm text-slate-400">Workflow preview</p>
          <p className="mt-3 text-2xl font-semibold">Create, manage, measure, and scale—all from one clean hub.</p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-slate-300">
            <div className="flex items-center justify-between">
              <span>Checkout performance</span>
              <span className="font-semibold text-white">+18.4%</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-slate-800">
              <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
            </div>
          </div>
        </div>
      </Hero>

      <main className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Workflow</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">A clear path from setup to scale.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Each step is designed to reduce friction so your team can focus on service, stock accuracy, and growth instead of admin overhead.</p>
          </div>
          <Timeline items={steps} />
        </section>

        <section className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Workflow illustration</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">What your retail team experiences every day.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">From onboarding to live reporting, BillFlow keeps the full store journey connected with a premium, intuitive flow.</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="rounded-2xl bg-slate-950 p-5 text-white">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-400">Daily operations</p>
                  <p className="text-sm font-semibold text-emerald-400">Live</p>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {['Stock sync', 'Fast checkout', 'Invoice generation', 'Sales review'].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-3 text-sm text-slate-200">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Questions retail teams usually ask before switching.</h2>
          </div>
          <FAQ items={faqs} />
        </section>

        <section className="mt-16">
          <CTA title="Modernize your store workflow with BillFlow today." description="Bring stock control, billing, and analytics into one polished experience that helps your team move faster and serve better." />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HowItWorks;
