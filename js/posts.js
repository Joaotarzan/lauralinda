   /* ============================================================
   MultimídiaLab — posts.js
   Edite aqui o conteúdo de cada postagem!
   ============================================================ */
const POSTS = [
{
id: 1, num: '01',
cat: 'apresentacao', catLabel: '👤 Apresentação', catColor: '#00e5ff',
title: 'Quem Somos Nós',
excerpt: 'Conheça os autores e a ideia por trás do blog.',
tags: ['Apresentação','Blog','Disciplina'],
date: 'Mar 2026', readTime: '3 min',
body: `
<p>Fala aí 👋 seja muito bem-vindo ao <strong>MultimídiaLab</strong>.</p>

<p>Esse blog começou como um projeto da faculdade… mas a gente decidiu fazer diferente. Em vez de criar algo engessado só pra entregar nota, a ideia aqui é trocar uma ideia de verdade — explicar as coisas de um jeito que a gente mesmo gostaria de ler.</p>

<h3>Quem tá por trás disso?</h3>
<p>Somos dois estudantes que gostam bastante de tecnologia, criação e tudo que envolve o mundo digital.</p>

<p><strong>João Carlos:</strong> mais voltado pra parte técnica, gosta de código, resolver problema e entender como as coisas funcionam por trás.</p>
<p><strong>Laura Conte:</strong> traz o lado criativo, organização e aquele cuidado visual que faz tudo ficar mais agradável.</p>

<img src="../js/img/icon.png" style="width:40%; border-radius:10px; margin:15px 0;">

<h3>Sobre a disciplina</h3>
<p>A matéria de Multimídias fala sobre integrar diferentes tipos de conteúdo — texto, imagem, áudio, vídeo e interatividade. Mas, na prática, isso vai muito além da teoria… é basicamente o que a gente consome todo dia na internet.</p>

<h3>O que você vai encontrar aqui</h3>
<ul>
<li>Explicações diretas (sem linguagem travada)</li>
<li>Exemplos do mundo real</li>
<li>Conteúdo com vídeo, áudio e imagens</li>
<li>E algumas opiniões nossas no meio 😄</li>
</ul>

<div class="info-box"><p>📌 A ideia é ir atualizando esse blog conforme a gente evolui na matéria.</p></div>
`
},

{
id: 2, num: '02',
cat: 'midia', catLabel: '📺 Multimídia', catColor: '#ff6230',
title: 'Finalidade do Blog',
excerpt: 'Por que criar um blog? E por que isso faz tanto sentido.',
tags: ['Blog','Comunicação','Mídia Digital'],
date: 'Mar 2026', readTime: '4 min',
body: `
<p>Quando a gente ouviu “vocês vão criar um blog”, parecia só mais um trabalho comum. Mas conforme fomos desenvolvendo, ficou claro que isso aqui é praticamente a definição de multimídia na prática.</p>

<p>Um blog não é só texto. Ele mistura várias formas de comunicação: vídeo, áudio, imagens e links — tudo no mesmo lugar.</p>

<h3>Por que um blog?</h3>
<p>Porque ele permite exatamente isso: combinar conteúdos diferentes e ainda deixar o usuário navegar do jeito que quiser. Não tem uma ordem obrigatória, cada pessoa segue o próprio caminho.</p>

<h3>Objetivos do projeto</h3>
<ul>
<li>Registrar o aprendizado ao longo da disciplina</li>
<li>Praticar criação de conteúdo digital</li>
<li>Desenvolver comunicação</li>
<li>Criar um portfólio que realmente sirva pra algo</li>
</ul>

<p>No fim, isso aqui deixou de ser só um trabalho… virou um projeto que faz sentido manter até depois da faculdade.</p>
`
},

{
id: 3, num: '03',
cat: 'midia', catLabel: '📺 Multimídia',
catColor: '#ff6230',
title: 'Multimídia: Conceito e Aplicações',
excerpt: 'Multimídia não é só teoria — você usa isso todo dia.',
tags: ['Multimídia'],
date: 'Mar 2026', readTime: '6 min',
body: `
<p>Quando alguém fala “multimídia”, parece algo técnico… mas na real é algo muito simples: é a mistura de vários tipos de conteúdo no mesmo lugar.</p>

<p>E se você parar pra pensar, praticamente tudo que você consome hoje é multimídia.</p>

<img src="../js/img/mult.png" style="width:50%; border-radius:10px; margin:15px 0;">

<h3>Os principais elementos</h3>

<p><strong>Texto:</strong> ainda é a base de tudo. Mesmo com vídeo dominando, é o texto que organiza a informação.</p>

<p><strong>Imagem:</strong> chama atenção na hora. Muitas vezes explica mais rápido que qualquer parágrafo.</p>

<p><strong>Áudio:</strong> perfeito pra consumir conteúdo enquanto faz outras coisas — tipo podcast.</p>

<p><strong>Vídeo:</strong> junta tudo: imagem + som + movimento. É o formato mais completo hoje.</p>

<p><strong>Interatividade:</strong> aqui o usuário deixa de ser passivo e passa a participar.</p>

<p>No fim, multimídia não é só “juntar coisas”… é melhorar a experiência.</p>

<div class="info-box"><p>🚀 A internet inteira hoje funciona baseada em multimídia.</p></div>
`
},

{
id: 4, num: '04',
cat: 'midia', catLabel: '📺 Hipermídia',
catColor: '#ff6230',
title: 'Hipermídia: Além do Hipertexto',
excerpt: 'A forma como você navega na internet.',
tags: ['Hipermídia'],
date: 'Mar 2026', readTime: '5 min',
body: `
<p>Hipermídia é basicamente quando tudo está conectado. Não só textos, mas vídeos, imagens, links… tudo interligado.</p>

<p>Sabe quando você entra num site e vai clicando em várias coisas sem seguir uma ordem? Isso é hipermídia na prática.</p>

<h3>Por que isso é importante?</h3>
<p>Porque muda completamente a forma de consumir informação. Você não precisa seguir um caminho fixo — você escolhe o que quer ver.</p>

<ul>
<li>Sites</li>
<li>Blogs</li>
<li>Wikipedia</li>
<li>Redes sociais</li>
</ul>

<p>Tudo isso funciona com base nessa lógica.</p>

<div class="info-box">
<p>🔗 A internet como conhecemos hoje só existe por causa disso.</p>
</div>
`
},

{
id: 5, num: '05',
cat: 'xr', catLabel: '🥽 Realidade Virtual',
catColor: '#39d98a',
title: 'Realidade Virtual',
excerpt: 'Entrar dentro do digital já é possível.',
tags: ['VR'],
date: 'Abr 2025', readTime: '7 min',
body: `
<p>A Realidade Virtual (VR) é uma das tecnologias mais impressionantes que existem hoje.</p>

<p>Basicamente, ela te coloca dentro de um ambiente digital como se fosse real.</p>

<img src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Como isso funciona?</h3>
<p>Você usa um óculos especial que mostra imagens em 3D e acompanha seus movimentos.</p>

<p>Isso cria uma sensação de presença — como se você realmente estivesse naquele lugar.</p>

<h3>Onde é usada?</h3>
<ul>
<li>Jogos</li>
<li>Treinamentos</li>
<li>Simulações</li>
<li>Educação</li>
</ul>

<p>E isso ainda está evoluindo muito…</p>
`
}
];
{
id: 6, num: '06',
cat: 'xr', catLabel: '🔮 Realidade Aumentada', catColor: '#ffd060',
title: 'Realidade Aumentada: Hardware e Software',
excerpt: 'Misturando o digital com o mundo real — e você já usa isso sem perceber.',
tags: ['AR','ARKit','ARCore','WebAR'],
date: 'Abr 2025', readTime: '7 min',
body: `
<p>A <strong>Realidade Aumentada (AR)</strong> é aquela tecnologia que pega o mundo real e simplesmente adiciona coisas digitais por cima.</p>

<p>Diferente da realidade virtual (que te tira do mundo real), aqui você continua nele — só que com uma “camada extra” de informação.</p>

<img src="https://insidetecnologia.com/site/wp-content/uploads/2024/05/A-futuristic-scene-showcasing-augmented-reality-in-action.-The-image-depicts-a-user-interacting-with-virtual-3D-objects-overlaid-on-the-real-world-via.webp" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Onde você já viu isso?</h3>
<p>Provavelmente mais vezes do que imagina:</p>
<ul>
<li>Filtros do Instagram</li>
<li>Pokémon GO</li>
<li>Apps de decoração que mostram móveis na sua casa</li>
</ul>

<p>Ou seja, isso já faz parte do dia a dia.</p>

<h3>Hardware de AR</h3>
<p>Pra isso funcionar, o dispositivo precisa entender o ambiente ao redor.</p>

<ul>
<li><strong>Smartphones:</strong> são os mais comuns — usam câmera + sensores</li>
<li><strong>HoloLens 2:</strong> óculos mais avançados, usados em empresas</li>
<li><strong>Magic Leap:</strong> focado em aplicações profissionais</li>
</ul>

<h3>Software de AR</h3>
<p>A parte inteligente que faz tudo acontecer:</p>

<ul>
<li><strong>ARKit:</strong> Apple</li>
<li><strong>ARCore:</strong> Google</li>
<li><strong>WebAR:</strong> AR direto no navegador</li>
<li><strong>Spark AR:</strong> filtros de redes sociais</li>
</ul>

<p>No fim, a AR é uma das tecnologias mais acessíveis hoje — literalmente no seu bolso.</p>

<div class="info-box">
<p>🚀 AR já não é futuro — já é presente.</p>
</div>
`
},

