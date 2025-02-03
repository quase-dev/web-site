import { module, test } from 'qunit';
import { setupRenderingTest } from 'web-site/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | clipboard-toast', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<ClipboardToast @option='show' />`);

    assert
      .dom(this.element.querySelector('.text-muted'))
      .hasText('Código copiado!');
    assert.dom(this.element.querySelector('.toast')).hasClass('show');
  });

  test('it doesnt render', async function (assert) {
    await render(hbs`<ClipboardToast @option='hide' />`);

    assert.dom(this.element.querySelector('.toast')).hasNoClass('show');
  });

  test('it doesnt render without parameter', async function (assert) {
    await render(hbs`<ClipboardToast />`);

    assert.dom(this.element.querySelector('.toast')).hasNoClass('show');
  });
});
