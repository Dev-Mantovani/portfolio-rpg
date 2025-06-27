import React, { useState, useEffect } from 'react';
import { ArrowLeft, Heart, Zap, Shield, Sword, Star, Trophy, Book, Briefcase } from 'lucide-react';
import './index.css'; // ou o nome do seu CSS principal
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faHtml5, faReact, faJsSquare, } from '@fortawesome/free-brands-svg-icons';
import { faGithub, faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [hp, setHp] = useState(85);
  const [mp, setMp] = useState(92);
  const [exp, setExp] = useState(78);

  // Animação das barras de status
  useEffect(() => {
    const interval = setInterval(() => {
      setHp(prev => prev === 85 ? 87 : 85);
      setMp(prev => prev === 92 ? 94 : 92);
      setExp(prev => prev === 78 ? 80 : 78);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: 'HTML', level: 90, icon: '🌐', category: 'Frontend' },
    { name: 'CSS', level: 85, icon: '🎨', category: 'Frontend' },
    { name: 'JavaScript', level: 88, icon: '⚡', category: 'Frontend' },
    { name: 'React', level: 82, icon: '⚛️', category: 'Frontend' },
    { name: 'TypeScript', level: 78, icon: '📘', category: 'Frontend' },
    { name: 'Python', level: 85, icon: '🐍', category: 'Backend' },
    { name: 'Node.js', level: 80, icon: '🟢', category: 'Backend' },
    { name: 'SQL', level: 88, icon: '🗄️', category: 'Database' },
    { name: 'Firebird', level: 85, icon: '🔥', category: 'Database' },
    { name: 'Oracle', level: 82, icon: '🏛️', category: 'Database' }
  ];

  const achievements = [
    { title: 'Analista de Sistemas', icon: '💼', completed: true },
    { title: 'Freelancer Front-end/Mobile', icon: '💻', completed: true },
    { title: 'Game Designer', icon: '⏳', completed: true },
    { title: 'Toledo - PR', icon: '🗺️', completed: true },

  ];

  const quests = [
    {
      title: '[QUEST] Sistema ERP Empresarial',
      difficulty: 'LEGENDARY',
      reward: '2500 EXP',
      status: 'COMPLETED',
      description: ' - Conhecimento avançado nos modulos do sistema.',
      extraDescription: ' - Experiência na implantação de empresas no sistema.',
      extraDescription2: '- Domínio da LSP (Linguagem Sênior de Programação).',
      extraDescription3: ' - SELECTS e UPDATES em Banco de dados ORACLE',
      extraDescription4: '- Análise e resolução de erros sistêmicos.'


    },
    {
      title: '[QUEST] Gesoper 4 Sup (Aplicação Operacional)',
      difficulty: 'EPIC',
      reward: '2200 EXP',
      status: 'COMPLETED',
      description5: ' - Conhecimento avançado nos modulos do sistema.',
      extraDescription6: ' - Experiência na implantação de empresas no sistema.',
      extraDescription7: '- Análise e resolução de erros sistêmicos.',
      extraDescription8: ' - Execução de comandos SQL (SELECT e UPDATE) em banco de dados.'

    },
    {
      title: '[QUEST] Gesoper 4 Ronda (Aplicação Operacional)',
      difficulty: 'EPIC',
      reward: '2200 EXP',
      status: 'COMPLETED',
      description: ' - Conhecimento avançado nos modulos do sistema.',
      extraDescription9: ' - Experiência na implantação de empresas no sistema.',
      extraDescription10: '- Análise e resolução de erros sistêmicos.',
      extraDescription11: ' - Execução de comandos SQL (SELECT e UPDATE) em banco de dados.'
    },
    {
      title: '[QUEST] CPJ (Software Jurídico)',
      difficulty: 'RARE',
      reward: '2000 EXP',
      status: 'IN PROGRESS',
      description12: ' - Gerenciamento de backups do sistema.',
      extraDescription13: ' - Criação e administração de usuários.',
      extraDescription14: '- Análise e resolução de erros sistêmicos.',
      extraDescription15: ' - Customização de relatórios por meio de consultas ao banco de dados.'
    }
  ];

  const PlayerCard = () => (
    <div className="bg-black border-4 border-gray-400 p-6 font-mono">
      <div className="text-center border-2 border-gray-600 p-4 mb-4">
        <h2 className="text-xl text-green-400 mb-2">═══ ANDRÉ MANTOVANI ═══</h2>
        <p className="text-yellow-300">Age 25 </p>
      </div>

      {/* Achievements */}
      <div className="mb-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-center mb-2 text-sm">
            <span className="text-red-500 mr-2">{achievement.icon}</span>
            <span className="text-gray-300">{achievement.title}</span>
          </div>
        ))}
      </div>

      {/* Status Bars */}
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-green-400">Saúde</span>
            <span className="text-white">{hp}/100</span>
          </div>
          <div className="w-full bg-gray-700 h-6 border-2 border-gray-500">
            <div
              className="bg-red-500 h-full transition-all duration-500"
              style={{ width: `${hp}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-blue-400">Code Exp.</span>
            <span className="text-white">{mp}/100</span>
          </div>
          <div className="w-full bg-gray-700 h-6 border-2 border-gray-500">
            <div
              className="bg-blue-600 h-full transition-all duration-500"
              style={{ width: `${mp}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-yellow-400">Horas de Sono</span>
            <span className="text-white">{exp}/100</span>
          </div>
          <div className="w-full bg-gray-700 h-6 border-2 border-gray-500">
            <div
              className="bg-green-600 h-full transition-all duration-500"
              style={{ width: `${exp}%` }}
            />
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="mt-6">
        <h3 className="text-yellow-300 mb-3 text-center">Skills Principais</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-orange-600 border-2 border-orange-400 p-2 text-center">
            <FontAwesomeIcon icon={faHtml5} size="2x" />
            <div className="text-xs text-white">HTML</div>
          </div>
          <div className="bg-blue-600 border-2 border-blue-400 p-2 text-center">
            <FontAwesomeIcon icon={faCss3Alt} size="2x" />
            <div className="text-xs text-white">CSS</div>
          </div>
          <div className="bg-yellow-600 border-2 border-yellow-400 p-2 text-center">
            <FontAwesomeIcon icon={faJsSquare} size="2x" />
            <div className="text-xs text-white">JS</div>
          </div>
          <div className="bg-cyan-600 border-2 border-cyan-400 p-2 text-center">
            <FontAwesomeIcon icon={faReact} size="2x" />
            <div className="text-xs text-white">React</div>
          </div>
        </div>
      </div>
    </div>
  );

  const PixelAvatar = () => (
   <div className="bg-black border-4 border-gray-400 p-6 flex flex-col items-center justify-between text-white h-[700px]">

  {/* Foto - Fica no topo */}
  <img
    src="/avatar.png"
    alt="Minha Foto"
    className="w-80 h-80 object-cover rounded-full border-4 border-gray-300"
  />
 <div className="flex justify-center mt-20 mb-6">
    <a
      href="/curriculo.pdf" // Substitua pelo caminho real do seu currículo
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
    >
      Baixe meu currículo (PDF)
    </a>
  </div>
  {/* Espaço vazio para empurrar redes sociais pra baixo */}
  <div className="flex-grow"></div>

  {/* Redes Sociais - Ficam sempre no final da div */}
  <div className="flex space-x-8 text-3xl mb-4">
    
    {/* GitHub */}
    <a
      href="https://github.com/Dev-Mantovani "
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gray-300 transition"
    >
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/andre-mantovani-99638920b/ "
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-400 transition"
    >
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/mantovani.dev/ "
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-pink-400 transition"
    >
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/45998362021 "
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-green-400 transition"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </a>
  </div>
</div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'skills':
        return (
          <div className="bg-black border-4 border-gray-400 p-6 font-mono">
            <div className="text-center mb-6">
              <h2 className="text-2xl text-yellow-400 mb-2">═══ SKILLS ═══</h2>
              <div className="text-green-400">▼ Aqui está algumas skills que eu utilizo ▼</div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {['Frontend', 'Backend', 'Database'].map(category => (
                <div key={category} className="bg-gray-900 border-2 border-gray-600 p-4">
                  <h3 className="text-center text-cyan-400 text-lg mb-4 border-b border-gray-600 pb-2">
                    {category.toUpperCase()}
                  </h3>
                  {skills.filter(skill => skill.category === category).map((skill, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <span className="mr-2">{skill.icon}</span>
                          <span className="text-white text-sm">{skill.name}</span>
                        </div>
                        <span className="text-yellow-400 text-sm">LV.{Math.floor(skill.level / 10)}</span>
                      </div>
                      <div className="w-full bg-gray-700 h-4 border border-gray-500">
                        <div
                          className="bg-gradient-to-r from-green-600 to-yellow-500 h-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <div className="text-right text-xs text-gray-400 mt-1">{skill.level}%</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="bg-black border-4 border-gray-400 p-6 font-mono">
            <div className="text-center mb-6">
              <h2 className="text-2xl text-yellow-400 mb-2">═══ QUESTS ═══</h2>
              <div className="text-green-400">▼ Missões Concluidas e em Desenvolvimento ▼</div>
            </div>

            <div className="space-y-4">
              {quests.map((quest, index) => (
                <div key={index} className={`border-2 p-4 ${quest.status === 'COMPLETED' ? 'bg-green-900 border-green-600' :
                  quest.status === 'IN PROGRESS' ? 'bg-yellow-900 border-yellow-600' : 'bg-gray-900 border-gray-600'
                  }`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-bold">{quest.title}</h3>
                    <div className="flex gap-2">
                      <span className={`px-2 py-1 text-xs border rounded ${quest.difficulty === 'LEGENDARY'
                        ? 'bg-purple-800 border-purple-600 text-purple-200'
                        : quest.difficulty === 'EPIC'
                          ? 'bg-orange-800 border-orange-600 text-orange-200'
                          : quest.difficulty === 'RARE'
                            ? 'bg-blue-500 border-blue-400 text-white'
                            : quest.difficulty === 'INCOMUM'
                              ? 'bg-green-800 border-green-600 text-green-200'
                              : quest.difficulty === 'COMUM'
                                ? 'bg-gray-800 border-gray-600 text-gray-200'
                                : 'bg-gray-700 border-gray-500 text-gray-300' // fallback para desconhecido
                        }`}
                      >
                        {quest.difficulty}
                      </span>
                      <span className={`px-2 py-1 text-xs border ${quest.status === 'COMPLETED' ? 'bg-green-800 border-green-600 text-green-200' :
                        'bg-yellow-800 border-yellow-600 text-yellow-200'
                        }`}>
                        {quest.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">{quest.description}</p>
                  <p className="text-gray-300 text-sm mb-2">{quest.extraDescription}</p>
                  <p className="text-gray-300 text-sm mb-2">{quest.extraDescription2}</p>
                  <p className="text-gray-300 text-sm mb-2">{quest.extraDescription3}</p>
                  <p className="text-gray-300 text-sm mb-2">{quest.extraDescription4}</p>
                  <p className="text-gray-300 text-sm mb-2">{quest.extraDescription5}</p>
                  <p className="text-gray-300 text-sm mb-2">{quest.extraDescription6}</p>
                  <p className="text-gray-300 text-sm mb-2">{quest.extraDescription7}</p>
                  <p className="text-gray-300 text-sm mb-2">{quest.extraDescription8}</p>
                  <p className="text-gray-300 text-sm mb-2">{quest.extraDescription9}</p>
                  <p className="text-gray-300 text-sm mb-2">{quest.extraDescription10}</p>
                  <p className="text-gray-300 text-sm mb-2">{quest.extraDescription11}</p>
                  <p className="text-gray-300 text-sm mb-2">{quest.extraDescription12}</p>
                  <p className="text-gray-300 text-sm mb-2">{quest.extraDescription13}</p>
                  <p className="text-gray-300 text-sm mb-2">{quest.extraDescription14}</p>
                  <p className="text-gray-300 text-sm mb-2">{quest.extraDescription15}</p>


                  <div className="text-right">
                    <span className="text-yellow-400 text-sm">Reward: {quest.reward}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="bg-black border-4 border-gray-400 p-6 font-mono">
            <div className="text-center mb-6">
              <h2 className="text-2xl text-yellow-400 mb-2">═══ CAREER HISTORY ═══</h2>
              <div className="text-green-400">▼ Experiências Profissionais ▼</div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 border-2 border-gray-600 p-4">
                <div className="flex items-center mb-3">
                  <Briefcase className="w-5 h-5 text-cyan-400 mr-2" />
                  <h3 className="text-cyan-400 text-lg">Analista de Desenvolvimento de Sistemas</h3>
                </div>
                <div className="text-yellow-300 mb-2">TerceirizeMais - Costa Oeste Serviços</div>
                <div className="text-gray-400 text-sm mb-3">05/2023 - Atual</div>

              </div>

              <div className="bg-gray-900 border-2 border-gray-600 p-4">
                <div className="flex items-center mb-3">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <h3 className="text-yellow-400 text-lg">Desenvolvedor Front-end Freelancer</h3>
                </div>
                <div className="text-yellow-300 mb-2">Autônomo</div>
                <div className="text-gray-400 text-sm mb-3">2023 - Atual</div>

              </div>

              <div className="bg-gray-900 border-2 border-gray-600 p-4">
                <div className="flex items-center mb-3">
                  <Shield className="w-5 h-5 text-blue-400 mr-2" />
                  <h3 className="text-blue-400 text-lg">Assistente de Informática</h3>
                </div>
                <div className="text-yellow-300 mb-2">TerceirizeMais - Costa Oeste Serviços</div>
                <div className="text-gray-400 text-sm mb-3">03/2019 - 05/2023</div>

              </div>
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="bg-black border-4 border-gray-400 p-6 font-mono">
            <div className="text-center mb-6">
              <h2 className="text-2xl text-yellow-400 mb-2">═══ KNOWLEDGE TREE ═══</h2>
              <div className="text-green-400">▼ Academic & Learning Path ▼</div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 border-2 border-gray-600 p-4">
                <div className="flex items-center mb-3">
                  <Book className="w-5 h-5 text-purple-400 mr-2" />
                  <h3 className="text-purple-400 text-lg">Análise e Desenvolvimento de Sistemas</h3>
                </div>
                <div className="text-yellow-300 mb-2">Universidade Norte do Paraná</div>
                <div className="text-green-400 text-sm mb-3">Status: CONCLUIDO</div>
                <div className="text-gray-300 text-sm">
                  Formação em desenvolvimento de software, análise de sistemas, banco de dados e metodologias ágeis.
                </div>
              </div>

              <div className="bg-gray-900 border-2 border-gray-600 p-4">
                <div className="flex items-center mb-3">
                  <Trophy className="w-5 h-5 text-orange-400 mr-2" />
                  <h3 className="text-orange-400 text-lg">Dev Club - Desenvolvedor Full Stack</h3>
                </div>
                <div className="text-green-400 text-sm mb-3">Status: EM ANDAMENTO</div>
                <div className="text-gray-300 text-sm">
                  Curso intensivo de desenvolvimento full stack com tecnologias modernas e práticas de mercado.
                </div>
              </div>
              <div className="bg-gray-900 border-2 border-gray-600 p-4">
                <div className="flex items-center mb-3">
                  <Trophy className="w-5 h-5 text-orange-400 mr-2" />
                  <h3 className="text-orange-400 text-lg">Escola SAGA - Game Designer</h3>
                </div>
                <div className="text-green-400 text-sm mb-3">Status: EM ANDAMENTO</div>
                <div className="text-gray-300 text-sm">
                  Curso intensivo de PhotoShop e Desenvolvimento de Games.
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="grid lg:grid-cols-2 gap-6">
            <PlayerCard />
            <PixelAvatar />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white" style={{
      backgroundImage: `
        radial-gradient(circle at 25% 25%, #1f2937 0%, transparent 25%),
        radial-gradient(circle at 75% 75%, #374151 0%, transparent 25%)
      `,
      backgroundColor: '#1f2937'
    }}>
      {/* Header */}
      <header className="bg-black border-b-4 border-gray-400 py-4">
        <div className="container mx-auto px-6">
          <div className="text-center font-mono ">
            <div className="text-2xl md:text-3xl text-green-500 mb-2 animate-pulse">
              ╔══════════════════════════════════════════╗
            </div>
            <h1 className="text-xl md:text-2xl text-yellow-400 font-bold mb-2 tracking-wider">
              Portfolio do Mantovani!!
            </h1>
            <div className="text-2xl md:text-3xl text-green-500 mb-2 animate-pulse">
              ╚══════════════════════════════════════════╝
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="bg-gray-900 border-b-4 border-gray-600 py-4 font-mono">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {currentPage !== 'home' && (
              <button
                onClick={() => setCurrentPage('home')}
                className="flex items-center px-4 py-2 bg-red-800 border-2 border-red-600 text-red-200 hover:bg-red-700 transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                [ESC] BACK
              </button>
            )}
            {[
              { key: 'home', label: '[1] HOME', icon: <Heart className="w-4 h-4" /> },
              { key: 'skills', label: '[2] SKILLS', icon: <Zap className="w-4 h-4" /> },
              { key: 'projects', label: '[3] QUESTS', icon: <Sword className="w-4 h-4" /> },
              { key: 'experience', label: '[4] CAREER', icon: <Shield className="w-4 h-4" /> },
              { key: 'education', label: '[5] STUDY', icon: <Book className="w-4 h-4" /> }
            ].map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => setCurrentPage(key)}
                className={`flex items-center px-4 py-2 border-2 transition-colors text-sm font-bold ${currentPage === key
                  ? 'bg-yellow-600 border-yellow-400 text-black'
                  : 'bg-gray-800 border-gray-500 text-gray-300 hover:bg-gray-700 hover:border-gray-400'
                  }`}
              >
                {icon}
                <span className="ml-2">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t-4 border-gray-400 py-4 font-mono">
        <div className="container mx-auto px-6 text-center">
          <div className="text-green-400 text-sm">
            ═══ © 2024 André Mantovani - Level 25 Developer ═══
          </div>
          
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
