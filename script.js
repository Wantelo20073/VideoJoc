var canvas;
var ctx;
var FPS = 50;
var tileMap;
var titulo;
var fondoMenuHK;
var imgGeo;

var ampleC = 50;
var altC = 50;
var llave = false;
var power = false;
var geo = 0;
var sombraGeo = 0;
var llaveElegante = false;
var percentatge = 0;

var pause = false;
var menuStart = false;
var interStart = false;
var menuPause = false;
var menuOptions = false;
var menuVolver = false;
var textScreen = false;
var dialogo = false;
var objectScreen;
var shadow = false;
var numEscenari;

var escenari = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,2,0,2,2,2,7,2,2,4,4,10,0,0,7,2,2,2,7,0,7,2,2,2,2,7,0,0,11,2,0],
    [0,2,2,0,2,2,0,0,0,2,0,4,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,0],
    [0,0,2,0,2,2,0,7,0,2,2,2,0,2,2,2,2,0,2,2,2,2,2,0,2,2,2,2,2,0,4,0],
    [0,2,2,2,2,2,2,2,2,2,7,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,4,0],
    [0,2,2,2,2,2,0,7,0,2,2,2,0,2,0,2,2,2,0,2,2,0,2,2,2,2,2,0,2,2,2,0],
    [0,2,0,0,2,2,0,0,0,4,0,2,0,2,0,2,7,2,2,2,2,2,2,0,2,2,2,2,2,2,2,0],
    [0,2,7,0,2,2,4,4,4,4,2,2,2,2,0,2,2,2,0,7,2,0,2,0,2,0,0,2,2,2,7,0],
    [0,2,2,2,2,2,2,2,4,4,2,2,2,2,0,2,2,2,0,0,2,0,2,2,2,7,0,4,4,0,0,0],
    [0,2,2,2,2,7,4,2,2,2,2,2,0,0,0,2,1,2,0,2,2,2,2,4,0,4,4,4,4,4,4,0],
    [0,4,2,0,0,4,4,4,4,4,4,4,8,9,0,2,2,2,0,2,7,2,0,4,4,4,4,0,4,4,4,0],
    [0,4,4,4,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,4,0,0],
    [0,4,4,4,4,0,4,0,4,0,2,2,2,2,0,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,0],
    [0,7,4,4,4,0,4,0,4,4,2,2,2,2,2,2,2,0,2,2,0,0,7,2,2,2,2,0,2,5,2,0],
    [0,3,7,4,4,4,4,0,4,2,7,0,2,2,2,2,2,0,2,2,2,2,2,2,2,7,0,0,2,2,2,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]

var escenariI = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0],
    [0,0,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,0,0,0,0,0,0,0],
    [0,0,2,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,2,0,0,0,0,0,0,0],
    [0,0,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,0,0,0,0,0,0,0],
    [0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]

function posicioEscenari(x,y){
    var escenariPosition;
    if(numEscenari == 0){
        escenariPosition = escenari[y/50][x/50];
        return escenariPosition;
    }else if(numEscenari == 1){
        escenariPosition = escenariI[y/50][x/50];
        return escenariPosition;
    }
}

function canviarEscenari(x,y,n){
    if(numEscenari == 0){
        escenari[y/50][x/50] = n;
    }else if(numEscenari == 1){
        escenariI[y/50][x/50] = n;
    }
}

function dibuixaEscenari(){
    for(var y=0; y<16; y++){
        for(var x=0; x<32; x++){
            if(numEscenari == 0){
                let tile = escenari[y][x]

            if(tile > 7 && tile < 12){
                ctx.drawImage(tileMap,(tile-8)*32,96,32,32,x*ampleC,y*altC,ampleC,altC)

            }else if(tile > 3 && tile < 8){
                ctx.drawImage(tileMap,(tile-4)*32,64,32,32,x*ampleC,y*altC,ampleC,altC)
            }else{
                ctx.drawImage(tileMap,tile*32,0,32,32,x*ampleC,y*altC,ampleC,altC)
            }
            }else if(numEscenari == 1){
                let tile = escenariI[y][x]

            if(tile > 7 && tile < 12){
                ctx.drawImage(tileMap,(tile-8)*32,96,32,32,x*ampleC,y*altC,ampleC,altC)

            }else if(tile > 3 && tile < 8){
                ctx.drawImage(tileMap,(tile-4)*32,64,32,32,x*ampleC,y*altC,ampleC,altC)
            }else{
                ctx.drawImage(tileMap,tile*32,0,32,32,x*ampleC,y*altC,ampleC,altC)
            }
            }
        }
    }
}

