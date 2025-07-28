import {Section} from '../types/product';
import Image from "next/image";

export default function Instructors({sections}: { sections: Section[] }) {
    const instructorSection = sections.find((s) => s.type === 'instructors');
    if (!instructorSection || !instructorSection.values) return null;

    return (
        <section className="py-10">
            <h2 className="text-2xl font-bold mb-6">{instructorSection.name}</h2>
            <ul className="grid grid-cols-1 gap-4">
                {instructorSection.values.map((inst, i) => (
                    <li key={i} className="border border-gray-300 p-4 rounded-lg shadow-sm flex gap-4">
                        <Image src={inst.image} alt="Image of Instructor" width={100} height={100} className="rounded-full" />
                        <div>
                            <div className="font-semibold text-lg">{inst.name}</div>
                            {inst.description && (
                                <div
                                    className="text-sm text-gray-600"
                                    dangerouslySetInnerHTML={{__html: inst.description}}
                                />
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
