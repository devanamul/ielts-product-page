import { useEffect, useState } from 'react';
import { Section } from '../types/product';

export default function Learn({
                                  sections,
                                  type,
                              }: {
    sections: Section[];
    type: string;
}) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const section = sections.find((s) => s.type === type);

    useEffect(() => {
        if (section?.values?.length) {
            setOpenIndex(0);
        }
    }, [section]);

    if (!section || !section.values) return null;

    const toggleIndex = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="py-10 w-full mx-auto">
            <h2 className="text-3xl font-bold mb-6">{section.name}</h2>

            <div className="space-y-4 border border-gray-300 p-4 rounded-lg">
                {section.values.map((inst, index) => {
                    const isOpen = index === openIndex;
                    return (
                        <div key={inst.id} className="bg-white">
                            <button
                                onClick={() => toggleIndex(index)}
                                className="flex justify-between items-center w-full px-6 py-4 text-left text-xl font-semibold hover:bg-gray-100 rounded-t-xl"
                            >
                                <span dangerouslySetInnerHTML={{ __html: inst.title }} />
                                <span className="ml-4 text-gray-500">{isOpen ? '▲' : '▼'}</span>
                            </button>

                            {isOpen && (
                                <div
                                    className="px-6 pb-6 pt-2 prose prose-blue max-w-none"
                                    dangerouslySetInnerHTML={{ __html: inst.description }}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
