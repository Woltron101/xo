window.addEventListener('load', function(){
	document.querySelector('button').addEventListener('click', function (){
		a=document.querySelectorAll('.o').length;
		b=document.querySelectorAll('.x').length;
		for (i=1; i<=a; i++) {
			document.querySelector('.o').setAttribute('class', 'cell');
		}
		for (i=1; i<=b; i++) {
			document.querySelector('.x').setAttribute('class', 'cell');
		}
		document.querySelector('.winner-message').innerHTML='';
		
		for (i=0; i<9; i++) {
			
			col[i].addEventListener('click', f);
		}

		// document.querySelectorAll('.cell').forEach(addEventListener('click', setAttribute('class', cl)));


		// col[0].addEventListener('click', f0);
		// col[1].addEventListener('click', f1);
		// col[2].addEventListener('click', f2);
		// col[3].addEventListener('click', f3);
		// col[4].addEventListener('click', f4);
		// col[5].addEventListener('click', f5);
		// col[6].addEventListener('click', f6);
		// col[7].addEventListener('click', f7);
		// col[8].addEventListener('click', f8);
		
	});
	var cl='cell x';
	var clickCounter = 0;
	var col=document.querySelectorAll('.cell');

	for (i = 0; i < 9; i++){
	col[i].setAttribute('onclick', 'test(this);');
	}
	


	// for (i = 0; i < 9; i++){
		f=function (){
			
				onClickElement.setAttribute('class', cl);
				onClickElement.removeEventListener('click', f);
				clickCounter++;
			
	};
	// }
	
	// function test(e){
	// 	alert(e);
	// }


	// function (){
	// 	col[0].setAttribute('class', cl);
	// 	col[0].removeEventListener('click', f);
	// 	clickCounter++;
	// };


	// for (i = 0; i < 9; i++) {
	// 	f='f'+i;
	// 	f=function (){
	// 		col[i].setAttribute('class', cl);
	// 		col[i].removeEventListener('click', f);
	// 		clickCounter++;
	// 	};
	// };

	// document.querySelectorAll('.cell').forEach(setAttribute('class', cl))


	// f0=function (){
	// 	onClickElement.setAttribute('class', cl);
	// 	onClickElement.removeEventListener('click', f0);
	// 	clickCounter++;
	// };
	// f1=function (){
	// 	col[1].setAttribute('class', cl);
	// 	col[1].removeEventListener('click', f1);
	// 	clickCounter++;
	// };	
	// f2=function (){
	// 	col[2].setAttribute('class', cl);
	// 	col[2].removeEventListener('click', f2);
	// 	clickCounter++;
	// };	
	// f3=function (){
	// 	col[3].setAttribute('class', cl);
	// 	col[3].removeEventListener('click', f3);
	// 	clickCounter++;
	// };	
	// f4=function (){
	// 	col[4].setAttribute('class', cl);
	// 	col[4].removeEventListener('click', f4);
	// 	clickCounter++;
	// };	
	// f5=function (){
	// 	col[5].setAttribute('class', cl);
	// 	col[5].removeEventListener('click', f5);
	// 	clickCounter++;
	// };
	// f6=function (){
	// 	col[6].setAttribute('class', cl);
	// 	col[6].removeEventListener('click', f6);
	// 	clickCounter++;
	// };	
	// f7=function (){
	// 	col[7].setAttribute('class', cl);
	// 	col[7].removeEventListener('click', f7);
	// 	clickCounter++;
	// };	
	// f8=function (){
	// 	col[8].setAttribute('class', cl);
	// 	col[8].removeEventListener('click', f8);
	// 	clickCounter++;
	// };	
	
	foo=function getWinner() {
		var cellsD = document.querySelectorAll('.cell');
		var cells = [[], [], []];
		var i;
		for (i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				var el = cellsD[i * 3 + j];
				if (el.classList.contains('x')) {
					cells[i][j] = 'x';
				}
				if (el.classList.contains('o')) {
					cells[i][j] = 'o';
				}

			}
		}
		var winnerVar=null;
		if (
			((cells[0][0] === cells[1][1]) && (cells[1][1] === cells[2][2])) ||
			((cells[2][0] === cells[1][1]) && (cells[1][1] === cells[0][2]))
		) {
			winnerVar=cells[1][1];
		}
		for (i = 0; i < 3; i++) {
			if ((cells[0][i] === cells[1][i]) && (cells[1][i] === cells[2][i])) {
				winnerVar=cells[0][i];				
			}
			if ((cells[i][0] === cells[i][1]) && (cells[i][1] === cells[i][2])) {
				winnerVar=cells[i][0];				
			}
			if (winnerVar) break;			
		}		
		
		if (winnerVar=='x' || winnerVar=='o') {
		document.querySelector('.winner-message').innerHTML = 'Победил '+winnerVar;
		
			for(i=0; i<9; i++){
				col[i].removeEventListener('click', f);
			}

			// col[0].removeEventListener('click', f0);
			// col[1].removeEventListener('click', f1);
			// col[2].removeEventListener('click', f2);
			// col[3].removeEventListener('click', f3);
			// col[4].removeEventListener('click', f4);
			// col[5].removeEventListener('click', f5);
			// col[6].removeEventListener('click', f6);
			// col[7].removeEventListener('click', f7);
			// col[8].removeEventListener('click', f8);
			clickCounter=0;
	 	}
	 	c=document.querySelectorAll('.cell');
	 	xs=0;
	 	os=0;
	 	for (i=0; i<=8; i++) {
	 		if (c[i].getAttribute('class')==='cell x') xs++;
	 		if (c[i].getAttribute('class')==='cell o') os++;	 		
	 	}
	 	cols=xs+os;	 	
	 	if (cols==9)	document.querySelector('.winner-message').innerHTML = 'Ничья';

		if (clickCounter%2===0) cl='cell x';
		else cl='cell o';
		console.log(clickCounter);
	};
	 document.querySelector('.field').addEventListener('click', foo);
	
});