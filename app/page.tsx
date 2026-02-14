import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-blue-900 text-center p-6">
            <h1 className="text-5xl font-bold mb-6">
            ONG Principal
            </h1>

            <p className="text-white-600 mb-8 max-w-md">
                Plataforma institucional da organização.
                Conheça também nosso projeto Lumie.
            </p>

            <Link
                href="/lumie"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-black text-white rounded-lg hover:opacity-80 transition"
            >
                Conhecer Lumie
            </Link>

        </main>
    );
}
