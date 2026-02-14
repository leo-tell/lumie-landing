'use client';
import { useState } from 'react';

export default function OperationalModelSection() {
  const [activeTab, setActiveTab] = useState(0);
  
  const stages = [
    {
      title: 'Etapa 1 - MVP Lumie (6-8 meses)',
      features: [
        'Escolher 1-2 escolas parceiras;',
        'Rodar o piloto: triagem + treinamento;',
        'Coletar métricas de impacto.'
      ]
    },
    {
      title: 'Etapa 2 - Expansão Municipal (6-12 meses)',
      features: []
    },
    {
      title: 'Etapa 3 - Consolidação e Críticas (ano 3)',
      features: []
    }
  ];

  return (
    <section className="py-32 px-20" id="metodologia">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Modelo Operacional por Etapas
        </h2>
        
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {stages.map((stage, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full transition-colors ${
                activeTab === index
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {stage.title}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative h-96 w-full rounded-2xl overflow-hidden bg-gray-800 shadow-2xl">
              {/* Mockup placeholder - adicionar screenshot em /public/assets/images/mockup.jpg */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="bg-gray-700 rounded-lg p-6 mb-4">
                    <p className="text-gray-400 text-sm mb-2">Screenshot da plataforma</p>
                    <div className="h-40 bg-gray-600 rounded flex items-center justify-center">
                      <span className="text-gray-500">Adicionar mockup aqui</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <ul className="space-y-4">
              {stages[activeTab].features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-lg">
                  <span className="text-green-400 mt-1">→</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            {activeTab === 0 && (
              <div className="mt-8">
                <button className="bg-white text-[#091630] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Entre em contato
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
