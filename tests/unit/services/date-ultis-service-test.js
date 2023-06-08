import { module, test } from 'qunit';
import { setupTest } from 'web-site/tests/helpers';

module('Unit | Service | date-utils-service', function (hooks) {
  setupTest(hooks);

  test('should correctly return default reference date', function (assert) {
    const service = this.owner.lookup('service:date-utils-service');
    const LAST_MONTH = new Date();
    LAST_MONTH.setMonth(LAST_MONTH.getMonth() - 1);

    const defaultReferenceDate = service.getDefaultReferenceDate();

    assert.strictEqual(
      defaultReferenceDate,
      LAST_MONTH.toISOString().substring(0, 7)
    );
  });
});
