import Image from 'next/image';

export default function SolutionsSection() {
  const solutions = [
    {
      badgeText: 'Capacitação | Treinamento',
      title: 'Capacitação de Professores',
      subtitle: 'As soluções da ONG estão em um pacote institucional que a escola contrata sem custo para os estudantes, composto por:',
      features: [
        'Treinamento prático anual;',
        'Protocolos de manejo comportamental;',
        'Instalação de ABA naturalístico;',
        'Gestão de crises semanais;',
        'Inclusão pedagógica com ferramentas aplicáveis no dia a dia.'
      ],
      note: 'Formato: 8h presencial + plataforma online.',
      image: '/assets/images/teacher-training.jpg',
      imagePosition: 'right',
      gradient: 'from-blue-500 to-green-500'
    },
    {
      badgeText: 'Triagem | Mapeamento',
      title: 'Triagem e Mapeamento Neurodivergente',
      subtitle: 'Equipe técnica Lumie realiza:',
      features: [
        'Rastreamento de sinais precoces;',
        'Entrevistas com professores e pais;',
        'Escalas padronizadas (M-CHAT, eM-HAV, ASRS, SDQ);'
      ],
      note: 'Entrega:',
      extraFeatures: [
        'Relatório para a escola;',
        'Orientações para encaminhamento clínico quando necessário;',
        'Diagnóstico preciso + Redução de casos.'
      ],
      image: '/assets/images/brain-mapping.jpg',
      imagePosition: 'left',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      badgeText: 'PEI | Individualizado',
      title: 'Plano Educacional Individualizado (PEI)',
      subtitle: 'Para cada criança atendida:',
      features: [
        'Estratégias pedagógicas customizadas;',
        'Adequações curriculares;',
        'Metas dinâmicas;',
        'Suporte ao professor responsável;'
      ],
      image: '/assets/images/individualized-plan.jpg',
      imagePosition: 'right',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      badgeText: 'Família | Suporte',
      title: 'Núcleo de Apoio à Família',
      features: [
        'Grupos de pais mensalmente;',
        'Educação socioemocional;',
        'Acompanhamento inicial para orientação.'
      ],
      image: '/assets/images/family-support.jpg',
      imagePosition: 'left',
      gradient: 'from-green-400 to-cyan-500'
    },
    {
      badgeText: 'Eventos | Workshops',
      title: 'Eventos Institucionais',
      features: [
        'Semana Lumie de Neurodiversidade;',
        'Palestras com neuropsiquiatras, psicólogos e educadores;',
        'Oficinas para estudantes.'
      ],
      image: '/assets/images/events.jpg',
      imagePosition: 'right',
      gradient: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <section className="py-32 px-20 bg-[#091630]" id="solucoes">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-400 mb-2">As soluções da ONG estão em um pacote</p>
          <p className="text-gray-400 mb-8">institucional que a escola contrata sem custo para os estudantes, composto por:</p>
        </div>

        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                solution.imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="flex-1">
                <div className="relative mb-6">
                  <div 
                    className="h-5 w-[270px] rounded-[90px] flex items-center justify-center px-4"
                    style={{
                      background: 'linear-gradient(to right, #4DA3FF, #2ECC71, #F1C40F, #E74C3C)'
                    }}
                  >
                    <span className="text-white text-xs font-semibold">
                      {solution.badgeText}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold mb-6">{solution.title}</h3>
                
                {solution.subtitle && (
                  <p className="text-gray-300 mb-6">{solution.subtitle}</p>
                )}
                
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {solution.note && (
                  <p className="text-gray-400 italic mb-4">{solution.note}</p>
                )}
                
                {solution.extraFeatures && (
                  <ul className="space-y-2">
                    {solution.extraFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1">→</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              <div className="flex-1">
                <div className="relative h-80 w-full rounded-2xl overflow-hidden bg-gray-800">
                  {/* Image placeholder - adicionar imagens em /public/assets/images/ */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <span className="text-sm">Adicionar imagem: {solution.image}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
