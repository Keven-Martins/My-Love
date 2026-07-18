const areaCoracoes = document.getElementById("coracoes");
const botaoPromessa = document.getElementById("botaoPromessa");
const mensagemFinal = document.getElementById("mensagemFinal");

function criarCoracao(explosao = false) {
  if (!areaCoracoes) return;

  const coracao = document.createElement("span");
  const formatos = ["❤", "♥", "♡"];
  const cores = ["#d86a8d", "#5b214e", "#ef9eb8"];

  coracao.className = "coracao";
  coracao.textContent = formatos[Math.floor(Math.random() * formatos.length)];
  coracao.style.left = `${Math.random() * 100}vw`;
  coracao.style.fontSize = `${Math.random() * 18 + 15}px`;
  coracao.style.color = cores[Math.floor(Math.random() * cores.length)];
  coracao.style.animationDuration = `${Math.random() * 4 + (explosao ? 3 : 6)}s`;

  areaCoracoes.appendChild(coracao);
  setTimeout(() => coracao.remove(), 10000);
}

if (areaCoracoes) {
  setInterval(() => criarCoracao(false), 850);
}

if (botaoPromessa && mensagemFinal) {
  botaoPromessa.addEventListener("click", () => {
    mensagemFinal.style.display = "block";
    botaoPromessa.textContent = "Promessa aberta ❤️";
    botaoPromessa.disabled = true;

    for (let i = 0; i < 28; i += 1) {
      setTimeout(() => criarCoracao(true), i * 55);
    }
  });
}

/* =========================================================
   BUQUÊ INTERATIVO — 8 ROSAS
   ========================================================= */

const motivosBuque = [
  {
    titulo: "Seu sorriso",
    texto: "Eu amo o seu sorriso porque ele deixa tudo mais leve e consegue melhorar até os meus dias mais difíceis."
  },
  {
    titulo: "Seu jeitinho",
    texto: "Eu amo o seu jeitinho único, as suas manias, a sua delicadeza e a forma como você deixa tudo mais bonito."
  },
  {
    titulo: "Seu coração",
    texto: "Eu amo o coração lindo que você tem e a forma sincera como cuida das pessoas que ama."
  },
  {
    titulo: "Sua companhia",
    texto: "Eu amo estar com você, porque até os momentos mais simples ficam especiais quando são ao seu lado."
  },
  {
    titulo: "Sua fé",
    texto: "Eu amo ver o quanto você busca a Deus e como isso torna o seu coração ainda mais bonito e especial."
  },
  {
    titulo: "Seu cuidado",
    texto: "Eu amo o carinho e o cuidado que existem em cada detalhe seu, porque isso me faz sentir amado e em paz."
  },
  {
    titulo: "Nossa conexão",
    texto: "Eu amo a forma como a gente se entende, se aproxima e constrói algo tão bonito juntos."
  },
  {
    titulo: "Porque é você",
    texto: "Eu amo você simplesmente porque é você. Entre tantas pessoas no mundo, foi o seu coração que o meu escolheu."
  }
];

const posicoesRosas = [
  { x: 48, y: 17, t: 78, r: -4 },
  { x: 28, y: 24, t: 73, r: -14 },
  { x: 68, y: 24, t: 73, r: 11 },
  { x: 17, y: 39, t: 68, r: -20 },
  { x: 48, y: 36, t: 81, r: 3 },
  { x: 79, y: 39, t: 68, r: 18 },
  { x: 31, y: 54, t: 74, r: -8 },
  { x: 64, y: 55, t: 75, r: 10 }
];

const posicoesAstromelias = [
  { x: 47, y: 25, r: -4 },
  { x: 38, y: 40, r: 10 },
  { x: 60, y: 41, r: -10 },
  { x: 27, y: 52, r: -8 },
  { x: 71, y: 52, r: 8 }
];

const posicoesMosquitinhos = [
  { x: 22, y: 18, r: -18 },
  { x: 76, y: 18, r: 20 },
  { x: 12, y: 36, r: -10 },
  { x: 88, y: 37, r: 13 },
  { x: 35, y: 13, r: -6 },
  { x: 61, y: 13, r: 8 },
  { x: 22, y: 60, r: -12 },
  { x: 77, y: 60, r: 14 },
  { x: 50, y: 60, r: 0 }
];

