// function alterarBanner(){
//     var imagem = document.getElementById("section-div1-banner-img");
//     imagem.src = "images/img-poster-1.jpg";
// }

var imgBanners = ["images/img-poster-1.jpg", "images/img-poster-2.jpg", "images/img-poster-4.png"];
 var indiceAtual = 0

function alterarBanner(){
    var imagem = document.getElementById("section-div1-banner-img");
    indiceAtual++;
    if (indiceAtual >= imgBanners.length) {
        indiceAtual = 0;
    }
    imagem.src = imgBanners[indiceAtual];
}