{
id: 7, num: '07',
cat: 'xr', catLabel: '🔀 Realidade Mista', catColor: '#ff4d8d',
title: 'Realidade Mista: Hardware e Software',
excerpt: 'Quando o digital não só aparece — mas interage com o mundo real.',
tags: ['MR','Metaverso'],
date: 'Abr 2025', readTime: '6 min',
body: `
<p>A <strong>Realidade Mista (MR)</strong> é tipo o próximo nível da AR.</p>

<p>Aqui não é só jogar algo digital na tela… o objeto realmente “interage” com o ambiente.</p>

<p>Parece coisa de filme — mas já existe.</p>

<img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>O que muda em relação à AR?</h3>
<p>Na AR você vê algo digital. Na MR, esse algo entende o espaço e reage a ele.</p>

<p>Exemplo: um objeto virtual pode ficar “em cima” de uma mesa de verdade, respeitando posição e profundidade.</p>

<h3>Dispositivos</h3>
<ul>
<li><strong>HoloLens 2:</strong> referência em MR</li>
<li><strong>Apple Vision Pro:</strong> mistura VR + AR</li>
<li><strong>Magic Leap:</strong> aplicações profissionais</li>
</ul>

<h3>Na prática</h3>
<p>Empresas já usam isso pra treinamento e montagem de equipamentos.</p>

<p>Imagina montar algo vendo instruções flutuando na sua frente — é exatamente isso.</p>

<div class="info-box">
<p>🤯 Isso ainda vai crescer MUITO nos próximos anos.</p>
</div>
`
},

