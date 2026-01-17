'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const RelatoTorcedor = ({ jogadorId }) => {
  const [relato, setRelato] = useState("");
  const [autor, setAutor] = useState("");

  const enviarRelato = async () => {
    const jsonFinal = {
      jogador: jogadorId,
      autor: autor,
      texto: relato,
      data: new Date().toLocaleDateString()
    }

    const templateParams = {
      subject: `RELATO TORCEDOR: ${jsonFinal.autor}`,
      json_output: JSON.stringify(jsonFinal),
      autor_nome: "Historiador Colaborador"
    };

    emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
        templateParams, 
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Valeu! Sua memória será revisada e imortalizada no acervo.");
        setRelato("");
        setAutor("");
      }, (error) => {
        console.log(error)
        alert("Erro ao enviar: " + error.text);
      });
  };

  return (
    <div className="mt-8 p-6 bg-depth-surface border border-depth-border rounded-xl">
      <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">
        Deixe sua marca na história dele
      </h4>
      
      <div className="space-y-4">
        {/* Campo do Autor */}
        <input 
          type="text"
          placeholder="Seu nome ou @usuario"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          className="w-full bg-depth-black border border-depth-border p-3 text-sm text-gray-300 outline-none focus:border-rubro transition-colors rounded"
        />

        {/* Campo do Relato */}
        <textarea 
          rows="3"
          placeholder={`Uma curiosidade ou lembrança do jogador...`}
          value={relato}
          onChange={(e) => setRelato(e.target.value)}
          className="w-full bg-depth-black border border-depth-border p-3 text-sm text-gray-300 outline-none focus:border-rubro transition-colors rounded resize-none"
        />

        <div className="flex justify-end">
          <button 
            type="button"
            className="bg-rubro text-white font-black text-[10px] uppercase tracking-[0.2em] px-6 py-3 rounded hover:bg-red-700 transition-all"
            onClick={enviarRelato}
          >
            Enviar para o Acervo
          </button>
        </div>
      </div>
    </div>
  );
}

export default RelatoTorcedor