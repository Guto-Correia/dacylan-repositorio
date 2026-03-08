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

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}

function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function filterTab(el, cat) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.card-trabalho').forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}