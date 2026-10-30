/**
 * CONTEÚDO EDITÁVEL — marca, navegação, categorias e textos institucionais.
 *
 * MARCA: TRAMA (nome atual, preservado).
 * LINHA: Chambre Quatre (coleção de moda masculina).
 *
 * Todo texto comercial abaixo é PROVISÓRIO e editável. Não há história de
 * marca, fundador, endereço, telefone, frete, prazo ou avaliação inventados:
 * esses campos aparecem marcados como pendentes.
 */

export const BRAND = {
  name: "TRAMA",
  line: "Chambre Quatre",
  descriptor: "Moda masculina",
  tagline: "Moda masculina — verão e inverno",
  provisional: true,
};

export type NavItem = { label: string; to: string };

export const NAV: NavItem[] = [
  { label: "Novidades", to: "/novidades" },
  { label: "Loja", to: "/colecao/malhas" },
  { label: "Looks", to: "/looks" },
  { label: "Linho", to: "/colecao/linho" },
  { label: "A marca", to: "/a-marca" },
];

export type NavGroup = { title: string; links: NavItem[] };

/** Mega menu do desktop — 10 categorias organizadas em 3 grupos. */
export const NAV_GROUPS: NavGroup[] = [
  {
    title: "Vestuário",
    links: [
      { label: "Malhas", to: "/colecao/malhas" },
      { label: "Polos", to: "/colecao/polos" },
      { label: "Camisas de linho", to: "/colecao/camisas-de-linho" },
      { label: "Calças", to: "/colecao/calcas" },
      { label: "Bermudas", to: "/colecao/bermudas" },
      { label: "Conjuntos", to: "/colecao/conjuntos" },
      { label: "Casacos", to: "/colecao/casacos" },
    ],
  },
  {
    title: "Sapatos",
    links: [
      { label: "Mocassins", to: "/colecao/mocassins" },
      { label: "Outros sapatos", to: "/colecao/sapatos" },
    ],
  },
  {
    title: "Acessórios",
    links: [{ label: "Acessórios", to: "/colecao/acessorios" }],
  },
];

export const ANNOUNCEMENTS = [
  "Chambre Quatre — nova linha da TRAMA",
  "Malhas, linho e alfaiataria para verão e inverno",
  "Dúvidas sobre tamanhos? Fale com a marca",
];

export type FooterColumn = { title: string; links: NavItem[] };

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Vestuário",
    links: [
      { label: "Malhas", to: "/colecao/malhas" },
      { label: "Polos", to: "/colecao/polos" },
      { label: "Camisas de linho", to: "/colecao/camisas-de-linho" },
      { label: "Calças", to: "/colecao/calcas" },
      { label: "Bermudas", to: "/colecao/bermudas" },
    ],
  },
  {
    title: "Mais",
    links: [
      { label: "Conjuntos", to: "/colecao/conjuntos" },
      { label: "Casacos", to: "/colecao/casacos" },
      { label: "Mocassins", to: "/colecao/mocassins" },
      { label: "Outros sapatos", to: "/colecao/sapatos" },
      { label: "Acessórios", to: "/colecao/acessorios" },
    ],
  },
  {
    title: "A marca",
    links: [
      { label: "Sobre a TRAMA", to: "/a-marca" },
      { label: "Contato", to: "/contato" },
      { label: "Dúvidas frequentes", to: "/duvidas" },
    ],
  },
  {
    title: "Ajuda",
    links: [
      { label: "Envio e devoluções", to: "/envio-e-devolucoes" },
      { label: "Privacidade", to: "/privacidade" },
      { label: "Termos", to: "/termos" },
    ],
  },
];

/** Mapa das categorias — usado pelo mega menu, pela home e pelas coleções. */
export type CollectionMeta = {
  slug: string;
  title: string;
  kicker: string;
  intro: string;
  heroImage: string;
  /** Categorias virtuais não existem no catálogo como `category`. */
  virtual?: boolean;
};

