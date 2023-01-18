import { module, test } from 'qunit';
import { setupTest } from 'web-site/tests/helpers';

module('Unit | Service | gps-list-service', function (hooks) {
  setupTest(hooks);

  test('should correctly return one active payment code', function (assert) {
    const service = this.owner.lookup('service:gps-list-service');

    const codes = service.paymentCodes();

    assert.strictEqual(codes.filter((c) => c.inactive !== true).length, 1);
    assert.strictEqual(codes[0].id, '1406');
  });

  test('should correctly return all links', function (assert) {
    const service = this.owner.lookup('service:gps-list-service');

    const links = service.links();

    assert.strictEqual(links.length, 3);
  });

  test('should correctly return roadmap list', function (assert) {
    const service = this.owner.lookup('service:gps-list-service');

    const items = service.roadmapItems();

    assert.strictEqual(items.length, 5);
  });
});
