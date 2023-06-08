import Service from '@ember/service';

export default class DateUtilsService extends Service {
  getDefaultReferenceDate() {
    const LAST_MONTH = new Date();
    LAST_MONTH.setMonth(LAST_MONTH.getMonth() - 1);
    return LAST_MONTH.toISOString().substring(0, 7);
  }
}