export const COLLECTION_META: CollectionMeta[] = [
  {
    slug: "malhas",
    title: "Malhas",
    kicker: "Chambre Quatre",
    intro: "Tricôs de gola alta, redonda e cardigãs. Camadas de meia-estação e inverno, em tons neutros.",
    heroImage:
      "https://readdy.ai/api/search-image?query=editorial%20menswear%20photograph%20of%20a%20man%20in%20a%20cream%20cable%20knit%20sweater%20standing%20in%20a%20quiet%20warm%20stone%20interior%20with%20tall%20windows%2C%20old%20money%20style%2C%20soft%20daylight%2C%20cinematic%20wide%20composition&width=1920&height=800&seq=trama-hero-malhas&orientation=landscape",
  },
  {
    slug: "polos",
    title: "Polos",
    kicker: "Chambre Quatre",
    intro: "Polos de piquet e de tricô, manga curta e manga longa. A peça que resolve o dia inteiro.",
    heroImage:
      "https://readdy.ai/api/search-image?query=editorial%20menswear%20photograph%20of%20a%20man%20wearing%20a%20white%20knitted%20polo%20shirt%20in%20a%20sunlit%20plaster%20corridor%2C%20old%20money%20summer%20style%2C%20warm%20soft%20light%2C%20cinematic%20wide%20composition&width=1920&height=800&seq=trama-hero-polos&orientation=landscape",
  },
  {
    slug: "camisas-de-linho",
    title: "Camisas de linho",
    kicker: "Coleção de linho",
    intro: "Linho de corte amplo e manga curta, para calor. Colarinho aberto, caimento leve, cor natural.",
    heroImage:
      "https://readdy.ai/api/search-image?query=editorial%20menswear%20photograph%20of%20a%20man%20in%20a%20beige%20oversized%20linen%20shirt%20on%20a%20stone%20terrace%20with%20linen%20curtains%20moving%20in%20the%20wind%2C%20warm%20summer%20light%2C%20old%20money%20aesthetic%2C%20wide%20cinematic%20frame&width=1920&height=800&seq=trama-hero-linho&orientation=landscape",
  },
  {
    slug: "calcas",
    title: "Calças",
    kicker: "Chambre Quatre",
    intro: "Alfaiataria reta e com pregas, além da calça de linho ampla. Da cidade ao fim de semana.",
    heroImage:
      "https://readdy.ai/api/search-image?query=editorial%20menswear%20photograph%20of%20the%20lower%20half%20of%20a%20man%20in%20navy%20pleated%20tailored%20trousers%20and%20leather%20loafers%20walking%20on%20a%20stone%20floor%2C%20warm%20minimal%20interior%2C%20old%20money%20style%2C%20cinematic%20frame&width=1920&height=800&seq=trama-hero-calcas&orientation=landscape",
  },
  {
    slug: "bermudas",
    title: "Bermudas",
    kicker: "Verão",
    intro: "Linho, alfaiataria e sarja. Comprimento acima do joelho, para usar com mocassim.",
    heroImage:
      "https://readdy.ai/api/search-image?query=editorial%20menswear%20photograph%20of%20a%20man%20in%20sand%20linen%20shorts%20and%20a%20white%20shirt%20beside%20a%20pale%20plaster%20wall%20in%20strong%20summer%20light%2C%20old%20money%20summer%20style%2C%20wide%20editorial%20composition&width=1920&height=800&seq=trama-hero-bermudas&orientation=landscape",
  },
  {
    slug: "conjuntos",
    title: "Conjuntos",
    kicker: "Combinações prontas",
    intro: "Peças no mesmo tecido e no mesmo tom. Duas peças que funcionam juntas ou separadas.",
    heroImage:
      "https://readdy.ai/api/search-image?query=editorial%20menswear%20photograph%20of%20a%20man%20in%20a%20matching%20beige%20linen%20shirt%20and%20trousers%20set%20walking%20through%20a%20sunlit%20stone%20archway%2C%20old%20money%20summer%20style%2C%20cinematic%20wide%20frame&width=1920&height=800&seq=trama-hero-conjuntos&orientation=landscape",
  },
  {
    slug: "casacos",
    title: "Casacos",
    kicker: "Inverno",
    intro: "Sobretudo de lã, blazer de alfaiataria e casaco de linho. Camadas que fecham o look.",
    heroImage:
      "https://readdy.ai/api/search-image?query=editorial%20menswear%20photograph%20of%20a%20man%20in%20a%20grey%20wool%20overcoat%20on%20a%20quiet%20city%20street%20in%20winter%20light%2C%20old%20money%20style%2C%20muted%20tones%2C%20cinematic%20wide%20composition&width=1920&height=800&seq=trama-hero-casacos&orientation=landscape",
  },
  {
    slug: "mocassins",
    title: "Mocassins",
    kicker: "Sapatos",
    intro: "Couro liso, canoa e sola de borracha. O sapato que atravessa verão e inverno.",
    heroImage:
      "https://readdy.ai/api/search-image?query=editorial%20still%20life%20of%20brown%20leather%20loafers%20on%20a%20warm%20stone%20floor%20beside%20folded%20linen%20trousers%2C%20old%20money%20menswear%20detail%2C%20soft%20directional%20daylight%2C%20wide%20cinematic%20frame&width=1920&height=800&seq=trama-hero-mocassins&orientation=landscape",
  },
  {
    slug: "sapatos",
    title: "Outros sapatos",
    kicker: "Sapatos",
    intro: "Derby de couro, tênis minimal e sandália de tiras. Alternativas ao mocassim.",
    heroImage:
      "https://readdy.ai/api/search-image?query=editorial%20still%20life%20of%20brown%20leather%20derby%20shoes%20and%20a%20white%20minimal%20sneaker%20on%20a%20warm%20stone%20surface%2C%20menswear%20footwear%20detail%2C%20soft%20daylight%2C%20wide%20cinematic%20composition&width=1920&height=800&seq=trama-hero-sapatos&orientation=landscape",
  },
  {
    slug: "acessorios",
    title: "Acessórios",
    kicker: "Detalhes",
    intro: "Cinto de couro, óculos de sol e lenço de seda. Poucos detalhes, bem escolhidos.",
    heroImage:
      "https://readdy.ai/api/search-image?query=editorial%20still%20life%20of%20a%20brown%20leather%20belt%2C%20acetate%20sunglasses%20and%20a%20folded%20silk%20scarf%20on%20a%20warm%20beige%20surface%2C%20quiet%20old%20money%20menswear%20accessories%2C%20soft%20daylight&width=1920&height=800&seq=trama-hero-acessorios&orientation=landscape",
  },
];

