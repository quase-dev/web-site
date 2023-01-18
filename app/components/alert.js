import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AlertComponent extends Component {
  @action
  copy(value) {
    navigator.clipboard.writeText(value);
  }
}
