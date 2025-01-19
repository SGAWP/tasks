import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PrimeNumbersService {
  getPrimesInRange(startNumber: number, endNumber: number): number[] {
    if (endNumber < 2) return [];

    const isPrime = [false, false, ...Array(endNumber + 1)].map(() => true);

    // Решето Эратосфена

    for (let i = 2; i * i <= endNumber; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= endNumber; j += i) {
          isPrime[j] = false;
        }
      }
    }

    const primes: number[] = [];
    for (let i = Math.max(startNumber, 2); i <= endNumber; i++) {
      if (isPrime[i]) {
        primes.push(i);
      }
    }

    return primes;
  }
}