{
id: 8, num: '08',
cat: 'xr', catLabel: '🔮 Holografia', catColor: '#39d98a',
title: 'Holografia: Hardware e Software',
excerpt: 'Parece ficção científica, mas já está mais perto do que você imagina.',
tags: ['Holografia'],
date: 'Abr 2025', readTime: '7 min',
body: `
<p>A <strong>holografia</strong> é uma das coisas mais insanas da tecnologia.</p>

<p>Ela permite criar imagens em 3D que parecem estar “flutuando” no espaço.</p>

<img src="../js/img/aguaviva.jpeg" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Como funciona (sem complicar)</h3>
<p>Basicamente usa luz (laser) pra registrar um objeto em 3D e depois recriar ele visualmente.</p>

<p>O resultado é algo que você consegue ver de diferentes ângulos — como se fosse real.</p>

<h3>Aplicações</h3>
<ul>
<li>Medicina (visualização de órgãos)</li>
<li>Shows (artistas “revividos”)</li>
<li>Educação</li>
</ul>

<p>Ainda não é igual nos filmes… mas já está caminhando pra isso.</p>

<div class="info-box">
<p>🎬 Star Wars não tá tão longe assim 😅</p>
</div>
`
},

{
id: 9, num: '09',
cat: 'imagem', catLabel: '🖼 Imagem Digital', catColor: '#00e5ff',
title: 'Imagens e seus Formatos',
excerpt: 'Nem toda imagem é igual — e isso importa mais do que parece.',
tags: ['Imagem','PNG','JPEG','WebP','SVG'],
date: 'Mai 2025', readTime: '6 min',
body: `
<p>Pode parecer detalhe… mas escolher o formato de imagem certo faz MUITA diferença.</p>

<p>Qualidade, tamanho e desempenho dependem disso.</p>

<img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>Principais formatos</h3>

<p><strong>JPEG:</strong> leve e bom pra fotos, mas perde qualidade.</p>

<p><strong>PNG:</strong> alta qualidade e transparência, mas mais pesado.</p>

<p><strong>WebP:</strong> mais moderno, leve e eficiente (ótimo pra web).</p>

<p><strong>SVG:</strong> não perde qualidade nunca — perfeito pra ícones e logos.</p>

<h3>Na prática</h3>
<ul>
<li>Foto → JPEG/WebP</li>
<li>Logo → SVG/PNG</li>
<li>Web → WebP sempre que possível</li>
</ul>

<p>Escolher certo melhora até o carregamento do site.</p>
`
},

