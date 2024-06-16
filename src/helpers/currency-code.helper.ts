import { ECurrencyCode, ECurrencyPrefix } from '../enums';

/**
 * При выводе стоимости предложения необходимо учитывать валюту. Если цена задана:
 *  в долларах США, код USD, то цену вывести в формате $50.00;
 *  в евро, код EUR, то цену вывести в формате €50.00;
 *  в остальных случаях цену вывести в формате 50.00 GBP, где GBP — код валюты.
 *
 * @param {(ECurrencyCode | undefined)} code Код валюты
 * @param {(string | undefined)} price Цена
 */
export function currencyCode(
  code: ECurrencyCode | undefined,
  price: string | undefined
): string {
  switch (code) {
    case ECurrencyCode.USD:
      return `${ECurrencyPrefix.USD}${price}`;
    case ECurrencyCode.EUR:
      return `${ECurrencyPrefix.EUR}${price}`;
    default:
      return `${price} ${ECurrencyPrefix.GBP}`;
  }
}