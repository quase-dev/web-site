import Service from '@ember/service';

export default class GpsCalculationServiceService extends Service {
  makeDefaultResponseData() {
    return makeResponseData(
      'info',
      'Insira os dados acima para obter a linha digitável.'
    );
  }

  generatePayableDocumentGpsData(
    socialNumber,
    paymentCode,
    paymentValue,
    referenceDate
  ) {
    if (!validateSocialNumber(socialNumber)) {
      return makeResponseData('warning', 'Número do PIS inválido!');
    }

    const fullPaymentData = generateFullPaymentGpsData(
      socialNumber,
      paymentCode,
      paymentValue,
      referenceDate
    );

    return makeResponseData('success', generatePaymentCode(fullPaymentData));
  }
}

let makeResponseData = (type, data) => ({
  type,
  data,
});

function generateFullPaymentGpsData(
  socialNumber,
  paymentCode,
  paymentValue,
  referenceDate
) {
  const GOVERNAMENTAL_PAYMENT_TYPE = '8';
  const SEGMENT_IDENTIFICATION = '5';
  const VALUE_TYPE_IDENTIFICATION = '8';
  const CODE_ORGANIZATION = '0270';
  const LAST_DIGIT = '3';

  const paymentData =
    GOVERNAMENTAL_PAYMENT_TYPE +
    SEGMENT_IDENTIFICATION +
    VALUE_TYPE_IDENTIFICATION +
    getFormattedCurrencyValue(paymentValue) +
    CODE_ORGANIZATION +
    getFormattedPaymentCode(paymentCode) +
    getFormattedSocialNumber(socialNumber) +
    getFormattedDate(referenceDate) +
    LAST_DIGIT;

  const digitPaymentData = mod11(paymentData);
  const fullPaymentData =
    paymentData.substring(0, 3) +
    digitPaymentData +
    paymentData.substring(3, paymentData.length);

  return fullPaymentData;
}

function getFormattedSocialNumber(numberValue) {
  return numberValue.toString().padStart(14, '0');
}

function getFormattedPaymentCode(value) {
  return value.toString().padStart(4, '0');
}

function getFormattedDate(dateValue) {
  return dateValue.toString().replace('-', '');
}

function getFormattedCurrencyValue(numberValue) {
  const splitedValues = numberValue.toString().split('.', 2);
  const integers = splitedValues[0].padStart(9, '0');

  var decimals = '00';
  if (splitedValues.length == 2) {
    decimals = splitedValues[1].padEnd(2, '0');
  }

  return integers + decimals;
}

function validateSocialNumber(value) {
  const formattedSocialNumber = getFormattedSocialNumber(value);
  const allChars = formattedSocialNumber.toString().split('');
  const lastDigit = allChars.pop();
  const number = allChars.join('');
  const validDigit = mod11(number).toString();

  return validDigit === lastDigit;
}

function mod11(value) {
  var sum = 0;
  var weight = 2;
  var base = 9;

  const allCharsReversed = value.split('').reverse();
  allCharsReversed.forEach(function (c) {
    sum += parseInt(c) * weight;
    if (weight < base) {
      weight++;
      return;
    }
    weight = 2;
  });

  var digit = 11 - (sum % 11);
  if (digit > 9) digit = 0;

  return digit;
}

function generatePaymentCode(fullPaymentData) {
  const allBlocks = [];
  const sizeBlock = 11;
  const totalBlocks = fullPaymentData.length / sizeBlock;

  var startBlock = 0;
  var endBlock = sizeBlock;
  Array.apply(null, Array(totalBlocks)).map(function () {
    const block = fullPaymentData.slice(startBlock, endBlock);
    allBlocks.push(block + mod11(block));
    startBlock = endBlock;
    endBlock = endBlock + sizeBlock;
  });
  return allBlocks.join('-');
}
