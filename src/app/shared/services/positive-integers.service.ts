import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositiveIntegersService {

  findEuclideanAlgorithm(numbers: number[]): number {
    let euclideanAlgorithm = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
      euclideanAlgorithm = this.euclideanAlgorithm(euclideanAlgorithm, numbers[i])
    }

    return euclideanAlgorithm;
  }

  findDivisors(num: number): number[] {
    if (num <= 1) return [];
  
    const divisors: number[] = []; 
  
    for (let i = 2; i <= Math.floor(num / 2); i++) {
      if (num % i === 0) {
        divisors.push(i); 
      }
    }
  
    if (num > 1) divisors.push(num);
  
    divisors.sort((a, b) => a - b);
  
    return divisors;
  }

  private euclideanAlgorithm(dividend: number, divisor: number): number {
    while (divisor !== 0) {
      let tempDivisor = divisor;
      divisor = dividend % divisor;
      dividend = tempDivisor;
    }
    return dividend; 
  }

}