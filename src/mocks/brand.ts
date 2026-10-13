/**
 * CONTEÚDO EDITÁVEL — marca, navegação e textos institucionais.
 * O nome "TRAMA" e os textos abaixo são PROVISÓRIOS: substitua livremente
 * antes de publicar. Nenhuma informação real de marca, história, endereço,
 * telefone ou rede social foi inventada — os campos pendentes estão marcados.
 */

export const BRAND = {
  name: "TRAMA",
  tagline: "Camisas e polos",
  provisional: true,
};

export type NavItem = { label: string; to: string };

export const NAV: NavItem[] = [
  { label: "Novidades", to: "/novidades" },
  { label: "Camisas", to: "/camisas" },
  { label: "Polos", to: "/polos" },
  { label: "A marca", to: "/a-marca" },
];

export const ANNOUNCEMENTS = [
  "Volume I — primeira coleção no site",
  "Camisas e polos da marca independente",
  "Fale com a marca pelo formulário de contato",
];

export type FooterColumn = { title: string; links: NavItem[] };

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Comprar",
    links: [
      { label: "Camisas", to: "/camisas" },
      { label: "Polos", to: "/polos" },
      { label: "Novidades", to: "/novidades" },
    ],
  },
  {
    title: "A marca",
    links: [
      { label: "Sobre a marca", to: "/a-marca" },
      { label: "Contato", to: "/contato" },
    ],
  },
  {
    title: "Ajuda",
    links: [
      { label: "Dúvidas frequentes", to: "/duvidas" },
      { label: "Envio e devoluções", to: "/envio-e-devolucoes" },
      { label: "Privacidade", to: "/privacidade" },
      { label: "Termos", to: "/termos" },
    ],
  },
];

export const HOME = {
  hero: {
    eyebrow: "Volume I — nome provisório",
    title: "Roupa fácil, pensada devagar.",
    line: "Camisas e polos da primeira coleção — para usar todos os dias, sem esforço.",
    primaryCta: { label: "Ver a coleção", to: "/camisas" },
    secondaryCta: { label: "Conhecer a marca", to: "/a-marca" },
    image:
      "https://readdy.ai/api/search-image?query=Editorial%20fashion%20photograph%20of%20a%20model%20wearing%20a%20relaxed%20button%20up%20shirt%20standing%20in%20a%20quiet%20sunlit%20concrete%20and%20wood%20interior%2C%20warm%20neutral%20palette%2C%20soft%20natural%20light%2C%20calm%20quiet%20luxury%20mood%2C%20three%20quarter%20framing%2C%20muted%20warm%20tones%2C%20high%20detail&width=1920&height=1080&seq=trama-hero-01&orientation=landscape",
  },
  categories: [
    {
      key: "camisas",
      title: "Camisas",
      copy: "Cortes retos e amplos, do ombro ao punho.",
      to: "/camisas",
      image:
        "https://readdy.ai/api/search-image?query=Editorial%20photograph%20of%20a%20model%20wearing%20a%20relaxed%20button%20up%20shirt%20with%20relaxed%20arms%2C%20warm%20minimal%20interior%20with%20soft%20natural%20daylight%2C%20quiet%20luxury%20fashion%20campaign%2C%20muted%20warm%20neutral%20palette%2C%20three%20quarter%20framing&width=1000&height=1250&seq=trama-cat-camisas&orientation=portrait",
    },
    {
      key: "polos",
      title: "Polos",
      copy: "Golas limpas, manga curta e caimento honesto.",
      to: "/polos",
      image:
        "https://readdy.ai/api/search-image?query=Editorial%20photograph%20of%20a%20model%20wearing%20a%20short%20sleeve%20polo%20shirt%2C%20warm%20minimal%20interior%20with%20soft%20natural%20daylight%2C%20quiet%20luxury%20fashion%20campaign%2C%20muted%20warm%20neutral%20palette%2C%20three%20quarter%20framing&width=1000&height=1250&seq=trama-cat-polos&orientation=portrait",
    },
  ],
  featuredIds: ["c1", "p2", "c4", "p1"],
  editorial: {
    kicker: "A coleção",
    title: "Uma primeira coleção sobre o essencial.",
    body: "Camisas de colarinho curto e polos de gola limpa, desenhados para funcionar sozinhos ou sobrepostos. Proporções simples, poucos detalhes e um caimento que não pede ajuste.",
    to: "/camisas",
    cta: "Ver todas as camisas",
    image:
      "https://readdy.ai/api/search-image?query=Wide%20editorial%20fashion%20photograph%20of%20two%20models%20in%20relaxed%20shirts%20in%20a%20quiet%20warm%20architectural%20interior%20with%20soft%20natural%20light%2C%20muted%20warm%20neutral%20palette%2C%20calm%20contemporary%20fashion%20campaign%2C%20cinematic%20composition&width=1600&height=900&seq=trama-editorial-01&orientation=landscape",
  },
  detail: {
    kicker: "Detalhe",
    title: "Onde a peça se resolve.",
    body: "Colarinho, carcela, botão e barra: é no detalhe pequeno que a peça ganha ou perde o caimento. Um olhar mais próximo no acabamento.",
    image:
      "https://readdy.ai/api/search-image?query=Macro%20detail%20photograph%20of%20a%20shirt%20collar%20and%20top%20button%20on%20soft%20woven%20fabric%2C%20warm%20neutral%20tones%2C%20soft%20directional%20daylight%2C%20quiet%20luxury%20editorial%20textile%20photography%2C%20shallow%20depth%20of%20field%2C%20high%20detail&width=1200&height=1200&seq=trama-detail-01&orientation=squarish",
  },
  brand: {
    kicker: "A marca",
    title: "Uma marca independente, feita em etapas.",
    body: "Começamos com uma coleção pequena e uma ideia clara: peças fáceis de usar, resolvidas com cuidado. Este espaço guarda a apresentação e a história real da marca, a ser preenchida.",
    to: "/a-marca",
    cta: "Conhecer a marca",
    image:
      "https://readdy.ai/api/search-image?query=Editorial%20photograph%20of%20a%20person%20in%20a%20minimal%20warm%20studio%20wearing%20a%20shirt%2C%20half%20turned%2C%20soft%20natural%20light%2C%20muted%20warm%20neutral%20palette%2C%20quiet%20contemporary%20fashion%20portrait&width=1000&height=1250&seq=trama-brand-01&orientation=portrait",
  },
  closing: {
    title: "Comece pelas peças.",
    body: "A coleção inicial reúne camisas e polos. Escolha uma categoria e veja as peças disponíveis.",
  },
};

