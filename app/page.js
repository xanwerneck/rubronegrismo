import Link from 'next/link';

import jogadores from '../data/jogadores.json';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <header className="mb-12 border-l-8 border-red-600 pl-4">
        <h1 className="text-5xl font-black tracking-tighter uppercase italic">
          Rubro-Negrismo
        </h1>
        <p className="text-zinc-400">O Grafo de Conhecimento da Nação.</p>
      </header>

      <section>
        <h2 className="text-xl font-bold mb-6 text-red-500 uppercase tracking-widest">
          Protagonistas de 2019
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jogadores.map((j) => (
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