const caixaPresente = document.getElementById("caixaPresente");
const caixaArea = document.getElementById("caixaArea");
const buqueArea = document.getElementById("buqueArea");
const rosasContainer = document.getElementById("rosas");
const astromeliasContainer = document.getElementById("astromelias");
const mosquitinhosContainer = document.getElementById("mosquitinhos");
const contadorRosas = document.getElementById("contadorRosas");
const chuvaRosas = document.getElementById("chuvaRosas");
const mensagemFinalBuque = document.getElementById("mensagemFinalBuque");

const modalMotivo = document.getElementById("modalMotivo");
const modalNumero = document.getElementById("modalNumero");
const modalTitulo = document.getElementById("modalTitulo");
const modalTexto = document.getElementById("modalTexto");
const fecharModal = document.getElementById("fecharModal");
const continuarRosas = document.getElementById("continuarRosas");

const rosasDescobertas = new Set();

function montarAstromelias() {
  if (!astromeliasContainer || astromeliasContainer.dataset.montado === "true") return;
  posicoesAstromelias.forEach((posicao) => {
    const flor = document.createElement("span");
    flor.className = "astromelia";
    flor.style.left = `${posicao.x}%`;
    flor.style.top = `${posicao.y}%`;
    flor.style.setProperty("--r", `${posicao.r}deg`);
    flor.innerHTML = "<span></span><span></span><span></span><span></span><span></span>";
    astromeliasContainer.appendChild(flor);
  });
  astromeliasContainer.dataset.montado = "true";
}

function montarMosquitinhos() {
  if (!mosquitinhosContainer || mosquitinhosContainer.dataset.montado === "true") return;
  posicoesMosquitinhos.forEach((posicao) => {
    const ramo = document.createElement("span");
    ramo.className = "raminho";
    ramo.style.left = `${posicao.x}%`;
    ramo.style.top = `${posicao.y}%`;
    ramo.style.setProperty("--r", `${posicao.r}deg`);
    ramo.innerHTML = "<span></span>";
    mosquitinhosContainer.appendChild(ramo);
  });
  mosquitinhosContainer.dataset.montado = "true";
}

function montarRosas() {
  if (!rosasContainer || rosasContainer.dataset.montado === "true") return;
  motivosBuque.forEach((motivo, indice) => {
    const posicao = posicoesRosas[indice];
    const rosa = document.createElement("button");
    rosa.className = "rosa-interativa";
    rosa.type = "button";
    rosa.setAttribute("aria-label", `Abrir motivo ${indice + 1}: ${motivo.titulo}`);
    rosa.style.left = `${posicao.x}%`;
    rosa.style.top = `${posicao.y}%`;
    rosa.style.setProperty("--t", `${posicao.t}px`);
    rosa.style.setProperty("--r", `${posicao.r}deg`);
    rosa.innerHTML = `
      <span class="petala p1"></span>
      <span class="petala p2"></span>
      <span class="petala p3"></span>
      <span class="petala p4"></span>
      <span class="petala p5"></span>
      <span class="miolo"></span>
    `;
    rosa.addEventListener("click", () => abrirMotivo(indice, rosa));
    rosasContainer.appendChild(rosa);
  });
  rosasContainer.dataset.montado = "true";
}

function criarChuvaDeRosas() {
  if (!chuvaRosas) return;
  const quantidade = window.innerWidth <= 520 ? 20 : 28;
  for (let i = 0; i < quantidade; i += 1) {
    setTimeout(() => {
      const rosa = document.createElement("span");
      rosa.className = "rosa-caindo";
      rosa.textContent = i % 4 === 0 ? "🤍" : "🌹";
      rosa.style.left = `${Math.random() * 100}vw`;
      rosa.style.fontSize = `${Math.random() * 16 + 18}px`;
      rosa.style.animationDuration = `${Math.random() * 2.8 + 3.6}s`;
      chuvaRosas.appendChild(rosa);
      setTimeout(() => rosa.remove(), 7000);
    }, i * 75);
  }
}



