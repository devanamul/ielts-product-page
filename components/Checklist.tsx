import { Checklist as ChecklistType } from '../types/product';
import Image from "next/image";

export default function Checklist({ checklist }: { checklist: ChecklistType[] }) {
    if (!checklist || !Array.isArray(checklist)) return null;

    return (
        <section className="py-10">
            <h2 className="text-2xl font-bold mb-6">এই কোর্সে যা থাকছে</h2>
            <ul className="grid grid-cols-1 gap-4 list-none bg-blue-50 p-4 rounded shadow-sm">
                {checklist.map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-center">
                        <Image src={item.icon} alt="icon" width={20} height={20}/>
                        <span>{item.text}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
