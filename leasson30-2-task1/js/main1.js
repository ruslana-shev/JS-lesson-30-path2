var form = document.forms['userForm'],
	userFirstName = form.elements['userFirstName'],
	userSecondName = form.elements['userSecondName'],
	email = form.elements['email'],
	age = form.elements['age'],
	inputs = document.querySelectorAll('input'),
	label = document.getElementsByTagName('label'),
	nameUser = document.querySelectorAll('.nameUser');

form.addEventListener('submit', validator);

function addErrorText(elem, msgText) {
	var msgElem = document.createElement('p');
	msgElem.className = 'error';
	msgElem.innerHTML = msgText;
	elem.appendChild(msgElem);
}

function validator(e) {
	var max = inputs.length,
	value, isNonValid, input;

	for (var i = 0; i < max; i++) {
		input = inputs[i];
		value = input.value;
		if (!value || value.indexOf(' ') !== -1) {
			isNonValid = true;
			input.previousElementSibling.classList.add('error');
			input.style.borderColor = 'red';
		} else{
			input.style.borderColor = '';
		}
	}
	
	for (var i = 0; i < nameUser.length; i++) {
		value = nameUser[i].value;
		var firstLetter = value.charAt(0);
		if(firstLetter == firstLetter.toLowerCase() || value.length < 2 || value.indexOf(' ') > 0){
			nameUser[i].previousElementSibling.classList.add('error');
			isNonValid = true; 
			nameUser[i].style.borderColor = 'red';
		} else{
			nameUser[i].style.borderColor = '';
			nameUser[i].previousElementSibling.classList.remove('error');
		}
	}

	value = email.value;
	if (value.slice(-4) != '.com' || value.indexOf('@') < 1) {
		email.previousElementSibling.classList.add('error');
		isNonValid = true; 
		email.style.borderColor = 'red';
	} else {
		email.style.borderColor = '';
		email.previousElementSibling.classList.remove('error');
	}

	value = age.value;
	if(value < 18 || value > 100){
		isNonValid = true; 
		age.style.borderColor = 'red';
		age.previousElementSibling.classList.add('error');
	} else {
		age.style.borderColor = '';
		age.previousElementSibling.classList.remove('error');
	}

	var fildError = '';
	for (var i = 0; i < label.length; i++) {
		if(label[i].classList.contains('error')){
			fildError += label[i].textContent;
		}
	}

	if(isNonValid){
		e.preventDefault();
		addErrorText(form, `Ошибка! Неверно заполнено поле: ${fildError}`);
	}
}