const chuvaAneis = document.getElementById("chuvaAneis");

function criarChuvaDeAneis() {
  if (!chuvaAneis) return;

  const quantidade = window.innerWidth <= 520 ? 12 : 18;
  for (let i = 0; i < quantidade; i += 1) {
    setTimeout(() => {
      const anel = document.createElement("span");
      anel.className = "anel-caindo";
      anel.textContent = "💍";
      anel.style.left = `${Math.random() * 92 + 2}vw`;
      anel.style.fontSize = `${Math.random() * 10 + 18}px`;
      anel.style.animationDuration = `${Math.random() * 1.8 + 3.4}s`;
      chuvaAneis.appendChild(anel);
      setTimeout(() => anel.remove(), 6500);
    }, i * 110);
  }
}

function abrirCaixa() {
  if (!caixaPresente || !caixaArea || !buqueArea) return;
  caixaPresente.disabled = true;
  caixaPresente.classList.add("abrindo");
  criarChuvaDeRosas();
  setTimeout(() => {
    caixaArea.classList.add("escondida");
    buqueArea.classList.add("visivel");
    buqueArea.setAttribute("aria-hidden", "false");
  }, 900);
}

function abrirMotivo(indice, rosa) {
  if (!modalMotivo) return;
  const motivo = motivosBuque[indice];
  modalNumero.textContent = `Rosa ${indice + 1} de ${motivosBuque.length}`;
  modalTitulo.textContent = motivo.titulo;
  modalTexto.textContent = motivo.texto;
  modalMotivo.classList.add("aberto");
  modalMotivo.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  rosasDescobertas.add(indice);
  rosa.classList.add("descoberta");
  atualizarContador();
}

function fecharMensagemRosa() {
  if (!modalMotivo) return;
  modalMotivo.classList.remove("aberto");
  modalMotivo.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function atualizarContador() {
  if (contadorRosas) {
    contadorRosas.textContent = String(rosasDescobertas.size);
  }
  if (
    rosasDescobertas.size === motivosBuque.length &&
    mensagemFinalBuque &&
    !mensagemFinalBuque.classList.contains("visivel")
  ) {
    mensagemFinalBuque.classList.add("visivel");
    setTimeout(() => {
      criarChuvaDeRosas();
      mensagemFinalBuque.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 400);
  }
}

if (rosasContainer) {
  montarAstromelias();
  montarMosquitinhos();
  montarRosas();
}

if (caixaPresente) {
  caixaPresente.addEventListener("click", abrirCaixa);
}

if (fecharModal) {
  fecharModal.addEventListener("click", fecharMensagemRosa);
}

if (continuarRosas) {
  continuarRosas.addEventListener("click", fecharMensagemRosa);
}

if (modalMotivo) {
  modalMotivo.addEventListener("click", (evento) => {
    if (evento.target === modalMotivo) {
      fecharMensagemRosa();
    }
  });
}

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape") {
    fecharMensagemRosa();
  }
});

/* =========================================================
   INTERAÇÃO DOS CARTÕES DA NOSSA HISTÓRIA
   ========================================================= */

const cartoesHistoria = document.querySelectorAll(".cartao-historia-interativo");

