import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContribuirJogador = () => {
  const [enviado, setEnviado] = useState(false);
  const [formData, setFormData] = useState({
    nome_popular: '',
    alcunha: '',
    bio_flamenguista: '',
    chegada: '',
    origem: '',
    posicao: '',
    conquistas_ids: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Formatando os dados para o SEU modelo (Tardelli)
    const jsonFinal = {
      id: formData.nome_popular.toLowerCase().replace(/\s+/g, '-'),
      nome_popular: formData.nome_popular,
      image_url: "/images/jogadores/placeholder.jpg",
      alcunha: formData.alcunha,
      bio_flamenguista: formData.bio_flamenguista,
      trajetoria: {
        chegada: formData.chegada,
        origem: formData.origem,
        status: "Ativo/Aposentado",
        numero_camisa: ["?"]
      },
      estatisticas_resumo: {
        posicao: formData.posicao,
        pe_preferido: "Não informado",
        perfil_comportamental: "Descreva aqui"
      },
      conquistas_ids: formData.conquistas_ids.split(',').map(item => item.trim()),
      curiosidade_comunidade: "Dica enviada por colaborador."
    };

    // Parâmetros para o EmailJS
    const templateParams = {
      subject: `NOVA FICHA: ${jsonFinal.nome_popular}`,
      json_output: JSON.stringify(jsonFinal, null, 2),
      autor_nome: "Historiador Colaborador"
    };

    // Substitua pelos seus IDs do EmailJS
    emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
        templateParams, 
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setEnviado(true);
      }, (error) => {
        alert("Erro ao enviar: " + error.text);
      });
  };

  if (enviado) {
    return (
      <div className="bg-black p-8 rounded-lg border-2 border-red-600 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">¡Obrigado, Historiador!</h2>
        <p className="text-gray-400">Sua ficha foi enviada para a mesa de edição. Em breve o Manto estará atualizado.</p>
        <button onClick={() => setEnviado(false)} className="mt-4 text-red-500 underline">Enviar outro</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#0a0a0a] p-6 rounded-xl border border-gray-800 max-w-2xl mx-auto space-y-4">
      <h2 className="text-xl font-bold text-red-600 mb-6 uppercase tracking-widest">Contribuir com o Acervo</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="nome_popular" placeholder="Nome Popular (Ex: Zico)" onChange={handleChange} required className="bg-black border border-gray-700 p-2 rounded text-white" />
        <input name="alcunha" placeholder="Alcunha (Ex: Galinho de Quintino)" onChange={handleChange} className="bg-black border border-gray-700 p-2 rounded text-white" />
      </div>

      <textarea name="bio_flamenguista" placeholder="Bio do jogador (A visão do torcedor)..." onChange={handleChange} required className="w-full bg-black border border-gray-700 p-2 rounded text-white h-32" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input name="chegada" placeholder="Chegada (yyyy-mm-dd)" type="text" onChange={handleChange} className="bg-black border border-gray-700 p-2 rounded text-white" />
        <input name="origem" placeholder="Clube de Origem" onChange={handleChange} className="bg-black border border-gray-700 p-2 rounded text-white" />
        <input name="posicao" placeholder="Posição" onChange={handleChange} className="bg-black border border-gray-700 p-2 rounded text-white" />
      </div>

      <input name="conquistas_ids" placeholder="IDs das Conquistas (separados por vírgula: carioca-2009, brasileirao-2009)" onChange={handleChange} className="w-full bg-black border border-gray-700 p-2 rounded text-white" />

      <button type="submit" className="w-full bg-red-700 hover:bg-red-600 text-white font-bold py-3 rounded transition-all">
        ENVIAR PARA REVISÃO
      </button>
    </form>
  );
};

export default ContribuirJogador;