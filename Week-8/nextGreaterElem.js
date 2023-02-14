function printNGE(arr, n) {
	let s = [];
	s.push(arr[0]);
	
	for (var i = 1; i < n; i++) {
		
			if (s[s.length-1] < arr[i])
			{
			console.log( s[s.length-1] + " --> " + arr[i]);
			s.pop();
		}
		s.push(arr[i]);
	}

	while (s.length != 0) {
		console.log( s[s.length-1] + " --> " + -1);
		s.pop();
	}
}

var arr = [11, 13, 21, 3];
var n = arr.length;
printNGE(arr, n);


