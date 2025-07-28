import Image from 'next/image';

type Feature = {
    title: string;
    file_url: string;
    checklist: string[];
};

type Section = {
    type: string;
    values: Feature[];
    name: string;
};

type Props = {
    sections: Section[];
};

const Exclusive = ({ sections }: Props) => {
    const exclusive = sections.find((s) => s.type === 'feature_explanations');
    if (!exclusive) return null;

    return (
        <div className="grid grid-cols-1 gap-6">
            <h2 className="text-2xl font-bold mb-6">{exclusive.name}</h2>
            {exclusive.values.map((feature, index) => (
                <div key={index} className="flex flex-row items-start gap-6 p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
                    {/* Text Side */}
                    <div className="flex-1 space-y-2">
                        <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                        <ul className="list-none space-y-1">
                            {feature.checklist.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-gray-700">
                                    <span className="text-blue-600 mt-1">✔</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image Side */}
                    <div className="flex-shrink-0">
                        <Image
                            src={feature.file_url}
                            alt={feature.title}
                            width={180}
                            height={180}
                            className="rounded-lg object-cover"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Exclusive;
