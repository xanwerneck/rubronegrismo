import Link from 'next/link';
import Image from 'next/image';

import jogadores from '../../../data/jogadores.json';
import titulos from '../../../data/titulos.json';

export default async function PaginaJogador({ params }) {
  const { id } = await params;
  
  // Busca o jogador no "Grafo" (JSON)
  const jogador = jogadores.find(j => j.id === id);

  if (!jogador) {
    return <div className="p-10 text-white">Jogador não encontrado no Acervo.</div>;
  }

  // Busca os dados reais dos títulos que o jogador possui
  const conquistasDetalhadas = titulos.filter(t => 
    jogador.conquistas_ids.includes(t.id)
  );

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <Link href="/" className="text-red-500 hover:underline mb-8 inline-block">
        ← Voltar para a Galeria
      </Link>

      {jogador.image_url &&
      <div className="w-full md:w-64 h-80 relative overflow-hidden rounded-lg border-2 border-red-600 shrink-0">
        <Image 
          src={jogador.image_url || "https://placehold.co/600x800/000/white?text=Sem+Foto"} 
          alt={jogador.nome_popular}
          fill
          unoptimized
          className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>}

      <header className="mb-12">
        <h1 className="text-6xl font-black uppercase italic text-red-600">
          {jogador.nome_popular}
        </h1>
        <p className="text-2xl text-zinc-400 italic">"{jogador.alcunha}"</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Coluna da Bio */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-4 border-b border-zinc-800 pb-2 uppercase tracking-tighter">
            Essência Rubro-Negra
          </h2>
          <p className="text-lg leading-relaxed text-zinc-300">
            {jogador.bio_flamenguista}
          </p>
          {jogador.momento_chave && (
            <div className="mt-8 bg-zinc-900 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="font-bold text-red-500 uppercase text-sm mb-2">Momento Chave</h3>
              <p className="italic text-zinc-300">{jogador.momento_chave}</p>
            </div>
          )}
        </div>

        {/* Coluna das Conquistas (O Grafo em ação) */}
        <aside>
          <h2 className="text-xl font-bold mb-4 border-b border-zinc-800 pb-2 uppercase tracking-tighter">
            Títulos no Grafo
          </h2>
          <div className="space-y-4">
            {conquistasDetalhadas.map(titulo => (
              <Link href={`/titulos/${titulo.id}`} key={titulo.id}>
                <div className="bg-zinc-900 p-4 rounded border border-zinc-800 hover:border-red-600 transition-colors cursor-pointer">
                  <p className="font-bold text-red-500">{titulo.titulo}</p>
                  <p className="text-xs text-zinc-500">{titulo.ano} - Técnico: {titulo.treinador}</p>
                </div>
              </Link>
            ))}
            {/* Se o título ainda não estiver no titulos.json, mostramos apenas o ID */}
            {jogador.conquistas_ids.length > conquistasDetalhadas.length && (
              <p className="text-xs text-zinc-600 mt-4 italic">
                + {jogador.conquistas_ids.length - conquistasDetalhadas.length} títulos aguardando catalogação...
              </p>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}