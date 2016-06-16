function ready() {
	document.querySelector('.startNewGame').addEventListener('click', function (e) {
		for (i = 0; i < document.querySelectorAll('.cell').length; i++) {
			document.querySelectorAll('.cell')[i].setAttribute('class', 'cell');
			document.querySelector('.winner-message').innerHTML = '';
		}
	})
	var clickCount = 0;
	document.querySelector('.field').addEventListener('click', function (e) {
		var el = e.target;
		var message = document.querySelector('.winner-message');

		if (getWinner() == undefined) {
			if (el.getAttribute('class') == 'cell') {
				clickCount++;
				if (clickCount % 2 == 0) {
					el.setAttribute('class', 'cell x');
				} else {
					el.setAttribute('class', 'cell o');
				}
			}
		}
		if (getWinner() == 'x') {
			message.innerHTML = 'Крестик победил';
		} else if (getWinner() == 'o') {
			message.innerHTML = 'Нолик победил';
		}
		var activedCells = document.querySelectorAll('.x').length + document.querySelectorAll('.o').length;
		if (activedCells == 9 && getWinner() == undefined) {
			message.innerHTML = 'Ничя';
		}
	})
}

function getWinner() {
	var cellsD = document.querySelectorAll('.cell');
	var cells = [
		[],
		[],
		[]
	];
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

	if (
		((cells[0][0] === cells[1][1]) && (cells[1][1] === cells[2][2])) ||
		((cells[2][0] === cells[1][1]) && (cells[1][1] === cells[0][2]))
	) {
		return cells[1][1];
	}

	for (i = 0; i < 3; i++) {
		if ((cells[0][i] === cells[1][i]) && (cells[1][i] === cells[2][i])) {
			return cells[0][i];
		}
		if ((cells[i][0] === cells[i][1]) && (cells[i][1] === cells[i][2])) {
			return cells[i][0];
		}
	}
};

document.addEventListener("DOMContentLoaded", ready);