{
id: 10, num: '10',
cat: 'imagem', catLabel: '🖼 Processamento de Imagens', catColor: '#00e5ff',
title: 'Processamento de Imagens',
excerpt: 'Como o computador enxerga imagens.',
tags: ['PDI','OpenCV'],
date: 'Mai 2025', readTime: '7 min',
body: `
<p>Aqui entra uma parte mais técnica — mas muito interessante.</p>

<p>O <strong>processamento de imagens</strong> faz o computador “entender” imagens como dados.</p>

<img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c" style="width:100%; border-radius:10px; margin:15px 0;">

<h3>O que dá pra fazer com isso?</h3>
<ul>
<li>Reconhecimento facial</li>
<li>Detecção de objetos</li>
<li>Diagnóstico médico</li>
<li>Carros autônomos</li>
</ul>

<h3>Técnicas</h3>
<p>Filtros, detecção de bordas, segmentação… tudo isso ajuda a extrair informação da imagem.</p>

<h3>Ferramentas</h3>
<ul>
<li>OpenCV</li>
<li>Pillow</li>
<li>scikit-image</li>
</ul>

<p>Basicamente, isso transforma imagem em informação útil.</p>
`
},

{
id: 11, num: '11',
cat: 'ia', catLabel: '🤖 Inteligência Artificial',
catColor: '#ff4d8d',
title: 'Inteligência Artificial e Multimídia',
excerpt: 'A IA já está criando conteúdo — e isso muda tudo.',
tags: ['IA','Machine Learning'],
date: 'Mai 2025', readTime: '8 min',
body: `
<p>A <strong>Inteligência Artificial</strong> mudou completamente a forma como conteúdo é criado.</p>

<p>Hoje, você consegue gerar imagem, texto, áudio e até vídeo com poucos comandos.</p>

<h3>IA Generativa</h3>
<p>Ferramentas como ChatGPT, Midjourney e outras conseguem criar conteúdo do zero.</p>

<h3>Aplicações</h3>
<ul>
<li>Geração de imagens</li>
<li>Criação de música</li>
<li>Voz artificial</li>
<li>Edição automática</li>
</ul>

<p>Isso abre muitas possibilidades… mas também levanta várias discussões.</p>

<div class="info-box">
<p>⚠️ A tecnologia evoluiu mais rápido do que a gente imaginava.</p>
</div>
`
}
{
id: 12, num: '12',
cat: 'game', catLabel: '🎮 Game Design', catColor: '#ffd060',
title: 'Game Design Document (GDD)',
excerpt: 'O documento que transforma uma ideia em um jogo de verdade.',
tags: ['Game Design','GDD','Jogos'],
date: 'Jun 2025', readTime: '7 min',
body: `
<p>Se você já pensou em criar um jogo, tem uma coisa que faz TODA a diferença: o tal do <strong>GDD (Game Design Document)</strong>.</p>

<p>Basicamente, ele é o “manual” do jogo — onde você coloca todas as ideias organizadas antes (ou durante) o desenvolvimento.</p>

<h3>Por que isso é importante?</h3>
<p>Porque sem organização, projeto de jogo vira caos muito rápido. O GDD ajuda a manter tudo alinhado.</p>

<h3>O que geralmente tem em um GDD</h3>

<h4>1. Visão geral</h4>
<ul>
<li>Título do jogo</li>
<li>Gênero</li>
<li>Plataforma</li>
<li>Resumo da ideia</li>
</ul>

<h4>2. Mecânicas</h4>
<ul>
<li>Como o jogador interage</li>
<li>Objetivos</li>
<li>Regras</li>
</ul>

<h4>3. Arte e áudio</h4>
<ul>
<li>Estilo visual</li>
<li>Trilha sonora</li>
<li>Efeitos</li>
</ul>

<p>Não precisa ser perfeito — precisa ser útil.</p>

<div class="info-box">
<p>🎮 Sem GDD, a chance de se perder no projeto é gigante.</p>
</div>
`
},

