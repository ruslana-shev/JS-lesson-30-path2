var seasons = [
 	{
      "лето" : "одень футболку и шорты"
    },
    {
      "осень" : "одень куртку и штаны"
    },
    {
      "зима" : "одень шубу и теплые штаны"
    },
    {
      "весна" : "одень ветровку и джинсы"
    }
];
var form = document.forms['form'],
	select = form.elements['seasons'],
	input = form.elements['info'];

var newOption = new Option('Сезон', '', true, true);
select.appendChild(newOption);

for (var i = 0; i < seasons.length; i++) {
	var season = seasons[i];
	 for ( var propName in season){
	 	newOption = new Option(propName, propName, false, false);
	 }
	 select.appendChild(newOption);
}
select.addEventListener('change', function (e) {
	var season = seasons[select.selectedIndex -1];
	for ( var propName in season){
	 	input.value = season[propName];
	}
});
	 



