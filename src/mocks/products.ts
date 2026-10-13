/**
 * CONTEÚDO DE EXEMPLO — EDITÁVEL
 * Nomes, cores, tamanhos e preços abaixo são PROVISÓRIOS e servem apenas para
 * demonstrar o funcionamento da loja. Substitua pela ficha real de cada peça.
 * Campos de composição, cuidados e medidas estão marcados como "a preencher"
 * para que nenhuma informação de produção seja inventada.
 */

export type ProductColor = { name: string; hex: string };

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: "camisas" | "polos";
  categoryLabel: string;
  colors: ProductColor[];
  sizes: string[];
  /** Preço de exemplo. Use null quando o preço ainda não existir. */
  price: number | null;
  currency: string;
  isNew?: boolean;
  inStock: boolean;
  shortDescription: string;
  description: string;
  composition: string;
  care: string;
  measurementsNote: string;
  main: string;
  worn: string;
  detail: string;
};

export const SIZES = ["PP", "P", "M", "G", "GG"];

export const products: Product[] = [
  {
    id: "c1",
    slug: "camisa-volume-amplo",
    name: "Camisa Volume Amplo",
    category: "camisas",
    categoryLabel: "Camisa",
    colors: [
      { name: "Off-white", hex: "#EFE9DD" },
      { name: "Areia", hex: "#D8CCB6" },
    ],
    sizes: SIZES,
    price: 320,
    currency: "R$",
    isNew: true,
    inStock: true,
    shortDescription: "Camisa de corte amplo, ombro caído e comprimento alongado.",
    description:
      "Corte amplo com ombro caído e comprimento alongado, pensada para usar aberta sobre uma peça lisa ou fechada até o último botão. Colarinho de ponta curta, carcela estreita e punho simples.",
    composition: "A preencher — incluir a ficha técnica de composição do tecido.",
    care: "A preencher — incluir as instruções de lavagem da etiqueta da peça.",
    measurementsNote: "Tabela de medidas a confirmar com a produção.",
    main: "https://readdy.ai/api/search-image?query=Relaxed%20wide%20fit%20button%20up%20shirt%20with%20dropped%20shoulders%20shown%20centered%20on%20a%20seamless%20warm%20ivory%20studio%20background%2C%20quiet%20luxury%20editorial%20product%20photography%2C%20soft%20diffused%20daylight%2C%20muted%20warm%20neutral%20palette%2C%20no%20props%2C%20minimal%20styling%2C%20high%20detail&width=1200&height=1200&seq=trama-cam-01-main&orientation=squarish",
    worn: "https://readdy.ai/api/search-image?query=Model%20wearing%20a%20relaxed%20wide%20button%20up%20shirt%20with%20dropped%20shoulders%20over%20neutral%20trousers%2C%20cropped%20at%20the%20torso%2C%20warm%20ivory%20interior%20with%20soft%20natural%20window%20light%2C%20quiet%20luxury%20fashion%20editorial%20photography%2C%20muted%20warm%20neutral%20palette%2C%20calm%20mood&width=1200&height=1200&seq=trama-cam-01-worn&orientation=squarish",
    detail: "https://readdy.ai/api/search-image?query=Close%20up%20macro%20detail%20of%20a%20shirt%20placket%20and%20buttons%20on%20soft%20woven%20fabric%2C%20warm%20neutral%20tones%2C%20soft%20directional%20daylight%2C%20quiet%20luxury%20editorial%20textile%20photography%2C%20shallow%20depth%20of%20field%2C%20high%20detail&width=1200&height=1200&seq=trama-cam-01-detail&orientation=squarish",
  },
  {
    id: "c2",
    slug: "camisa-colarinho-curto",
    name: "Camisa Colarinho Curto",
    category: "camisas",
    categoryLabel: "Camisa",
    colors: [
      { name: "Branco", hex: "#F3F0E9" },
      { name: "Carvão", hex: "#2A2724" },
    ],
    sizes: SIZES,
    price: 340,
    currency: "R$",
    inStock: true,
    shortDescription: "Colarinho de ponta curta e caimento reto, do ombro ao punho.",
    description:
      "Silhueta reta com colarinho de ponta curta e gola baixa, feita para usar por dentro ou por fora da calça. Mangas longas com punho simples e botões discretos.",
    composition: "A preencher — incluir a ficha técnica de composição do tecido.",
    care: "A preencher — incluir as instruções de lavagem da etiqueta da peça.",
    measurementsNote: "Tabela de medidas a confirmar com a produção.",
    main: "https://readdy.ai/api/search-image?query=Short%20collar%20button%20up%20shirt%20neatly%20presented%20centered%20on%20a%20seamless%20warm%20ivory%20studio%20background%2C%20quiet%20luxury%20editorial%20product%20photography%2C%20soft%20diffused%20daylight%2C%20muted%20warm%20neutral%20palette%2C%20no%20props%2C%20minimal%20styling%2C%20high%20detail&width=1200&height=1200&seq=trama-cam-02-main&orientation=squarish",
    worn: "https://readdy.ai/api/search-image?query=Model%20wearing%20a%20short%20collar%20button%20up%20shirt%20tucked%20into%20tailored%20trousers%2C%20cropped%20at%20the%20torso%20and%20neck%2C%20warm%20minimal%20interior%20with%20soft%20daylight%2C%20quiet%20luxury%20fashion%20editorial%20photography%2C%20muted%20warm%20neutral%20palette&width=1200&height=1200&seq=trama-cam-02-worn&orientation=squarish",
    detail: "https://readdy.ai/api/search-image?query=Extreme%20close%20up%20of%20a%20short%20shirt%20collar%20and%20first%20button%2C%20soft%20fabric%20texture%2C%20warm%20neutral%20tones%2C%20soft%20directional%20daylight%2C%20quiet%20luxury%20editorial%20textile%20photography%2C%20shallow%20depth%20of%20field&width=1200&height=1200&seq=trama-cam-02-detail&orientation=squarish",
  },
  {
    id: "c3",
    slug: "camisa-manga-longa-essencial",
    name: "Camisa Manga Longa Essencial",
    category: "camisas",
    categoryLabel: "Camisa",
    colors: [
      { name: "Areia", hex: "#D8CCB6" },
      { name: "Musgo", hex: "#5A5B45" },
    ],
    sizes: SIZES,
    price: 310,
    currency: "R$",
    inStock: true,
    shortDescription: "A camisa de todo dia: reta, limpa e sem excesso.",
    description:
      "Corte levemente reto com mangas longas e punho de um botão. Sem bolso e sem detalhes aparentes, para sobrepor a uma camiseta ou usar sozinha no dia a dia.",
    composition: "A preencher — incluir a ficha técnica de composição do tecido.",
    care: "A preencher — incluir as instruções de lavagem da etiqueta da peça.",
    measurementsNote: "Tabela de medidas a confirmar com a produção.",
    main: "https://readdy.ai/api/search-image?query=Classic%20long%20sleeve%20button%20up%20shirt%20in%20a%20soft%20muted%20tone%20shown%20centered%20on%20a%20seamless%20warm%20ivory%20studio%20background%2C%20quiet%20luxury%20editorial%20product%20photography%2C%20soft%20diffused%20daylight%2C%20muted%20warm%20neutral%20palette%2C%20no%20props%2C%20minimal%20styling&width=1200&height=1200&seq=trama-cam-03-main&orientation=squarish",
    worn: "https://readdy.ai/api/search-image?query=Model%20wearing%20a%20classic%20long%20sleeve%20shirt%20with%20the%20cuff%20visible%20at%20the%20wrist%2C%20cropped%20at%20the%20torso%2C%20warm%20minimal%20interior%20with%20soft%20daylight%2C%20quiet%20luxury%20fashion%20editorial%20photography%2C%20muted%20warm%20neutral%20palette&width=1200&height=1200&seq=trama-cam-03-worn&orientation=squarish",
    detail: "https://readdy.ai/api/search-image?query=Close%20up%20of%20a%20shirt%20cuff%20and%20single%20button%20placket%20detail%20on%20woven%20fabric%2C%20warm%20neutral%20tones%2C%20soft%20directional%20daylight%2C%20quiet%20luxury%20editorial%20textile%20photography%2C%20shallow%20depth%20of%20field&width=1200&height=1200&seq=trama-cam-03-detail&orientation=squarish",
  },
  {
    id: "c4",
    slug: "camisa-com-bolso-chapa",
    name: "Camisa com Bolso Chapa",
    category: "camisas",
    categoryLabel: "Camisa",
    colors: [
      { name: "Terra", hex: "#6B4A34" },
      { name: "Off-white", hex: "#EFE9DD" },
    ],
    sizes: SIZES,
    price: 360,
    currency: "R$",
    isNew: true,
    inStock: true,
    shortDescription: "Bolso chapa no peito e ombros estruturados.",
    description:
      "Ombros estruturados e um bolso chapa aplicado no peito, com duas costuras aparentes. Um detalhe utilitário tratado com contenção, para usar aberta com uma base neutra.",
    composition: "A preencher — incluir a ficha técnica de composição do tecido.",
    care: "A preencher — incluir as instruções de lavagem da etiqueta da peça.",
    measurementsNote: "Tabela de medidas a confirmar com a produção.",
    main: "https://readdy.ai/api/search-image?query=Button%20up%20shirt%20with%20a%20single%20patch%20chest%20pocket%20shown%20centered%20on%20a%20seamless%20warm%20ivory%20studio%20background%2C%20quiet%20luxury%20editorial%20product%20photography%2C%20soft%20diffused%20daylight%2C%20muted%20warm%20neutral%20palette%2C%20no%20props%2C%20minimal%20styling&width=1200&height=1200&seq=trama-cam-04-main&orientation=squarish",
    worn: "https://readdy.ai/api/search-image?query=Model%20wearing%20a%20button%20up%20shirt%20with%20a%20patch%20chest%20pocket%20over%20a%20relaxed%20outfit%2C%20cropped%20at%20the%20torso%2C%20warm%20minimal%20interior%20with%20soft%20daylight%2C%20quiet%20luxury%20fashion%20editorial%20photography%2C%20muted%20warm%20neutral%20palette&width=1200&height=1200&seq=trama-cam-04-worn&orientation=squarish",
    detail: "https://readdy.ai/api/search-image?query=Close%20up%20of%20a%20patch%20chest%20pocket%20and%20visible%20topstitching%20on%20a%20woven%20shirt%2C%20warm%20neutral%20tones%2C%20soft%20directional%20daylight%2C%20quiet%20luxury%20editorial%20textile%20photography%2C%20shallow%20depth%20of%20field&width=1200&height=1200&seq=trama-cam-04-detail&orientation=squarish",
  },
  {
    id: "p1",
    slug: "polo-essencial",
    name: "Polo Essencial",
    category: "polos",
    categoryLabel: "Polo",
    colors: [
      { name: "Off-white", hex: "#EFE9DD" },
      { name: "Carvão", hex: "#2A2724" },
    ],
    sizes: SIZES,
    price: 290,
    currency: "R$",
    inStock: true,
    shortDescription: "Polo de três botões com gola limpa e caimento reto.",
    description:
      "Gola limpa e carcela de três botões, com manga curta e barra reta. Uma peça simples de sobrepor: fica bem sozinha ou por baixo de uma camisa aberta.",
    composition: "A preencher — incluir a ficha técnica de composição do tecido.",
    care: "A preencher — incluir as instruções de lavagem da etiqueta da peça.",
    measurementsNote: "Tabela de medidas a confirmar com a produção.",
    main: "https://readdy.ai/api/search-image?query=Short%20sleeve%20polo%20shirt%20with%20a%20three%20button%20placket%20shown%20flat%20centered%20on%20a%20seamless%20warm%20ivory%20studio%20background%2C%20quiet%20luxury%20editorial%20product%20photography%2C%20soft%20diffused%20daylight%2C%20muted%20warm%20neutral%20palette%2C%20no%20props%2C%20minimal%20styling&width=1200&height=1200&seq=trama-pol-01-main&orientation=squarish",
    worn: "https://readdy.ai/api/search-image?query=Model%20wearing%20a%20short%20sleeve%20polo%20shirt%20with%20a%20three%20button%20placket%2C%20cropped%20at%20the%20torso%2C%20warm%20minimal%20interior%20with%20soft%20daylight%2C%20quiet%20luxury%20fashion%20editorial%20photography%2C%20muted%20warm%20neutral%20palette&width=1200&height=1200&seq=trama-pol-01-worn&orientation=squarish",
    detail: "https://readdy.ai/api/search-image?query=Close%20up%20of%20a%20polo%20shirt%20three%20button%20placket%20and%20ribbed%20collar%2C%20warm%20neutral%20tones%2C%20soft%20directional%20daylight%2C%20quiet%20luxury%20editorial%20textile%20photography%2C%20shallow%20depth%20of%20field&width=1200&height=1200&seq=trama-pol-01-detail&orientation=squarish",
  },
  {
    id: "p2",
    slug: "polo-gola-canelada",
    name: "Polo Gola Canelada",
    category: "polos",
    categoryLabel: "Polo",
    colors: [
      { name: "Areia", hex: "#D8CCB6" },
      { name: "Terracota", hex: "#A85B3C" },
    ],
    sizes: SIZES,
    price: 300,
    currency: "R$",
    isNew: true,
    inStock: true,
    shortDescription: "Gola canelada e punhos com acabamento em ribana.",
    description:
      "Gola canelada e acabamento em ribana na barra das mangas e do corpo, com um caimento mais encorpado. Pensada para usar fechada, com a gola em pé.",
    composition: "A preencher — incluir a ficha técnica de composição do tecido.",
    care: "A preencher — incluir as instruções de lavagem da etiqueta da peça.",
    measurementsNote: "Tabela de medidas a confirmar com a produção.",
    main: "https://readdy.ai/api/search-image?query=Short%20sleeve%20polo%20shirt%20with%20a%20ribbed%20knitted%20collar%20shown%20centered%20on%20a%20seamless%20warm%20ivory%20studio%20background%2C%20quiet%20luxury%20editorial%20product%20photography%2C%20soft%20diffused%20daylight%2C%20muted%20warm%20neutral%20palette%2C%20no%20props%2C%20minimal%20styling&width=1200&height=1200&seq=trama-pol-02-main&orientation=squarish",
    worn: "https://readdy.ai/api/search-image?query=Model%20wearing%20a%20polo%20shirt%20with%20a%20ribbed%20knitted%20collar%20worn%20closed%2C%20cropped%20at%20the%20torso%20and%20neck%2C%20warm%20minimal%20interior%20with%20soft%20daylight%2C%20quiet%20luxury%20fashion%20editorial%20photography%2C%20muted%20warm%20neutral%20palette&width=1200&height=1200&seq=trama-pol-02-worn&orientation=squarish",
    detail: "https://readdy.ai/api/search-image?query=Extreme%20close%20up%20of%20a%20ribbed%20knitted%20polo%20collar%20with%20visible%20knit%20texture%2C%20warm%20neutral%20tones%2C%20soft%20directional%20daylight%2C%20quiet%20luxury%20editorial%20textile%20photography%2C%20shallow%20depth%20of%20field&width=1200&height=1200&seq=trama-pol-02-detail&orientation=squarish",
  },
  {
    id: "p3",
    slug: "polo-manga-curta-ajustada",
    name: "Polo Manga Curta Ajustada",
    category: "polos",
    categoryLabel: "Polo",
    colors: [
      { name: "Musgo", hex: "#5A5B45" },
      { name: "Off-white", hex: "#EFE9DD" },
    ],
    sizes: SIZES,
    price: 310,
    currency: "R$",
    inStock: true,
    shortDescription: "Silhueta mais justa, com manga curta e barra reta.",
    description:
      "Silhueta mais próxima do corpo, manga curta com ribana fina e barra reta na altura do quadril. Uma versão mais enxuta do polo clássico, para usar sozinha.",
    composition: "A preencher — incluir a ficha técnica de composição do tecido.",
    care: "A preencher — incluir as instruções de lavagem da etiqueta da peça.",
    measurementsNote: "Tabela de medidas a confirmar com a produção.",
    main: "https://readdy.ai/api/search-image?query=Fitted%20short%20sleeve%20polo%20shirt%20with%20a%20slim%20silhouette%20shown%20centered%20on%20a%20seamless%20warm%20ivory%20studio%20background%2C%20quiet%20luxury%20editorial%20product%20photography%2C%20soft%20diffused%20daylight%2C%20muted%20warm%20neutral%20palette%2C%20no%20props%2C%20minimal%20styling&width=1200&height=1200&seq=trama-pol-03-main&orientation=squarish",
    worn: "https://readdy.ai/api/search-image?query=Model%20wearing%20a%20fitted%20short%20sleeve%20polo%20with%20a%20slim%20silhouette%2C%20cropped%20at%20the%20torso%2C%20warm%20minimal%20interior%20with%20soft%20daylight%2C%20quiet%20luxury%20fashion%20editorial%20photography%2C%20muted%20warm%20neutral%20palette&width=1200&height=1200&seq=trama-pol-03-worn&orientation=squarish",
    detail: "https://readdy.ai/api/search-image?query=Close%20up%20of%20a%20fitted%20polo%20sleeve%20hem%20with%20fine%20ribbed%20edge%20on%20knit%20fabric%2C%20warm%20neutral%20tones%2C%20soft%20directional%20daylight%2C%20quiet%20luxury%20editorial%20textile%20photography%2C%20shallow%20depth%20of%20field&width=1200&height=1200&seq=trama-pol-03-detail&orientation=squarish",
  },
  {
    id: "p4",
    slug: "polo-linha-leve",
    name: "Polo Linha Leve",
    category: "polos",
    categoryLabel: "Polo",
    colors: [
      { name: "Branco", hex: "#F3F0E9" },
      { name: "Carvão", hex: "#2A2724" },
    ],
    sizes: SIZES,
    price: 280,
    currency: "R$",
    inStock: true,
    shortDescription: "Construção leve e limpa, sem detalhes aparentes.",
    description:
      "Construção leve e limpa, com gola baixa, manga curta e barra reta. Sem detalhes aparentes, para usar em dias quentes como peça única.",
    composition: "A preencher — incluir a ficha técnica de composição do tecido.",
    care: "A preencher — incluir as instruções de lavagem da etiqueta da peça.",
    measurementsNote: "Tabela de medidas a confirmar com a produção.",
    main: "https://readdy.ai/api/search-image?query=Lightweight%20short%20sleeve%20polo%20shirt%20with%20a%20clean%20minimal%20design%20shown%20centered%20on%20a%20seamless%20warm%20ivory%20studio%20background%2C%20quiet%20luxury%20editorial%20product%20photography%2C%20soft%20diffused%20daylight%2C%20muted%20warm%20neutral%20palette%2C%20no%20props%2C%20minimal%20styling&width=1200&height=1200&seq=trama-pol-04-main&orientation=squarish",
    worn: "https://readdy.ai/api/search-image?query=Model%20wearing%20a%20lightweight%20short%20sleeve%20polo%20in%20a%20bright%20minimal%20interior%20with%20soft%20daylight%2C%20cropped%20at%20the%20torso%2C%20quiet%20luxury%20fashion%20editorial%20photography%2C%20muted%20warm%20neutral%20palette&width=1200&height=1200&seq=trama-pol-04-worn&orientation=squarish",
    detail: "https://readdy.ai/api/search-image?query=Close%20up%20of%20lightweight%20knit%20fabric%20surface%20on%20a%20polo%20shirt%2C%20warm%20neutral%20tones%2C%20soft%20directional%20daylight%2C%20quiet%20luxury%20editorial%20textile%20photography%2C%20shallow%20depth%20of%20field&width=1200&height=1200&seq=trama-pol-04-detail&orientation=squarish",
  },
];

export const getProductList = products;