function inicializar(){
    canvas = document.getElementById("pantalla");
    ctx = canvas.getContext('2d');

    if(!menuStart){
        ctx.drawImage(fondoMenuHK,0,0,canvas.width,canvas.height);
        ctx.drawImage(titulo,335,80,920,350);
        var botonStart = document.createElement('button');
        botonStart.textContent = 'Start Game';
        botonStart.style.color = '#ffffff';
        botonStart.style.position = 'absolute';
        botonStart.style.top = '600px';
        botonStart.style.left = '725px';
        botonStart.style.fontFamily = "Perpetua";
        botonStart.style.fontSize = "35px";
        botonStart.style.backgroundColor = "transparent";
        botonStart.style.border = "none";
        document.body.appendChild(botonStart);

        botonStart.onclick = function(){
            menuStart = true;
            botonStart.remove();
            ctx.clearRect(0,0,canvas.width,canvas.height);
            inicializar();
        }
    }else if(menuStart && !interStart){
        interStart = true;
        numEscenari = 0;
        setInterval(function(){
        if(menuStart){
            principal();
        }
    },1000/FPS)
    }
}

function borrarPantalla(){
    canvas.width = 1600
    canvas.height = 800
}

//Carrega de imatges.

    tileMap = new Image();
    tileMap.src = './imatges/tilemapHollowKnight.png'
    titulo = new Image();
    titulo.src = './imatges/tituloHK.png'
    fondoMenuHK = new Image();
    fondoMenuHK.src = './imatges/fondoMenuHK.png'
    imgGeo = new Image();
    imgGeo.src = './imatges/imgGeo.png'

//Tipus de Personatjes.

var prota = function(x,y){
    this.x = x;
    this.y = y;
    this.llave = llave
    this.power = power
    this.llaveElegante = llaveElegante;

    this.dibuixa = function(){
        ctx.drawImage(tileMap,32,32,32,32,this.x,this.y,50,50)
    }

    this.logica = function(){
        if(posicioEscenari(this.x,this.y) == 3){
            this.llave = true
            percentatge = percentatge+16;
            llaveSimple();
            botonContinuar("703px","670px","Llave");
            canviarEscenari(this.x,this.y,2)
        }
        if(posicioEscenari(this.x,this.y) == 1){
            if(!this.llave){
            textDialeg("Una puerta con una cerradura simple."," "," ");
            botonContinuar("703px","260px","Dialeg");
            }
        }
        if(posicioEscenari(this.x,this.y) == 5){
            this.power = true
            percentatge = percentatge+16;
            lagrimaIsma();
            botonContinuar("703px","670px","Isma");
            canviarEscenari(this.x,this.y,2);
        }
        if(posicioEscenari(this.x,this.y) == 7){
            geo++
            canviarEscenari(this.x,this.y,2)
        }
        if(shadow){
            var getSombra = sombra.mort(this.x,this.y);
            if(getSombra){
                shadow = false;
                geo = geo+sombraGeo;
            }
        }
        if(posicioEscenari(this.x,this.y) == 11){
            textDialeg("Hola, que bueno que me hayas encontrado. Soy Sly, estaba buscando un tesoro y me",
                       "perdí. Dicen que la llave se encuentra al cruzar el ácido junto a la sala de la puerta",
                       "principal y la entrada junto al ácido más alto. Yo ya me voy, suerte.")
            botonContinuar("703px","260px","Dialeg");
        }
        if(posicioEscenari(this.x,this.y) == 9){
            this.llaveElegante = true;
            percentatge = percentatge+16;
            llaveElegant();
            botonContinuar("703px","670px","Llave");
            canviarEscenari(this.x,this.y,8)
            canviarEscenari(this.x+50,this.y,8)
        }
        if(posicioEscenari(this.x,this.y) == 10){
            if(!this.llaveElegante){
                textDialeg("Hay una cerradura brillante en la pared."," "," ");
            botonContinuar("703px","260px","Dialeg");
            }
        }
    }
    this.interactiu = function(direccion){
        if(this.interactiveObject(this.x,this.y)){
            if(direccion == "adalt"){
                this.y = this.y+50;
            }else if(direccion == "abaix"){
                this.y = this.y-50;
            }else if(direccion == "dreta"){
                this.x = this.x-50;
            }else if(direccion == "esquerra"){
                this.x = this.x+50;
            }
        }
    }
    this.mort = function(x,y){
        var contacte = false;
        if(this.x == x && this.y == y){
            contacte = true;
        }
        return contacte;
    }

    this.adalt = function(){
        if(!this.margenes(this.x,this.y-50)){
        this.y = this.y-50
        this.logica()
        }
        this.interactiu("adalt");
    }
    this.abaix = function(){
        if(!this.margenes(this.x,this.y+50)){
        this.y = this.y+50
        this.logica()
        }
        this.interactiu("abaix");
    }
    this.dreta = function(){
        if(!this.margenes(this.x+50,this.y)){
        this.x = this.x+50
        this.logica()
        }
        this.interactiu("dreta");
    }
    this.esquerra = function(){
        if(!this.margenes(this.x-50,this.y)){
        this.x = this.x-50
        this.logica()
        }
        this.interactiu("esquerra");
    }
    this.points = function(){
        ctx.drawImage(imgGeo,20,10,30,30);
        ctx.font = '40px Perpetua';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(geo,55,37);
    }
    this.text = function(){
        ctx.font = '30px impact'
        ctx.fillStyle = '#ffffff'
        ctx.fillText("X: "+this.x+" Y: "+this.y,1430,35)
    }
    this.margenes = function(x,y){
        var colisio = false;
        if(!this.power){
        if(posicioEscenari(x,y) == 0 || posicioEscenari(x,y) == 4){
            colisio = true;
            return colisio;
        }
        return colisio;
    }else if(posicioEscenari(x,y) == 0){
        colisio = true;
        return colisio;
    }
        return colisio;
    }
    this.interactiveObject = function(x,y){
        var subject = false;
        if(!this.llaveElegante){
            if(posicioEscenari(x,y) == 10 || posicioEscenari(x,y) == 11){
            subject = true;
            return subject;
        }
        return subject;
        }else if(posicioEscenari(x,y) == 11){
            subject = true;
            return subject;
        }
        return subject;
    }
}

