/**
 * Если название предложения превышает 50 символов, то необходимо выводить только первые 50 символов, и добавлять символ … в конце.
 *
 * @param {(string | undefined)} value Название предложения
 * @param {number} maxLength Максимальная длина
 */
export function truncateString(
    value: string | undefined,
    maxLength: number = 50
  ): string | undefined {
    if (value == null) {
      return;
    }
  
    return value!.length > maxLength ? value!.slice(0, maxLength - 3) : value;
  }