/** Coleções virtuais (montadas a partir do catálogo). */
export const VIRTUAL_COLLECTIONS: CollectionMeta[] = [
  {
    slug: "novidades",
    title: "Novidades",
    kicker: "Chegou agora",
    intro: "As peças mais recentes da linha Chambre Quatre, entre vestuário, sapatos e acessórios.",
    heroImage:
      "https://readdy.ai/api/search-image?query=editorial%20menswear%20photograph%20of%20two%20men%20in%20linen%20and%20knitwear%20in%20a%20warm%20minimal%20architectural%20interior%2C%20old%20money%20style%2C%20soft%20natural%20light%2C%20wide%20cinematic%20composition&width=1920&height=800&seq=trama-hero-novidades&orientation=landscape",
    virtual: true,
  },
  {
    slug: "mais-vendidos",
    title: "Mais vendidos",
    kicker: "Seleção da casa",
    intro: "Peças marcadas como mais vendidas na demonstração da loja. Ajuste esta lista no catálogo.",
    heroImage:
      "https://readdy.ai/api/search-image?query=editorial%20menswear%20photograph%20of%20a%20man%20in%20a%20beige%20linen%20shirt%20and%20brown%20loafers%20leaning%20on%20a%20warm%20stone%20balustrade%2C%20old%20money%20style%2C%20soft%20summer%20light%2C%20wide%20cinematic%20frame&width=1920&height=800&seq=trama-hero-mais-vendidos&orientation=landscape",
    virtual: true,
  },
  {
    slug: "linho",
    title: "Coleção de linho",
    kicker: "Verão",
    intro: "Camisas, calças, bermudas e casacos em linho. A coleção pensada para o calor.",
    heroImage:
      "https://readdy.ai/api/search-image?query=editorial%20menswear%20photograph%20of%20a%20man%20in%20a%20full%20beige%20linen%20outfit%20standing%20in%20a%20sunlit%20stone%20courtyard%20with%20olive%20branches%2C%20old%20money%20summer%20style%2C%20warm%20light%2C%20cinematic%20wide%20frame&width=1920&height=800&seq=trama-hero-colecao-linho&orientation=landscape",
  },
];

/* ------------------------------------------------------------------ HOME --- */

