import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { service } from '@ember/service';

export default class GpsGenerate extends Route {
  @service('gps-list-service') service;

  model() {
    return RSVP.hash({
      paymentCodes: this.service.paymentCodes(),
    });
  }
}
