import Link from 'next/link';
import Image from 'next/image';

import titulos from '../../../data/titulos.json';
import jogadores from '../../../data/jogadores.json';

export default async function PaginaTitulo({ params }) {
  const { id } = await params;
  
  // 1. Busca o título pelo ID da URL
  const titulo = titulos.find(t => t.id === id);

  if (!titulo) {
    return <div className="p-10 text-white">Título não catalogado no Rubro-Negrismo.</div>;
  }

  // 2. Mágica do Grafo: Filtra todos os jogadores que pertencem a este elenco
  const jogadoresDoElenco = jogadores.filter(j => 
    titulo.elenco_ids.includes(j.id)
  );

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <Link href="/" className="text-red-500 hover:underline mb-8 inline-block">
        ← Voltar para a Home
      </Link>

      <header className="mb-12 border-b border-zinc-800 pb-8">
      {/* CONTAINER DO BANNER */}
      <div className="w-full h-[300px] md:h-[400px] mb-8 overflow-hidden rounded-xl border border-zinc-800 relative">
        <div className="w-full h-[300px] md:h-[500px] bg-black rounded-xl overflow-hidden border border-zinc-800 flex items-center justify-center">
          <Image
            src={titulo.image_url || "https://placehold.co/600x800/000/white?text=Sem+Foto"} 
            alt={titulo.titulo}
            fill
            unoptimized
            className="max-w-full max-h-full object-contain opacity-70"/>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-2">
        <span className="bg-red-600 text-white px-3 py-1 font-bold text-sm rounded">
          {titulo.ano}
        </span>
        <h1 className="text-5xl font-black uppercase italic">{titulo.titulo}</h1>
      </div>
      
      <p className="text-2xl text-zinc-400 mt-4 max-w-2xl leading-relaxed font-light italic">
        "{titulo.narrativa_torcedor}"
      </p>
    </header>


      <section>
        <h2 className="text-xl font-bold mb-6 uppercase tracking-widest text-red-500">
          Heróis deste Título
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {jogadoresDoElenco.map(jogador => (
            <Link href={`/jogadores/${jogador.id}`} key={jogador.id}>
              <div className="bg-zinc-900 p-4 rounded border border-zinc-800 hover:border-red-600 transition-colors cursor-pointer group">
                <p className="font-bold group-hover:text-red-500 transition-colors">
                  {jogador.nome_popular}
                </p>
                <p className="text-xs text-zinc-500 uppercase">{jogador.alcunha}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Seção Extra: Detalhes do Jogo (Opcional) */}
      <section className="mt-12">
        <h2 className="text-xl font-bold mb-6 uppercase tracking-widest text-red-500">
          O Jogo Eterno
        </h2>
        <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
          {titulo.finais.map((final, idx) => (
            <div key={idx}>
              <p className="text-lg font-bold">{final.placar}</p>
              <ul className="mt-2 space-y-1">
                {final.gols.map((gol, gIdx) => (
                  <li key={gIdx} className="text-sm text-zinc-400">
                    ⚽ {gol.jogador_id} aos {gol.minuto}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}