import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-[#05112B] text-white py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <Image src="/assets/images/logo.png" alt="Logo" width={32} height={32} />
          </div>
          <span className="font-semibold text-lg">Lumie</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#sobre" className="hover:text-gray-300 transition-colors">
            Sobre
          </Link>
          <Link href="#solucoes" className="hover:text-gray-300 transition-colors">
            Soluções
          </Link>
          <Link href="#estrutura" className="hover:text-gray-300 transition-colors">
            Estrutura
          </Link>
          <Link href="#metodologia" className="hover:text-gray-300 transition-colors">
            Metodologia
          </Link>
          <Link href="#projeto-inicial" className="hover:text-gray-300 transition-colors">
            Projeto inicial
          </Link>
          <Link href="#duvidas" className="hover:text-gray-300 transition-colors">
            Dúvidas
          </Link>
          <Link href="#contato" className="hover:text-gray-300 transition-colors">
            Entre em contato
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
