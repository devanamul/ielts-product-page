import {Section} from '../types/product';
export default function Learn({
                                  sections,
                                  type,
                              }: {
    sections: Section[];
    type: string;
}) {
    const section = sections.find((s) => s.type === type);
    if (!section || !section.values) return null;

    return (
        <section className="py-6">
            <h2 className="text-2xl font-bold mb-6">{section.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 border border-gray-300 p-4 rounded-lg">
                {section.values.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 mb-2">
                        <span className="text-blue-600 mt-1">✔</span>
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
