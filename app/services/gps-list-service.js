import Service from '@ember/service';

export default class GpsListServiceService extends Service {
  paymentCodes() {
    return createPaymentCodes();
  }

  links() {
    return createLinks();
  }

  roadmapItems() {
    return createRoadmapItems();
  }
}

let makePaymentCode = (id, description, current, inactive) => ({
  id,
  description,
  current,
  inactive,
});

function createPaymentCodes() {
  return [
    makePaymentCode('1406', '1406 - Facultativo Mensal', true),
    makePaymentCode('0', 'Em breve ...', false, true),
  ];
}

let makeLink = (title, tag, tagtype, description, url) => ({
  title,
  tag,
  tagtype,
  description,
  url,
});

function createLinks() {
  return [
    makeLink(
      'Geração do boleto',
      'receita federal',
      'warning',
      'Link do Governo Federal para geração do boleto de pagamento, pode se gerar outros tipos, etc',
      'https://www.gov.br/pt-br/servicos/emitir-gps-para-pagamento-de-contribuicoes-previdenciarias'
    ),
    makeLink(
      'Como obter o número de PIS pelo CPF',
      'blog',
      'success',
      'Como obter seu número de identificação social através das plataformas disponíveis',
      'https://www.creditas.com/exponencial/como-consultar-numero-pis-pelo-cpf/'
    ),
    makeLink(
      'Valor atual de contribuição',
      'notícias',
      'danger',
      'Contríbuição em relação ao salário mínimo atualizado em jan/2025',
      'https://exame.com/brasil/guia-do-cidadao/tabela-de-contribuicao-do-inss-2025-veja-o-que-muda-para-autonomos/'
    ),
  ];
}

let makeRoadmapItem = (icon, color, title, descriptions, inverted) => ({
  icon,
  color,
  title,
  descriptions,
  inverted,
});

function createRoadmapItems() {
  return [
    makeRoadmapItem('power', 'primary', 'Dez/2022', [
      'Instabilidade na plataforma do governo, nos faz buscar como é gerado o boleto',
      'Início do desenvolvimento',
    ]),
    makeRoadmapItem(
      'calendar-check',
      'success',
      'Jan/2023',
      [
        'Publicação do Cálculo automático para o código de pagamento 1406 (20%) com base no valor',
      ],
      true
    ),
    makeRoadmapItem('power', 'info', '...', [
      'Seleção de contribuição com base em quantidade de salários mínimos',
    ]),
    makeRoadmapItem(
      'clock',
      'warning',
      '...',
      [
        'Inserção de novas categorias de código de pagamento',
        'Cálculo automático da contribuição para essas categorias',
      ],
      true
    ),
    makeRoadmapItem('infinity', 'secondary', 'Erros ou sugestões?', [
      'Por favor, entre em contato com a gente',
    ]),
  ];
}
