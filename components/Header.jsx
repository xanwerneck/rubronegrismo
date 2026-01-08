// components/Header.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-red-900/50 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* Logo do Projeto */}
          <div className="relative w-12 h-12">
            <Image 
              src="/images/rubronegrismo-logo.png" // Certifique-se de que o arquivo está em /public/logo.png
              alt="Rubronegrismo Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-black tracking-tighter text-white uppercase italic">
            Rubro<span className="text-red-600">negrismo</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
          <Link href="/elenco" className="hover:text-red-600 transition-colors">Acervo</Link>
          <Link href="/contribuidor" className="hover:text-red-600 transition-colors">Contribuir</Link>
          <Link href="/sobre" className="hover:text-red-600 transition-colors">O Projeto</Link>
        </nav>
      </div>
    </header>
  );
}