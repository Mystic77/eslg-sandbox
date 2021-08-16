function calculator(feedbackArray, score) {
  const maxPoints = feedbackArray.reduce((a, b) => a + b);
  console.log(score + '/' + maxPoints);

  const percentage = (score / maxPoints) * 100;
  console.log(percentage);
}

console.log(calculator([5, 5, 5, 5, 5], 25));
