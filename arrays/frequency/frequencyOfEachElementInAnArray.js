const frequencyOfEachElementInAnArray = (arr) => {
  let size = arr.length;
  const processedElements = {}; // Object to store processed elements
  let maxFrequency = 0;
  let maxFrequencyElement = arr[0];
  for (let i = 0; i < size; i++) {
    if (!processedElements[arr[i]]) {
      let frequency = 0;
      for (let j = 0; j < size; j++) {
        if (arr[i] === arr[j]) {
          frequency++;
        }
      }
      processedElements[arr[i]] = frequency;

      // Print the element and its frequency
      console.log(`Element: ${arr[i]}, Frequency: ${frequency}`);
    }

    if (maxFrequency < processedElements[arr[i]]) {
      maxFrequency = processedElements[arr[i]];
      maxFrequencyElement = arr[i];
    }
  }
  console.log("-----------------------------");
  console.log(`Element: ${maxFrequencyElement}, MaxFrequency: ${maxFrequency}`);
};

const givenArray = [1, 3, 4, 5, 5, 5, 3, 3, 1, 1, 3, 3, 3, 3];
frequencyOfEachElementInAnArray(givenArray);
