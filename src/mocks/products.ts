/**
 * CATÁLOGO EDITÁVEL — linha Chambre Quatre (TRAMA).
 *
 * Todos os campos abaixo são DADOS DE EXEMPLO, editáveis:
 *  - preços em reais são valores de demonstração (não são condição comercial);
 *  - estoque é um booleano de demonstração;
 *  - `fabric`, `composition`, `care` e `measurementsNote` estão marcados como
 *    "a preencher" para que nenhuma informação de produção seja inventada.
 *
 * Tecidos e caimentos descrevem o TIPO da peça (linho, alfaiataria, tricô...)
 * sem afirmar composição percentual, origem ou certificação.
 */

export type CategorySlug =
  | "malhas"
  | "polos"
  | "camisas-de-linho"
  | "calcas"
  | "bermudas"
  | "conjuntos"
  | "casacos"
  | "mocassins"
  | "sapatos"
  | "acessorios";

export type ProductColor = { name: string; hex: string };

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  categoryLabel: string;
  type: string;
  fit: string;
  fabric: string;
  colors: ProductColor[];
  sizes: string[];
  /** Preço de exemplo em reais. Use null quando ainda não houver preço. */
  price: number | null;
  isNew?: boolean;
  bestSeller?: boolean;
  linen?: boolean;
  inStock: boolean;
  shortDescription: string;
  description: string;
  composition: string;
  care: string;
  measurementsNote: string;
  main: string;
  alt: string;
};

export const APPAREL_SIZES = ["PP", "P", "M", "G", "GG"];
export const SHOE_SIZES = ["38", "39", "40", "41", "42", "43", "44"];
export const ONE_SIZE = ["Único"];

const PENDING_COMPOSITION = "A preencher — composição oficial do tecido.";
const PENDING_CARE = "A preencher — instruções da etiqueta da peça.";
const PENDING_MEASURES = "Tabela de medidas a confirmar com a produção.";

