import { motion } from 'framer-motion';

function FeatureCard({ icon: Icon, title, description }) {
    return (
        <motion.article
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-200/70 transition"
        >
        <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
            <Icon size={22} />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
        </motion.article>
    );
}

export default FeatureCard;
