function createAnswerField(){
	const parentBlock = document.body;
	const answer = document.createElement('p');
	answer.id = 'answer';
	parentBlock.appendChild(answer);	
}

function findFactorial(){
	
	const inputField = document.getElementById('factorial');
	let n = Number(document.getElementById('factorial').value);	
	let result = 1;
	let i = 2;
	
	while(i <= n){		
		
		result *= i;		
		i++;		
	}
	
	document.getElementById('answer').textContent = result;
	
}

createAnswerField();
document.getElementById('button').addEventListener('click', findFactorial);