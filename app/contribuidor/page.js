'use client';

import ContribuirJogador from '@/components/ContribuidorJogador';

export default function PaginaContribuidor() {
  return (
    <main className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-2">Acervo Rubronegrismo</h1>
          <p className="text-gray-400">Espaço exclusivo para historiadores e colaboradores</p>
        </header>

        <section className="mb-10 p-6 bg-[#0f0f0f] border-l-4 border-red-600 rounded-r-lg shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <span className="mr-2">📚</span> Guia do Historiador Rubro-Negro
          </h2>
          
          <ul className="space-y-3 text-gray-300 text-sm md:text-base">
            <li className="flex items-start">
              <span className="text-red-500 mr-2 font-bold">•</span>
              <span><strong>Bio Narrativa:</strong> Não foque apenas em números. Tente descrever o que o jogador representava para a torcida na época. Use o modelo do <em>Tardelli</em> ou do <em>Imperador</em> como inspiração.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 font-bold">•</span>
              <span><strong>Conquistas (IDs):</strong> Use o padrão minúsculo separado por hífen (ex: <code>carioca-2009</code>). Se o título não existir no site ainda, não se preocupe, nós criaremos.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 font-bold">•</span>
              <span><strong>Curiosidade:</strong> Conte algo que só quem é flamenguista de verdade ou estuda a história sabe. Aquele detalhe de bastidor faz toda a diferença.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 font-bold">•</span>
              <span><strong>Revisão:</strong> Ao enviar, sua ficha passará por uma curadoria técnica antes de subir para o ar.</span>
            </li>
          </ul>
        </section>
        
        <ContribuirJogador />
        
        <footer className="mt-12 text-center text-gray-500 text-sm">
          Sua contribuição será revisada e integrada ao banco de dados.
        </footer>
      </div>
    </main>
  );
}