import { module, test } from 'qunit';
import { setupTest } from 'web-site/tests/helpers';

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

    const payableDocument = service.generatePayableDocumentGpsData(
      123,
      '1406',
      264.00,
      '2023-01'
    );

    assert.strictEqual(payableDocument.type, 'warning');
    assert.strictEqual(payableDocument.data, 'Número do PIS inválido!');
  });

  test('should correctly calculate at minimum wage', function (assert) {
    const service = this.owner.lookup('service:gps-calculation-service');

    const payableDocument = service.generatePayableDocumentGpsData(
      124,
      '1406',
      264.00,
      '2023-01'
    );

    assert.strictEqual(payableDocument.type, 'success');
    assert.strictEqual(
      payableDocument.data,
      '858000000020-640002701402-600000000009-012420230134'
    );
  });
});
