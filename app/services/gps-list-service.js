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
      'Link oficial do site do governo, que gera o boleto para pagamento',
      'http://sal.receita.fazenda.gov.br/PortalSalInternet/faces/pages/calcContribuicoesCI/filiadosApos/selecionarOpcoesCalculoApos.xhtml/'
    ),
    makeLink(
      'Onde obter meu número de PIS?',
      'blog',
      'success',
      'Como obter seu número de identificação social através das plataformas disponíveis',
      'https://www.creditas.com/exponencial/como-consultar-numero-pis-pelo-cpf/'
    ),
    makeLink(
      'Qual o valor atual de contribuição?',
      'notícias',
      'danger',
      'Contríbuição em relação ao salário mínimo atualizado em jan/2024',
      'https://www.jusbrasil.com.br/artigos/inss-2024-entenda-as-novas-regras-para-contribuicao-dos-autonomos/2123256846'
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
        'Instabilidade na plataforma do governo, nos faz buscar como é gerado o boleto',
        'Início do desenvolvimento',
      ],
      true
    ),
    makeRoadmapItem('power', 'info', 'Fev/2023', [
      'Seleção de contribuição com base em quantidade de salários mínimos',
      'Cálculo automático para o código de pagamento 1406 (20%)',
    ]),
    makeRoadmapItem(
      'clock',
      'warning',
      'Mar/2023',
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
