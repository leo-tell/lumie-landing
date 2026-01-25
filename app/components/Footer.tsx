import Link from 'next/link';
import { FacebookIcon, InstagramIcon, YouTubeIcon } from './SocialIcons';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#05112B] text-white py-12 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Image src="/assets/images/logo.png" alt="Logo" width={32} height={32} />
            </div>
            <span className="font-semibold text-lg">Lumie Institute of Neurodiversity</span>
          </div>
          
          <p className="text-gray-300 mb-4 max-w-md">
            Por um lugar onde as neurodiversidades tenham a atenção que realmente merecem.
          </p>
          
          <p className="text-gray-400 text-sm mb-6">
            Inclusão não é discurso. É execução.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:border-white transition-colors">
              <FacebookIcon />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:border-white transition-colors">
              <InstagramIcon />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:border-white transition-colors">
              <YouTubeIcon />
            </a>
          </div>
        </div>
        
        <div className="md:text-right">
          <h3 className="font-semibold mb-4">Navegação</h3>
          <nav className="flex flex-col gap-2">
            <Link href="#sobre" className="text-gray-300 hover:text-white transition-colors">
              Sobre
            </Link>
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
