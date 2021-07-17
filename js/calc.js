function calc(){
    var posNinja = Number(document.getElementById("pos-ninja").value);
    var posSamurai = Number(document.getElementById("pos-samurai").value);
    var posBi = Number(document.getElementById("pos-bi").value);

    var bresNinja = Number(document.getElementById("bres-ninja").value);
    var bresSamurai = Number(document.getElementById("bres-samurai").value);
    var bresBi = Number(document.getElementById("bres-bi").value);

    var cardNinja = Number(document.getElementById("card-ninja").value);
    var cardSamurai = Number(document.getElementById("card-samurai").value);
    var cardBi = Number(document.getElementById("card-bi").value);

    var bagBi = Number(document.getElementById("bag-bi").value);
    var bagHihi = Number(document.getElementById("bag-hihi").value);

    var petBi = Number(document.getElementById("pet-bi").value);
    var petHihi = Number(document.getElementById("pet-hihi").value);

    var mtaoBi = Number(document.getElementById("mtao-bi").value);
    var mtaoHihi = Number(document.getElementById("mtao-hihi").value);

    var bandBi = Number(document.getElementById("band-bi").value);
    var bandHihi = Number(document.getElementById("band-hihi").value);

    var creaTraja = Number(document.getElementById("crea-traja").value);
    var creaBi = Number(document.getElementById("crea-bi").value);
    var creaHihi = Number(document.getElementById("crea-hihi").value);
    var creaSamurai = Number(document.getElementById("crea-samurai").value);
    var creaNinja = Number(document.getElementById("crea-ninja").value);
    var creaImpa = Number(document.getElementById("crea-impa").value);
    var creaJrsp = Number(document.getElementById("crea-jrsp").value);
    var creaNaniwa = Number(document.getElementById("crea-naniwa").value);
    var creaAe = Number(document.getElementById("crea-ae").value);
    var creaLil = Number(document.getElementById("crea-lil").value);
    var creaMiyachika = Number(document.getElementById("crea-miyachika").value);
    var creaNakamura = Number(document.getElementById("crea-nakamura").value);
    var creaYoshizawa = Number(document.getElementById("crea-yoshizawa").value);
    var creaShimekake = Number(document.getElementById("crea-shimekake").value);
    var creaMatsukura = Number(document.getElementById("crea-matsukura").value);
    var creaMatsuda = Number(document.getElementById("crea-matsuda").value);
    var creaKawashima = Number(document.getElementById("crea-kawashima").value);
    var creaUkisho = Number(document.getElementById("crea-ukisho").value);
    var creaNasu = Number(document.getElementById("crea-nasu").value);
    var creaSato = Number(document.getElementById("crea-sato").value);
    var creaFuji = Number(document.getElementById("crea-fuji").value);
    var creaKanasashi = Number(document.getElementById("crea-kanasashi").value);
    var creaIwasaki = Number(document.getElementById("crea-iwasaki").value);
    var creaTakahashiY = Number(document.getElementById("crea-takahashi-y").value);
    var creaIgari = Number(document.getElementById("crea-igari").value);
    var creaSakuma = Number(document.getElementById("crea-sakuma").value);
    var creaHashimoto = Number(document.getElementById("crea-hashimoto").value);
    var creaInoue = Number(document.getElementById("crea-inoue").value);
    var creaNishihata = Number(document.getElementById("crea-nishihata").value);
    var creaOnishi = Number(document.getElementById("crea-onishi").value);
    var creaMichieda = Number(document.getElementById("crea-michieda").value);
    var creaNagao = Number(document.getElementById("crea-nagao").value);
    var creaTakahashiK = Number(document.getElementById("crea-takahashi-k").value);
    var creaOhashi = Number(document.getElementById("crea-ohashi").value);
    var creaFujiwara = Number(document.getElementById("crea-fujiwara").value);
    var creaMasakado = Number(document.getElementById("crea-masakado").value);
    var creaKojima = Number(document.getElementById("crea-kojima").value);
    var creaSano = Number(document.getElementById("crea-sano").value);
    var creaFukumoto = Number(document.getElementById("crea-fukumoto").value);
    var creaKusama = Number(document.getElementById("crea-kusama").value);
    var creaSuezawa = Number(document.getElementById("crea-suezawa").value);

    var ticTraja = Number(document.getElementById("tic-traja").value);
    var ticBi = Number(document.getElementById("tic-bi").value);
    var ticHihi = Number(document.getElementById("tic-hihi").value);
    var ticSamurai = Number(document.getElementById("tic-samurai").value);
    var ticNinja = Number(document.getElementById("tic-ninja").value);
    var ticImpa = Number(document.getElementById("tic-impa").value);
    var ticJrsp = Number(document.getElementById("tic-jrsp").value);
    var ticNaniwa = Number(document.getElementById("tic-naniwa").value);
    var ticAe = Number(document.getElementById("tic-ae").value);
    var ticLil = Number(document.getElementById("tic-lil").value);

    var acMiyachika = Number(document.getElementById("ac-miyachika").value);
    var acNakamura = Number(document.getElementById("ac-nakamura").value);
    var acYoshizawa = Number(document.getElementById("ac-yoshizawa").value);
    var acShimekake = Number(document.getElementById("ac-shimekake").value);
    var acMatsukura = Number(document.getElementById("ac-matsukura").value);
    var acMatsuda = Number(document.getElementById("ac-matsuda").value);
    var acKawashima = Number(document.getElementById("ac-kawashima").value);
    var acUkisho = Number(document.getElementById("ac-ukisho").value);
    var acNasu = Number(document.getElementById("ac-nasu").value);
    var acSato = Number(document.getElementById("ac-sato").value);
    var acFuji = Number(document.getElementById("ac-fuji").value);
    var acKanasashi = Number(document.getElementById("ac-kanasashi").value);
    var acIwasaki = Number(document.getElementById("ac-iwasaki").value);
    var acTakahashiY = Number(document.getElementById("ac-takahashi-y").value);
    var acIgari = Number(document.getElementById("ac-igari").value);
    var acSakuma = Number(document.getElementById("ac-sakuma").value);
    var acHashimoto = Number(document.getElementById("ac-hashimoto").value);
    var acInoue = Number(document.getElementById("ac-inoue").value);
    var acNishihata = Number(document.getElementById("ac-nishihata").value);
    var acOnishi = Number(document.getElementById("ac-onishi").value);
    var acMichieda = Number(document.getElementById("ac-michieda").value);
    var acNagao = Number(document.getElementById("ac-nagao").value);
    var acTakahashiK = Number(document.getElementById("ac-takahashi-k").value);
    var acOhashi = Number(document.getElementById("ac-ohashi").value);
    var acFujiwara = Number(document.getElementById("ac-fujiwara").value);
    var acMasakado = Number(document.getElementById("ac-masakado").value);
    var acKojima = Number(document.getElementById("ac-kojima").value);
    var acSano = Number(document.getElementById("ac-sano").value);
    var acFukumoto = Number(document.getElementById("ac-fukumoto").value);
    var acKusama = Number(document.getElementById("ac-kusama").value);
    var acSuezawa = Number(document.getElementById("ac-suezawa").value);

    var steTraja = Number(document.getElementById("ste-traja").value);
    var steBi = Number(document.getElementById("ste-bi").value);
    var steHihi = Number(document.getElementById("ste-hihi").value);
    var steSamurai = Number(document.getElementById("ste-samurai").value);
    var steNinja = Number(document.getElementById("ste-ninja").value);
    var steImpa = Number(document.getElementById("ste-impa").value);
    var steJrsp = Number(document.getElementById("ste-jrsp").value);
    var steNaniwa = Number(document.getElementById("ste-naniwa").value);
    var steAe = Number(document.getElementById("ste-ae").value);
    var steLil = Number(document.getElementById("ste-lil").value);

    var muHihi = Number(document.getElementById("mu-hihi").value);
    var muImpa = Number(document.getElementById("mu-impa").value);

    var mtHihi = Number(document.getElementById("mt-hihi").value);
    var mtImpa = Number(document.getElementById("mt-impa").value);

    var ft = Number(document.getElementById("ft").value);

    var plHihi = Number(document.getElementById("pl-hihi").value);
    var plImpa = Number(document.getElementById("pl-impa").value);
    var plNinja = Number(document.getElementById("pl-ninja").value);
    var plSamurai = Number(document.getElementById("pl-samurai").value);
    var plBi = Number(document.getElementById("pl-bi").value);
    var plJr = Number(document.getElementById("pl-jr").value);

    var pls = Number(document.getElementById("pls").value);

    var All = posNinja*800 + posSamurai*800 + posBi*800
        + bresNinja*800 + bresSamurai*800 + bresBi*800
        + cardNinja*900 + cardSamurai*900 + cardBi*900
        + bagBi*1500 + bagHihi*1500
        + petBi*1500 + petHihi*1500
        + mtaoBi*1500 + mtaoHihi*1500
        + bandBi*600 + bandHihi*600
        + creaTraja*600 + creaBi*600 * creaHihi*600 + creaSamurai*600 + creaNinja*600 + creaImpa*600
        + creaJrsp*600 + creaNaniwa*600 + creaAe*600 + creaLil*600
        + creaMiyachika*600 * creaNakamura*600 + creaYoshizawa*600 + creaShimekake*600 + creaMatsukura*600 + creaMatsuda*600 + creaKawashima*600
        + creaUkisho*600 + creaNasu*600 + creaSato*600 + creaFuji*600 + creaKanasashi*600 + creaIwasaki*600
        + creaTakahashiY*600 + creaIgari*600 + creaSakuma*600 + creaHashimoto*600 + creaInoue*600
        + creaNishihata*600 + creaOnishi*600 + creaMichieda*600 + creaNagao*600 + creaTakahashiK*600 + creaOhashi*600 + creaFujiwara*600
        + creaMasakado*600 + creaKojima*600 + creaSano*600 + creaFukumoto*600 + creaKusama*600 + creaSuezawa*600
        + ticTraja*500 + ticBi*500 * ticHihi*500 + ticSamurai*500 + ticNinja*500 + ticImpa*500
        + ticJrsp*500 + ticNaniwa*500 + ticAe*500 + ticLil*500
        + acMiyachika*1000 * acNakamura*1000 + acYoshizawa*1000 + acShimekake*1000 + acMatsukura*1000 + acMatsuda*1000 + acKawashima*1000
        + acUkisho*1000 + acNasu*1000 + acSato*1000 + acFuji*1000 + acKanasashi*1000 + acIwasaki*1000
        + acTakahashiY*1000 + acIgari*1000 + acSakuma*1000 + acHashimoto*1000 + acInoue*1000
        + acNishihata*1000 + acOnishi*1000 + acMichieda*1000 + acNagao*1000 + acTakahashiK*1000 + acOhashi*1000 + acFujiwara*1000
        + acMasakado*1000 + acKojima*1000 + acSano*1000 + acFukumoto*1000 + acKusama*1000 + acSuezawa*1000
        + steTraja*800 + steBi*800 * steHihi*800 + steSamurai*800 + steNinja*800 + steImpa*800
        + steJrsp*800 + steNaniwa*800 + steAe*800 + steLil*800
        + muHihi*400 + muImpa*400
        + mtHihi*700 + mtImpa*700
        + ft*1800
        + plHihi*1800 + plImpa*1800 + plNinja*1800 + plSamurai*1800 + plBi*1800 + plJr*1800
        + pls*900;
    //alert(URL + "?t=" + AllSecond);

    document.getElementById("result-erea").innerHTML = "<h3 class='text-danger'>" + All + "円</h3>";
}