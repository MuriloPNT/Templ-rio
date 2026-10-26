// Seleção dos elementos do DOM
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao prestar seus votos solenes de pobreza, castidade e obediência na Ordem do Templo, qual deve ser o verdadeiro norte de um cavaleiro?",
        alternativas: [
            {
                texto: "Defender a honra da Ordem e proteger os peregrinos nas estradas sagradas até o último suspiro.", 
                afirmacao: [
                    "Você iniciou sua jornada vestindo o manto branco com a cruz vermelha, pronto para a vigilância constante.",
                    "Sua entrega aos votos sagrados demonstra a postura firme de um verdadeiro guardião das rotas de peregrinação.",
                    "Sua lealdade à cruz e aos irmãos define a essência da sua vocação militar e monástica."
                ],
                tipo: "templario"
            },
            {
                texto: "Manter a disciplina férrea e a rigidez tática para nunca recuar perante o inimigo.", 
                afirmacao: [
                    "No começo de sua caminhada, você priorizou a disciplina militar como escudo contra o caos e a fraqueza.",
                    "Sua postura rígida e focada no dever militar moldou o espírito de um guerreiro implacável na defesa da fé.",
                    "Cada ordem recebida e cumprida à risca fortaleceu sua armadura espiritual e física."
                ],
                tipo: "teutonico"
            },
            {
                texto: "Buscar a sabedoria divina através da contemplação silenciosa e do estudo das escrituras.",
                afirmacao: [
                    "Sua busca começou pelo recolhimento e pelo desejo de compreender os mistérios espirituais por trás da espada.",
                    "Você enxerga no silêncio dos claustros a verdadeira fonte de discernimento para as batalhas que virão.",
                    "Seu espírito contemplativo equilibra a força das armas com a profundidade da sabedoria sagrada."
                ],
                tipo: "santiago"
            },
            {
                texto: "Cuidar dos enfermos, alimentar os pobres e servir aos necessitados antes de qualquer glória em combate.",
                afirmacao: [
                    "Você escolheu iniciar sua jornada colocando a caridade e o socorro aos desvalidos acima de tudo.",
                    "Para você, o verdadeiro brasão de um cavaleiro se manifesta no acolhimento e no cuidado com o próximo.",
                    "Sua vocação nasceu do desejo de cicatrizar as feridas do mundo através do amor fraternal e do serviço."
                ],
                tipo: "hospitalario"
            }
        ]
    },
    {
        enunciado: "Durante a escolta de uma caravana de peregrinos rumo a Jerusalém, seus batedores avistam uma tropa inimiga em superioridade numérica bloqueando o desfiladeiro. Como você procede?",
        alternativas: [
            {
                texto: "Organizo a linha de defesa e ataco com bravura, pois o templário nunca recua ou pede resgate.",
                afirmacao: [
                    "Diante da desvantagem numérica, você demonstrou a coragem destemida exigida de um cavaleiro do Templo.",
                    "Sua postura na vanguarda reflete o lema de que um templário luta até a vitória ou o martírio.",
                    "Sem hesitar, você assumiu a linha de frente, confiando que a honra vale mais do que a própria vida."
                ],
                tipo: "templario"
            },
            {
                texto: "Uso a estratégia tática, fortifico a posição e aguardo o momento certo para um contra-ataque calculado.",
                afirmacao: [
                    "Nos momentos de crise, sua liderança brilhou através de um planejamento frio e tático impecável.",
                    "Você compreende que a paciência estratégica e a rigidez tática salvam vidas e vencem guerras.",
                    "Sua cautela calculada garantiu que a tropa mantivesse a vantagem posicional diante do perigo."
                ],
                tipo: "santiago"
            },
            {
                texto: "Sinto o peso do medo do cerco, mas oro intensamente para que a coragem supere a hesitação.",
                afirmacao: [
                    "Sua sinceridade diante do perigo iminente revela um espírito humano em busca de redenção e força.",
                    "Mesmo sentindo o frio da incerteza, você transformou o receio em combustível para a oração e a superação.",
                    "O medo inicial foi vencido pela disciplina interna e pelo compromisso inegociável com a missão."
                ],
                tipo: "teutonico"
            },
            {
                texto: "Priorizo imediatamente a segurança dos peregrinos e feridos, abrindo rotas alternativas de fuga.",
                afirmacao: [
                    "Você compreendeu que a prioridade máxima em combate é a proteção dos vulneráveis sob sua tutela.",
                    "Em meio ao caos do desfiladeiro, seu foco permaneceu na preservação de vidas e no socorro mútuo.",
                    "Sua visão tática humanitária garantiu que nenhum peregrino ficasse desamparado na tormenta."
                ],
                tipo: "hospitalario"
            }
        ]
    },
    {
        enunciado: "O Grão-Mestre da Ordem convoca um conselho noturno para discutir os rumos das fortalezas no Oriente. Qual é a sua contribuição para o debate?",
        alternativas: [
            {
                texto: "Devemos manter a rigidez dos estatutos originais e jamais flexibilizar nossa postura militar e espiritual.", 
                afirmacao: [
                    "Você defendeu com unhas e dentes a tradição e a pureza das regras fundadores da Ordem.",
                    "Sua firmeza ideológica garante que os pilares da milícia sagrada permaneçam intactos contra as modas do tempo.",
                    "Para você, a obediência cega aos estatutos é o que separa um verdadeiro cavaleiro de um mercenário."
                ],
                tipo: "templario"
            },
            {
                texto: "Precisamos fortalecer a infraestrutura das muralhas, aprimorar o armamento e disciplinar rigorosamente as tropas.",
                afirmacao: [
                    "Sua visão pragmática destacou a importância de bases sólidas, logística eficiente e treino implacável.",
                    "Você enxerga a Ordem como uma engrenagem de precisão que exige disciplina e ordem absoluta.",
                    "Sua contribuição prática fortaleceu as defesas materiais e operacionais das comendas."
                ],
                tipo: "teutonico"
            },
            {
                texto: "A diplomacia, o diálogo e a busca por acordos justos devem preceder o derramamento de sangue.",
                afirmacao: [
                    "Sua voz sensata no conselho lembrou aos irmãos que a sabedoria muitas vezes vence guerras sem disparar flechas.",
                    "Você valoriza a prudência e o discernimento profundo antes de tomar decisões drásticas.",
                    "Sua postura diplomática conquistou o respeito tanto de aliados quanto de adversários."
                ],
                tipo: "santiago"
            },
            {
                texto: "Proponho a expansão dos hospitais de campanha e o financiamento de abrigos para os mais necessitados nas vilas.",
                afirmacao: [
                    "Sua lembrança no conselho redirecionou o foco para o coração social e assistencial da Ordem.",
                    "Você provou que um cavaleiro também empunha ferramentas de cura e compaixão.",
                    "Sua proposta de amparo comunitário solidificou o prestígio humanitário dos guerreiros da cruz."
                ],
                tipo: "hospitalario"
            }
        ]
    },
    {
        enunciado: "Durante a administração dos vastos territórios e feudos europeus da Ordem, como você lida com as riquezas e o poder acumulados?",
        alternativas: [
            {
                texto: "Administramos redes de capelas, portos e bancos com rigor, mas mantendo a simplicidade pessoal e o foco na guerra santa.",
                afirmacao: [
                    "Você equilibra a gestão financeira colossal da Ordem com o voto estrito de pobreza individual.",
                    "Sua integridade na administração de recursos garante o sustento das frotas e exércitos no Oriente.",
                    "Você gerencia castelos e tesouros sem deixar que a cobiça manche o seu manto branco."
                ],
                tipo: "templario"
            },
            {
                texto: "Utilizo a riqueza para erguer fortes fortalezas de pedra e sustentar uma força militar organizada e imbatível.",
                afirmacao: [
                    "Para você, os recursos materiais existem para servir à expansão e à solidez da infraestrutura da Ordem.",
                    "Sua gestão eficiente transforma rendas de terras em muralhas intransponíveis e armas de alta qualidade.",
                    "Sua visão administrativa prioriza a autosuficiência e o poderio logístico."
                ],
                tipo: "teutonico"
            },
            {
                texto: "Inverto parte dos lucros no mecenato de obras eruditas, fundando bibliotecas e centros de estudo filosófico.",
                afirmacao: [
                    "Você compreende que o tesouro mais valioso que uma ordem militar pode acumular é o conhecimento.",
                    "Sua administração fomenta o cultivo das artes, da ciência e da teologia dentro dos muros monásticos.",
                    "Sua gestão intelectual eleva o nível espiritual e cultural de todos os irmãos da comenda."
                ],
                tipo: "santiago"
            },
            {
                texto: "Canalizo todas as riquezas excedentes para a manutenção de asilos, redes de saúde e assistência pública nas vilas vizinhas.",
                afirmacao: [
                    "Sua prioridade econômica é o bem-estar do povo, transformando riquezas feudais em redes de amparo social.",
                    "Você enxerga os celeiros e cofres da Ordem como despensas abertas para os pobres e doentes.",
                    "Sua generosidade faz com que o povo veja nos cavaleiros não apenas senhores, mas verdadeiros pais protetores."
                ],
                tipo: "hospitalario"
            }
        ]
    },
    {
        enunciado: "A história da Ordem é marcada por provações extremas, conspirações e o julgamento severo que testou a lealdade de cada cavaleiro. O que define o seu legado final?",
        alternativas: [
            {
                texto: "A lealdade inegociável à cruz, enfrentando qualquer fogueira ou calúnia sem jamais renegar o nosso juramento.",
                afirmacao: [
                    "Diante da prova suprema, sua fidelidade à herança templária permaneceu indestrutível e heroica.",
                    "Seu nome entra para a história como o de um guardião incorruptível que preferiu o sacrifício à traição.",
                    "Você conclui sua jornada com a dignidade lendária dos cavaleiros que escreveram seu destino com honra."
                ],
                tipo: "templario"
            },
            {
                texto: "A resiliência de reerguer a Ordem sob novas formas, adaptando-se às mudanças dos tempos com disciplina de aço.",
                afirmacao: [
                    "Sua capacidade de adaptação e rigor tático garantiu que o espírito de luta sobrevivesse a qualquer colapso.",
                    "Você encerra sua trajetória mostrando que a verdadeira disciplina resiste até à queda dos impérios.",
                    "Sua resiliência estratégica transformou a derrota momentânea em semente para futuros triunfos."
                ],
                tipo: "teutonico"
            },
            {
                texto: "O legado de sabedoria e escritos guardados em segredo, que continuam a iluminar as gerações futuras.",
                afirmacao: [
                    "Sua jornada culmina na preservação dos mistérios e da erudição que transcendem o tempo físico.",
                    "Você deixa para a posteridade o testemunho de que a espada se vai, mas o conhecimento permanece eterno.",
                    "Seu espírito contemplativo encontrou a paz definitiva na compreensão dos desígnios superiores."
                ],
                tipo: "santiago"
            },
            {
                texto: "As vidas salvas, os hospitais fundados e o amor ao próximo, que ecoam através dos séculos como nossa verdadeira herança.",
                afirmacao: [
                    "Sua história se encerra deixando um rastro indelével de bondade, cura e caridade humanitária.",
                    "Para você, o maior monumento de um cavaleiro não é um castelo de pedra, mas os corações que ele ajudou a sarar.",
                    "Sua jornada coroa-se com o reconhecimento eterno daqueles que encontraram refúgio em suas mãos."
                ],
                tipo: "hospitalario"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";
let contagemTipos = {
    templario: 0,
    teutonico: 0,
    santiago: 0,
    hospitalario: 0
};

const nomes = ["Murilo", "João", "Matheus", "Vinicius", "Bruna", "Lorena", "Jaqueline", "Rafael", "Antony", "Robson"];

function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

// Sorteia um nome aleatório ao carregar ou reiniciar o script
let nome = aleatorio(nomes);

function embaralhar(array) {
    const copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

function mostraPergunta() {
    if (atual >= perguntas.length) {
        exibeResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    // Exibe o nome do cavaleiro na pergunta atual para personalizá-la
    caixaPerguntas.textContent = `Cavaleiro ${nome} (Reflexão ${atual + 1} de ${perguntas.length}): ${perguntaAtual.enunciado}`;
    caixaAlternativas.textContent = "";
    
    mostraAlternativas();
}

function mostraAlternativas() {
    const alternativasEmbaralhadas = embaralhar(perguntaAtual.alternativas);

    for (const alternativa of alternativasEmbaralhadas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += aleatorio(opcaoSelecionada.afirmacao) + " ";
    contagemTipos[opcaoSelecionada.tipo]++;
    atual++;
    mostraPergunta();
}

function exibeResultado() {
    caixaPerguntas.textContent = `Jornada Concluída, ${nome}!`;
    caixaAlternativas.textContent = "";

    let classeFinal = "templario";
    let maiorPontuacao = -1;

    for (const tipo in contagemTipos) {
        if (contagemTipos[tipo] > maiorPontuacao) {
            maiorPontuacao = contagemTipos[tipo];
            classeFinal = tipo;
        }
    }

    let descricaoClasse = "";
    if (classeFinal === "templario") {
        descricaoClasse = `🛡️ **Cavaleiro Guardião do Templo:** ${nome}, você carrega a bravura intransigente e a lealdade suprema ao manto branco e cruz vermelha. É o protetor destemido das rotas sagradas que jamais recua diante do perigo.`;
    } else if (classeFinal === "teutonico") {
        descricaoClasse = `⚔️ **Cavaleiro da Ordem Teutônica:** ${nome}, sua jornada reflete disciplina militar de ferro, rigidez tática, resiliência implacável e foco absoluto na superação dos maiores obstáculos.`;
    } else if (classeFinal === "santiago") {
        descricaoClasse = `✝️ **Cavaleiro da Ordem de Santiago:** Sábio e contemplativo, ${nome}, você equilibra a força da espada com o discernimento silencioso, a diplomacia e a busca constante pela sabedoria espiritual.`;
    } else if (classeFinal === "hospitalario") {
        descricaoClasse = `🏥 **Cavaleiro da Ordem Hospitalária:** O seu norte supremo é a caridade e o serviço humanitário, ${nome}. Você prova que a maior força de um cavaleiro reside na compaixão e no acolhimento ao próximo.`;
    }

    textoResultado.innerHTML = `<strong>Cavaleiro Selecionado:</strong> ${nome}<br><br><strong>Sua Ordem / Classe:</strong><br>${descricaoClasse}<br><br><strong>Crônica da sua jornada:</strong><br>${historiaFinal.trim()}`;

    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Reiniciar Jornada";
    botaoReiniciar.addEventListener("click", reiniciarQuiz);
    caixaAlternativas.appendChild(botaoReiniciar);
}

function reiniciarQuiz() {
    atual = 0;
    historiaFinal = "";
    textoResultado.textContent = "";
    // Sorteia um novo nome aleatório toda vez que reiniciar
    nome = aleatorio(nomes);
    for (const tipo in contagemTipos) {
        contagemTipos[tipo] = 0;
    }
    mostraPergunta();
}

// Inicializa a primeira pergunta
mostraPergunta();