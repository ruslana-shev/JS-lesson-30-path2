// document.addEventListener('DOMContentLoaded', function () {
  var form = document.forms['formUser'],
    inputs = document.querySelectorAll('input'),
    label = document.getElementsByTagName('label'),
    createUser = form.elements['createUser'];

  var objects = [
    {name: 'text'},
    {age: 'digits'},
    {nickname: 'textDigits'}
  ]
  var node = form.elements['createUser'];
  var node1 = new SuperConstructor(node);
  node1.validForm(form, objects);

// });