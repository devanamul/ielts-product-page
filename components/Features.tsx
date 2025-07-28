import { Section } from '../types/product';
import Image from "next/image";

export default function Features({ sections }: { sections: Section[] }) {
    const features = sections.find((s) => s.type === 'features');
    if (!features || !features.values) return null;

    return (
        <section className="py-10">
            <h2 className="text-2xl font-bold mb-6">{features.name}</h2>

            <div className="grid grid-cols-2 gap-6 bg-black rounded-lg p-4">
                {features.values.map((value, index) => (
                    <div
                        key={index}
                        className="flex items-start w-full px-4 py-2 rounded-lg gap-3"
                    >
                        <Image
                            src={value.icon}
                            alt="icon"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                        <div>
                            <p className="text-white font-medium">{value.title}</p>
                            <p className="text-gray-400 text-sm">{value.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
