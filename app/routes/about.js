import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { service } from '@ember/service';

export default class AboutRoute extends Route {
  @service('about-service') service;

  model() {
    return RSVP.hash({
      contactLinks: this.service.contactLinks(),
      technologyLinks: this.service.technologyLinks(),
    });
  }
}
