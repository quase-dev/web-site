import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class GpsGenerate extends Route {
  codes = listAllCodes();

  model() {
    return RSVP.hash({
      paymentCodes: this.codes,
    });
  }
}

let makePaymentCode = (id, description, current, inactive) => ({
  id,
  description,
  current,
  inactive,
});

function listAllCodes() {
  return [
    makePaymentCode('1406', '1406 - Facultativo Mensal', true),
    makePaymentCode('0', 'Em breve ...', false, true),
  ];
}
