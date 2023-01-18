import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class GpsLinksComponent extends Component {
  @service('gps-list-service') service;

  get links() {
    return this.service.links();
  }
}
