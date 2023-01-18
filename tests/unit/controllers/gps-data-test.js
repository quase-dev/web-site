import { module, test } from 'qunit';
import { setupTest } from 'web-site/tests/helpers';

module('Unit | Controller | gps-data', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:gps-data');
    assert.ok(controller);
  });
});
