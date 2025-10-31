// Othman Igbaria
//Younis Younis

for (let i = 2; i < 237; i++) {
  let isPrime = true;

  for (let d = 2; d <= Math.sqrt(i); d++) {
    if (i % d === 0) {
      isPrime = false; // نعرف إنه مش أولي
    }
  }

  if (isPrime) {
    console.log(i);
  }
}
