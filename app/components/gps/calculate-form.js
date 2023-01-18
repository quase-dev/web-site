import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class GpsCalculateFormComponent extends Component {
  @service('gps-calculation-service') service;

  @tracked paymentCodes;
  @tracked response = this.service.makeDefaultResponseData();

  @tracked socialNumber;
  @tracked paymentCode = '1406';
  @tracked paymentValue = 260.4;
  @tracked referenceDate = '2023-01';

  @action
  generate(event) {
    event.preventDefault();
    this.response = this.service.generatePayableDocumentGpsData(
      this.socialNumber,
      this.paymentCode,
      this.paymentValue,
      this.referenceDate
    );
  }

  @action
  cleanData() {
    this.response = this.service.makeDefaultResponseData();
    this.socialNumber = undefined;
    this.paymentCode = '1406';
    this.paymentValue = 260.4;
    this.referenceDate = '2023-01';
  }

  @action
  copyPayableDocumentGpsData() {
    navigator.clipboard.writeText(this.response.data);
  }

  @action
  updatePaymentCode(event) {
    this.paymentCode = event.target.value;
  }
}
