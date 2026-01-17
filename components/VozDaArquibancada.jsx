export default function VozDaArquibancada({ jogador }) {
  const {relatos_torcida: relatos, id} = jogador
  const adicionarRelato = `/relato_torcedor/${id}`
  return (
    <div className="mt-12">
      <h3 className="text-rubro font-black italic uppercase tracking-wider flex items-center gap-2 mb-6">
        <span className="w-8 h-[2px] bg-rubro"></span>
        Voz da Arquibancada
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {relatos && relatos.map((item, index) => (
          <div 
            key={index} 
            className="bg-depth-surface border-l-4 border-rubro p-4 rounded-r-lg shadow-lg hover:bg-depth-overlay transition-colors"
          >
            <p className="text-gray-300 italic text-sm leading-relaxed">
              "{item.texto}"
            </p>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">
                Relato de: {item.autor}
              </span>
              <span className="text-rubro opacity-30 italic font-black text-2xl leading-none">”</span>
            </div>
          </div>
        ))}
        
        {/* Card de incentivo para novos relatos */}
        <div className="border-2 border-dashed border-depth-border p-4 rounded-lg flex flex-col items-center justify-center text-center group hover:border-rubro/50 transition-colors">
          <p className="text-xs text-gray-500 uppercase font-bold mb-2">Sabe algo sobre ele?</p>
          <a href={adicionarRelato} className="text-rubro font-black text-xs uppercase hover:underline">
            + Adicionar Relato
          </a>
        </div>
      </div>
    </div>
  );
}