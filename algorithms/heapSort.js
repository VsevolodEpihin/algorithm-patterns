function heapSort(arr) {
  const n = arr.length;


  function heapify(array, n, i) {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;

      if (left < n && array[left] > array[largest]) largest = left;
      if (right < n && array[right] > array[largest]) largest = right;

      if (largest !== i) {
          [array[i], array[largest]] = [array[largest], array[i]];
          heapify(array, n, largest);
      }
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, i, 0);
  }

  return arr;
}
