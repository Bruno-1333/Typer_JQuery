var phrase = $(".phrase").text();
var numMots = phrase.split(" ").length;

var longueurPhrase = $("#longueur-phrase");
longueurPhrase.text(numMots);

var champ = $(".typage-champ");
champ.on("input", function() {
    var contenu = champ.val();

    var qtdMots = contenu.split(/\S+/).length -1;
    $("#compteur-mots").text(qtdMots);

    var qtdCaracteres = contenu.length;
    $("#compteur-caracteres").text(qtdCaracteres);
});

var tempsRestant = $("#temps-frappe").text();
champ.one("focus", function(){
    var chronomètreId = setInterval(function(){
        tempsRestant--;
        console.log(tempsRestant);
        $("#temps-frappe").text(tempsRestant);
        if(tempsRestant < 1){
            champ.attr("disabled", true);
            clearInterval(chronomètreId);
        }
    },1000)

});