var enemic = function(x,y,p){
    this.x = x;
    this.y = y;
    this.p = p;

    var temps = 0;
    this.temps = temps;

    this.dibuixa = function(){
        ctx.drawImage(tileMap,this.p*32,32,32,32,this.x,this.y,50,50)
    }
    this.mou = function(){
        var mort = knight.mort(this.x,this.y);
        if(mort){
            shadow = true;
            sombra.x = this.x;
            sombra.y = this.y;
            knight.x = 50;
            knight.y = 100;
            sombraGeo = geo;
            geo = 0;
        }
        this.temps++;
        if(this.temps == 40){
            var direccio = Math.floor(Math.random() * 4) + 1
       if(direccio == 1){
        if(!this.margenes(this.x-50,this.y)){
        this.x = this.x-50
        }
       }else if(direccio == 2){
        if(!this.margenes(this.x+50,this.y)){
        this.x = this.x+50
        }
       }else if(direccio == 3){
        if(!this.margenes(this.x,this.y+50)){
        this.y = this.y+50
        }
       }else if(direccio == 4){
       if(!this.margenes(this.x,this.y-50)){
        this.y = this.y-50
        }
       }
       this.temps = 0;
        }
       }
    this.margenes = function(x,y){
        var colisio = false;
        if(posicioEscenari(x,y) == 0 || posicioEscenari(x,y) == 4){
            colisio = true;
            return colisio;
        }
        return colisio;
    }
    }

var ghost = function(x,y){
    this.x = x;
    this.y = y;

    var temps = 0;
    this.temps = temps;

    this.dibuixa = function(){
        ctx.drawImage(tileMap,64,64,32,32,this.x,this.y,50,50)
    }
    this.mou = function(){
        this.temps++;
        if(this.temps == 100){
            var direccio = Math.floor(Math.random() * 4) + 1
       if(direccio == 1){
        if(!this.margenes(this.x-50,this.y)){
        this.x = this.x-50
        }
       }else if(direccio == 2){
        if(!this.margenes(this.x+50,this.y)){
        this.x = this.x+50
        }
       }else if(direccio == 3){
        if(!this.margenes(this.x,this.y+50)){
        this.y = this.y+50
        }
       }else if(direccio == 4){
       if(!this.margenes(this.x,this.y-50)){
        this.y = this.y-50
        }
       }
       this.temps = 0;
        }
       }
    this.margenes = function(x,y){
        var colisio = false;
        if(posicioEscenari(x,y) == 0){
            colisio = true;
            return colisio;
        }
        return colisio;
    }
    this.mort = function(x,y){
        var contacte = false;
        if(this.x == x && this.y == y){
            contacte = true;
        }
        return contacte;
    }
}

function finalJuego(){
    pause = true;
    textScreen = true;
    principal();
    menuStart = false;
    var imgFinal = document.createElement('img');
    imgFinal.src = './imatges/imgFinalJuego.png';
    imgFinal.id = 'imatgeFJ';
    imgFinal.style.width = '1100px';
    imgFinal.style.position = 'absolute';
    imgFinal.style.top = '180px';
    imgFinal.style.left = '265px';
    imgFinal.style.filter = 'brightness(150%)';
    document.body.appendChild(imgFinal);
    var titulFinal = document.createElement('p');
    titulFinal.textContent = "JUEGO COMPLETADO";
    titulFinal.id = 'tituloFinalJuego';
    titulFinal.style.color = '#efefef';
    titulFinal.style.fontFamily = 'Perpetua';
    titulFinal.style.fontSize = '55px';
    titulFinal.style.position = 'absolute';
    titulFinal.style.top = '200px';
    titulFinal.style.left = '540px';
    document.body.appendChild(titulFinal);
    var textFinal = document.createElement('p');
    textFinal.textContent = "PORCENTAJE";
    textFinal.id = 'textoFinalJuego';
    textFinal.style.color = '#efefef';
    textFinal.style.fontFamily = 'Perpetua';
    textFinal.style.fontSize = '45px';
    textFinal.style.position = 'absolute';
    textFinal.style.top = '360px';
    textFinal.style.left = '675px';
    document.body.appendChild(textFinal);
    var perFinal = document.createElement('p');
    perFinal.textContent = percentatge+"%";
    perFinal.id = 'porcentageFinalJuego';
    perFinal.style.color = '#efefef';
    perFinal.style.fontFamily = 'Perpetua';
    perFinal.style.fontSize = '35px';
    perFinal.style.position = 'absolute';
    perFinal.style.top = '430px';
    perFinal.style.left = '780px';
    document.body.appendChild(perFinal);
}

