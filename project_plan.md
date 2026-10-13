# TRAMA — marca independente de roupas (camisas e polos)

Primeira versão completa do site: experiência editorial + loja online.
Site em português. Nome, textos e dados são **provisórios e editáveis**.

## Objetivo
Sensação de universo de moda autoral, com caminho de compra claro desde a
primeira dobra. Foco comercial inicial: **camisas** e **polos**.
Direção: luxo casual atemporal (influências de linguagem/proporção, sem
referências literais a países). Sem alfaiataria corporativa.

## Estrutura
- `/` — Abertura editorial (imagem de tela cheia com produto visível) →
  acesso a categorias → seleção da coleção → bloco editorial → detalhe da peça
  → apresentação da marca → encerramento comercial.
- `/camisas`, `/polos`, `/novidades` — Coleção com filtros (tamanho, cor,
  disponibilidade), ordenação, contagem de itens e estado vazio.
- `/produto/:slug` — Galeria (peça/vestida/detalhe), seletores de cor e
  tamanho, quantidade, adicionar à sacola (com estado de erro), blocos
  recolhíveis e guia de medidas em modal.
- `/a-marca` — Apresentação, princípios e espaço editável para a história.
- `/contato` — Formulário funcional (Form integrado) + canais.
- `/sacola` — Sacola demonstrativa (quantidade, remoção, subtotal).
- `/duvidas`, `/envio-e-devolucoes`, `/privacidade`, `/termos` — conteúdo
  provisório claramente identificado.

## Design system
Cinco papéis de cor em tokens OKLCH (`src/index.css` + `tailwind.config.ts`):
`background` (canvas marfim), `primary` (marrom café — CTA/marca),
`accent` (argila — momentos pontuais), `secondary` (pedra quente),
`foreground` (texto). Tipografia: `Fraunces` (títulos) + `Jost` (corpo).
Trocar a paleta/fontes = editar apenas as variáveis.

## Conteúdo provisório (substituir antes de publicar)
- Nome da marca "TRAMA" e textos institucionais (`src/mocks/brand.ts`).
- Catálogo: nomes, cores, tamanhos e **preços de exemplo** (`src/mocks/products.ts`).
- Composição, cuidados e medidas dos produtos: marcados como "a preencher" —
  **nenhum dado de produção foi inventado**.
- Políticas (envio, privacidade, termos) e FAQs: provisórias para revisão.
- Contato: e-mail provisório; endereço, telefone e redes sociais **não
  inventados** (serão adicionados quando definidos).

## Dependências de integração (pendentes)
- **Formulário** de contato e newsletter: já conectados ao Form da plataforma.
- **E-commerce / pagamento**: a sacola é local/demonstração. Falta integrar
  checkout e meio de pagamento para vendas reais.
- **Logística**: regiões, valores e prazos de envio a definir.
- **Busca**: local (nome, cor e categoria), sem serviço externo.

## Imagens
Todas as imagens são geradas por IA no estilo editorial quente/neutro,
com fundo consistente entre peças. Substituir por fotografia oficial.