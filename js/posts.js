/* ============================================================
MultimídiaLab — posts.js
VERSÃO SEGURA (não quebra o blog)
============================================================ */

const POSTS = [

{
id: 1,
num: '01',
cat: 'apresentacao',
catLabel: '👤 Apresentação',
catColor: '#00e5ff',
title: 'Quem Somos Nós',
excerpt: 'Um pouco mais sobre quem tá por trás desse blog.',
tags: ['Apresentação','Blog'],
date: 'Mar 2026',
readTime: '3 min',
body: ` <p>Fala! Se você caiu aqui, já vou mandar o papo: esse blog não é só um trabalho — é meio que nosso “diário” da disciplina.</p>

```
  <p>A gente começou sem saber muita coisa de multimídia na prática… e esse espaço virou onde a gente foi registrando tudo.</p>

  <h3>Quem somos</h3>
  <p><strong>João Carlos</strong> e <strong>Laura Conte</strong>, tentando sobreviver à faculdade e ainda aprender algo útil no processo 😅</p>

  <img src="../js/img/icon.png" style="width:40%; border-radius:10px; margin:15px 0;">

  <h3>O que você vai ver aqui</h3>
  <ul>
    <li>Explicações sem linguagem travada</li>
    <li>Experiências reais (inclusive erros)</li>
    <li>Conteúdo aplicado, não só teoria</li>
  </ul>

  <div class="info-box">
    <p>📌 Aqui é mais prática do que teoria bonita.</p>
  </div>
`
```

},

{
id: 2,
num: '02',
cat: 'midia',
catLabel: '📺 Multimídia',
catColor: '#ff6230',
title: 'Por que esse blog existe',
excerpt: 'Não é só um trabalho — tem motivo por trás.',
tags: ['Blog'],
date: 'Mar 2026',
readTime: '4 min',
body: ` <p>No começo, a ideia era só “fazer um blog pra entregar”. Mas conforme fomos montando, percebemos que isso aqui era literalmente aplicar multimídia na prática.</p>

```
  <p>Texto + imagem + vídeo + interação… tudo junto.</p>

  <h3>O objetivo real</h3>
  <ul>
    <li>Organizar o que a gente aprende</li>
    <li>Não esquecer depois da prova</li>
    <li>Ter algo útil pronto no final</li>
  </ul>

  <p>Ou seja: virou mais útil do que parecia no início.</p>
`
```

},

{
id: 3,
num: '03',
cat: 'midia',
catLabel: '📺 Multimídia',
catColor: '#ff6230',
title: 'O que é Multimídia de verdade',
excerpt: 'Explicando sem enrolação.',
tags: ['Multimídia'],
date: 'Mar 2026',
readTime: '6 min',
body: ` <p>Multimídia não é só “misturar coisas”. É fazer essas coisas funcionarem juntas.</p>

```
  <img src="../js/img/mult.png" style="width:50%; border-radius:10px; margin:15px 0;">

  <p>Texto explica, imagem mostra, áudio envolve e vídeo prende atenção.</p>

  <p>Quando tudo isso se conecta, a experiência muda completamente.</p>
`
```

},

{
id: 4,
num: '04',
cat: 'midia',
catLabel: '📺 Hipermídia',
catColor: '#ff6230',
title: 'Hipermídia na prática',
excerpt: 'A base da internet que a gente usa todo dia.',
tags: ['Hipermídia'],
date: 'Mar 2026',
readTime: '5 min',
body: ` <p>Sabe quando você vai clicando em links e vai pulando de conteúdo em conteúdo?</p>

```
  <p>Isso é hipermídia.</p>

  <p>Você não segue uma linha — você escolhe o caminho.</p>
`
```

},

{
id: 5,
num: '05',
cat: 'xr',
catLabel: '🥽 VR',
catColor: '#39d98a',
title: 'Realidade Virtual',
excerpt: 'Entrando dentro do digital.',
tags: ['VR'],
date: 'Abr 2025',
readTime: '6 min',
body: ` <p>VR é quando você literalmente entra no sistema.</p>

```
  <p>Não é só ver — é sentir que tá lá dentro.</p>
`
```

},

{
id: 6,
num: '06',
cat: 'xr',
catLabel: '🔮 AR',
catColor: '#ffd060',
title: 'Realidade Aumentada',
excerpt: 'Misturando real com digital.',
tags: ['AR'],
date: 'Abr 2025',
readTime: '6 min',
body: `       <p>Diferente da VR, aqui você continua no mundo real… mas com coisas digitais aparecendo nele.</p>
    `
},

{
id: 7,
num: '07',
cat: 'xr',
catLabel: '🔀 MR',
catColor: '#ff4d8d',
title: 'Realidade Mista',
excerpt: 'O próximo nível.',
tags: ['MR'],
date: 'Abr 2025',
readTime: '6 min',
body: `       <p>Aqui o digital não só aparece — ele interage com o real.</p>
    `
},

{
id: 8,
num: '08',
cat: 'xr',
catLabel: '🔮 Holografia',
catColor: '#39d98a',
title: 'Holografia',
excerpt: '3D de verdade.',
tags: ['Holograma'],
date: 'Abr 2025',
readTime: '6 min',
body: `       <p>Imagem que parece real no espaço.</p>
    `
},

{
id: 9,
num: '09',
cat: 'imagem',
catLabel: '🖼 Imagem',
catColor: '#00e5ff',
title: 'Formatos de imagem',
excerpt: 'PNG, JPEG…',
tags: ['Imagem'],
date: 'Mai 2025',
readTime: '6 min',
body: `<p>Cada formato tem um motivo pra existir.</p>`
},

{
id: 10,
num: '10',
cat: 'imagem',
catLabel: '🖼 Processamento',
catColor: '#00e5ff',
title: 'Processamento de imagem',
excerpt: 'Como imagem vira dado.',
tags: ['PDI'],
date: 'Mai 2025',
readTime: '6 min',
body: `<p>Manipular imagem = extrair informação.</p>`
},

{
id: 11,
num: '11',
cat: 'ia',
catLabel: '🤖 IA',
catColor: '#ff4d8d',
title: 'IA na multimídia',
excerpt: 'Criando conteúdo automaticamente.',
tags: ['IA'],
date: 'Mai 2025',
readTime: '6 min',
body: `<p>A IA já faz parte de tudo.</p>`
},

{
id: 12,
id: 12,
num: '12',
cat: 'game',
catLabel: '🎮 GDD',
catColor: '#ffd060',
title: 'Game Design',
excerpt: 'Planejamento de jogo.',
tags: ['GDD'],
date: 'Jun 2025',
readTime: '6 min',
body: `<p>Sem planejamento, não sai jogo.</p>`
},

{
id: 13,
num: '13',
cat: 'game',
catLabel: '🎮 Projeto',
catColor: '#ffd060',
title: 'Jogo desenvolvido',
excerpt: 'Experiência real.',
tags: ['Jogo'],
date: 'Jun 2025',
readTime: '6 min',
body: `<p>Aprendizado na prática.</p>`
},

{
id: 14,
num: '14',
cat: 'tech',
catLabel: '⚙️ IoT',
catColor: '#39d98a',
title: 'IoT',
excerpt: 'Tudo conectado.',
tags: ['IoT'],
date: 'Jun 2025',
readTime: '6 min',
body: `<p>O mundo ficando inteligente.</p>`
},

{
id: 15,
num: '15',
cat: 'tech',
catLabel: '⚙️ Automação',
catColor: '#39d98a',
title: 'Automação',
excerpt: 'Processos automáticos.',
tags: ['Automação'],
date: 'Jun 2025',
readTime: '6 min',
body: `<p>Máquinas fazendo por você.</p>`
},

{
id: 16,
num: '16',
cat: 'tech',
catLabel: '⚙️ Projeto',
catColor: '#39d98a',
title: 'Projeto final',
excerpt: 'Integração total.',
tags: ['Projeto'],
date: 'Jul 2025',
readTime: '5 min',
body: `<p>Aplicando tudo junto.</p>`
},

{
id: 17,
num: '17',
cat: 'apresentacao',
catLabel: '📋 Conclusão',
catColor: '#00e5ff',
title: 'Conclusão',
excerpt: 'Fechamento.',
tags: ['Conclusão'],
date: 'Jul 2025',
readTime: '4 min',
body: `<p>Aprendizado final.</p>`
}

];