function lagrimaIsma(){
    pause = true;
    textScreen = true;
    principal();
    var imgIsma = document.createElement('img');
    imgIsma.src = './imatges/imgIsma.png';
    imgIsma.id = 'imatgeIsma';
    imgIsma.style.width = '650px';
    imgIsma.style.position = 'absolute';
    imgIsma.style.top = '80px';
    imgIsma.style.left = '491px';
    imgIsma.style.filter = 'brightness(150%)';
    document.body.appendChild(imgIsma);
    var textIsma = document.createElement('p');
    textIsma.textContent = "Nada en aguas ácidas sin sufrir ningún daño.";
    textIsma.id = 'textoIsma';
    textIsma.style.color = '#efefef';
    textIsma.style.fontFamily = 'Perpetua';
    textIsma.style.fontSize = '30px';
    textIsma.style.position = 'absolute';
    textIsma.style.top = '565px';
    textIsma.style.left = '543px';
    document.body.appendChild(textIsma);
}

function llaveSimple(){
    pause = true;
    textScreen = true;
    principal();
    var imgLlaveS = document.createElement('img');
    imgLlaveS.src = './imatges/imgLlaveSimple.png';
    imgLlaveS.id = 'imatgeLlave';
    imgLlaveS.style.width = '300px';
    imgLlaveS.style.position = 'absolute';
    imgLlaveS.style.top = '100px';
    imgLlaveS.style.left = '670px';
    document.body.appendChild(imgLlaveS);
    var imgGetObject = document.createElement('img');
    imgGetObject.src = './imatges/imgGetObject.png';
    imgGetObject.id = 'imatgeGetObjeto';
    imgGetObject.style.width = '550px';
    imgGetObject.style.position = 'absolute';
    imgGetObject.style.top = '515px';
    imgGetObject.style.left = '537px';
    document.body.appendChild(imgGetObject);
    var titulLlaveS = document.createElement('p');
    titulLlaveS.textContent = "LLAVE SIMPLE";
    titulLlaveS.id = 'tituloLlave';
    titulLlaveS.style.color = '#efefef';
    titulLlaveS.style.fontFamily = 'Perpetua';
    titulLlaveS.style.fontSize = '80px';
    titulLlaveS.style.position = 'absolute';
    titulLlaveS.style.top = '350px';
    titulLlaveS.style.left = '530px';
    document.body.appendChild(titulLlaveS);
    var textLlaveS = document.createElement('p');
    textLlaveS.textContent = "Abre puertas con cerraduras simples.";
    textLlaveS.id = 'textoLlave';
    textLlaveS.style.color = '#efefef';
    textLlaveS.style.fontFamily = 'Perpetua';
    textLlaveS.style.fontSize = '30px';
    textLlaveS.style.position = 'absolute';
    textLlaveS.style.top = '565px';
    textLlaveS.style.left = '590px';
    document.body.appendChild(textLlaveS);
}

function llaveElegant(){
    pause = true;
    textScreen = true;
    principal();
    var imgLlaveE = document.createElement('img');
    imgLlaveE.src = './imatges/imgLlaveElegante.png';
    imgLlaveE.id = 'imatgeLlave';
    imgLlaveE.style.width = '300px';
    imgLlaveE.style.position = 'absolute';
    imgLlaveE.style.top = '100px';
    imgLlaveE.style.left = '660px';
    document.body.appendChild(imgLlaveE);
    var imgGetObject = document.createElement('img');
    imgGetObject.src = './imatges/imgGetObject.png';
    imgGetObject.id = 'imatgeGetObjeto';
    imgGetObject.style.width = '550px';
    imgGetObject.style.position = 'absolute';
    imgGetObject.style.top = '515px';
    imgGetObject.style.left = '537px';
    document.body.appendChild(imgGetObject);
    var titulLlaveE = document.createElement('p');
    titulLlaveE.textContent = "LLAVE ELEGANTE";
    titulLlaveE.id = 'tituloLlave';
    titulLlaveE.style.color = '#efefef';
    titulLlaveE.style.fontFamily = 'Perpetua';
    titulLlaveE.style.fontSize = '80px';
    titulLlaveE.style.position = 'absolute';
    titulLlaveE.style.top = '350px';
    titulLlaveE.style.left = '480px';
    document.body.appendChild(titulLlaveE);
    var textLlaveE = document.createElement('p');
    textLlaveE.textContent = "Abre puertas con cerraduras elegantes.";
    textLlaveE.id = 'textoLlave';
    textLlaveE.style.color = '#efefef';
    textLlaveE.style.fontFamily = 'Perpetua';
    textLlaveE.style.fontSize = '30px';
    textLlaveE.style.position = 'absolute';
    textLlaveE.style.top = '565px';
    textLlaveE.style.left = '590px';
    document.body.appendChild(textLlaveE);
}

