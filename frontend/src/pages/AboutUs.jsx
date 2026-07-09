import { ArrowRight, BarChart3, CalendarDays, Building2, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const timeline = [
  { title: 'Idea', description: 'We started with a simple problem: many retail owners were juggling disconnected tools for billing and inventory.', tag: '2019' },
  { title: 'Development', description: 'We built a platform that could unify checkout, stock visibility, and reporting with a better user experience.', tag: '2022' },
  { title: 'MVP', description: 'Our first release focused on fast checkout, low-stock alerts, and reliable inventory tracking for small shops.', tag: '2024' },
  { title: 'Future Roadmap', description: 'We are expanding toward AI-assisted forecasting and deeper multi-store automation for scaling retailers.', tag: '2026' },
];

const highlights = [
  { value: '2,500+', label: 'Businesses onboarded' },
  { value: '18M+', label: 'Products managed' },
  { value: '42M+', label: 'Transactions processed' },
  { value: '99.9%', label: 'Platform uptime' },
];

function AboutUs() {
  return (
    <div className="bg-white">
      <Hero
        eyebrow="About BillFlow"
        title="We built a premium operating system for modern retail stores."
        description="BillFlow grew from a simple belief: local businesses deserve software that is elegant, powerful, and built for the realities of everyday operations."
        primaryLabel="Get started"
        secondaryLabel="Explore features"
        primaryHref="/register"
        secondaryHref="/features"
      >
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70">
          <div className="rounded-2xl bg-slate-950 p-6 text-white">
            <p className="text-sm text-slate-400">Our story</p>
            <p className="mt-3 text-2xl font-semibold">Creating a calmer, smarter way to run retail operations.</p>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { label: 'Mission', value: 'Make retail operations clear and efficient.' },
              { label: 'Vision', value: 'Empower every shop with modern software.' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-2 text-sm text-slate-600">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Hero>

      <main className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Company story</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Built for owners who need clarity beyond the counter.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">We combine the reliability of enterprise software with the simplicity of modern design so店 owners can focus on customers rather than operational chaos.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, title: 'Reliable by default', description: 'Secure architecture and dependable performance for busy lines and high-volume days.' },
              { icon: TrendingUp, title: 'Scalable growth', description: 'Built to grow from single-store shops into multi-location retail teams.' },
              { icon: Building2, title: 'Operational clarity', description: 'One platform where stock, billing, and customer context stay connected.' },
              { icon: Sparkles, title: 'Smart automation', description: 'Reduce manual work with alerts, summaries, and workflows that save time every day.' },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="rounded-2xl bg-blue-50 p-3 text-blue-600 w-fit"><item.icon size={20} /></div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Timeline</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">From idea to modern retail platform.</h2>
            </div>
            <div className="space-y-4">
              {timeline.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">{item.tag}</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-3xl font-semibold text-slate-950">{item.value}</p>
              <p className="mt-2 text-sm text-slate-600">{item.label}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-950 to-slate-800 p-8 text-white shadow-xl lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Why choose BillFlow</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A premium retail stack without the bloat.</h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">Enjoy modern workflows, thoughtful design, and dependable performance tailored for local retail businesses.</p>
            </div>
            <Link to="/register" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5">
              Start your free trial <ArrowRight size={15} />
            </Link>
          </div>
        </section>

        <section className="mt-16">
          <CTA title="Bring your retail operations into a more elegant future." description="Whether you run one store or a growing chain, BillFlow gives your team the clarity and speed it needs to compete with confidence." />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AboutUs;
