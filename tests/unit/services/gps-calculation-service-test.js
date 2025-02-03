import { module, test } from 'qunit';
import { setupTest } from 'web-site/tests/helpers';
import { CURRENT_GPS } from 'web-site/helpers/constants';

module('Unit | Service | gps-calculation-service', function (hooks) {
  setupTest(hooks);

  test('should correctly return default data', function (assert) {
    const service = this.owner.lookup('service:gps-calculation-service');

    const defaultResponse = service.makeDefaultResponseData();

    assert.strictEqual(defaultResponse.type, 'info');
    assert.strictEqual(
      defaultResponse.data,
      'Insira os dados acima para obter a linha digitável.'
    );
  });

  test('should not calculate when social code invalid', function (assert) {
    const service = this.owner.lookup('service:gps-calculation-service');
    const invalidSocialNumber = 123;

    const payableDocument = service.generatePayableDocumentGpsData(
      invalidSocialNumber,
      CURRENT_GPS.CODE,
      CURRENT_GPS.MIN_VALUE,
      CURRENT_GPS.REF_DATE.VALUE
    );

    assert.strictEqual(payableDocument.type, 'warning');
    assert.strictEqual(payableDocument.data, 'Número do PIS inválido!');
  });

  test('should correctly calculate at minimum wage', function (assert) {
    const service = this.owner.lookup('service:gps-calculation-service');
    const socialNumber = 124;

    const payableDocument = service.generatePayableDocumentGpsData(
      socialNumber,
      CURRENT_GPS.CODE,
      CURRENT_GPS.MIN_VALUE,
      CURRENT_GPS.REF_DATE.VALUE
    );

    assert.strictEqual(payableDocument.type, 'success');
    assert.strictEqual(
      payableDocument.data,
      '858400000035-036002701406-600000000009-012420250135'
    );
  });
});