function textDialeg(info1,info2,info3){
    textScreen = true;
    dialogo = true;
    var imgDialeg = document.createElement('img');
    imgDialeg.src = './imatges/imgDialeg.png';
    imgDialeg.id = 'imatgeDialeg';
    imgDialeg.style.width = '450px';
    imgDialeg.style.position = 'absolute';
    imgDialeg.style.top = '30px';
    imgDialeg.style.left = '589px';
    document.body.appendChild(imgDialeg);
    var textInfo1 = document.createElement('p');
    textInfo1.textContent = info1;
    textInfo1.id = 'textoDialogo1';
    textInfo1.style.color = '#efefef';
    textInfo1.style.fontFamily = 'Perpetua';
    textInfo1.style.fontSize = '27px';
    textInfo1.style.position = 'absolute';
    textInfo1.style.top = '85px';
    textInfo1.style.left = '350px';
    document.body.appendChild(textInfo1);
    var textInfo2 = document.createElement('p');
    textInfo2.textContent = info2;
    textInfo2.id = 'textoDialogo2';
    textInfo2.style.color = '#efefef';
    textInfo2.style.fontFamily = 'Perpetua';
    textInfo2.style.fontSize = '27px';
    textInfo2.style.position = 'absolute';
    textInfo2.style.top = '130px';
    textInfo2.style.left = '350px';
    document.body.appendChild(textInfo2);
    var textInfo3 = document.createElement('p');
    textInfo3.textContent = info3;
    textInfo3.id = 'textoDialogo3';
    textInfo3.style.color = '#efefef';
    textInfo3.style.fontFamily = 'Perpetua';
    textInfo3.style.fontSize = '27px';
    textInfo3.style.position = 'absolute';
    textInfo3.style.top = '175px';
    textInfo3.style.left = '350px';
    document.body.appendChild(textInfo3);
}

function botonContinuar(x,y,object){
    var botonContinue = document.createElement('button');
    botonContinue.textContent = "CONTINUAR";
    botonContinue.id = "ContinueButton";
    botonContinue.style.color = "#ffffff";
    botonContinue.style.fontFamily = 'Perpetua';
    botonContinue.style.fontSize = "35px";
    botonContinue.style.position = 'absolute';
    botonContinue.style.top = y;
    botonContinue.style.left = x;
    botonContinue.style.backgroundColor = 'transparent';
    botonContinue.style.border = 'none';
    document.body.appendChild(botonContinue);
    objectScreen = object;

    botonContinue.onclick = function(){
        pause = false;
        textScreen = false;
        dialogo = false;
        principal();
        if(object == "Isma"){
            var deleteImgIsma = document.getElementById('imatgeIsma');
            deleteImgIsma.remove();
            var deleteTextIsma = document.getElementById('textoIsma');
            deleteTextIsma.remove();
        }else if(object == "Llave"){
            var deleteImgLlaveS = document.getElementById('imatgeLlave');
            deleteImgLlaveS.remove();
            var deleteImgGetObject = document.getElementById('imatgeGetObjeto');
            deleteImgGetObject.remove();
            var deleteTitulLlaveS = document.getElementById('tituloLlave');
            deleteTitulLlaveS.remove();
            var deleteTextLlaveS = document.getElementById('textoLlave');
            deleteTextLlaveS.remove();
        }else if(object == "Dialeg"){
            var deleteImgDialeg = document.getElementById('imatgeDialeg');
            deleteImgDialeg.remove();
            var deleteTextInfo1 = document.getElementById('textoDialogo1');
            deleteTextInfo1.remove();
            var deleteTextInfo2 = document.getElementById('textoDialogo2');
            deleteTextInfo2.remove();
            var deleteTextInfo3 = document.getElementById('textoDialogo3');
            deleteTextInfo3.remove();
        }
        botonContinue.remove();
    }
}

//Creador de Personatjes.

var knight = new prota(50,100);

var sombra = new ghost(50,100);

var tiktik1 = new enemic(550,300,0);
var tiktik2 = new enemic(200,50,0);
var tiktik3 = new enemic(200,300,0);
var gruzzer1 = new enemic(900,100,2);
var gruzzer2 = new enemic(1100,100,2);
var gruzzer3 = new enemic(650,600,2);
var errante = new enemic(1200,400,3);

function principal(){
    borrarPantalla();
    dibuixaEscenari();

    if(numEscenari == 0){
        if(!pause){
    knight.dibuixa();
    knight.text();
    knight.points();
    tiktik1.dibuixa();
    tiktik2.dibuixa();
    tiktik3.dibuixa();
    gruzzer1.dibuixa();
    gruzzer2.dibuixa();
    gruzzer3.dibuixa();
    errante.dibuixa();
    tiktik1.mou();
    tiktik2.mou();
    tiktik3.mou();
    gruzzer1.mou();
    gruzzer2.mou();
    gruzzer3.mou();
    errante.mou();
    canvas.style.filter = 'brightness(100%)';
        if(shadow){
    sombra.dibuixa();
    sombra.mou();
    }

    }else if(pause){
    knight.dibuixa();
    knight.text();
    knight.points();
    tiktik1.dibuixa();
    tiktik2.dibuixa();
    tiktik3.dibuixa();
    gruzzer1.dibuixa();
    gruzzer2.dibuixa();
    gruzzer3.dibuixa();
    errante.dibuixa();
    canvas.style.filter = 'brightness(60%)';
        if(shadow){
    sombra.dibuixa();
    }
    }
    if(dialogo){
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(300,62,1000,265);
    }
    }
    if(numEscenari == 1){
        if(!pause){
    knight.dibuixa();
    knight.text();
    knight.points();
    canvas.style.filter = 'brightness(100%)';

    }else if(pause){
    knight.dibuixa();
    knight.text();
    knight.points();
    canvas.style.filter = 'brightness(60%)';
    }
    if(dialogo){
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(300,62,1000,265);
    }
    }
}

