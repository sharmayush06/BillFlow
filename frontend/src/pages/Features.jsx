import {
  BarChart3,
  Boxes,
  Building2,
  Camera,
  CreditCard,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
} from 'lucide-react';
import CTA from '../components/CTA';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FAQ from '../components/FAQ';

const featureItems = [
  { icon: Boxes, title: 'Inventory Tracking', description: 'Stay on top of every SKU, expiry date, and reorder point without manual spreadsheets.' },
  { icon: ScanLine, title: 'Barcode Support', description: 'Accelerate checkout and stock updates with rapid barcode scanning for products and bundles.' },
  { icon: BarChart3, title: 'Sales Dashboard', description: 'Monitor revenue, discounts, and sales trends with a polished analytics experience.' },
  { icon: Users, title: 'Customer Management', description: 'Keep purchase history, loyalty status, and customer notes in one accessible view.' },
  { icon: Building2, title: 'Employee Roles', description: 'Assign permissions and workflows by role to keep operations secure and organized.' },
  { icon: Sparkles, title: 'Reports & Analytics', description: 'Create profit, inventory, and team performance reports in a few clicks.' },
  { icon: Store, title: 'Multi-shop Support', description: 'Manage multiple outlets from one central platform without sacrificing local control.' },
  { icon: ShieldCheck, title: 'Secure Authentication', description: 'Protect your team with role-based access, audit-friendly controls, and secure sign-in.' },
  { icon: Camera, title: 'Low Stock Alerts', description: 'Get notified early when fast-moving items need replenishment before they run out.' },
];

const faqs = [
  { question: 'Can BillFlow handle multiple stores?', answer: 'Yes. BillFlow supports multi-location operations so owners can manage stock, staff, and sales across shops from one dashboard.' },
  { question: 'Is the platform suitable for small retail businesses?', answer: 'Absolutely. It is designed to be powerful enough for growing retailers while remaining easy to adopt for small teams.' },
  { question: 'How quickly can we get started?', answer: 'Most teams can be up and running in a single day with simple onboarding and guided setup.' },
];

function Features() {
  return (
    <div className="bg-white">
      <Hero
        eyebrow="Features"
        title="Purpose-built tools for modern retail operations."
        description="From inventory accuracy to fast checkout, every BillFlow capability is designed to help your store move faster with fewer errors."
        primaryLabel="Create account"
        secondaryLabel="See pricing"
        primaryHref="/register"
        secondaryHref="/about"
      >
        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Live control center</p>
              <p className="mt-2 text-2xl font-semibold">Inventory, billing, and analytics in one place.</p>
            </div>
            <div className="rounded-2xl bg-blue-500/20 p-3 text-blue-300"><Boxes size={20} /></div>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {['Barcode-ready checkout', 'Instant stock alerts', 'Role-based access', 'Multi-shop reporting'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-3 text-sm text-slate-200">{item}</div>
            ))}
          </div>
        </div>
      </Hero>

      <main className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featureItems.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>

        <section className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Comparison</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Why BillFlow stands out from manual systems and generic tools.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Replace scattered spreadsheets and disconnected apps with a single, premium platform designed for modern retail work.</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ['Manual processes', 'Slow, error-prone, and hard to scale'],
                  ['BillFlow', 'Fast, connected, and built for retail precision'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-900">{label}</p>
                    <p className="mt-2 text-sm text-slate-600">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Useful answers for growing retail teams.</h2>
          </div>
          <FAQ items={faqs} />
        </section>

        <section className="mt-16">
          <CTA title="Give your store the modern operating system it deserves." description="Bring billing, inventory, and analytics into one premium flow that helps your team move faster and serve customers better." />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Features;
