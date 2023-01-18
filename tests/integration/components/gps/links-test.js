import { module, test } from 'qunit';
import { setupRenderingTest } from 'web-site/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | gps/links', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Gps::Links />`);

    assert.dom(this.element.querySelector('h2')).hasText('Links úteis');
  });
});
