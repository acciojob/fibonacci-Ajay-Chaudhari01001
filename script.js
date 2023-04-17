function fibonacci(num) {

	if(num === 0)
		return 0;
	if(num === 1)
		return 1;

	return fibonacci(n-1) + fibonacci(n-2);
	
}

module.exports = fibonacci;