export const HOME = {
  hero: {
    eyebrow: "Chambre Quatre — verão e inverno",
    title: "Elegância sem esforço, do linho ao tricô.",
    line: "Moda masculina em tons sóbrios: peças de verão e inverno, do mocassim ao sobretudo.",
    primaryCta: { label: "Ver a coleção", to: "/colecao/malhas" },
    secondaryCta: { label: "Conhecer a marca", to: "/a-marca" },
    image:
      "https://readdy.ai/api/search-image?query=editorial%20menswear%20photograph%20of%20a%20man%20in%20a%20beige%20oversized%20linen%20shirt%20and%20light%20trousers%20standing%20in%20a%20warm%20architectural%20interior%20with%20plaster%20walls%20and%20tall%20windows%2C%20old%20money%20casual%20style%2C%20soft%20natural%20daylight%2C%20cinematic%20wide%20composition&width=1920&height=1080&seq=trama-hero-chambre-quatre&orientation=landscape",
  },
  quickTabs: [
    { label: "Novidades", to: "/novidades" },
    { label: "Mais vendidos", to: "/colecao/mais-vendidos" },
    { label: "Linho", to: "/colecao/linho" },
    { label: "Looks", to: "/looks" },
    { label: "Malhas", to: "/colecao/malhas" },
    { label: "Polos", to: "/colecao/polos" },
    { label: "Calças", to: "/colecao/calcas" },
    { label: "Sapatos", to: "/colecao/mocassins" },
  ],
  categoryTiles: [
    {
      title: "Malhas",
      to: "/colecao/malhas",
      image:
        "https://readdy.ai/api/search-image?query=editorial%20menswear%20portrait%20of%20a%20man%20in%20a%20cream%20cable%20knit%20sweater%20in%20a%20warm%20stone%20interior%2C%20old%20money%20winter%20style%2C%20soft%20daylight%2C%20vertical%20composition&width=900&height=1200&seq=trama-tile-malhas&orientation=portrait",
    },
    {
      title: "Camisas de linho",
      to: "/colecao/camisas-de-linho",
      image:
        "https://readdy.ai/api/search-image?query=editorial%20menswear%20portrait%20of%20a%20man%20in%20a%20beige%20linen%20shirt%20with%20the%20collar%20open%20in%20warm%20summer%20light%2C%20old%20money%20casual%20style%2C%20vertical%20composition&width=900&height=1200&seq=trama-tile-linho&orientation=portrait",
    },
    {
      title: "Calças",
      to: "/colecao/calcas",
      image:
        "https://readdy.ai/api/search-image?query=editorial%20menswear%20detail%20of%20a%20man%20in%20navy%20pleated%20tailored%20trousers%20and%20brown%20leather%20loafers%2C%20warm%20stone%20floor%2C%20old%20money%20style%2C%20vertical%20composition&width=900&height=1200&seq=trama-tile-calcas&orientation=portrait",
    },
    {
      title: "Casacos",
      to: "/colecao/casacos",
      image:
        "https://readdy.ai/api/search-image?query=editorial%20menswear%20portrait%20of%20a%20man%20in%20a%20grey%20wool%20overcoat%20over%20a%20navy%20knit%2C%20quiet%20street%20in%20soft%20winter%20light%2C%20old%20money%20style%2C%20vertical%20composition&width=900&height=1200&seq=trama-tile-casacos&orientation=portrait",
    },
    {
      title: "Mocassins",
      to: "/colecao/mocassins",
      image:
        "https://readdy.ai/api/search-image?query=editorial%20close%20up%20of%20brown%20leather%20loafers%20worn%20with%20beige%20linen%20trousers%20on%20a%20warm%20stone%20surface%2C%20old%20money%20menswear%20detail%2C%20soft%20daylight%2C%20vertical%20composition&width=900&height=1200&seq=trama-tile-mocassins&orientation=portrait",
    },
    {
      title: "Acessórios",
      to: "/colecao/acessorios",
      image:
        "https://readdy.ai/api/search-image?query=editorial%20still%20life%20of%20a%20leather%20belt%2C%20acetate%20sunglasses%20and%20folded%20silk%20scarf%20on%20warm%20beige%20linen%2C%20quiet%20menswear%20accessories%2C%20soft%20daylight%2C%20vertical%20composition&width=900&height=1200&seq=trama-tile-acessorios&orientation=portrait",
    },
  ],
  /** Ids de produtos da seleção "Mais vendidos" da home. */
  bestSellerIds: ["m1", "c1", "p1", "k1", "s1", "b1", "j1", "o1"],
  linen: {
    kicker: "Coleção de linho",
    title: "O verão em linho.",
    body: "Camisas amplas, calças largas e bermudas no mesmo tecido. Tons de areia, branco e marinho para os dias de calor — peças que amassam de propósito e continuam certas.",
    to: "/colecao/linho",
    cta: "Ver a coleção de linho",
    image:
      "https://readdy.ai/api/search-image?query=editorial%20menswear%20photograph%20of%20a%20man%20in%20a%20full%20beige%20linen%20outfit%20standing%20beside%20linen%20curtains%20in%20a%20sunlit%20stone%20room%2C%20old%20money%20summer%20style%2C%20warm%20soft%20light%2C%20wide%20composition&width=1600&height=1100&seq=trama-linen-banner&orientation=landscape",
    ids: ["c1", "k2", "b1", "j1"],
  },
  shoes: {
    kicker: "Sapatos",
    title: "O sapato define o tom.",
    body: "Mocassins de couro, derby e tênis minimal. Poucos modelos, escolhidos para combinar com tudo o que está na loja.",
    to: "/colecao/mocassins",
    cta: "Ver sapatos",
    ids: ["s1", "s2", "s4", "s5"],
  },
  mission: {
    kicker: "A linha",
    title: "Chambre Quatre",
    body: "Uma linha de moda masculina com repertório clássico: proporções calmas, cores sóbrias e tecidos que envelhecem bem. Verão e inverno no mesmo guarda-roupa, sem coleções descartáveis.",
  },
  brand: {
    kicker: "A marca",
    title: "TRAMA, uma marca independente.",
    body: "A TRAMA nasceu como marca independente de roupas. A Chambre Quatre é a sua linha de moda masculina: o mesmo cuidado com caimento e acabamento, agora em alfaiataria, linho, malhas e sapatos.",
    to: "/a-marca",
    cta: "Conhecer a marca",
    image:
      "https://readdy.ai/api/search-image?query=editorial%20portrait%20of%20a%20man%20in%20a%20knit%20polo%20leaning%20against%20a%20warm%20plaster%20wall%20in%20a%20minimal%20studio%2C%20old%20money%20menswear%2C%20soft%20natural%20light%2C%20vertical%20composition&width=1000&height=1250&seq=trama-brand-chambre&orientation=portrait",
  },
  closing: {
    title: "Comece pelo essencial.",
    body: "Malhas, polos e camisas de linho são o começo. As demais categorias completam o look.",
  },
};

