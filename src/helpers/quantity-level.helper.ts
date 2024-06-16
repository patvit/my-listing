import { EGrade } from '../enums';

/**
 * Вывести остаток, подсветив его в зависимости от количества, используя класс level-*:
 *     level-low — если остаток меньше 10 включительно;
 *     level-medium — если остаток меньше 20 включительно;
 *     level-high — если остаток больше 20.
 *
 * @param {(number | undefined)} quantity Доступное количество
 */
export function quantityLevel(quantity: number | undefined): string {
  const level = 'level';
  let grade = undefined;

  if (quantity == null) {
    return level;
  }

  if (quantity! <= 10) {
    grade = EGrade.Low;
  }

  if (quantity! <= 20) {
    grade = EGrade.Medium;
  }

  if (quantity! > 20) {
    grade = EGrade.High;
  }

  return `${level}-${grade}`;
}