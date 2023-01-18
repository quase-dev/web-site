import { module, test } from 'qunit';
import { setupRenderingTest } from 'web-site/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | alert', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(2);

    let response = { type: 'success', data: 'message OK' };
    this.set('response', response);

    await render(hbs`<Alert @type={{this.response.type}} @data={{this.response.data}} />
    `);

    assert.notEqual(
      this.element
        .querySelector('div')
        .getAttribute('class')
        .trim()
        .indexOf(response.type),
      -1
    );
    assert.strictEqual(this.element.textContent.trim(), response.data);
  });
});