/* ----------------------------------------------------------------- LOOKS --- */

export type Look = {
  id: string;
  title: string;
  note: string;
  image: string;
  productIds: string[];
};

export const LOOKS: Look[] = [
  {
    id: "look-verao",
    title: "Verão em linho",
    note: "Camisa ampla, calça larga e mocassim de couro.",
    image:
      "https://readdy.ai/api/search-image?query=editorial%20full%20body%20menswear%20photograph%20of%20a%20man%20in%20a%20beige%20linen%20shirt%20and%20wide%20sand%20linen%20trousers%20with%20brown%20loafers%20on%20a%20stone%20terrace%2C%20old%20money%20summer%20style%2C%20warm%20daylight%2C%20vertical&width=1000&height=1350&seq=trama-look-verao&orientation=portrait",
    productIds: ["c1", "k2", "s1"],
  },
  {
    id: "look-cidade",
    title: "Cidade em alfaiataria",
    note: "Malha de gola redonda, calça reta e derby.",
    image:
      "https://readdy.ai/api/search-image?query=editorial%20full%20body%20menswear%20photograph%20of%20a%20man%20in%20a%20brown%20crew%20neck%20sweater%20and%20navy%20tailored%20trousers%20with%20derby%20shoes%20on%20a%20quiet%20city%20street%2C%20old%20money%20style%2C%20soft%20daylight%2C%20vertical&width=1000&height=1350&seq=trama-look-cidade&orientation=portrait",
    productIds: ["m2", "k1", "s4"],
  },
  {
    id: "look-inverno",
    title: "Inverno em camadas",
    note: "Polo de manga longa, sobretudo de lã e mocassim.",
    image:
      "https://readdy.ai/api/search-image?query=editorial%20full%20body%20menswear%20photograph%20of%20a%20man%20in%20a%20green%20long%20sleeve%20polo%20under%20a%20grey%20wool%20overcoat%20with%20leather%20loafers%2C%20old%20money%20winter%20style%2C%20soft%20overcast%20light%2C%20vertical&width=1000&height=1350&seq=trama-look-inverno&orientation=portrait",
    productIds: ["p3", "o2", "s3"],
  },
  {
    id: "look-viagem",
    title: "Viagem leve",
    note: "Conjunto de linho com tênis de couro.",
    image:
      "https://readdy.ai/api/search-image?query=editorial%20full%20body%20menswear%20photograph%20of%20a%20man%20in%20a%20matching%20beige%20linen%20set%20with%20white%20leather%20sneakers%20beside%20a%20stone%20archway%2C%20old%20money%20casual%20style%2C%20warm%20light%2C%20vertical%20composition&width=1000&height=1350&seq=trama-look-viagem&orientation=portrait",
    productIds: ["j1", "s5", "a2"],
  },
];

