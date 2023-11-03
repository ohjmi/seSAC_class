function binarySearch (arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // 중간 포지션 계산

        if(arr[mid] === target) {
            return mid; // 결과를 찾았음
        } else if (arr[mid] < target) {
            left = mid + 1; // 중간 값보다 타켓이 크면? 중간에서 출발
        } else {
            right = mid - 1; // 중간 값보다 타겟이 적으면? 중간에서 끝
        }
    }

    return -1; // 요소를 못 찾았네
}

const sortedArray = [1, 3, 9, 11, 13, 15, 17, 19];
const unsortedArray = [1, 9, 5, 11, 7, 19, 15, 9];

const target = 13;
const result = binarySearch(unsortedArray, target);
console.log("결과 :", result);