import { module, test } from 'qunit';
import { setupRenderingTest } from 'web-site/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | link-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(1);

    let link = {
      title: 'Cart test link',
      tag: 'test',
      tagtype: 'success',
      description: 'quase dev',
      url: 'https://quase.dev',
    };

    this.set('link', link);

    await render(hbs`<LinkCard @title={{this.link.title}} @tag={{this.link.tag}} 
    @tagtype={{this.link.tagtype}} @description={{this.link.description}} @url={{this.link.url}} />`);

    assert.strictEqual(
      this.element.querySelector('h5').textContent.trim(),
      link.title
    );
  });
});
