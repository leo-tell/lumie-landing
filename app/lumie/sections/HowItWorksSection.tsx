export default function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Call',
      description: 'Type or speak your request: a thought, a task, a question.'
    },
    {
      number: '2',
      title: 'Awaken',
      description: 'The assistant answers the answer, shaping text or insight in seconds.'
    },
    {
      number: '3',
      title: 'Embrace',
      description: 'Take your work, refine it, use it, and make it your guide to success.'
    }
  ];

  return (
    <section className="py-32 px-20 bg-[#091630]">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <p className="text-blue-400 text-sm mb-2">↗ How It Works</p>
          <h2 className="text-4xl font-bold mb-2">
            One prompt to begin,
          </h2>
          <p className="text-3xl text-gray-400">three steps to clarity.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <div>
            <div className="relative h-96 w-full rounded-2xl overflow-hidden bg-gray-800 shadow-2xl">
              {/* Mockup placeholder - adicionar screenshot em /public/assets/images/how-it-works-mockup.jpg */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="bg-gray-700 rounded-lg p-6">
                    <p className="text-gray-400 text-sm mb-4">Interface mockup</p>
                    <div className="h-48 bg-gray-600 rounded flex items-center justify-center">
                      <span className="text-gray-500">Adicionar mockup da interface</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg border-2 border-white flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">{step.number}</span>
                  </div>
                  <span className="text-2xl">–</span>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
