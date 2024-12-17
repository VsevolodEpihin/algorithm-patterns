const timSort = (arr) => {
  const RUN = 32;

  const insertionSort = ( array, left, right) => {
      for (let i = left + 1; i <= right; i++) {
          let temp = array[i];
          let j = i - 1;
          while (j >= left && array[j] > temp) {
              array[j + 1] = array[j];
              j--;
          }
          array[j + 1] = temp;
      }
  }

  const merge = (array, left, mid, right) => {
      const len1 = mid - left + 1;
      const len2 = right - mid;

      const leftArr = new Array(len1);
      const rightArr = new Array(len2);

      for (let i = 0; i < len1; i++) leftArr[i] = array[left + i];
      for (let i = 0; i < len2; i++) rightArr[i] = array[mid + 1 + i];

      let i = 0, j = 0, k = left;

      while (i < len1 && j < len2) {
          if (leftArr[i] <= rightArr[j]) array[k++] = leftArr[i++];
          else array[k++] = rightArr[j++];
      }

      while (i < len1) array[k++] = leftArr[i++];
      while (j < len2) array[k++] = rightArr[j++];
  }

  const n = arr.length;

  for (let i = 0; i < n; i += RUN) {
      insertionSort(arr, i, Math.min(i + RUN - 1, n - 1));
  }

  for (let size = RUN; size < n; size = 2 * size) {
      for (let left = 0; left < n; left += 2 * size) {
          const mid = Math.min(left + size - 1, n - 1);
          const right = Math.min(left + 2 * size - 1, n - 1);
          if (mid < right) merge(arr, left, mid, right);
      }
  }

  return arr;
}
