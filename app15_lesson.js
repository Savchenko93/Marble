let arr = [1,35,3,12];
/* First Task */
let lastOne = arr[arr.length - 1];
console.log(lastOne);
/*Second Task*/

let sum = 0;
for (i = 0; i < arr.length; i++) {
	sum += arr[i];
}
console.log(sum);

/*Third Task*/

let max = arr[0];
for ( j = 0; j < arr.length; j++) {
	if (max < arr[j]) {
		max = arr[j];
	}
}
console.log(max);