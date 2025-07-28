import { ReactNode } from 'react';
import Image from "next/image";

type LayoutProps = {
    children: ReactNode;
    lang?: string;
};

export default function Layout({ children, lang }: LayoutProps) {
    return (
        <div className="max-w-5xl mx-auto px-4">
            <header className="py-6 flex justify-between items-center border-b">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c3/10_Minute_School_Logo.svg" alt="not found" width={100} height={100}/>
                <button
                    onClick={() => {
                        const nextLang = lang === 'en' ? 'bn' : 'en';
                        window.location.href = `/?lang=${nextLang}`;
                    }}
                    className="border px-3 py-1 rounded hover:bg-gray-100 text-sm"
                >
                    {lang === 'en' ? 'বাংলা' : 'English'}
                </button>
            </header>
            <main>{children}</main>
            <footer className="mt-12 text-center text-sm text-gray-400 py-4 border-t">
                © {new Date().getFullYear()} 10 Minute School
            </footer>
        </div>
    );
}
