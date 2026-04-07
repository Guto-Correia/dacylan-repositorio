// alocando os projetos na memoria
const projetos = {
  proj1: {
    title: 'Identidade Visual Completa',
    tag: 'Design',
    icon: '🎨',
    processo: 'O projeto começou com um briefing detalhado para entender os valores e o público da marca. Foram criados moodboards, paletas de cor e exploração tipográfica antes de chegar ao conceito final aprovado pelo cliente.',
    resultado: 'Manual de marca completo com logo, tipografia, paleta de cores, templates para redes sociais e diretrizes de uso. A identidade ficou coesa, moderna e com alta adaptabilidade.'
  },
  proj2: {
    title: 'Campanha de Lançamento em Vídeo',
    tag: 'Vídeo & Motion',
    icon: '🎬',
    processo: 'Planejamento do roteiro e storyboard em conjunto com o cliente. Escolha de trilha, identidade de cor, ritmo de corte e elementos de motion para criar uma sensação coerente em toda a série.',
    resultado: 'Série de 5 vídeos curtos para Instagram e TikTok com alta taxa de engajamento. Os reels geraram mais de 100k visualizações orgânicas nas primeiras 2 semanas.'
  },
  proj3: {
    title: 'Restauração & Manipulação Fotográfica',
    tag: 'Manipulação',
    icon: '🖼️',
    processo: 'Análise dos danos nas fotos originais: manchas, rasgos, perda de cor e nitidez. Processo de restauração feito em camadas no Photoshop com técnicas avançadas de clonagem e reconstrução.',
    resultado: 'Fotos com décadas de idade completamente restauradas e coloridas digitalmente, preservando a autenticidade e entregando uma memória visual para as famílias.'
  }
};

// abre o modal(poup up) e muda o conteudo de dentro
function openModal(id) {
  const p = projetos[id];
  document.getElementById('modal-content').innerHTML = `
    <div class="modal-thumb">${p.icon}</div>
    <div class="modal-tag">${p.tag}</div>
    <h2>${p.title}</h2>
    <div class="modal-section"><h4>Processo Criativo</h4><p>${p.processo}</p></div>
    <div class="modal-section"><h4>Resultado Final</h4><p>${p.resultado}</p></div>
  `;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// guarda a function 
function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}

// prepara a function
function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// código para integrar os projetos na pagina
const conteiner = document.querySelector("div#projetos");
const arquivos = [
  {
    tipo: "design",
    titulo: "Capa de Album",
    arquivo: "imgs/albumCapa.jpg"

  },
  {
    tipo: "design",
    titulo: "Banner da Sakura",
    arquivo: "imgs/bannerSakura.jpg"

  },
  {
    tipo: "design",
    titulo: "Logo Marca",
    arquivo: "imgs/logomotoboy-nome.jpg"

  },
  {
    tipo: "design",
    titulo: "Cartão da Marca",
    arquivo: "imgs/cartãomotoboy.jpg"

  },
  {
    tipo: "design",
    titulo: "Contato da Marca",
    arquivo: "imgs/fichamotoboy.jpg"

  },
  {
    tipo: "design",
    titulo: "Edição Premium",
    arquivo: "imgs/ctaCapa.jpg"

  },
  {
    tipo: "design",
    titulo: "Nota Fiscal",
    arquivo: "imgs/notaFiscal.jpg"

  },
  {
    tipo: "design",
    titulo: "Sasuke Edit",
    arquivo: "imgs/sasukeEdit.jpg"

  },
  {
    tipo: "design",
    titulo: "Thumbnail Sasuke",
    arquivo: "imgs/sasukeThumb.jpg"

  },
  {
    tipo: "design",
    titulo: "Capa Ambum(Street Boy)",
    arquivo: "imgs/streetboyCapa.jpg"

  },
  {
    tipo: "design",
    titulo: "Venom Capa",
    arquivo: "imgs/venomCapa.jpg"

  },
  {
    tipo: "video",
    thumb: "imgs/capa-video-gojo.jpg",
    titulo: "Edit Gojo",
    arquivo: "imgs/videoGojo.mp4"
  }
];
arquivos.forEach(projeto => {
  // colocar um if perguntando se o tipo do projeto é video ou não,ai muda a estrutura para cada
  conteiner.innerHTML +=
    `<div class="projeto ${projeto.tipo}" onclick="openProjeto()">
                <div class="pai-img">
                  <img class="filha-img" src="${projeto.arquivo}" alt="capa do projeto">
                </div>
                <span>${projeto.tipo}</span>
                <h4>${projeto.titulo}</h4>
             </div>`;
});

// filtragem dos itens(projetos)
function filtrar(tipo) {
  let btnFiltro = document.querySelector(".tabs");
  [...btnFiltro.children].forEach((tabzinha) => {
    if (tabzinha.classList.contains(tipo)) {
      tabzinha.classList.add("active");
    } else {
      tabzinha.classList.remove("active");
    }
  })


  let paiProjetos = document.querySelector("#projetos");
  [...paiProjetos.children].forEach((filho) => {
    if (filho.classList.contains(tipo) || tipo === "todos") {
      filho.classList.remove("hidden");
    } else {
      filho.classList.add("hidden");
    }
  });
}

// function para o poup up dos itens
// ESSA FUNCTION DA DANDO CONFLITO COM A DE ABRIR OS PROJETOS ESPECIAIS; TEM QUE ARRUMAS DEPOIS!!!! 
function openProjeto() {
  document.getElementById('modalOverlay').classList.add('open');

}