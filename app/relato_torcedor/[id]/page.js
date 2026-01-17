import RelatoTorcedor from '@/components/RelatoTorcedor';

export default async function PaginaContribuidor({ params }) {
  const { id } = await params;
  return (
    <main className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-2">Acervo Rubronegrismo</h1>
          <p className="text-gray-400">Espaço exclusivo para historiadores e colaboradores</p>
        </header>
        
        <RelatoTorcedor jogadorId={id} />
        
        <footer className="mt-12 text-center text-gray-500 text-sm">
          Sua contribuição será revisada e integrada ao banco de dados.
        </footer>
      </div>
    </main>
  );
}