import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { CURRENT_GPS } from 'web-site/helpers/constants';

export default class GpsCalculateFormComponent extends Component {
  @service('gps-calculation-service') service;
  @service('date-utils-service') dateUtils;

  @tracked paymentCodes;
  @tracked clipboardToastOption = 'hide';
  @tracked response = this.service.makeDefaultResponseData();
  @tracked currRefDateTxt = CURRENT_GPS.REF_DATE.TEXT;
  @tracked currMinPaymentValue = CURRENT_GPS.MIN_VALUE;
  @tracked currMaxPaymentValue = CURRENT_GPS.MAX_VALUE;

  @tracked socialNumber;
  @tracked paymentCode = CURRENT_GPS.CODE;
  @tracked paymentValue = CURRENT_GPS.MIN_VALUE;
  @tracked referenceDate = this.dateUtils.getDefaultReferenceDate();

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
    this.clipboardToastOption = 'hide';
    this.socialNumber = undefined;
    this.paymentCode = CURRENT_GPS.CODE;
    this.paymentValue = CURRENT_GPS.MIN_VALUE;
    this.referenceDate = this.dateUtils.getDefaultReferenceDate();
  }

  @action
  copyPayableDocumentGpsData() {
    navigator.clipboard.writeText(this.response.data);
    this.clipboardToastOption = 'show';
  }

  @action
  updatePaymentCode(event) {
    this.paymentCode = event.target.value;
  }
}