{
id: 13, num: '13',
cat: 'game', catLabel: '🎮 Jogo Desenvolvido', catColor: '#ffd060',
title: 'Jogo Desenvolvido: Projeto da Disciplina',
excerpt: 'Na prática: criando um jogo do zero.',
tags: ['Jogo','Projeto','Unity'],
date: 'Jun 2025', readTime: '6 min',
body: `
<p>Aqui foi onde a teoria virou prática de verdade.</p>

<p>Como parte da disciplina, a gente desenvolveu um jogo aplicando tudo que vimos — principalmente o uso do GDD.</p>

<h3>Sobre o jogo</h3>
<ul>
<li><strong>Título:</strong> [colocar]</li>
<li><strong>Gênero:</strong> [colocar]</li>
<li><strong>Engine:</strong> [Unity, etc]</li>
<li><strong>Plataforma:</strong> [PC/Web]</li>
</ul>

<h3>Mecânicas</h3>
<p>A ideia foi criar algo simples, mas funcional — com movimentação, interação e objetivo claro.</p>

<h3>Desenvolvimento</h3>
<p>Durante o processo, a gente enfrentou vários desafios: bugs, lógica, organização… aquele caos padrão de desenvolvimento 😅</p>

<p>Mas justamente isso que fez aprender de verdade.</p>

<h3>Aprendizado</h3>
<ul>
<li>Planejar antes ajuda MUITO</li>
<li>Testar sempre é essencial</li>
<li>Errar faz parte do processo</li>
</ul>

<div class="info-box">
<p>🚀 Fazer na prática ensina muito mais do que só estudar.</p>
</div>
`
},

