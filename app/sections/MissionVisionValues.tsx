import Image from 'next/image';

export default function MissionVisionValues() {
  const cards = [
    {
      title: 'Missão',
      color: 'bg-[#EF5A5A]',
      iconImage: '/assets/icons/mission-icon.png',
      content: 'Promover inclusão real e sustentável na comunidade, através de investigação científica, capacitação nas escolas e na comunidade, através da avaliação especializada, capacitação de profissionais, fornecimento de suporte familiar — criando crianças, jovens e adultos neurodivergentes para transformar vidas.'
    },
    {
      title: 'Visão',
      color: 'bg-[#2ECC71]',
      iconImage: '/assets/icons/vision-icon.png',
      content: 'Ser a principal instituição de referência em inclusão neurodivergente no Sul do Brasil, reconhecida pela prática de capacitação e formação profissional — conectando Pesquisa à Prática como uma ciência, transformando comunidade e eficiência operacional.'
    },
    {
      title: 'Valores',
      color: 'bg-[#F4C430]',
      iconImage: '/assets/icons/values-icon.png',
      content: 'Trabalhar com ciência, disciplina e humanização para oferecer neurodiversidade não baseada em dados, transferência e impacto mensuráveis — sem utopia que não se concretiza e sem colaborar com percepções para garantir sustentabilidade e desenvolvimento a cada pessoa atendida.'
    }
  ];

  return (
    <section className="py-32 px-20" id="sobre">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.color} rounded-3xl p-8 text-black shadow-lg hover:scale-105 transition-transform`}
            >
              <div className="mb-6 flex justify-center">
                {/* Ícone como imagem - adicionar em /public/assets/icons/ */}
                <div className="w-20 h-20 relative">
                  <Image
                    src={card.iconImage}
                    alt={`${card.title} icon`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-center">{card.title}</h3>
              
              <p className="text-sm leading-relaxed">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