export const COLLECTIONS = [
  {
    slug: "camisas",
    category: "camisas" as const,
    title: "Camisas",
    kicker: "Coleção inicial",
    intro: "Camisas de corte reto e amplo, colarinho curto e mangas longas. Peças para sobrepor ou usar sozinhas.",
    heroImage:
      "https://readdy.ai/api/search-image?query=Wide%20editorial%20photograph%20of%20a%20model%20wearing%20a%20relaxed%20long%20sleeve%20shirt%20in%20a%20quiet%20warm%20interior%20with%20soft%20natural%20light%2C%20muted%20warm%20neutral%20palette%2C%20calm%20contemporary%20fashion%20campaign%2C%20cinematic%20composition&width=1920&height=800&seq=trama-col-camisas&orientation=landscape",
  },
  {
    slug: "polos",
    category: "polos" as const,
    title: "Polos",
    kicker: "Coleção inicial",
    intro: "Polos de gola limpa e manga curta, com caimento reto ou mais ajustado. Simples de usar no dia a dia.",
    heroImage:
      "https://readdy.ai/api/search-image?query=Wide%20editorial%20photograph%20of%20a%20model%20wearing%20a%20short%20sleeve%20polo%20in%20a%20quiet%20warm%20interior%20with%20soft%20natural%20light%2C%20muted%20warm%20neutral%20palette%2C%20calm%20contemporary%20fashion%20campaign%2C%20cinematic%20composition&width=1920&height=800&seq=trama-col-polos&orientation=landscape",
  },
];

export const ABOUT = {
  hero: {
    kicker: "A marca",
    title: "Começamos pequeno, por escolha.",
    image:
      "https://readdy.ai/api/search-image?query=Wide%20editorial%20photograph%20of%20a%20quiet%20minimal%20fashion%20studio%20with%20warm%20natural%20light%2C%20fabric%20swatches%20and%20a%20work%20table%2C%20muted%20warm%20neutral%20palette%2C%20refined%20contemporary%20brand%20atmosphere&width=1920&height=1080&seq=trama-about-hero&orientation=landscape",
  },
  intro:
    "TRAMA é uma marca independente de roupas com foco em camisas e polos. Este site reúne a primeira coleção e um espaço editorial para apresentar a marca com calma.",
  sections: [
    {
      kicker: "Apresentação",
      title: "Roupa simples, resolvida com cuidado.",
      body: "Trabalhamos com poucas peças por coleção e preferimos resolver cada uma até o fim: proporção, colarinho, carcela e barra. O objetivo é uma roupa fácil de vestir e fácil de combinar, que não dependa de muitos detalhes para funcionar.",
      image:
        "https://readdy.ai/api/search-image?query=Editorial%20portrait%20of%20a%20person%20wearing%20a%20relaxed%20shirt%20in%20a%20calm%20warm%20interior%2C%20soft%20window%20light%2C%20muted%20warm%20neutral%20palette%2C%20quiet%20contemporary%20fashion%20photography&width=1000&height=1250&seq=trama-about-01&orientation=portrait",
    },
    {
      kicker: "Princípios",
      title: "Menos peças, mais intenção.",
      body: "Uma coleção curta, revisada várias vezes. Preferimos esperar o caimento certo a lançar mais uma variação. Novas peças entram no site aos poucos, à medida que ficam prontas.",
      image:
        "https://readdy.ai/api/search-image?query=Close%20up%20editorial%20photograph%20of%20hands%20arranging%20folded%20shirts%20on%20a%20warm%20neutral%20surface%2C%20soft%20natural%20light%2C%20muted%20warm%20tones%2C%20quiet%20contemporary%20fashion%20studio&width=1000&height=1250&seq=trama-about-02&orientation=portrait",
    },
  ],
  campaign: {
    image:
      "https://readdy.ai/api/search-image?query=Wide%20editorial%20photograph%20of%20folded%20shirts%20stacked%20on%20a%20warm%20minimal%20surface%20beside%20fabric%20rolls%2C%20soft%20natural%20daylight%2C%20muted%20warm%20neutral%20palette%2C%20quiet%20contemporary%20fashion%20studio%20still%20life&width=1600&height=900&seq=trama-about-campaign&orientation=landscape",
  },
  story: {
    kicker: "História",
    title: "Espaço reservado para a história real.",
    body: "Fundação, origem do nome, ateliê e equipe ainda serão definidos. Este bloco é editável e deve ser preenchido com a história verdadeira da marca — sem datas, fundadores ou tradições inventadas.",
  },
};

