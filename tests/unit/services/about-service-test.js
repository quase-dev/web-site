import { module, test } from 'qunit';
import { setupTest } from 'web-site/tests/helpers';

module('Unit | Service | about-service', function (hooks) {
  setupTest(hooks);

  test('should correctly return all concact links', function (assert) {
    const service = this.owner.lookup('service:about-service');

    const links = service.contactLinks();

    assert.strictEqual(links.length, 3);
  });

  test('should correctly return  all technology links', function (assert) {
    const service = this.owner.lookup('service:about-service');

    const items = service.technologyLinks();

    assert.strictEqual(items.length, 3);
  });
});
