import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ClipboardToastComponent extends Component {
  @tracked option = 'hide';
}
