import Link from 'next/link';

import jogadores from '../data/jogadores.json';
import Header from '@/components/Header';

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements array[i] and array[j]
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.slice(0,3);
}

export default function Home() {
  return (
    <main className="bg-brand-black min-h-screen">
      <Header />

      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-10" />
        
        <div className="text-center z-20 px-4">
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter mb-4">
            A História é <br />
            <span className="text-brand-red">Eterna.</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg mb-8">
            Explore o acervo digital definitivo sobre o Clube de Regatas do Flamengo. 
            Fichas técnicas, histórias e o legado de quem vestiu o Manto.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-brand-red text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-red-700 transition-all">
              Explorar Acervo
            </button>
            <a href="/contribuidor" className="border border-gray-700 text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Seja um Historiador
            </a>
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold text-white uppercase mb-10 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-brand-red"></span>
          Destaques do Acervo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shuffle(jogadores).map((j) => (
            <Link href={`/jogadores/${j.id}`} key={j.id}>
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg hover:border-red-600 cursor-pointer transition-all group">
                <span className="text-xs font-mono text-zinc-500">ID: {j.id}</span>
                <h3 className="text-2xl font-bold group-hover:text-red-500">{j.nome_popular}</h3>
                <p className="text-sm italic text-zinc-400 mb-4">"{j.alcunha}"</p>
                <p className="text-zinc-500 text-sm line-clamp-3">{j.bio_flamenguista}</p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {j.conquistas_ids.slice(0, 3).map(c => (
                    <span key={c} className="text-[10px] bg-zinc-800 px-2 py-1 rounded">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}