cartoesHistoria.forEach((cartao) => {
  const botao = cartao.querySelector(".cabecalho-cartao-historia");
  if (!botao) return;

  botao.addEventListener("click", () => {
    const estavaAberto = cartao.classList.contains("aberto");

    cartoesHistoria.forEach((outroCartao) => {
      outroCartao.classList.remove("aberto");
      const outroBotao = outroCartao.querySelector(".cabecalho-cartao-historia");
      if (outroBotao) outroBotao.setAttribute("aria-expanded", "false");
    });

    if (!estavaAberto) {
      cartao.classList.add("aberto");
      botao.setAttribute("aria-expanded", "true");

      if (typeof criarCoracao === "function") {
        for (let indice = 0; indice < 7; indice += 1) {
          setTimeout(() => criarCoracao(true), indice * 65);
        }
      }

      if (window.innerWidth <= 820) {
        setTimeout(() => {
          cartao.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 260);
      }
    }
  });
});

/* =========================================================
   PÁGINA DOS 3 PRESENTES
   ========================================================= */

const botoesPresentes = document.querySelectorAll(".presente-card");
const paineisPresentes = document.querySelectorAll(".painel-presente");
const avisoPresente = document.getElementById("avisoPresente");

function reiniciarAnimacaoPainel(painel, classe) {
  painel.classList.remove(classe);
  void painel.offsetWidth;
  painel.classList.add(classe);
}

function abrirPainelPresente(nome) {
  if (!paineisPresentes.length) return;

  botoesPresentes.forEach((botao) => {
    botao.classList.toggle("ativo", botao.dataset.presente === nome);
  });

  paineisPresentes.forEach((painel) => {
    const ativo = painel.id === `painel-${nome}`;
    painel.hidden = !ativo;
    painel.classList.remove("animar-stitch", "animar-buque", "animar-alianca");

    if (ativo) {
      if (avisoPresente) avisoPresente.style.display = "none";

      requestAnimationFrame(() => {
        painel.scrollIntoView({ behavior: "smooth", block: "start" });

        if (nome === "stitch") {
          reiniciarAnimacaoPainel(painel, "animar-stitch");
          for (let i = 0; i < 8; i += 1) {
            setTimeout(() => criarCoracao(true), i * 70);
          }
        }

        if (nome === "buque") {
          reiniciarAnimacaoPainel(painel, "animar-buque");
          criarChuvaDeRosas();
        }

        if (nome === "alianca") {
          reiniciarAnimacaoPainel(painel, "animar-alianca");
          criarChuvaDeAneis();
          for (let i = 0; i < 8; i += 1) {
            setTimeout(() => criarCoracao(true), i * 80);
          }
        }
      });
    }
  });
}

botoesPresentes.forEach((botao) => {
  botao.addEventListener("click", () => {
    abrirPainelPresente(botao.dataset.presente);
  });
});

/* =========================================================
   ANIMAÇÃO DOS ELEMENTOS CONFORME A PÁGINA É ROLADA
   ========================================================= */

function prepararAnimacoesDeRolagem() {
  const seletoresAnimados = [
    ".cabecalho-historia .mini-titulo",
    ".cabecalho-historia h1",
    ".cabecalho-historia > p",
    ".cabecalho-historia > .botao",
    ".titulo-secao > span",
    ".titulo-secao > h2",
    ".instrucao-historia",
    ".cartao-historia-interativo",
    ".versiculo",
    ".caixa-mensagem-biblica",
    ".carta",
    ".presente-chamada",
    ".presente-topo .mini-titulo",
    ".presente-topo h1",
    ".presente-topo p",
    ".presente-card",
    ".aviso-presente",
    "footer"
  ];

  const elementos = document.querySelectorAll(seletoresAnimados.join(","));
  if (!elementos.length) return;

  const cartoes = Array.from(document.querySelectorAll(".cartao-historia-interativo"));

  elementos.forEach((elemento, indice) => {
    elemento.classList.add("animar-rolagem");

    if (elemento.classList.contains("cartao-historia-interativo")) {
      const posicao = cartoes.indexOf(elemento);
      if (posicao === 0) elemento.classList.add("animar-esquerda");
      else if (posicao === 1) elemento.classList.add("animar-escala");
      else elemento.classList.add("animar-direita");
    }

    if (
      elemento.classList.contains("versiculo") ||
      elemento.classList.contains("caixa-mensagem-biblica") ||
      elemento.classList.contains("carta") ||
      elemento.classList.contains("presente-chamada") ||
      elemento.classList.contains("presente-card")
    ) {
      elemento.classList.add("animar-escala");
    }

    const atraso = Math.min((indice % 5) * 90, 360);
    elemento.style.setProperty("--atraso-animacao", `${atraso}ms`);
  });

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add("animacao-visivel");
        observador.unobserve(entrada.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -45px 0px" }
  );

  elementos.forEach((elemento) => observador.observe(elemento));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", prepararAnimacoesDeRolagem);
} else {
  prepararAnimacoesDeRolagem();
}