/* ---------------------------------------------------------------- PÁGINAS --- */

export const ABOUT = {
  hero: {
    kicker: "A marca",
    title: "Uma marca independente, uma linha masculina.",
    image:
      "https://readdy.ai/api/search-image?query=wide%20editorial%20photograph%20of%20a%20quiet%20minimal%20fashion%20studio%20with%20warm%20natural%20light%2C%20folded%20knitwear%2C%20linen%20swatches%20and%20leather%20shoes%20on%20a%20work%20table%2C%20muted%20warm%20neutral%20palette%2C%20refined%20brand%20atmosphere&width=1920&height=1080&seq=trama-about-hero&orientation=landscape",
  },
  intro:
    "A TRAMA é uma marca independente de roupas. A Chambre Quatre é a sua linha de moda masculina, com peças de verão e inverno em tons sóbrios — do linho ao sobretudo.",
  sections: [
    {
      kicker: "Apresentação",
      title: "Repertório clássico, proporção atual.",
      body: "A linha trabalha com categorias tradicionais do guarda-roupa masculino — malhas, polos, camisas, alfaiataria, bermudas, casacos, sapatos e acessórios — em proporções mais calmas e cores sóbrias. Nada de excesso de detalhe: a peça precisa funcionar sozinha.",
      image:
        "https://readdy.ai/api/search-image?query=editorial%20portrait%20of%20a%20man%20in%20a%20beige%20linen%20shirt%20standing%20in%20a%20warm%20plaster%20interior%2C%20old%20money%20menswear%2C%20soft%20window%20light%2C%20vertical%20composition&width=1000&height=1250&seq=trama-about-01&orientation=portrait",
    },
    {
      kicker: "Princípios",
      title: "Menos peças, mais combinações.",
      body: "A seleção é curta de propósito. Cada categoria tem poucas opções, escolhidas para combinar entre si: o mesmo mocassim atravessa a bermuda de linho e a calça de alfaiataria, e o mesmo sobretudo fecha o look de inverno.",
      image:
        "https://readdy.ai/api/search-image?query=editorial%20still%20life%20of%20hands%20folding%20linen%20shirts%20and%20a%20knit%20sweater%20on%20a%20warm%20neutral%20surface%2C%20quiet%20menswear%20studio%2C%20soft%20natural%20light%2C%20vertical%20composition&width=1000&height=1250&seq=trama-about-02&orientation=portrait",
    },
  ],
  campaign: {
    image:
      "https://readdy.ai/api/search-image?query=wide%20editorial%20still%20life%20of%20folded%20knitwear%2C%20linen%20shirts%20and%20leather%20loafers%20arranged%20on%20a%20warm%20minimal%20work%20table%2C%20quiet%20menswear%20atelier%20atmosphere%2C%20soft%20daylight&width=1600&height=900&seq=trama-about-campaign&orientation=landscape",
  },
  story: {
    kicker: "História",
    title: "Espaço reservado para a história real.",
    body: "Fundação, origem do nome, ateliê e equipe ainda serão definidos. Este bloco é editável e deve ser preenchido com a história verdadeira da marca — sem datas, fundadores ou tradições inventadas.",
  },
};

export const CONTACT = {
  intro:
    "Dúvidas sobre peças, tamanhos, combinações ou pedidos? Escreva para a marca pelo formulário abaixo.",
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
      { q: "As peças são unissex?", a: "A linha é de moda masculina, com caimentos retos e amplos descritos peça por peça. Escolha pelo corte que veste melhor." },
      { q: "Vocês repõem tamanhos esgotados?", a: "Definir quando cada peça volta faz parte da produção. Assim que houver previsão real, ela será informada na página do produto." },
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
      { q: "Vocês entregam em todo o Brasil?", a: "As regiões atendidas, valores e prazos de entrega serão definidos com a operação de logística e informados antes de qualquer compra." },
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