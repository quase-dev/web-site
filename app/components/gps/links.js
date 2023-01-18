import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class GpsLinksComponent extends Component {
  @tracked links = listAllLinks();
}

let makeLink = (description, url) => ({
  description,
  url,
});

function listAllLinks() {
  return [
    makeLink(
      'Link oficial do site para geração do boleto (Receita Federal)',
      'http://sal.receita.fazenda.gov.br/PortalSalInternet/faces/pages/calcContribuicoesCI/filiadosApos/selecionarOpcoesCalculoApos.xhtml/'
    ),
    makeLink(
      'Onde obter meu número de PIS?',
      'https://www.creditas.com/exponencial/como-consultar-numero-pis-pelo-cpf/'
    ),
    makeLink(
      'Qual o valor atual de contribuição em relação ao salário mínimo?',
      'https://g1.globo.com/empreendedorismo/noticia/2023/01/09/quanto-autonomos-e-meis-vao-pagar-de-contribuicao-ao-inss-em-2023-entenda.ghtml/'
    ),
  ];
}
