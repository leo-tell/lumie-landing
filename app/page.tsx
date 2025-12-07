export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 px-6">
      <header className="w-full max-w-4xl py-10 text-center">
        <h1 className="text-5xl font-bold text-purple-600">Lumie</h1>
        <p className="text-xl mt-4 text-gray-700">
          Formação profissional para professores que lidam com Transtorno do Espectro Autista (TEA)
        </p>
      </header>

      <section className="w-full max-w-2xl text-center">
        <p className="text-lg text-gray-600">
          Estamos construindo uma plataforma inovadora que capacita educadores a oferecerem suporte adequado,
          humano e eficaz para estudantes com TEA.
        </p>

        <button className="mt-8 px-8 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">
          Quero ser avisado do lançamento
        </button>
      </section>

      <footer className="mt-24 text-sm text-gray-500">
        © {new Date().getFullYear()} Lumie — Construindo educação com propósito.
      </footer>
    </main>
  );
}
