import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CookieAlertComponent extends Component {
  @tracked accepted = false;

  @action
  accept() {
    this.accepted = true;
  }
}
