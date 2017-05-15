console.clear();
var SuperConstructor = (function () { 

	var SuperConstructor = function(node) {
		this._node = node;
	};

	SuperConstructor.prototype.validForm = function(form, objects){
		
		form.addEventListener('submit', validator);

		function validator(e) {
			
			var value, isNonValid, input;

			for (var i = 0; i < inputs.length; i++) {
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
			for (var i = 0; i < objects.length; i++) {
				var object = objects[i];
				for (var propName in object){
					var input = form.elements[propName],
						textString = object[propName],
						regexp;

					if(textString =='text'){
						regexp = /^[A-Za-zА-Яа-я-Я]+$/;
						checkPropName(input, regexp);
						break;
					}
					if(textString == 'digits'){
						regexp = /^[0-9]+$/;
						checkPropName(input, regexp);
						break;
					}
					if(textString == 'textDigits'){
						regexp = /^[0-9A-Za-zА-Яа-я]+$/;
						checkPropName(input, regexp);
						break;
					}
				}
			}

			function checkPropName (input, regexp){
				if(!regexp.test(input.value)){
					isNonValid = true;
					input.previousElementSibling.classList.add('error');
					input.style.borderColor = 'red';
				} else {
					input.style.borderColor = '';
					input.previousElementSibling.classList.remove('error');
				}
			}
			function addErrorText(elem, msgText) {
				var msgElem = document.createElement('p');
				msgElem.className = 'error';
				msgElem.innerHTML = msgText;
				elem.appendChild(msgElem);
			};
			var fildError = '';
			for (var i = 0; i < label.length; i++) {
				if(label[i].classList.contains('error')){
					fildError += label[i].textContent + ', ';
				}
			}

			if(isNonValid){
				e.preventDefault();
				addErrorText(form, `Ошибка! Неверно заполнено поле: ${fildError}`);
			}
		}
	};
	
	SuperConstructor.prototype.getInfoNode = function () {
		return {
			type: this._node.nodeType,
			name: this._node.nodeName,
			children: this._node.children.length ? this._node.children.length : 0,
			parent: this._node.parentElement
		};
	}
	SuperConstructor.prototype.attr = function (name, value) {
			
		if (this._node.hasAttribute(name)){
			if (value === undefined){
				console.log(this._node.getAttribute(name));
			} else {
				this._node.setAttribute(name, value);
			}
		} else {
			console.log("атрибут не введен");
		}
	}

	SuperConstructor.prototype.text = function (value){
		if(value == undefined){
			console.log(this._node.textContent);
		} else {
			this._node.textContent = value;
		}
	}

	SuperConstructor.prototype.append = function(html) {
	  	this._node.insertAdjacentHTML('beforeend', html);
	  	return this;
	};

	SuperConstructor.prototype.prepend = function(html) {
		this._node.insertAdjacentHTML('afterbegin', html);
		return this;
	}

	SuperConstructor.prototype.before = function(html) {
		this._node.insertAdjacentHTML('beforebegin', html);
		return this;
	}

	SuperConstructor.prototype.after = function(html) {
		this._node.insertAdjacentHTML('afterend', html);
		return this;
	}

	SuperConstructor.prototype.html = function(value) {
		if (value === undefined) {
		    return this._node.innerHTML;
		} else {
		    this._node.innerHTML = value;
		}
	}

	SuperConstructor.prototype.getElement = function() {
		return this._node;
	}
	SuperConstructor.prototype.event = function (eventName, callback){

		if (callback === undefined){
			var event = new Event(eventName, {bubbles: true});
			this._node.dispatchEvent(event);
			return;
		} else {
			var event = new Event(eventName, {bubbles: true});
			this._node.addEventListener(eventName, callback);
		}
	}
	
	return SuperConstructor;
})();