export const products: Product[] = [
  /* ---------------------------------- MALHAS --------------------------------- */
  {
    id: "m1",
    slug: "malha-trancada-zip-marinho",
    name: "Malha Trançada com Zíper",
    category: "malhas",
    categoryLabel: "Malhas",
    type: "Malha de tricô",
    fit: "Regular, gola alta com zíper curto",
    fabric: "Tricô trançado (composição a confirmar)",
    colors: [
      { name: "Marfim", hex: "#EDE4D3" },
      { name: "Areia", hex: "#D9CBB2" },
      { name: "Marinho", hex: "#1F2A44" },
    ],
    sizes: APPAREL_SIZES,
    price: 489,
    bestSeller: true,
    inStock: true,
    shortDescription: "Tricô trançado com gola alta e zíper curto no peito.",
    description:
      "Malha de tricô trançado com gola alta e zíper curto, pensada para dias frios sem excesso de volume. Punhos e barra em ribana, comprimento na altura do quadril.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=cream%20cable%20knit%20sweater%20with%20a%20short%20zip%20collar%20displayed%20flat%20centered%20on%20a%20seamless%20warm%20beige%20studio%20background%2C%20quiet%20old%20money%20menswear%20product%20photography%2C%20soft%20diffused%20daylight%2C%20no%20props&width=1200&height=1200&seq=trama-malha-trancada-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=model%20wearing%20a%20cream%20cable%20knit%20zip%20neck%20sweater%20with%20tailored%20trousers%20in%20a%20calm%20warm%20stone%20interior%20with%20soft%20window%20light%2C%20editorial%20old%20money%20menswear%20campaign%2C%20cropped%20at%20the%20torso&width=1200&height=1200&seq=trama-malha-trancada-alt&orientation=squarish",
  },
  {
    id: "m2",
    slug: "malha-gola-redonda-marrom",
    name: "Malha Gola Redonda",
    category: "malhas",
    categoryLabel: "Malhas",
    type: "Malha de tricô",
    fit: "Reto, manga longa",
    fabric: "Tricô liso (composição a confirmar)",
    colors: [
      { name: "Marrom", hex: "#6B4A33" },
      { name: "Cinza", hex: "#8A8880" },
    ],
    sizes: APPAREL_SIZES,
    price: 429,
    inStock: true,
    shortDescription: "Tricô liso de gola redonda, manga longa e barra reta.",
    description:
      "Gola redonda baixa, manga longa e barra reta. Um tricô liso que funciona sozinho ou sobre uma camisa de colarinho aberto.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=brown%20crew%20neck%20knit%20sweater%20in%20a%20fine%20gauge%20displayed%20flat%20centered%20on%20a%20seamless%20warm%20beige%20studio%20background%2C%20quiet%20old%20money%20menswear%20product%20photography%2C%20soft%20diffused%20daylight%2C%20no%20props&width=1200&height=1200&seq=trama-malha-redonda-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=model%20wearing%20a%20brown%20crew%20neck%20knit%20sweater%20over%20a%20shirt%20collar%20in%20a%20warm%20minimal%20interior%2C%20editorial%20old%20money%20menswear%20photography%2C%20soft%20natural%20light%2C%20cropped%20at%20the%20torso&width=1200&height=1200&seq=trama-malha-redonda-alt&orientation=squarish",
  },
  {
    id: "m3",
    slug: "cardiga-trico-verde",
    name: "Cardigã de Tricô",
    category: "malhas",
    categoryLabel: "Malhas",
    type: "Cardigã",
    fit: "Regular, botões frontais",
    fabric: "Tricô encorpado (composição a confirmar)",
    colors: [
      { name: "Verde-escuro", hex: "#2F4636" },
      { name: "Marinho", hex: "#1F2A44" },
    ],
    sizes: APPAREL_SIZES,
    price: 549,
    isNew: true,
    inStock: true,
    shortDescription: "Cardigã de botões frontais em tricô encorpado.",
    description:
      "Cardigã de tricô encorpado com botões frontais, gola em ribana e bolsos discretos. Camada intermediária para sobrepor a camisa ou polo.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=dark%20green%20button%20front%20cardigan%20in%20a%20chunky%20knit%20displayed%20flat%20centered%20on%20a%20seamless%20warm%20beige%20studio%20background%2C%20quiet%20old%20money%20menswear%20product%20photography%2C%20soft%20daylight%2C%20no%20props&width=1200&height=1200&seq=trama-cardiga-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=model%20wearing%20a%20dark%20green%20knit%20cardigan%20over%20a%20white%20shirt%20in%20a%20warm%20stone%20interior%20with%20soft%20daylight%2C%20editorial%20old%20money%20menswear%20campaign%2C%20three%20quarter%20framing&width=1200&height=1200&seq=trama-cardiga-alt&orientation=squarish",
  },

  /* ----------------------------------- POLOS --------------------------------- */
  {
    id: "p1",
    slug: "polo-trico-canelada",
    name: "Polo Tricô Canelada",
    category: "polos",
    categoryLabel: "Polos",
    type: "Polo de tricô",
    fit: "Regular, gola canelada",
    fabric: "Tricô canelado (composição a confirmar)",
    colors: [
      { name: "Branco", hex: "#F4F1EA" },
      { name: "Areia", hex: "#D9CBB2" },
      { name: "Carvão", hex: "#2B2B2A" },
    ],
    sizes: APPAREL_SIZES,
    price: 349,
    bestSeller: true,
    inStock: true,
    shortDescription: "Polo de tricô com gola canelada e manga curta.",
    description:
      "Gola canelada e carcela curta, manga curta com acabamento em ribana. O caimento é reto, sem marcar o corpo — a peça que resolve o verão à noite.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=white%20knitted%20short%20sleeve%20polo%20shirt%20with%20ribbed%20collar%20displayed%20flat%20centered%20on%20a%20seamless%20warm%20beige%20studio%20background%2C%20quiet%20old%20money%20menswear%20product%20photography%2C%20soft%20diffused%20daylight%2C%20no%20props&width=1200&height=1200&seq=trama-polo-trico-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=model%20wearing%20a%20white%20knitted%20polo%20shirt%20with%20beige%20tailored%20trousers%20in%20a%20warm%20minimal%20interior%2C%20editorial%20old%20money%20menswear%20photography%2C%20soft%20natural%20daylight%2C%20cropped%20at%20waist&width=1200&height=1200&seq=trama-polo-trico-alt&orientation=squarish",
  },
  {
    id: "p2",
    slug: "polo-piquet-classica",
    name: "Polo Piquet Clássica",
    category: "polos",
    categoryLabel: "Polos",
    type: "Polo",
    fit: "Regular, três botões",
    fabric: "Piquet (composição a confirmar)",
    colors: [
      { name: "Marinho", hex: "#1F2A44" },
      { name: "Branco", hex: "#F4F1EA" },
      { name: "Verde-escuro", hex: "#2F4636" },
    ],
    sizes: APPAREL_SIZES,
    price: 299,
    inStock: true,
    shortDescription: "Polo de piquet com gola limpa e carcela de três botões.",
    description:
      "A polo de todo dia: piquet de toque seco, gola limpa, carcela de três botões e manga curta com ribana fina.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=navy%20pique%20polo%20shirt%20with%20a%20three%20button%20placket%20displayed%20flat%20centered%20on%20a%20seamless%20warm%20beige%20studio%20background%2C%20quiet%20old%20money%20menswear%20product%20photography%2C%20soft%20diffused%20daylight%2C%20no%20props&width=1200&height=1200&seq=trama-polo-piquet-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=model%20wearing%20a%20navy%20polo%20shirt%20with%20cream%20linen%20trousers%20in%20a%20sunlit%20stone%20courtyard%2C%20editorial%20old%20money%20menswear%20campaign%2C%20soft%20warm%20light%2C%20three%20quarter%20framing&width=1200&height=1200&seq=trama-polo-piquet-alt&orientation=squarish",
  },
  {
    id: "p3",
    slug: "polo-manga-longa-verde",
    name: "Polo Manga Longa",
    category: "polos",
    categoryLabel: "Polos",
    type: "Polo",
    fit: "Regular, manga longa",
    fabric: "Malha fina (composição a confirmar)",
    colors: [
      { name: "Verde-escuro", hex: "#2F4636" },
      { name: "Marrom", hex: "#6B4A33" },
    ],
    sizes: APPAREL_SIZES,
    price: 379,
    isNew: true,
    inStock: true,
    shortDescription: "Versão de manga longa da polo clássica, com punho em ribana.",
    description:
      "Polo de manga longa com punho em ribana e gola de dois botões. Meia-estação resolvida: mais formal que uma camiseta, mais leve que uma camisa.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=dark%20green%20long%20sleeve%20polo%20shirt%20with%20ribbed%20cuffs%20displayed%20flat%20centered%20on%20a%20seamless%20warm%20beige%20studio%20background%2C%20quiet%20old%20money%20menswear%20product%20photography%2C%20soft%20diffused%20daylight%2C%20no%20props&width=1200&height=1200&seq=trama-polo-longa-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=model%20wearing%20a%20dark%20green%20long%20sleeve%20polo%20shirt%20with%20pleated%20trousers%20in%20a%20warm%20wood%20panelled%20interior%2C%20editorial%20old%20money%20menswear%20photography%2C%20soft%20window%20light&width=1200&height=1200&seq=trama-polo-longa-alt&orientation=squarish",
  },

  /* ----------------------------- CAMISAS DE LINHO ---------------------------- */
  {
    id: "c1",
    slug: "camisa-de-linho-porto",
    name: "Camisa de Linho Porto",
    category: "camisas-de-linho",
    categoryLabel: "Camisas de linho",
    type: "Camisa",
    fit: "Amplo, ombro caído",
    fabric: "Linho (composição a confirmar)",
    colors: [
      { name: "Areia", hex: "#D9CBB2" },
      { name: "Branco", hex: "#F4F1EA" },
      { name: "Marinho", hex: "#1F2A44" },
      { name: "Verde-escuro", hex: "#2F4636" },
    ],
    sizes: APPAREL_SIZES,
    price: 429,
    bestSeller: true,
    linen: true,
    inStock: true,
    shortDescription: "Linho de corte amplo, colarinho aberto e manga longa.",
    description:
      "Ombros caídos e corpo amplo em linho, com colarinho aberto e manga longa que pode ser dobrada. A peça central da coleção de verão, para usar aberta sobre polo ou fechada com calça de alfaiataria.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=beige%20linen%20shirt%20with%20an%20open%20collar%20and%20relaxed%20fit%20displayed%20flat%20centered%20on%20a%20seamless%20warm%20sand%20studio%20background%2C%20quiet%20old%20money%20menswear%20product%20photography%2C%20soft%20daylight%2C%20no%20props&width=1200&height=1200&seq=trama-camisa-porto-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=model%20wearing%20a%20beige%20oversized%20linen%20shirt%20with%20light%20trousers%20in%20a%20sunlit%20stone%20terrace%2C%20editorial%20old%20money%20menswear%20campaign%2C%20warm%20soft%20daylight%2C%20cropped%20at%20thighs&width=1200&height=1200&seq=trama-camisa-porto-alt&orientation=squarish",
  },
  {
    id: "c2",
    slug: "camisa-de-linho-manga-curta",
    name: "Camisa de Linho Manga Curta",
    category: "camisas-de-linho",
    categoryLabel: "Camisas de linho",
    type: "Camisa",
    fit: "Reto, manga curta",
    fabric: "Linho leve (composição a confirmar)",
    colors: [
      { name: "Branco", hex: "#F4F1EA" },
      { name: "Marinho", hex: "#1F2A44" },
    ],
    sizes: APPAREL_SIZES,
    price: 389,
    linen: true,
    inStock: true,
    shortDescription: "Manga curta em linho leve, colarinho de ponta curta.",
    description:
      "Corte reto em linho leve, colarinho de ponta curta e manga curta com bainha simples. Pensada para calor: seca rápido e amassa de propósito.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=white%20short%20sleeve%20linen%20shirt%20with%20a%20short%20point%20collar%20displayed%20flat%20centered%20on%20a%20seamless%20warm%20sand%20studio%20background%2C%20quiet%20old%20money%20menswear%20product%20photography%2C%20soft%20daylight%2C%20no%20props&width=1200&height=1200&seq=trama-camisa-curta-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=model%20wearing%20a%20white%20short%20sleeve%20linen%20shirt%20with%20beige%20shorts%20by%20a%20pale%20plaster%20wall%20in%20summer%20light%2C%20editorial%20old%20money%20menswear%20campaign%2C%20relaxed%20framing&width=1200&height=1200&seq=trama-camisa-curta-alt&orientation=squarish",
  },
  {
    id: "c3",
    slug: "camisa-de-linho-com-bolso",
    name: "Camisa de Linho com Bolso",
    category: "camisas-de-linho",
    categoryLabel: "Camisas de linho",
    type: "Camisa",
    fit: "Regular, bolso chapa",
    fabric: "Linho encorpado (composição a confirmar)",
    colors: [
      { name: "Areia", hex: "#D9CBB2" },
      { name: "Marrom", hex: "#6B4A33" },
    ],
    sizes: APPAREL_SIZES,
    price: 449,
    isNew: true,
    linen: true,
    inStock: true,
    shortDescription: "Linho encorpado com bolso chapa aplicado no peito.",
    description:
      "Linho encorpado com bolso chapa no peito e costura aparente. Um detalhe utilitário tratado com contenção, sobre um corpo de corte reto.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=sand%20linen%20shirt%20with%20a%20single%20patch%20chest%20pocket%20displayed%20flat%20centered%20on%20a%20seamless%20warm%20beige%20studio%20background%2C%20quiet%20old%20money%20menswear%20product%20photography%2C%20soft%20daylight%2C%20no%20props&width=1200&height=1200&seq=trama-camisa-bolso-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=close%20up%20of%20a%20linen%20shirt%20patch%20pocket%20and%20topstitching%20detail%20in%20warm%20neutral%20tones%2C%20quiet%20luxury%20textile%20photography%2C%20soft%20directional%20daylight%2C%20shallow%20depth%20of%20field&width=1200&height=1200&seq=trama-camisa-bolso-alt&orientation=squarish",
  },

  /* ---------------------------------- CALÇAS --------------------------------- */
  {
    id: "k1",
    slug: "calca-alfaiataria-reta",
    name: "Calça de Alfaiataria Reta",
    category: "calcas",
    categoryLabel: "Calças",
    type: "Calça de alfaiataria",
    fit: "Reta, cintura média",
    fabric: "Alfaiataria (composição a confirmar)",
    colors: [
      { name: "Marinho", hex: "#1F2A44" },
      { name: "Carvão", hex: "#2B2B2A" },
      { name: "Areia", hex: "#D9CBB2" },
    ],
    sizes: APPAREL_SIZES,
    price: 519,
    bestSeller: true,
    inStock: true,
    shortDescription: "Reta do quadril à barra, com prega frontal discreta.",
    description:
      "Corte reto com cintura média, prega frontal discreta e barra que cai reta sobre o sapato. Combina com camisa de linho e mocassim.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=navy%20tailored%20straight%20leg%20trousers%20displayed%20flat%20centered%20on%20a%20seamless%20warm%20beige%20studio%20background%2C%20quiet%20old%20money%20menswear%20product%20photography%2C%20soft%20daylight%2C%20no%20props&width=1200&height=1200&seq=trama-calca-reta-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=model%20wearing%20navy%20straight%20tailored%20trousers%20with%20a%20beige%20linen%20shirt%20in%20a%20warm%20architectural%20interior%2C%20editorial%20old%20money%20menswear%20campaign%2C%20cropped%20at%20the%20torso&width=1200&height=1200&seq=trama-calca-reta-alt&orientation=squarish",
  },
  {
    id: "k2",
    slug: "calca-de-linho-larga",
    name: "Calça de Linho Larga",
    category: "calcas",
    categoryLabel: "Calças",
    type: "Calça de linho",
    fit: "Ampla, cintura com cordão",
    fabric: "Linho (composição a confirmar)",
    colors: [
      { name: "Areia", hex: "#D9CBB2" },
      { name: "Branco", hex: "#F4F1EA" },
      { name: "Marrom", hex: "#6B4A33" },
    ],
    sizes: APPAREL_SIZES,
    price: 469,
    linen: true,
    inStock: true,
    shortDescription: "Linho amplo com elástico e cordão na cintura.",
    description:
      "Perna ampla em linho, cintura com elástico e cordão, bolsos laterais. A peça de calor que não pede combinação: resolve com polo ou camisa aberta.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=sand%20wide%20leg%20linen%20trousers%20with%20a%20drawstring%20waist%20displayed%20flat%20centered%20on%20a%20seamless%20warm%20sand%20studio%20background%2C%20quiet%20old%20money%20menswear%20product%20photography%2C%20soft%20daylight%2C%20no%20props&width=1200&height=1200&seq=trama-calca-linho-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=model%20wearing%20wide%20sand%20linen%20trousers%20with%20a%20white%20polo%20in%20a%20sunlit%20plaster%20interior%2C%20editorial%20old%20money%20menswear%20campaign%2C%20warm%20soft%20daylight%2C%20cropped%20at%20waist&width=1200&height=1200&seq=trama-calca-linho-alt&orientation=squarish",
  },
  {
    id: "k3",
    slug: "calca-alfaiataria-pregas",
    name: "Calça de Alfaiataria com Pregas",
    category: "calcas",
    categoryLabel: "Calças",
    type: "Calça de alfaiataria",
    fit: "Ampla, duas pregas",
    fabric: "Alfaiataria leve (composição a confirmar)",
    colors: [
      { name: "Cinza", hex: "#8A8880" },
      { name: "Marinho", hex: "#1F2A44" },
    ],
    sizes: APPAREL_SIZES,
    price: 539,
    inStock: true,
    shortDescription: "Duas pregas frontais e perna ampla com barra limpa.",
    description:
      "Duas pregas frontais, cintura alta e perna ampla com barra limpa. Volume controlado, para equilibrar peças mais justas em cima.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=grey%20double%20pleated%20wide%20trousers%20displayed%20flat%20centered%20on%20a%20seamless%20warm%20beige%20studio%20background%2C%20quiet%20old%20money%20menswear%20product%20photography%2C%20soft%20daylight%2C%20no%20props&width=1200&height=1200&seq=trama-calca-pregas-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=model%20wearing%20grey%20pleated%20wide%20trousers%20with%20a%20brown%20knit%20polo%20in%20a%20warm%20minimal%20interior%2C%20editorial%20old%20money%20menswear%20photography%2C%20soft%20window%20light&width=1200&height=1200&seq=trama-calca-pregas-alt&orientation=squarish",
  },

  /* --------------------------------- BERMUDAS -------------------------------- */
  {
    id: "b1",
    slug: "bermuda-de-linho",
    name: "Bermuda de Linho",
    category: "bermudas",
    categoryLabel: "Bermudas",
    type: "Bermuda",
    fit: "Regular, acima do joelho",
    fabric: "Linho (composição a confirmar)",
    colors: [
      { name: "Areia", hex: "#D9CBB2" },
      { name: "Branco", hex: "#F4F1EA" },
      { name: "Verde-escuro", hex: "#2F4636" },
    ],
    sizes: APPAREL_SIZES,
    price: 329,
    linen: true,
    bestSeller: true,
    inStock: true,
    shortDescription: "Bermuda em linho com comprimento acima do joelho.",
    description:
      "Corte reto em linho, comprimento acima do joelho, cós com passantes e bolsos laterais. Para usar com polo de tricô e mocassim.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=sand%20linen%20shorts%20displayed%20flat%20centered%20on%20a%20seamless%20warm%20sand%20studio%20background%2C%20quiet%20old%20money%20menswear%20product%20photography%2C%20soft%20daylight%2C%20no%20props&width=1200&height=1200&seq=trama-bermuda-linho-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=model%20wearing%20sand%20linen%20shorts%20with%20a%20white%20linen%20shirt%20near%20a%20stone%20wall%20in%20summer%20light%2C%20editorial%20old%20money%20menswear%20campaign%2C%20cropped%20at%20knees&width=1200&height=1200&seq=trama-bermuda-linho-alt&orientation=squarish",
  },
  {
    id: "b2",
    slug: "bermuda-alfaiataria",
    name: "Bermuda de Alfaiataria",
    category: "bermudas",
    categoryLabel: "Bermudas",
    type: "Bermuda",
    fit: "Reto, cintura média",
    fabric: "Alfaiataria (composição a confirmar)",
    colors: [
      { name: "Marinho", hex: "#1F2A44" },
      { name: "Cinza", hex: "#8A8880" },
    ],
    sizes: APPAREL_SIZES,
    price: 349,
    inStock: true,
    shortDescription: "Bermuda de alfaiataria com barra limpa e prega discreta.",
    description:
      "Alfaiataria leve com prega frontal discreta e barra limpa. Substitui a calça em dias quentes sem perder a linha.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=navy%20tailored%20shorts%20with%20a%20clean%20hem%20displayed%20flat%20centered%20on%20a%20seamless%20warm%20beige%20studio%20background%2C%20quiet%20old%20money%20menswear%20product%20photography%2C%20soft%20daylight%2C%20no%20props&width=1200&height=1200&seq=trama-bermuda-alfaiataria-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=model%20wearing%20navy%20tailored%20shorts%20with%20a%20white%20knitted%20polo%20in%20a%20warm%20stone%20courtyard%2C%20editorial%20old%20money%20menswear%20photography%2C%20soft%20daylight%2C%20three%20quarter%20framing&width=1200&height=1200&seq=trama-bermuda-alfaiataria-alt&orientation=squarish",
  },
  {
    id: "b3",
    slug: "bermuda-sarja",
    name: "Bermuda de Sarja",
    category: "bermudas",
    categoryLabel: "Bermudas",
    type: "Bermuda",
    fit: "Regular, cinco bolsos",
    fabric: "Sarja (composição a confirmar)",
    colors: [
      { name: "Areia", hex: "#D9CBB2" },
      { name: "Marrom", hex: "#6B4A33" },
    ],
    sizes: APPAREL_SIZES,
    price: 299,
    inStock: false,
    shortDescription: "Sarja encorpada com modelagem de cinco bolsos.",
    description:
      "Sarja encorpada com modelagem de cinco bolsos e comprimento na altura do joelho. A bermuda mais informal da linha.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=sand%20cotton%20twill%20shorts%20with%20five%20pocket%20construction%20displayed%20flat%20centered%20on%20a%20seamless%20warm%20beige%20studio%20background%2C%20quiet%20menswear%20product%20photography%2C%20soft%20daylight%2C%20no%20props&width=1200&height=1200&seq=trama-bermuda-sarja-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=model%20wearing%20sand%20twill%20shorts%20with%20a%20navy%20polo%20shirt%20in%20a%20warm%20minimal%20interior%2C%20editorial%20menswear%20photography%2C%20soft%20daylight&width=1200&height=1200&seq=trama-bermuda-sarja-alt&orientation=squarish",
  },

  /* --------------------------------- CONJUNTOS ------------------------------- */
  {
    id: "j1",
    slug: "conjunto-de-linho",
    name: "Conjunto de Linho",
    category: "conjuntos",
    categoryLabel: "Conjuntos",
    type: "Conjunto (camisa + calça)",
    fit: "Amplo e reto",
    fabric: "Linho (composição a confirmar)",
    colors: [
      { name: "Areia", hex: "#D9CBB2" },
      { name: "Branco", hex: "#F4F1EA" },
    ],
    sizes: APPAREL_SIZES,
    price: 849,
    linen: true,
    bestSeller: true,
    inStock: true,
    shortDescription: "Camisa de linho e calça ampla no mesmo tecido.",
    description:
      "Conjunto completo em linho: camisa de colarinho aberto e calça ampla com cordão. Vendido como conjunto, no mesmo tom e no mesmo tecido.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=beige%20linen%20shirt%20and%20wide%20trousers%20set%20presented%20together%20flat%20on%20a%20seamless%20warm%20sand%20studio%20background%2C%20quiet%20old%20money%20menswear%20product%20photography%2C%20soft%20daylight%2C%20no%20props&width=1200&height=1200&seq=trama-conjunto-linho-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=model%20wearing%20a%20matching%20beige%20linen%20shirt%20and%20trousers%20set%20in%20a%20sunlit%20plaster%20corridor%2C%20editorial%20old%20money%20menswear%20campaign%2C%20warm%20soft%20daylight%2C%20full%20body&width=1200&height=1200&seq=trama-conjunto-linho-alt&orientation=squarish",
  },
  {
    id: "j2",
    slug: "conjunto-polo-e-bermuda",
    name: "Conjunto Polo e Bermuda",
    category: "conjuntos",
    categoryLabel: "Conjuntos",
    type: "Conjunto (polo + bermuda)",
    fit: "Regular e reto",
    fabric: "Piquet e sarja (composição a confirmar)",
    colors: [
      { name: "Marinho", hex: "#1F2A44" },
      { name: "Areia", hex: "#D9CBB2" },
    ],
    sizes: APPAREL_SIZES,
    price: 599,
    inStock: true,
    shortDescription: "Polo de piquet com bermuda de alfaiataria no mesmo tom.",
    description:
      "Conjunto de verão: polo de piquet e bermuda de alfaiataria no mesmo tom. Pensado para viagem — duas peças que funcionam juntas ou separadas.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=navy%20polo%20shirt%20and%20matching%20tailored%20shorts%20folded%20neatly%20on%20a%20seamless%20warm%20beige%20studio%20background%2C%20quiet%20old%20money%20menswear%20product%20photography%2C%20soft%20daylight%2C%20no%20props&width=1200&height=1200&seq=trama-conjunto-polo-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=model%20wearing%20a%20navy%20polo%20and%20navy%20shorts%20set%20by%20a%20swimming%20pool%20in%20soft%20evening%20light%2C%20editorial%20old%20money%20menswear%20campaign%2C%20relaxed%20full%20body%20framing&width=1200&height=1200&seq=trama-conjunto-polo-alt&orientation=squarish",
  },
  {
    id: "j3",
    slug: "conjunto-malha-e-calca",
    name: "Conjunto Malha e Calça",
    category: "conjuntos",
    categoryLabel: "Conjuntos",
    type: "Conjunto (malha + calça)",
    fit: "Regular e reto",
    fabric: "Tricô e alfaiataria (composição a confirmar)",
    colors: [
      { name: "Marrom", hex: "#6B4A33" },
      { name: "Carvão", hex: "#2B2B2A" },
    ],
    sizes: APPAREL_SIZES,
    price: 899,
    isNew: true,
    inStock: true,
    shortDescription: "Malha de gola redonda com calça de alfaiataria no mesmo tom.",
    description:
      "Conjunto de meia-estação: malha de gola redonda e calça reta de alfaiataria no mesmo tom. Combinação pronta para jantar sem esforço.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=brown%20knit%20sweater%20and%20matching%20brown%20tailored%20trousers%20presented%20together%20on%20a%20seamless%20warm%20beige%20studio%20background%2C%20quiet%20old%20money%20menswear%20product%20photography%2C%20soft%20daylight&width=1200&height=1200&seq=trama-conjunto-malha-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=model%20wearing%20a%20brown%20knit%20sweater%20with%20matching%20brown%20trousers%20in%20a%20warm%20wood%20interior%2C%20editorial%20old%20money%20menswear%20campaign%2C%20soft%20evening%20light%2C%20full%20body&width=1200&height=1200&seq=trama-conjunto-malha-alt&orientation=squarish",
  },

  /* --------------------------------- CASACOS --------------------------------- */
  {
    id: "o1",
    slug: "casaco-de-linho",
    name: "Casaco de Linho",
    category: "casacos",
    categoryLabel: "Casacos",
    type: "Casaco",
    fit: "Reto, abaixo do quadril",
    fabric: "Linho (composição a confirmar)",
    colors: [
      { name: "Areia", hex: "#D9CBB2" },
      { name: "Marinho", hex: "#1F2A44" },
    ],
    sizes: APPAREL_SIZES,
    price: 899,
    isNew: true,
    linen: true,
    inStock: true,
    shortDescription: "Casaco leve de linho com botões frontais.",
    description:
      "Casaco leve em linho, comprimento abaixo do quadril, botões frontais e bolsos embutidos. Para as noites de verão e o começo do outono.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=beige%20linen%20overcoat%20with%20front%20buttons%20displayed%20on%20a%20hanger%20against%20a%20seamless%20warm%20sand%20studio%20wall%2C%20quiet%20old%20money%20menswear%20product%20photography%2C%20soft%20daylight&width=1200&height=1200&seq=trama-casaco-linho-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=model%20wearing%20a%20beige%20linen%20coat%20over%20a%20white%20shirt%20and%20trousers%20in%20a%20quiet%20stone%20street%2C%20editorial%20old%20money%20menswear%20campaign%2C%20warm%20soft%20daylight&width=1200&height=1200&seq=trama-casaco-linho-alt&orientation=squarish",
  },
  {
    id: "o2",
    slug: "sobretudo-de-la",
    name: "Sobretudo de Lã",
    category: "casacos",
    categoryLabel: "Casacos",
    type: "Sobretudo",
    fit: "Reto, longo",
    fabric: "Lã (composição a confirmar)",
    colors: [
      { name: "Cinza", hex: "#8A8880" },
      { name: "Marinho", hex: "#1F2A44" },
    ],
    sizes: APPAREL_SIZES,
    price: 1290,
    inStock: true,
    shortDescription: "Sobretudo longo em lã com gola de lapela.",
    description:
      "Sobretudo longo em lã, gola de lapela e dois botões. A peça de inverno que fecha looks de camisa, malha e alfaiataria.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=grey%20wool%20overcoat%20with%20notch%20lapels%20displayed%20on%20a%20hanger%20against%20a%20seamless%20warm%20beige%20studio%20wall%2C%20quiet%20old%20money%20menswear%20product%20photography%2C%20soft%20daylight&width=1200&height=1200&seq=trama-sobretudo-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=model%20wearing%20a%20grey%20wool%20overcoat%20over%20a%20navy%20knit%20and%20trousers%20in%20a%20quiet%20city%20street%20in%20winter%20light%2C%20editorial%20old%20money%20menswear%20campaign&width=1200&height=1200&seq=trama-sobretudo-alt&orientation=squarish",
  },
  {
    id: "o3",
    slug: "blazer-de-alfaiataria",
    name: "Blazer de Alfaiataria",
    category: "casacos",
    categoryLabel: "Casacos",
    type: "Blazer",
    fit: "Reto, um botão",
    fabric: "Alfaiataria (composição a confirmar)",
    colors: [
      { name: "Marinho", hex: "#1F2A44" },
      { name: "Marrom", hex: "#6B4A33" },
    ],
    sizes: APPAREL_SIZES,
    price: 1090,
    inStock: true,
    shortDescription: "Blazer de um botão, lapela estreita e bolsos com aba.",
    description:
      "Blazer de alfaiataria com um botão, lapela estreita e bolsos com aba. Estruturado o suficiente para jantar, solto o suficiente para usar com calça de linho.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=navy%20single%20breasted%20blazer%20with%20narrow%20lapels%20displayed%20on%20a%20hanger%20against%20a%20seamless%20warm%20beige%20studio%20wall%2C%20quiet%20old%20money%20menswear%20product%20photography%2C%20soft%20daylight&width=1200&height=1200&seq=trama-blazer-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=model%20wearing%20a%20navy%20blazer%20over%20a%20white%20shirt%20with%20linen%20trousers%20in%20a%20warm%20restaurant%20interior%2C%20editorial%20old%20money%20menswear%20campaign%2C%20evening%20light&width=1200&height=1200&seq=trama-blazer-alt&orientation=squarish",
  },

  /* -------------------------------- MOCASSINS -------------------------------- */
  {
    id: "s1",
    slug: "mocassim-de-couro",
    name: "Mocassim de Couro",
    category: "mocassins",
    categoryLabel: "Mocassins",
    type: "Mocassim",
    fit: "Bico arredondado, sem cadarço",
    fabric: "Couro (composição a confirmar)",
    colors: [
      { name: "Marrom", hex: "#6B4A33" },
      { name: "Preto", hex: "#1A1A18" },
    ],
    sizes: SHOE_SIZES,
    price: 649,
    bestSeller: true,
    inStock: true,
    shortDescription: "Mocassim de couro liso com sola baixa.",
    description:
      "Mocassim de couro liso, sem cadarço, com sola baixa e forro interno. O sapato que resolve bermuda de linho e calça de alfaiataria.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=brown%20leather%20penny%20loafer%20shown%20at%20a%20three%20quarter%20angle%20on%20a%20seamless%20warm%20beige%20studio%20background%2C%20quiet%20old%20money%20footwear%20product%20photography%2C%20soft%20daylight%2C%20no%20props&width=1200&height=1200&seq=trama-mocassim-couro-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=close%20up%20of%20a%20brown%20leather%20loafer%20worn%20with%20sand%20linen%20trousers%20on%20a%20stone%20floor%2C%20editorial%20old%20money%20menswear%20detail%20photography%2C%20soft%20natural%20light&width=1200&height=1200&seq=trama-mocassim-couro-alt&orientation=squarish",
  },
  {
    id: "s2",
    slug: "mocassim-canoa",
    name: "Mocassim Canoa",
    category: "mocassins",
    categoryLabel: "Mocassins",
    type: "Mocassim",
    fit: "Canoa, costura aparente",
    fabric: "Couro (composição a confirmar)",
    colors: [
      { name: "Marinho", hex: "#1F2A44" },
      { name: "Marrom", hex: "#6B4A33" },
    ],
    sizes: SHOE_SIZES,
    price: 699,
    inStock: true,
    shortDescription: "Mocassim canoa com costura aparente no cabedal.",
    description:
      "Modelo canoa com costura aparente no cabedal e traseira dobrável. Mais descontraído que o mocassim liso, sem perder a linha.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=navy%20suede%20boat%20loafer%20with%20visible%20stitching%20shown%20at%20a%20three%20quarter%20angle%20on%20a%20seamless%20warm%20beige%20studio%20background%2C%20quiet%20old%20money%20footwear%20product%20photography%2C%20soft%20daylight&width=1200&height=1200&seq=trama-mocassim-canoa-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=model%20wearing%20navy%20suede%20loafers%20with%20sand%20linen%20trousers%20on%20a%20pale%20stone%20step%2C%20editorial%20old%20money%20menswear%20detail%20photography%2C%20warm%20daylight&width=1200&height=1200&seq=trama-mocassim-canoa-alt&orientation=squarish",
  },
  {
    id: "s3",
    slug: "mocassim-sola-borracha",
    name: "Mocassim com Sola de Borracha",
    category: "mocassins",
    categoryLabel: "Mocassins",
    type: "Mocassim",
    fit: "Bico arredondado, sola tratorada",
    fabric: "Couro (composição a confirmar)",
    colors: [
      { name: "Marrom", hex: "#6B4A33" },
      { name: "Preto", hex: "#1A1A18" },
    ],
    sizes: SHOE_SIZES,
    price: 679,
    isNew: true,
    inStock: true,
    shortDescription: "Mocassim de couro com sola de borracha aderente.",
    description:
      "Mesmo cabedal de couro do mocassim liso, com sola de borracha. Para cidade e chuva, sem trocar o sapato.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=brown%20leather%20loafer%20with%20a%20chunky%20rubber%20sole%20shown%20at%20a%20three%20quarter%20angle%20on%20a%20seamless%20warm%20beige%20studio%20background%2C%20quiet%20menswear%20footwear%20product%20photography%2C%20soft%20daylight&width=1200&height=1200&seq=trama-mocassim-borracha-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=close%20up%20of%20a%20brown%20leather%20loafer%20with%20rubber%20sole%20worn%20on%20wet%20cobblestone%2C%20editorial%20menswear%20detail%20photography%2C%20soft%20overcast%20daylight&width=1200&height=1200&seq=trama-mocassim-borracha-alt&orientation=squarish",
  },

  /* ------------------------------ OUTROS SAPATOS ----------------------------- */
  {
    id: "s4",
    slug: "derby-de-couro",
    name: "Derby de Couro",
    category: "sapatos",
    categoryLabel: "Outros sapatos",
    type: "Sapato derby",
    fit: "Bico arredondado, cadarço",
    fabric: "Couro (composição a confirmar)",
    colors: [
      { name: "Marrom", hex: "#6B4A33" },
      { name: "Preto", hex: "#1A1A18" },
    ],
    sizes: SHOE_SIZES,
    price: 749,
    inStock: true,
    shortDescription: "Derby de couro com cadarço e sola fina.",
    description:
      "Derby de couro com cadarço aberto e sola fina. A opção mais formal da seleção de sapatos, para usar com alfaiataria.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=brown%20leather%20derby%20shoes%20shown%20at%20a%20three%20quarter%20angle%20on%20a%20seamless%20warm%20beige%20studio%20background%2C%20quiet%20old%20money%20footwear%20product%20photography%2C%20soft%20daylight%2C%20no%20props&width=1200&height=1200&seq=trama-derby-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=close%20up%20of%20brown%20leather%20derby%20shoes%20worn%20with%20grey%20tailored%20trousers%2C%20editorial%20menswear%20detail%20photography%2C%20soft%20directional%20daylight&width=1200&height=1200&seq=trama-derby-alt&orientation=squarish",
  },
  {
    id: "s5",
    slug: "tenis-de-couro-minimal",
    name: "Tênis de Couro Minimal",
    category: "sapatos",
    categoryLabel: "Outros sapatos",
    type: "Tênis",
    fit: "Baixo, cadarço",
    fabric: "Couro liso (composição a confirmar)",
    colors: [
      { name: "Branco", hex: "#F4F1EA" },
      { name: "Areia", hex: "#D9CBB2" },
    ],
    sizes: SHOE_SIZES,
    price: 599,
    inStock: true,
    shortDescription: "Tênis de couro liso, sem logo e com sola discreta.",
    description:
      "Tênis de couro liso, sem detalhes aparentes, com sola fina na cor do cabedal. Para os dias em que o mocassim é demais.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=white%20minimal%20leather%20sneaker%20with%20a%20slim%20sole%20shown%20at%20a%20three%20quarter%20angle%20on%20a%20seamless%20warm%20beige%20studio%20background%2C%20quiet%20menswear%20footwear%20product%20photography%2C%20soft%20daylight&width=1200&height=1200&seq=trama-tenis-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=white%20leather%20sneakers%20worn%20with%20beige%20linen%20trousers%20on%20a%20light%20stone%20floor%2C%20editorial%20old%20money%20menswear%20detail%20photography%2C%20soft%20daylight&width=1200&height=1200&seq=trama-tenis-alt&orientation=squarish",
  },
  {
    id: "s6",
    slug: "sandalia-de-tiras",
    name: "Sandália de Tiras",
    category: "sapatos",
    categoryLabel: "Outros sapatos",
    type: "Sandália",
    fit: "Tiras cruzadas, sola baixa",
    fabric: "Couro (composição a confirmar)",
    colors: [
      { name: "Marrom", hex: "#6B4A33" },
      { name: "Areia", hex: "#D9CBB2" },
    ],
    sizes: SHOE_SIZES,
    price: 449,
    inStock: false,
    shortDescription: "Sandália de tiras cruzadas em couro, sola baixa.",
    description:
      "Sandália de tiras cruzadas em couro com sola baixa. Peça de verão para usar com bermuda de linho.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=brown%20leather%20crossed%20strap%20sandal%20shown%20at%20a%20three%20quarter%20angle%20on%20a%20seamless%20warm%20sand%20studio%20background%2C%20quiet%20menswear%20footwear%20product%20photography%2C%20soft%20daylight%2C%20no%20props&width=1200&height=1200&seq=trama-sandalia-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=close%20up%20of%20brown%20leather%20strap%20sandals%20worn%20with%20linen%20shorts%20on%20a%20warm%20stone%20terrace%2C%20editorial%20summer%20menswear%20detail%20photography%2C%20soft%20daylight&width=1200&height=1200&seq=trama-sandalia-alt&orientation=squarish",
  },

  /* -------------------------------- ACESSÓRIOS ------------------------------- */
  {
    id: "a1",
    slug: "cinto-de-couro",
    name: "Cinto de Couro",
    category: "acessorios",
    categoryLabel: "Acessórios",
    type: "Cinto",
    fit: "Fivela simples, 3 cm",
    fabric: "Couro (composição a confirmar)",
    colors: [
      { name: "Marrom", hex: "#6B4A33" },
      { name: "Preto", hex: "#1A1A18" },
    ],
    sizes: ["85", "90", "95", "100"],
    price: 249,
    inStock: true,
    shortDescription: "Cinto de couro com fivela metálica simples.",
    description:
      "Cinto de couro com fivela simples e acabamento fosco. Largura média, pensada para calça de alfaiataria e bermuda.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=brown%20leather%20belt%20with%20a%20simple%20matte%20buckle%20coiled%20on%20a%20seamless%20warm%20beige%20studio%20background%2C%20quiet%20menswear%20accessory%20product%20photography%2C%20soft%20daylight&width=1200&height=1200&seq=trama-cinto-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=close%20up%20of%20a%20brown%20leather%20belt%20worn%20with%20navy%20tailored%20trousers%2C%20editorial%20menswear%20detail%20photography%2C%20soft%20daylight&width=1200&height=1200&seq=trama-cinto-alt&orientation=squarish",
  },
  {
    id: "a2",
    slug: "oculos-de-sol",
    name: "Óculos de Sol",
    category: "acessorios",
    categoryLabel: "Acessórios",
    type: "Óculos",
    fit: "Armação média, lentes escuras",
    fabric: "Acetato (composição a confirmar)",
    colors: [
      { name: "Marrom", hex: "#6B4A33" },
      { name: "Carvão", hex: "#2B2B2A" },
    ],
    sizes: ONE_SIZE,
    price: 359,
    isNew: true,
    inStock: true,
    shortDescription: "Óculos de sol de armação média com lentes escuras.",
    description:
      "Armação de acetato em tom sóbrio, com lentes escuras e hastes finas. Sem logo aparente.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=brown%20acetate%20sunglasses%20with%20dark%20lenses%20placed%20on%20a%20seamless%20warm%20beige%20studio%20background%2C%20quiet%20menswear%20accessory%20product%20photography%2C%20soft%20daylight%2C%20no%20props&width=1200&height=1200&seq=trama-oculos-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=close%20up%20of%20brown%20acetate%20sunglasses%20worn%20by%20a%20model%20in%20warm%20summer%20light%2C%20editorial%20old%20money%20menswear%20detail%20photography%2C%20shallow%20depth%20of%20field&width=1200&height=1200&seq=trama-oculos-alt&orientation=squarish",
  },
  {
    id: "a3",
    slug: "lenco-de-seda",
    name: "Lenço de Seda",
    category: "acessorios",
    categoryLabel: "Acessórios",
    type: "Lenço",
    fit: "Quadrado, 60 cm",
    fabric: "Seda (composição a confirmar)",
    colors: [
      { name: "Marinho", hex: "#1F2A44" },
      { name: "Areia", hex: "#D9CBB2" },
    ],
    sizes: ONE_SIZE,
    price: 229,
    inStock: true,
    shortDescription: "Lenço quadrado em seda, sem estampa de marca.",
    description:
      "Lenço quadrado em seda com barra costurada à mão. Pode ser usado no pescoço ou amarrado na alça da sacola.",
    composition: PENDING_COMPOSITION,
    care: PENDING_CARE,
    measurementsNote: PENDING_MEASURES,
    main: "https://readdy.ai/api/search-image?query=navy%20silk%20scarf%20folded%20loosely%20on%20a%20seamless%20warm%20beige%20studio%20background%2C%20quiet%20menswear%20accessory%20product%20photography%2C%20soft%20directional%20daylight%2C%20no%20props&width=1200&height=1200&seq=trama-lenco-main&orientation=squarish",
    alt: "https://readdy.ai/api/search-image?query=close%20up%20of%20a%20navy%20silk%20scarf%20tied%20at%20the%20neck%20of%20a%20model%20wearing%20a%20beige%20linen%20shirt%2C%20editorial%20old%20money%20menswear%20detail%20photography%2C%20soft%20daylight&width=1200&height=1200&seq=trama-lenco-alt&orientation=squarish",
  },
];

export const getProductList = products;