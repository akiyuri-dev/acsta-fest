$('input[type="number"]').bind('input', function () {
    
    var stars = document.getElementsByClassName('form-control');
    var Allnum = 0;
    for(let i = 0; i < stars.length; i++){
        Allnum += Number(stars[i].value);
    }
    
    var All = Allnum*1200;

    document.getElementById("result-erea").innerHTML = "<h3 class='text-danger'>合計" + Allnum + "点</h3>" + "<h3 class='text-danger'>" + All + "円</h3>";
});
