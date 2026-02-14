'use client';
import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "What is this AI platform designed for?",
      answer: "Esta plataforma foi projetada para ajudar instituições educacionais a implementar práticas inclusivas para neurodiversidade."
    },
    {
      question: "Do I need technical knowledge to use it?",
      answer: "Não, a plataforma foi desenvolvida para ser intuitiva e acessível para educadores sem conhecimento técnico específico."
    },
    {
      question: "Which AI models power the tool?",
      answer: "Utilizamos uma combinação de modelos de IA especializados em análise educacional e desenvolvimento pedagógico."
    },
    {
      question: "Is there a free plan available?",
      answer: "Sim, oferecemos planos gratuitos para instituições de ensino público e planos acessíveis para escolas privadas."
    },
    {
      question: "Can I use this for business purposes?",
      answer: "A plataforma é focada em educação, mas também pode ser adaptada para programas de inclusão corporativa."
    },
    {
      question: "How can I get support if I have issues?",
      answer: "Nossa equipe oferece suporte através de email, chat ao vivo e sessões de treinamento presenciais."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 px-20 bg-[#091630]" id="duvidas">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-4">
          <p className="text-blue-400 text-sm mb-2">↗ FAQ</p>
          <h2 className="text-4xl font-bold mb-2">Your questions,</h2>
          <p className="text-2xl text-gray-400">answered with clarity</p>
        </div>
        
        <div className="mt-16 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 bg-gray-900 hover:bg-gray-800 rounded-xl transition-colors flex items-center justify-between group"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <span className={`text-2xl transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                
                {openIndex === index && (
                  <div className="mt-2 p-6 bg-gray-800 rounded-xl">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