function reiniciaEscenari0(){
    escenari[700/50][50/50] = 3
    escenari[650/50][1450/50] = 5
    escenari[50/50][350/50] = 7
    escenari[150/50][350/50] = 7
    escenari[250/50][350/50] = 7
    escenari[200/50][500/50] = 7
    escenari[350/50][100/50] = 7
    escenari[450/50][250/50] = 7
    escenari[50/50][750/50] = 7
    escenari[50/50][950/50] = 7
    escenari[50/50][1050/50] = 7
    escenari[50/50][1300/50] = 7
    escenari[350/50][1500/50] = 7
    escenari[400/50][1250/50] = 7
    escenari[350/50][950/50] = 7
    escenari[300/50][800/50] = 7
    escenari[500/50][1000/50] = 7
    escenari[650/50][1100/50] = 7
    escenari[700/50][1250/50] = 7
    escenari[200/50][500/50] = 7
    escenari[700/50][500/50] = 7
    escenari[650/50][50/50] = 7
    escenari[700/50][100/50] = 7
    escenariI[150/50][150/50] = 7
    escenariI[150/50][250/50] = 7
    escenariI[150/50][350/50] = 7
    escenariI[150/50][450/50] = 7
    escenariI[150/50][550/50] = 7
    escenariI[150/50][650/50] = 7
    escenariI[150/50][750/50] = 7
    escenariI[150/50][850/50] = 7
    escenariI[150/50][950/50] = 7
    escenariI[150/50][1050/50] = 7
    escenariI[150/50][1150/50] = 7
    escenariI[250/50][150/50] = 7
    escenariI[250/50][250/50] = 7
    escenariI[250/50][350/50] = 7
    escenariI[250/50][450/50] = 7
    escenariI[250/50][550/50] = 7
    escenariI[250/50][650/50] = 7
    escenariI[250/50][750/50] = 7
    escenariI[250/50][850/50] = 7
    escenariI[250/50][950/50] = 7
    escenariI[250/50][1050/50] = 7
    escenariI[250/50][1150/50] = 7
    escenariI[200/50][200/50] = 7
    escenariI[200/50][300/50] = 7
    escenariI[200/50][400/50] = 7
    escenariI[200/50][500/50] = 7
    escenariI[200/50][600/50] = 7
    escenariI[200/50][700/50] = 7
    escenariI[200/50][800/50] = 7
    escenariI[200/50][900/50] = 7
    escenariI[200/50][1000/50] = 7
    escenariI[200/50][1100/50] = 7
    shadow = false;
    sombraGeo = 0;
    knight.power = false;
    knight.llave = false;
    knight.x = 50;
    knight.y = 100;
    tiktik1.x = 550;
    tiktik1.y = 300;
    tiktik2.x = 200;
    tiktik2.y = 50;
    tiktik3.x = 200;
    tiktik3.y = 300;
    gruzzer1.x = 1000;
    gruzzer1.y = 150;
    gruzzer2.x = 1100;
    gruzzer2.y = 100;
    gruzzer3.x = 650;
    gruzzer3.y = 600;
    errante.x = 1200;
    errante.y = 400;
}

//Teclas Interactivas.