export const CONTACT = {
  intro: "Dúvidas sobre peças, tamanhos ou pedidos? Escreva para a marca pelo formulário abaixo.",
  email: "contato@trama.exemplo",
  note: "E-mail provisório. Endereço físico, telefone e redes sociais serão adicionados quando forem definidos — nenhum canal oficial foi inventado.",
  hours: "Respostas de segunda a sexta.",
};

export type FaqGroup = { title: string; items: { q: string; a: string }[] };

export const FAQ_GROUPS: FaqGroup[] = [
  {
    title: "Peças e tamanhos",
    items: [
      { q: "Como escolher meu tamanho?", a: "Use a guia de medidas disponível em cada página de produto. A tabela numérica ainda está em revisão e será publicada assim que for confirmada." },
      { q: "As peças são unissex?", a: "A modelagem é apresentada com caimentos reto e amplo. Descrevemos cada peça pelo corte, para você escolher pelo que veste melhor." },
      { q: "Vou repor tamanhos esgotados?", a: "Definir quando cada peça volta é parte da produção. Assim que houver previsão real, ela será informada na página do produto." },
    ],
  },
  {
    title: "Pedidos",
    items: [
      { q: "Como acompanho meu pedido?", a: "O acompanhamento será feito por e-mail assim que a operação de vendas estiver integrada ao site. Hoje a sacola funciona como demonstração." },
      { q: "Posso alterar ou cancelar depois de comprar?", a: "A política de alteração será publicada junto com a integração de vendas — ainda não está definida." },
    ],
  },
  {
    title: "Envio",
    items: [
      { q: "Vocês entregam em todo o país?", a: "As regiões atendidas, valores e prazos de entrega serão definidos com a operação de logística e informados antes de qualquer compra." },
      { q: "Qual o prazo de entrega?", a: "Ainda não definido. Nenhum prazo fictício é exibido no site para não gerar expectativa incorreta." },
    ],
  },
  {
    title: "Trocas e devoluções",
    items: [
      { q: "Como faço uma troca?", a: "O processo de troca será publicado junto com a política de envio. Enquanto isso, escreva para a marca pelo formulário de contato." },
      { q: "As peças podem ser devolvidas?", a: "A política de devolução ainda será definida. Este conteúdo é provisório e deve ser revisado antes de publicar." },
    ],
  },
];

export const POLICIES = {
  shipping: {
    title: "Envio e devoluções",
    kicker: "Conteúdo provisório",
    body: [
      "As condições de envio — regiões atendidas, valores e prazos — ainda não foram definidas e serão publicadas antes da abertura das vendas.",
      "O processo de troca e devolução também está em revisão. Esta página existe para reservar a estrutura e deve ser substituída pela política real, revisada pela marca.",
      "Enquanto as condições não estiverem publicadas, dúvidas podem ser enviadas pelo formulário de contato.",
    ],
  },
  privacy: {
    title: "Privacidade",
    kicker: "Conteúdo provisório",
    body: [
      "Esta página reserva a estrutura da política de privacidade. O texto final deverá descrever com precisão quais dados são coletados, por quanto tempo são guardados e com quem são compartilhados.",
      "O formulário de contato do site envia as informações preenchidas apenas para que a marca possa responder à sua mensagem.",
      "Nada aqui deve ser lido como política definitiva: o conteúdo é provisório e precisa de revisão jurídica antes de publicar.",
    ],
  },
  terms: {
    title: "Termos",
    kicker: "Conteúdo provisório",
    body: [
      "Esta página reserva a estrutura dos termos de uso. As condições comerciais, formas de pagamento e regras de compra ainda serão definidas e publicadas junto com a operação de vendas.",
      "Preços, disponibilidade e prazos exibidos hoje são de exemplo e podem mudar sem aviso durante a montagem da loja.",
      "O conteúdo é provisório e precisa de revisão antes de publicar.",
    ],
  },
};