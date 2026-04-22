/**
 * Обчислює найбільший спільний дільник (GCD) двох чисел рекурсивно.
 *
 * @param a - перше число
 * @param b - друге число
 * @returns найбільший спільний дільник
 *
 * @example
 * gcd(12, 8); // 4
 * gcd(3, 2); // 1
 */
export function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
}

/**
 * Обчислює найменше спільне кратне (LCM) двох чисел.
 *
 * @param a - перше число
 * @param b - друге число
 * @returns найменше спільне кратне
 *
 * @example
 * lcm(3, 2); // 6
 * lcm(4, 6); // 12
 */
export function lcm(a: number, b: number) {
    return (a * b) / gcd(a, b);
}