document.addEventListener('keydown',function(tecla){
    
    if(tecla.key == 'Escape' && textScreen == true && menuStart){
        pause = false;
        textScreen = false;
        dialogo = false;
        principal();
        if(objectScreen == "Isma"){
            var deleteImgIsma = document.getElementById('imatgeIsma');
            deleteImgIsma.remove();
            var deleteTextIsma = document.getElementById('textoIsma');
            deleteTextIsma.remove();
        }else if(objectScreen == "Llave"){
            var deleteImgLlaveS = document.getElementById('imatgeLlave');
            deleteImgLlaveS.remove();
            var deleteImgGetObject = document.getElementById('imatgeGetObjeto');
            deleteImgGetObject.remove();
            var deleteTitulLlaveS = document.getElementById('tituloLlave');
            deleteTitulLlaveS.remove();
            var deleteTextLlaveS = document.getElementById('textoLlave');
            deleteTextLlaveS.remove();
        }else if(objectScreen == "Dialeg"){
            var deleteImgDialeg = document.getElementById('imatgeDialeg');
            deleteImgDialeg.remove();
            var deleteTextInfo1 = document.getElementById('textoDialogo1');
            deleteTextInfo1.remove();
            var deleteTextInfo2 = document.getElementById('textoDialogo2');
            deleteTextInfo2.remove();
            var deleteTextInfo3 = document.getElementById('textoDialogo3');
            deleteTextInfo3.remove();
        }
            var deleteContinueButton = document.getElementById('ContinueButton');
            deleteContinueButton.remove();
    }
    
    if(menuStart && textScreen == false){
    
        if(!pause){
    if(tecla.key == 'ArrowUp' || tecla.key == 'w'){
        knight.adalt()
    }
    if(tecla.key == 'ArrowDown' || tecla.key == 's'){
        knight.abaix()
    }
    if(tecla.key == 'ArrowRight' || tecla.key == 'd'){
        knight.dreta()
    }
    if(tecla.key == 'ArrowLeft' || tecla.key == 'a'){
        knight.esquerra()
    }
   }
    
    if(tecla.key == 'p' && pause == false){
        pause = true;
        principal();
        menuPausa();
        menuPause = true;
    
    }else if(tecla.key == 'p' && pause == true){
        pause = false;
        principal();
        if(menuPause){
        menuPause = false;
    var deleteImgPause = document.getElementById('imatgePausa');
    deleteImgPause.remove();
    var deleteBotonCont = document.getElementById('botonContinuar');
    deleteBotonCont.remove();
    var deleteBotonOptions = document.getElementById('botonOpciones');
    deleteBotonOptions.remove();
    var deleteBotonExit = document.getElementById('botonExitGame');
    deleteBotonExit.remove();
        }
        if(menuOptions){
        menuOptions = false;
    var deleteImgOptions = document.getElementById('imatgeOptions');
    deleteImgOptions.remove();
    var deleteBotonOptBack = document.getElementById('botonOpcionesAtrás');
    deleteBotonOptBack.remove();
        }
        if(menuVolver){
        menuVolver = false;
    var deleteImgVolverMenu = document.getElementById('imatgeVolverMenu');
    deleteImgVolverMenu.remove();
    var deleteQuestExit = document.getElementById('questionExit');
    deleteQuestExit.remove();
    var deleteTextExit = document.getElementById('textoVolverMenu');
    deleteTextExit.remove();
    var deleteBotonExitYes = document.getElementById('botonExitSí');
    deleteBotonExitYes.remove();
    var deleteBotonExitNo = document.getElementById('botonExitNo');
    deleteBotonExitNo.remove();
        }
    }
    if(tecla.key == 'e' && (posicioEscenari(knight.x,knight.y) == 1 || posicioEscenari(knight.x,knight.y) == 10)){
        if(numEscenari == 0){
            if(knight.x == 600 && knight.y == 50 && posicioEscenari(knight.x,knight.y) == 10){
            numEscenari = 1;
        }else if(knight.x == 800 && knight.y == 450 && posicioEscenari(knight.x,knight.y) == 1){
            numEscenari = 1;
        }
        }else if(numEscenari == 1){
            if(knight.x == 600 && knight.y == 50 && posicioEscenari(knight.x,knight.y) == 10){
                numEscenari = 0;
            }else if(knight.x == 800 && knight.y == 450 && posicioEscenari(knight.x,knight.y) == 1){
                numEscenari = 0;
            }else if(knight.x == 150 && knight.y == 600 && posicioEscenari(knight.x,knight.y) == 1){
                percentatge = percentatge+geo;
                finalJuego();
            }
        }
    }
    }
})

//Otras Funciones.

