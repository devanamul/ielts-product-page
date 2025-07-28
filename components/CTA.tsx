import { CtaText } from '../types/product';

export default function CTA({ cta }: { cta: CtaText }) {

    return (
        <section className="">
            <h2 className="text-3xl font-bold mb-2">৳1000</h2>
            <button className="bg-green-600 text-white font-semibold px-8 py-3 rounded-sm w-full text-lg transition">
                {cta.name}
            </button>
        </section>
    );
}