{
id: 14, num: '14',
cat: 'tech', catLabel: '⚙️ IoT', catColor: '#39d98a',
title: 'Internet das Coisas (IoT)',
excerpt: 'Tudo conectado — literalmente.',
tags: ['IoT','Arduino','MQTT'],
date: 'Jun 2025', readTime: '7 min',
body: `
<p>A <strong>Internet das Coisas (IoT)</strong> é basicamente quando objetos físicos passam a se conectar à internet.</p>

<p>E não estamos falando só de computador ou celular — mas de geladeira, lâmpada, carro… tudo.</p>

<h3>Como funciona?</h3>

<h4>Dispositivos</h4>
<ul>
<li>Sensores</li>
<li>Microcontroladores (Arduino, ESP32)</li>
<li>Raspberry Pi</li>
</ul>

<h4>Conexão</h4>
<ul>
<li>Wi-Fi</li>
<li>Bluetooth</li>
<li>LoRa</li>
</ul>

<h4>Plataforma</h4>
<ul>
<li>Cloud</li>
<li>Dashboards</li>
<li>Protocolos como MQTT</li>
</ul>

<h3>Exemplos</h3>
<ul>
<li>Casa inteligente</li>
<li>Agricultura automatizada</li>
<li>Indústria 4.0</li>
</ul>

<p>O mundo está ficando cada vez mais conectado — e isso ainda vai crescer muito.</p>
`
},

{
id: 15, num: '15',
cat: 'tech', catLabel: '⚙️ Automação',
catColor: '#39d98a',
title: 'Automação: Conceitos e Aplicações',
excerpt: 'Deixar a máquina fazer o trabalho pesado.',
tags: ['Automação','Python','RPA'],
date: 'Jun 2025', readTime: '6 min',
body: `
<p>Automação é simplesmente usar tecnologia pra fazer tarefas automaticamente.</p>

<p>Desde coisas simples até processos gigantes.</p>

<h3>Tipos</h3>

<h4>Industrial</h4>
<ul>
<li>Robôs</li>
<li>CLPs</li>
</ul>

<h4>TI</h4>
<ul>
<li>Scripts</li>
<li>RPA</li>
<li>Deploy automático</li>
</ul>

<p>Se dá pra automatizar… provavelmente alguém já automatizou 😅</p>

<div class="info-box">
<p>⚡ Automatizar economiza tempo e reduz erro.</p>
</div>
`
},

{
id: 16, num: '16',
cat: 'tech', catLabel: '⚙️ Projeto Desenvolvido',
catColor: '#39d98a',
title: 'Projeto Desenvolvido: Sistema Multimídia',
excerpt: 'Aplicando tudo na prática.',
tags: ['Projeto'],
date: 'Jul 2025', readTime: '5 min',
body: `
<p>Esse foi o projeto final — onde juntamos vários conceitos da disciplina.</p>

<h3>Sobre o projeto</h3>
<p>[Descrever o projeto aqui]</p>

<h3>Tecnologias</h3>
<ul>
<li>[colocar]</li>
</ul>

<h3>Funcionalidades</h3>
<ul>
<li>[colocar]</li>
</ul>

<p>Foi onde deu pra ver tudo funcionando junto.</p>

<h3>Aprendizado</h3>
<p>Integrar várias coisas é bem mais difícil do que parece… mas também é o que mais ensina.</p>
`
},

{
id: 17, num: '17',
cat: 'apresentacao', catLabel: '📋 Conclusão',
catColor: '#00e5ff',
title: 'Reflexões Finais: O que Aprendemos',
excerpt: 'Fechando o ciclo com uma visão geral.',
tags: ['Conclusão'],
date: 'Jul 2025', readTime: '4 min',
body: `
<p>Depois de passar por todos esses temas, dá pra perceber uma coisa:</p>

<p>Multimídia não é só teoria… é a base de praticamente tudo que a gente usa hoje no digital.</p>

<h3>O que vimos</h3>
<ul>
<li>Multimídia e hipermídia</li>
<li>VR, AR e MR</li>
<li>Holografia</li>
<li>Imagem e processamento</li>
<li>IA</li>
<li>Jogos</li>
<li>IoT e automação</li>
</ul>

<h3>O principal aprendizado</h3>
<p>No final, tudo isso se conecta.</p>

<p>A tecnologia não funciona isolada — ela se mistura pra criar experiências melhores.</p>

<p>E esse blog acabou sendo mais do que um trabalho… virou uma forma de aprender na prática.</p>

<div class="info-box">
<p>🙏 Valeu por acompanhar até aqui!</p>
</div>
`
}
];
