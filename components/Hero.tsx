type HeroProps = {
    title: string;
    description: string;
};

export default function Hero({ title, description }: HeroProps) {
    return (
        <section className="py-10 px-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md mt-10 animate-fade-in">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
                {title}
            </h2>
            <div
                className="prose prose-lg prose-slate max-w-none"
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </section>
    );
}
