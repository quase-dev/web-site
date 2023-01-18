import { module, test } from 'qunit';
import { setupRenderingTest } from 'web-site/tests/helpers';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | cookie-alert', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<CookieAlert />`);

    assert
      .dom(this.element.querySelector('.text-muted'))
      .hasText('Nós usamos cookies para melhorar sua experiência nesse site.');
  });

  test('should hide after ok choice', async function (assert) {
    assert.expect(1);

    await render(hbs`<CookieAlert />`);

    await click('.btn-dark');

    assert.dom(this.element).hasText('');
  });
});
