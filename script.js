function manipulateArray() {
  const outputDiv = document.getElementById("output");

  // Initial promise (3-second delay)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  })
  .then((arr) => {
    // First transformation: filter even numbers
    const evenNumbers = arr.filter(num => num % 2 === 0);

    return new Promise((resolve) => {
      setTimeout(() => {
        outputDiv.textContent = evenNumbers.join(",");
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    // Second transformation: multiply by 2
    const doubled = evenNumbers.map(num => num * 2);

    return new Promise((resolve) => {
      setTimeout(() => {
        outputDiv.textContent = doubled.join(",");
        resolve(doubled);
      }, 2000);
    });
  });
}

// Call the function
manipulateArray();