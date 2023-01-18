import { module, test } from 'qunit';
import { setupRenderingTest } from 'web-site/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | gps/roadmap-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(3);

    let item = makeRoadmapItem(
      'calendar-check',
      'success',
      'Jan/2023',
      [
        'Instabilidade na plataforma do governo, nos faz buscar como é gerado o boleto',
        'Início do desenvolvimento',
      ],
      true
    );
    this.set('item', item);

    await render(hbs`<Gps::roadmapItem @icon={{this.item.icon}} @color={{this.item.color}} @title={{this.item.title}}
    @descriptions={{this.item.descriptions}} @inverted={{this.item.inverted}} />
    `);

    assert.dom(this.element.querySelector('h4')).hasText(item.title);
    assert.notEqual(
      this.element
        .querySelector('.bi')
        .getAttribute('class')
        .trim()
        .indexOf(item.icon),
      -1
    );
    assert
      .dom(this.element.querySelector('.text-muted'))
      .hasText(item.descriptions.join(' '));
  });
});

let makeRoadmapItem = (icon, color, title, descriptions, inverted) => ({
  icon,
  color,
  title,
  descriptions,
  inverted,
});
