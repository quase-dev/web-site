import { module, test } from 'qunit';
import { setupRenderingTest } from 'web-site/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | link-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(1);

    let linkButton = {
      description: 'Button link test',
      icon: 'test',
      version: '0.0.1',
    };

    this.set('linkButton', linkButton);

    await render(hbs`<LinkButton @description={{this.linkButton.description}} 
    @icon={{this.linkButton.icon}} @version={{this.linkButton.version}} />`);

    assert.notEqual(
      this.element
        .querySelector('div')
        .getAttribute('class')
        .trim()
        .indexOf(linkButton.icon),
      -1
    );
  });
});