function menuPausa(){
    var imgPause = document.createElement('img');
    imgPause.src = './imatges/imgPause.png';
    imgPause.id = 'imatgePausa';
    imgPause.style.width = '350px';
    imgPause.style.position = 'absolute';
    imgPause.style.top = '230px';
    imgPause.style.left = '635px';
    document.body.appendChild(imgPause);
        var botonCont = document.createElement('button');
    botonCont.textContent = "CONTINUAR";
    botonCont.id = "botonContinuar";
    botonCont.style.color = "#ffffff";
    botonCont.style.fontFamily = 'Perpetua';
    botonCont.style.fontSize = "30px";
    botonCont.style.position = 'absolute';
    botonCont.style.top = '340px';
    botonCont.style.left = '720px';
    botonCont.style.backgroundColor = 'transparent';
    botonCont.style.border = 'none';
    document.body.appendChild(botonCont);
        var botonOptions = document.createElement('button');
    botonOptions.textContent = "OPCIONES";
    botonOptions.id = "botonOpciones";
    botonOptions.style.color = "#ffffff";
    botonOptions.style.fontFamily = 'Perpetua';
    botonOptions.style.fontSize = "30px";
    botonOptions.style.position = 'absolute';
    botonOptions.style.top = '405px';
    botonOptions.style.left = '735px';
    botonOptions.style.backgroundColor = 'transparent';
    botonOptions.style.border = 'none';
    document.body.appendChild(botonOptions);
        var botonExit = document.createElement('button');
    botonExit.textContent = "VOLVER AL MENÚ";
    botonExit.id = "botonExitGame";
    botonExit.style.color = "#ffffff";
    botonExit.style.fontFamily = 'Perpetua';
    botonExit.style.fontSize = "30px";
    botonExit.style.position = 'absolute';
    botonExit.style.top = '470px';
    botonExit.style.left = '680px';
    botonExit.style.backgroundColor = 'transparent';
    botonExit.style.border = 'none';
    document.body.appendChild(botonExit);

    botonCont.onclick = function(){
        pause = false;
        principal();
        var deleteImgPause = document.getElementById('imatgePausa');
    deleteImgPause.remove();
    botonCont.remove();
    botonOptions.remove();
    botonExit.remove();
    menuPause = false;
    }
    botonOptions.onclick = function(){
        menuPause = false;
        menuOptions = true;
        var deleteImgPause = document.getElementById('imatgePausa');
    deleteImgPause.remove();
    botonCont.remove();
    botonOptions.remove();
    botonExit.remove();
        var imgOptions = document.createElement('img');
    imgOptions.src = './imatges/imgMenuOptions.png';
    imgOptions.id = 'imatgeOptions';
    imgOptions.style.width = '550px';
    imgOptions.style.position = 'absolute';
    imgOptions.style.top = '110px';
    imgOptions.style.left = '541px';
    document.body.appendChild(imgOptions);
        var botonOptBack = document.createElement('button');
    botonOptBack.textContent = "ATRÁS";
    botonOptBack.id = "botonOpcionesAtrás";
    botonOptBack.style.color = "#ffffff";
    botonOptBack.style.fontFamily = 'Perpetua';
    botonOptBack.style.fontSize = "30px";
    botonOptBack.style.position = 'absolute';
    botonOptBack.style.top = '670px';
    botonOptBack.style.left = '760px';
    botonOptBack.style.backgroundColor = 'transparent';
    botonOptBack.style.border = 'none';
    document.body.appendChild(botonOptBack);

    botonOptBack.onclick = function(){
        menuOptions = false;
        menuPause = true;
    imgOptions.remove();
    botonOptBack.remove();
    menuPausa();
    }
    }
    botonExit.onclick = function(){
        menuVolver = true;
        menuPause = false;
        var deleteImgPause = document.getElementById('imatgePausa');
    deleteImgPause.remove();
    botonCont.remove();
    botonOptions.remove();
    botonExit.remove();
        var imgVolverMenu = document.createElement('img');
    imgVolverMenu.src = './imatges/imgVolverMenu.png';
    imgVolverMenu.id = 'imatgeVolverMenu';
    imgVolverMenu.style.width = '400px';
    imgVolverMenu.style.position = 'absolute';
    imgVolverMenu.style.top = '270px';
    imgVolverMenu.style.left = '611px';
    document.body.appendChild(imgVolverMenu);
        var questExit = document.createElement('p');
    questExit.textContent = "¿VOLVER AL MENÚ?";
    questExit.id = 'questionExit';
    questExit.style.color = '#ffffff';
    questExit.style.fontFamily = 'Perpetua';
    questExit.style.fontSize = '35px';
    questExit.style.position = 'absolute';
    questExit.style.top = '295px';
    questExit.style.left = '645px';
    document.body.appendChild(questExit);
        var textExit = document.createElement('p');
    textExit.textContent = "NO SE GUARDARÁ EL PROGRESO";
    textExit.id = 'textoVolverMenu';
    textExit.style.color = '#ffffff';
    textExit.style.fontFamily = 'Perpetua';
    textExit.style.fontSize = '25px';
    textExit.style.position = 'absolute';
    textExit.style.top = '360px';
    textExit.style.left = '615px';
    document.body.appendChild(textExit);
        var botonExitYes = document.createElement('button');
    botonExitYes.textContent = "Sí";
    botonExitYes.id = "botonExitSí";
    botonExitYes.style.color = "#ffffff";
    botonExitYes.style.fontFamily = 'Perpetua';
    botonExitYes.style.fontSize = "35px";
    botonExitYes.style.position = 'absolute';
    botonExitYes.style.top = '440px';
    botonExitYes.style.left = '790px';
    botonExitYes.style.backgroundColor = 'transparent';
    botonExitYes.style.border = 'none';
    document.body.appendChild(botonExitYes);
        var botonExitNo = document.createElement('button');
    botonExitNo.textContent = "No";
    botonExitNo.id = "botonExitNo";
    botonExitNo.style.color = "#ffffff";
    botonExitNo.style.fontFamily = 'Perpetua';
    botonExitNo.style.fontSize = "35px";
    botonExitNo.style.position = 'absolute';
    botonExitNo.style.top = '500px';
    botonExitNo.style.left = '785px';
    botonExitNo.style.backgroundColor = 'transparent';
    botonExitNo.style.border = 'none';
    document.body.appendChild(botonExitNo);

    botonExitNo.onclick = function(){
        menuVolver = false;
        menuPause = true;
        imgVolverMenu.remove();
        questExit.remove();
        textExit.remove();
        botonExitYes.remove();
        botonExitNo.remove();
        menuPausa();
    }
    botonExitYes.onclick = function(){
        menuVolver = false;
        imgVolverMenu.remove();
        questExit.remove();
        textExit.remove();
        botonExitYes.remove();
        botonExitNo.remove();
        pause = false;
        menuStart = false;
        principal();
        reiniciaEscenari0();
        borrarPantalla();
        inicializar();
    }
    }
}
