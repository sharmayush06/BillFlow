import { motion } from 'framer-motion';
import {
  BarChart3,
  Boxes,
  Building2,
  CreditCard,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
} from 'lucide-react';
import CTA from '../components/CTA';
import DashboardPreview from '../components/DashboardPreview';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import TestimonialCard from '../components/TestimonialCard';

const featureItems = [
  { icon: Boxes, title: 'Inventory Tracking', description: 'Monitor stock levels, reorder points, and warehouse movement from one live dashboard.' },
  { icon: CreditCard, title: 'Billing & POS', description: 'Process sales in seconds with fast checkout, invoice control, and flexible payment modes.' },
  { icon: BarChart3, title: 'Sales Analytics', description: 'Understand trends, peak hours, and category performance with clear daily insights.' },
  { icon: Users, title: 'Customer Management', description: 'Track purchase history, loyalty, and support notes with a unified customer view.' },
  { icon: Building2, title: 'Employee Management', description: 'Assign permissions, manage shifts, and keep every team role aligned with your workflow.' },
  { icon: Sparkles, title: 'Smart Reports', description: 'Generate detailed summaries for profit, inventory, and performance without manual work.' },
];

const stats = [
  { value: '24/7', label: 'Live visibility' },
  { value: '98.9%', label: 'Uptime' },
  { value: '4.9/5', label: 'Customer rating' },
];

const testimonials = [
  { quote: 'BillFlow cut our checkout time in half and gave us real control over stock planning.', name: 'Aarav Mehta', role: 'Owner, CityMart' },
  { quote: 'The analytics helped us spot underperforming products and improve margins within weeks.', name: 'Priya Shah', role: 'Operations Lead, BrightCart' },
];

function Home() {
  return (
    <div className="bg-white">
      <Hero
        eyebrow="Modern POS & Inventory Management"
        title="Run your retail store with clarity, speed, and control."
        description="BillFlow gives local retailers a premium command center for billing, inventory, analytics, and customer growth in one secure platform."
        primaryLabel="Get Started"
        secondaryLabel="Live Demo"
        stats={stats}
      >
        <DashboardPreview />
      </Hero>

      <main>
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Trusted by growing businesses</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Built for retail teams that value speed and precision.</h2>
            </div>
            <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
              1,200+ shops powered across India
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { value: '150K+', label: 'Bills processed monthly' },
              { value: '35%', label: 'Faster stock restocking' },
              { value: '99.8%', label: 'Secure transactions' },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-3xl font-semibold text-slate-950">{item.value}</p>
                <p className="mt-2 text-sm text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50/70 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Features preview</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Every workflow your store needs, beautifully organized.</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featureItems.map((item) => (
                <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Dashboard preview</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">See your business pulse in real time.</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">Track sales, monitor stock, and keep every location aligned with one premium view designed for modern retail teams.</p>
            </div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { label: 'Revenue', value: '₹ 8.2L', tone: 'text-emerald-600' },
                  { label: 'Orders', value: '1,248', tone: 'text-slate-900' },
                  { label: 'Returns', value: '3.1%', tone: 'text-amber-600' },
                ].map((card) => (
                  <div key={card.label} className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">{card.label}</p>
                    <p className={`mt-2 text-xl font-semibold ${card.tone}`}>{card.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Weekly sales</p>
                    <p className="mt-1 text-xl font-semibold text-slate-900">+18.4% from last week</p>
                  </div>
                  <div className="rounded-full bg-emerald-50 p-2 text-emerald-600"><BarChart3 size={18} /></div>
                </div>
                <div className="mt-6 flex h-24 items-end gap-2">
                  {[48, 72, 54, 84, 96, 78].map((height, index) => (
                    <div key={index} className="flex-1 rounded-t-xl bg-gradient-to-t from-blue-500 to-cyan-400" style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-slate-50/70 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Testimonials</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Retailers trust BillFlow to keep stores running smoothly.</h2>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <CTA title="See how BillFlow can modernize your retail operations." description="Bring your inventory, billing, and team workflows into one powerful platform built for speed, control, and growth." />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;