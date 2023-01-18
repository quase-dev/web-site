import { module, test } from 'qunit';
import { setupTest } from 'web-site/tests/helpers';

module('Unit | Route | gps-roadmap', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:gps-roadmap');
    assert.ok(route);
  });
});
