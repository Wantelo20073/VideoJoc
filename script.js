var canvas;
var ctx;
var FPS = 50;
var tileMap;
var titulo;
var fondoMenuHK;
var imgGeo;
var imgVidas5;
var imgVidas4;
var imgVidas3;
var imgVidas2;
var imgVidas1;
var fondoFK;
var tilemapFakeKnight;
var ampleC = 50;
var altC = 50;

var simpleKeys = 0;
var puerta01 = false;
var elegantKeys = 0;
var secretDoor0 = false;

var power = false;
var geo = 0;
var sombraGeo = 0;
var percentatge = 0;
var mascaras = 5;

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
var shadowEscenari;
var numEscenari;
var movimentProta;
var bossMode = false;
var iniciarFK = false;
var FKstart = false;
var interFKstart = false;
var FKjump = false;
var interFKjump = false;
var FKprepareHit = false;
var FKhit = false;
var interFKhit = false;
var FKhealth = 60;
var FKdead = false;
var FKfinal = false;
var FKfinalJump = false;
var interFKdead = false;
var escenariSpawn = 0;
var xSpawn = 50;
var ySpawn = 100;
var banco = false;

var escenari = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,2,0,2,2,2,7,2,2,4,4,10,0,0,7,2,2,2,7,0,7,2,2,2,2,7,0,0,11,2,0],
    [0,2,2,0,2,2,0,0,0,2,0,4,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,0],
    [0,0,2,0,2,2,0,7,0,2,2,2,0,2,2,2,2,0,2,2,2,2,2,0,2,2,2,2,2,0,4,0],
    [0,2,2,2,2,2,2,2,2,2,7,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,4,0],
    [0,2,2,2,2,2,0,7,0,2,2,2,0,2,0,2,2,2,0,2,2,0,2,2,2,2,2,0,2,2,2,0],
    [0,2,0,0,2,2,0,0,0,4,0,2,0,2,0,2,14,2,2,2,2,2,2,0,2,2,2,2,2,2,2,0],
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
    [0,0,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,2,2,2,2,2,12,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,2,1,2,2,2,2,2,14,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]

var escenariII = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99, 0, 0, 0, 0, 0, 0],
    [0, 0,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99, 0, 0],
    [0, 0,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99, 0, 0],
    [0, 0,99, 1,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99, 1,99, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

function posicioEscenari(x,y){
    var escenariPosition;
    if(numEscenari == 0){
        escenariPosition = escenari[y/50][x/50];
        return escenariPosition;
    }else if(numEscenari == 1){
        escenariPosition = escenariI[y/50][x/50];
        return escenariPosition;
    }else if(numEscenari == 2){
        escenariPosition = escenariII[y/50][x/50];
        return escenariPosition;
    }
}

function canviarEscenari(x,y,n){
    if(numEscenari == 0){
        escenari[y/50][x/50] = n;
    }else if(numEscenari == 1){
        escenariI[y/50][x/50] = n;
    }else if(numEscenari == 2){
        escenariII[y/50][x/50] = n;
    }
}

function dibuixaEscenari(){
    for(var y=0; y<16; y++){
        for(var x=0; x<32; x++){

            let tile;
            if(numEscenari == 0){
                tile = escenari[y][x]
            }else if(numEscenari == 1){
                tile = escenariI[y][x]
            }else if(numEscenari == 2){
                tile = escenariII[y][x]
            }

            if(tile > 13){
                ctx.drawImage(tileMap,(tile-14)*32,160,32,32,x*ampleC,y*altC,ampleC,altC)
            }else if(tile > 11 && tile < 14){
                ctx.drawImage(tileMap,(tile-12)*32,128,32,32,x*ampleC,y*altC,ampleC,altC)
            }else if(tile > 7 && tile < 12){
                ctx.drawImage(tileMap,(tile-8)*32,96,32,32,x*ampleC,y*altC,ampleC,altC)
            }else if(tile > 3 && tile < 8){
                ctx.drawImage(tileMap,(tile-4)*32,64,32,32,x*ampleC,y*altC,ampleC,altC)
            }else{
                ctx.drawImage(tileMap,tile*32,0,32,32,x*ampleC,y*altC,ampleC,altC)
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
        crearButton("Start Game",'botonComençar','35px','725px','600px');

        var botonStart = document.getElementById('botonComençar');
        botonStart.onclick = function(){
            menuStart = true;
            eliminar('botonComençar');
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

//Carga de imagenes.

    tileMap = new Image();
    tileMap.src = './imatges/tilemapHollowKnight.png'
    titulo = new Image();
    titulo.src = './imatges/tituloHK.png'
    fondoMenuHK = new Image();
    fondoMenuHK.src = './imatges/fondoMenuHK.png'
    imgGeo = new Image();
    imgGeo.src = './imatges/imgGeo.png'
    imgVidas5 = new Image();
    imgVidas5.src = './imatges/imgVidas5.png'
    imgVidas4 = new Image();
    imgVidas4.src = './imatges/imgVidas4.png'
    imgVidas3 = new Image();
    imgVidas3.src = './imatges/imgVidas3.png'
    imgVidas2 = new Image();
    imgVidas2.src = './imatges/imgVidas2.png'
    imgVidas1 = new Image();
    imgVidas1.src = './imatges/imgVidas1.png'
    fondoFK = new Image();
    fondoFK.src = './imatges/imgFondoFK.png'
    tilemapFakeKnight = new Image();
    tilemapFakeKnight.src = './imatges/tilemapFakeKnight.png'

//Tipos de Personajes.

var prota = function(x,y){
    this.x = x;
    this.y = y;
    this.power = power

    var tempsInvencible = 0;
    this.tempsInvencible = tempsInvencible;

    var cooldownAtac = 0;
    this.cooldownAtac = cooldownAtac;

    this.dibuixa = function(){
        if(!banco){
            ctx.drawImage(tileMap,32,32,32,32,this.x,this.y,50,50)
        }else if(banco){
            ctx.drawImage(tileMap,32,160,32,32,this.x,this.y-9,50,50)
        }
        knight.tempsInvencible--;
        knight.cooldownAtac--;
    }
    this.logica = function(){
        if(posicioEscenari(this.x,this.y) == 3){
            simpleKeys = simpleKeys+1;
            percentatge = percentatge+15;
            llaveSimple();
            botonContinuar("703px","670px","Llave");
            canviarEscenari(this.x,this.y,2)
        }
        if(posicioEscenari(this.x,this.y) == 1){
            if(posicioEspecifica(0,800,450,1) && !puerta01 && simpleKeys < 1){
                textDialeg("Una puerta con una cerradura simple."," "," ");
                botonContinuar("703px","260px","Dialeg");
            }
        }
        if(posicioEscenari(this.x,this.y) == 5){
            this.power = true
            percentatge = percentatge+15;
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
            if(posicioEspecifica(0,1450,50,11)){
                textDialeg("Hola, que bueno que me hayas encontrado. Soy Sly, estaba buscando un tesoro y me",
                            "perdí. Dicen que la llave se encuentra al cruzar el ácido junto a la sala de la puerta",
                            "principal y la entrada junto al ácido más alto. Yo ya me voy, suerte.")
                botonContinuar("703px","260px","Dialeg");
            }
        }
        if(posicioEscenari(this.x,this.y) == 9){
            elegantKeys = elegantKeys+1;
            percentatge = percentatge+15;
            llaveElegant();
            botonContinuar("703px","670px","Llave");
            if(posicioEspecifica(0,650,500,9)){
                canviarEscenari(this.x,this.y,4)
                canviarEscenari(this.x-50,this.y,4)
                canviarEscenari(this.x+50,this.y,4)
            }
        }
        if(posicioEscenari(this.x,this.y) == 10){
            if(posicioEspecifica(0,600,50,10)){
                if(!secretDoor0 && elegantKeys < 1){
                    textDialeg("Hay una cerradura brillante en la pared."," "," ");
                    botonContinuar("703px","260px","Dialeg");
                }else if(!secretDoor0 && elegantKeys > 0){
                    elegantKeys = elegantKeys-1;
                    secretDoor0 = true;
                }
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
        movimentProta = "adalt";
        this.interactiu(movimentProta);
    }
    this.abaix = function(){
        if(!this.margenes(this.x,this.y+50)){
        this.y = this.y+50
        this.logica()
        }
        movimentProta = "abaix";
        this.interactiu(movimentProta);
    }
    this.dreta = function(){
        if(!this.margenes(this.x+50,this.y)){
        this.x = this.x+50
        this.logica()
        }
        movimentProta = "dreta";
        this.interactiu(movimentProta);
    }
    this.esquerra = function(){
        if(!this.margenes(this.x-50,this.y)){
        this.x = this.x-50
        this.logica()
        }
        movimentProta = "esquerra";
        this.interactiu(movimentProta);
    }
    this.dretaAtac = function(){
        ctx.drawImage(tileMap,96,128,32,32,this.x+35,this.y,50,50)
        knight.cooldownAtac = 20;
        if(!FKdead){
            var hit = falsoCaballero.hitbox("dreta");
        if(hit){
            FKhealth--;
            if(FKhealth < 1){
                FKdead = true;
                canvas.style.filter = 'brightness(200%)';
            }
        }
        }
    }
    this.esquerraAtac = function(){
        ctx.drawImage(tileMap,64,128,32,32,this.x-35,this.y,50,50)
        knight.cooldownAtac = 20;
        if(!FKdead){
            var hit = falsoCaballero.hitbox("esquerra");
        if(hit){
            FKhealth--;
            if(FKhealth < 1){
                FKdead = true;
                canvas.style.filter = 'brightness(200%)';
            }
        }
        }
    }
    this.salut = function(){
        if(mascaras == 5){
            ctx.drawImage(imgVidas5,20,10,140,30);
        }else if(mascaras == 4){
            ctx.drawImage(imgVidas4,20,10,140,30);
        }else if(mascaras == 3){
            ctx.drawImage(imgVidas3,20,10,140,30);
        }else if(mascaras == 2){
            ctx.drawImage(imgVidas2,20,10,140,30);
        }else if(mascaras == 1){
            ctx.drawImage(imgVidas1,20,10,140,30);
        }
    }
    this.points = function(){
        ctx.drawImage(imgGeo,1470,10,30,30);
        ctx.font = '40px Perpetua';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(geo,1505,37);
    }
    this.text = function(){
        ctx.font = '30px impact'
        ctx.fillStyle = '#ffffff'
        ctx.fillText("X: "+this.x+" Y: "+this.y,1430,790)
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
        if(!secretDoor0){
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
    this.bossContact = function(MEsquerra,MDreta,MAdalt,MAbaix){
        var contacte = false;
        if((knight.x+25) >= MEsquerra && (knight.x+25) <= MDreta && (knight.y+25) >= MAdalt && (knight.y+25) <= MAbaix){
            contacte = true;
            return contacte;
        }
        return contacte;
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
        if(knight.tempsInvencible < 0){
            var hit = knight.mort(this.x,this.y);
        if(hit){
            mascaras = mascaras-1;
            if(mascaras < 1){
                shadow = true;
                sombra.x = knight.x;
                sombra.y = knight.y;
                shadowEscenari = numEscenari;
                knight.x = xSpawn;
                knight.y = ySpawn;
                numEscenari = escenariSpawn;
                sombraGeo = geo;
                geo = 0;
                banco = true;
                mascaras = 5;
            }else{
                if(movimentProta == "adalt"){
                knight.abaix();
            }else if(movimentProta == "abaix"){
                knight.adalt();
            }else if(movimentProta == "dreta"){
                knight.esquerra();
            }else if(movimentProta == "esquerra"){
                knight.dreta();
            }
            }
            knight.tempsInvencible = 100;
        }
        }
        this.temps++;
        if(this.temps == 50){
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
            var direccio;
            if(numEscenari == 2){
                direccio = Math.floor(Math.random() * 2) + 1
            }else{
                direccio = Math.floor(Math.random() * 4) + 1
            }
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

var fakeKnight = function(x,y){
    this.x = x;
    this.y = y;
    this.margeEsquerra = this.x+75;
    this.margeDreta = this.x+225;
    this.margeAdalt = this.y+75;
    this.margeAbaix = this.y+200;

    var temps = 125;
    this.temps = temps;

    this.dibuixa = function(){
        if(!FKdead){
            if(!FKprepareHit && !FKhit){
            if(this.y == 450){
            if(knight.x < (this.x+150)){
                ctx.drawImage(tilemapFakeKnight,192,0,192,128,this.x,this.y,300,200);
            }else if(knight.x >= (this.x+150)){
                ctx.drawImage(tilemapFakeKnight,0,0,192,128,this.x,this.y,300,200);
            }
        }else if(this.y < 450){
            if(knight.x < (this.x+150)){
                ctx.drawImage(tilemapFakeKnight,192,128,192,128,this.x,this.y,300,200);
            }else if(knight.x >= (this.x+150)){
                ctx.drawImage(tilemapFakeKnight,0,128,192,128,this.x,this.y,300,200);
            }
        }
        }else if(FKprepareHit){
            if(knight.x < (this.x+150)){
                ctx.drawImage(tilemapFakeKnight,192,256,192,128,this.x,this.y,300,200);
            }else if(knight.x >= (this.x+150)){
                ctx.drawImage(tilemapFakeKnight,0,256,192,128,this.x,this.y,300,200);
            }
        }else if(FKhit){
            if(knight.x < (this.x+150)){
                ctx.drawImage(tilemapFakeKnight,192,384,192,128,this.x,this.y,300,200);
            }else if(knight.x >= (this.x+150)){
                ctx.drawImage(tilemapFakeKnight,0,384,192,128,this.x,this.y,300,200);
            }
        }
        }else if(FKdead){
            if(knight.x < (this.x+150)){
                ctx.drawImage(tilemapFakeKnight,192,128,192,128,this.x,this.y,300,200);
            }else if(knight.x >= (this.x+150)){
                ctx.drawImage(tilemapFakeKnight,0,128,192,128,this.x,this.y,300,200);
            }
        }
    }
    this.start = function(){
        iniciarFK = true;
        if(!interFKstart){
            setInterval(function(){
                if(iniciarFK && !pause){
                    if(!FKstart && falsoCaballero.y < 450){
                    falsoCaballero.y = falsoCaballero.y+5;
                    }else if(!FKstart && falsoCaballero.y == 450){
                    FKstart = true;
                    }   
                }
            },1)
            interFKstart = true;
        }
    }
    this.mort = function(){
        percentatge = percentatge+10;
        iniciarFK = false;
        if(!interFKdead){
            interFKdead = true;
                setInterval(function(){
                    if(FKdead && !FKfinal && !pause){
                        if(!FKfinalJump && falsoCaballero.y > 350){
                        falsoCaballero.y = falsoCaballero.y-2;
                    }else if(FKfinalJump && falsoCaballero.y < 700){
                        falsoCaballero.y = falsoCaballero.y+2;
                    }
                    if(falsoCaballero.y == 350){
                            FKfinalJump = true;
                    }
                    if(FKfinalJump && falsoCaballero.y >= 700){
                        FKfinal = true;
                    }
                    }
                },1)
            }
    }
    this.mou = function(){
        this.margeContacte();
        this.temps++;
        if(this.temps > 200){
            var numAtac = Math.floor(Math.random() * 2) + 1
            if(numAtac == 1 && knight.x >= (falsoCaballero.x-150) && knight.x < (falsoCaballero.x+450)){
                FKprepareHit = true;
                if(!interFKhit){
                    setInterval(function(){
                        if(iniciarFK && FKstart && !pause){
                            if(FKprepareHit && falsoCaballero.temps > 75){
                            FKprepareHit = false;
                            FKhit = true;
                        if(knight.x < (falsoCaballero.x+150)){
                            falsoCaballero.x = falsoCaballero.x-150;
                        }else if(knight.x >= (falsoCaballero.x+150)){
                            falsoCaballero.x = falsoCaballero.x+150;
                        }
                    }
                    if(FKhit && falsoCaballero.temps > 100){
                        FKhit = false;
                        if(knight.x < (falsoCaballero.x+150)){
                            falsoCaballero.x = falsoCaballero.x+150;
                        }else if(knight.x >= (falsoCaballero.x+150)){
                            falsoCaballero.x = falsoCaballero.x-150;
                        }
                    }
                        }
                    },20)
                    interFKhit = true;
                }
            }else if(numAtac == 1){
                numAtac = 2;
            }
            if(numAtac == 2){
                FKjump = true;
            if(!interFKjump){
                setInterval(function(){
                    if(iniciarFK && FKstart && !pause){
                        if(FKjump && falsoCaballero.y > 200){
                        falsoCaballero.y = falsoCaballero.y-2;
                    }else if(!FKjump && falsoCaballero.y < 450){
                        falsoCaballero.y = falsoCaballero.y+2;
                    }
                    if(falsoCaballero.y == 200 && falsoCaballero.temps > 100){
                            FKjump = false;
                    }
                    if(FKjump && falsoCaballero.temps < 70){
                        if((knight.x+25) < (falsoCaballero.x+150) && falsoCaballero.x > 300){
                            falsoCaballero.x--;
                        }else if((knight.x+25) > (falsoCaballero.x+150) && (falsoCaballero.x+300) < 1300){
                            falsoCaballero.x++;
                        }
                    }
                    }
                },0.1)
                interFKjump = true;
            }
            }
            this.temps = 0;
        }
    }
    this.margeContacte = function(){
        if(!FKhit){
            this.margeEsquerra = this.x+75;
            this.margeDreta = this.x+225;
        }else if(FKhit){
            this.margeEsquerra = this.x+15;
            this.margeDreta = this.x+285;
        }
        this.margeAdalt = this.y+75;
        this.margeAbaix = this.y+200;
        if(knight.tempsInvencible < 0){
            var hit = knight.bossContact(this.margeEsquerra,this.margeDreta,this.margeAdalt,this.margeAbaix);
        if(hit){
            mascaras = mascaras-1;
            if(mascaras < 1){
                falsoCaballero.x = 850;
                falsoCaballero.y = -200;
                falsoCaballero.temps = 0;
                iniciarFK = false;
                FKstart = false;
                FKjump = false;
                FKprepareHit = false;
                FKhit = false;
                bossMode = false;
                shadow = true;
                sombra.x = knight.x;
                sombra.y = knight.y;
                shadowEscenari = numEscenari;
                canviarEscenari(250,500,99);
                canviarEscenari(250,550,99);
                canviarEscenari(250,600,99);
                canviarEscenari(1300,500,99);
                canviarEscenari(1300,550,99);
                canviarEscenari(1300,600,99);
                knight.x = xSpawn;
                knight.y = ySpawn;
                numEscenari = escenariSpawn;
                sombraGeo = geo;
                geo = 0;
                banco = true;
                mascaras = 5;
            }else{
            if(movimentProta == "dreta"){
                knight.esquerra();
            }else if(movimentProta == "esquerra"){
                knight.dreta();
            }
            }
            knight.tempsInvencible = 100;
        }
        }
    }
    this.hitbox = function(direccio){
        var dany = false;
        if(direccio == "dreta" && (knight.x+85) >= (falsoCaballero.x+50) && (knight.x+85) <= (falsoCaballero.x+175) && falsoCaballero.y == 450){
            dany = true;
            return dany;
        }else if(direccio == "esquerra" && (knight.x-35) <= (falsoCaballero.x+250) && (knight.x-35) >= (falsoCaballero.x+125) && falsoCaballero.y == 450){
            dany = true;
            return dany;
        }
        return dany;
    }
}

function finalJuego(){
    pause = true;
    textScreen = true;
    principal();
    menuStart = false;
    crearImatge('./imatges/imgFinalJuego.png','imatgeFJ','1100px','265px','180px');
    var imgFinal = document.getElementById('imatgeFJ');
    imgFinal.style.filter = 'brightness(150%)';
    crearText("JUEGO COMPLETADO",'tituloFinalJuego','55px','540px','200px');
    crearText("PORCENTAJE",'textoFinalJuego','45px','675px','360px');
    crearText(percentatge+"%",'porcentajeFinalJuego','35px','780px','430px');
}

function lagrimaIsma(){
    pause = true;
    textScreen = true;
    principal();
    crearImatge('./imatges/imgIsma.png','imatgeIsma','650px','491px','80px');
    crearText("Nada en aguas ácidas sin sufrir ningún daño.",'textoIsma','30px','543px','565px');
}

function llaveSimple(){
    pause = true;
    textScreen = true;
    principal();
    crearImatge('./imatges/imgLlaveSimple.png','imatgeLlave','300px','670px','100px');
    crearImatge('./imatges/imgGetObject.png','imatgeGetObjeto','550px','537px','515px');
    crearText("LLAVE SIMPLE",'tituloLlave','80px','530px','350px');
    crearText("Abre puertas con cerraduras simples.",'textoLlave','30px','590px','565px');
}

function llaveElegant(){
    pause = true;
    textScreen = true;
    principal();
    crearImatge('./imatges/imgLlaveElegante.png','imatgeLlave','300px','660px','100px');
    crearImatge('./imatges/imgGetObject.png','imatgeGetObjeto','550px','537px','515px');
    crearText("LLAVE ELEGANTE",'tituloLlave','80px','480px','350px');
    crearText("Abre puertas con cerraduras elegantes.",'textoLlave','30px','590px','565px');
}

function textDialeg(info1,info2,info3){
    textScreen = true;
    dialogo = true;
    crearImatge('./imatges/imgDialeg.png','imatgeDialeg','450px','589px','30px');
    crearText(info1,'textoDialogo1','27px','350px','85px');
    crearText(info2,'textoDialogo2','27px','350px','130px');
    crearText(info3,'textoDialogo3','27px','350px','175px');
}

function botonContinuar(x,y,object){
    crearButton("CONTINUAR",'ContinueButton','35px',x,y);
    objectScreen = object;

    var botonContinue = document.getElementById('ContinueButton');
    botonContinue.onclick = function(){
        pause = false;
        textScreen = false;
        dialogo = false;
        principal();
        if(object == "Isma"){
            eliminar('imatgeIsma');
            eliminar('textoIsma');
        }else if(object == "Llave"){
            eliminar('imatgeLlave');
            eliminar('imatgeGetObjeto');
            eliminar('tituloLlave');
            eliminar('textoLlave');
        }else if(object == "Dialeg"){
            eliminar('imatgeDialeg');
            eliminar('textoDialogo1');
            eliminar('textoDialogo2');
            eliminar('textoDialogo3');
        }
        eliminar('ContinueButton')
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

var falsoCaballero = new fakeKnight(850,-200);

function principal(){
    borrarPantalla();

    if(numEscenari == 2){
        ctx.drawImage(fondoFK,100,100,1400,550);
        if(!pause){
        if(!FKstart && !iniciarFK && knight.x == 500){
            canviarEscenari(250,500,0);
            canviarEscenari(250,550,0);
            canviarEscenari(250,600,0);
            canviarEscenari(1300,500,0);
            canviarEscenari(1300,550,0);
            canviarEscenari(1300,600,0);
            falsoCaballero.start();
        }else if(FKstart && !FKdead){
            falsoCaballero.mou();
        }else if(FKdead && !interFKdead){
            falsoCaballero.mort();
            canviarEscenari(250,500,99);
            canviarEscenari(250,550,99);
            canviarEscenari(250,600,99);
            canviarEscenari(1300,500,99);
            canviarEscenari(1300,550,99);
            canviarEscenari(1300,600,99);
        }
        }
        if(!FKfinal){
            falsoCaballero.dibuixa();
        }
    }

    dibuixaEscenari();
    knight.text();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(15,5,150,40);
    knight.salut();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(1465,5,105,40);
    knight.points();

    if(numEscenari == 0){
        if(!pause){
    tiktik1.mou();
    tiktik2.mou();
    tiktik3.mou();
    gruzzer1.mou();
    gruzzer2.mou();
    gruzzer3.mou();
    errante.mou();
    }
    tiktik1.dibuixa();
    tiktik2.dibuixa();
    tiktik3.dibuixa();
    gruzzer1.dibuixa();
    gruzzer2.dibuixa();
    gruzzer3.dibuixa();
    errante.dibuixa();
    }
    knight.dibuixa();
    if(dialogo){
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(300,62,1000,265);
    }
    if(!pause){
        if(shadow && shadowEscenari == numEscenari){
    sombra.dibuixa();
    sombra.mou();
    }
        canvas.style.filter = 'brightness(100%)';
    }else if(pause){
        if(shadow && shadowEscenari == numEscenari){
    sombra.dibuixa();
    }
        canvas.style.filter = 'brightness(60%)';
    }
}

function reiniciaVideoJoc(){
    numEscenari = 0;
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
    escenari[500/50][1000/50] = 7
    escenari[650/50][1100/50] = 7
    escenari[700/50][1250/50] = 7
    escenari[200/50][500/50] = 7
    escenari[700/50][500/50] = 7
    escenari[650/50][50/50] = 7
    escenari[700/50][100/50] = 7
    escenari[500/50][600/50] = 8
    escenari[500/50][650/50] = 9
    escenari[500/50][700/50] = 0
    escenariI[250/50][350/50] = 12
    escenariII[500/50][250/50] = 99
    escenariII[550/50][250/50] = 99
    escenariII[600/50][250/50] = 99
    escenariII[500/50][1300/50] = 99
    escenariII[550/50][1300/50] = 99
    escenariII[600/50][1300/50] = 99
    shadow = false;
    sombraGeo = 0;
    geo = 0;
    mascaras = 5;
    knight.power = false;
    simpleKeys = 0;
    puerta01 = false;
    elegantKeys = 0;
    secretDoor0 = false;
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
    escenariSpawn = 0;
    xSpawn = 50;
    ySpawn = 100;
    banco = false;
    bossMode = false;
    falsoCaballero.x = 850;
    falsoCaballero.y = -200;
    falsoCaballero.temps = 0;
    iniciarFK = false;
    FKstart = false;
    FKjump = false;
    FKprepareHit = false;
    FKhit = false;
    percentatge = 0;
}

//Teclas Interactivas.

document.addEventListener('keydown',function(tecla){
    
    if(tecla.key == 'Escape' && textScreen == true && menuStart){
        pause = false;
        textScreen = false;
        dialogo = false;
        principal();
        if(objectScreen == "Isma"){
            eliminar('imatgeIsma');
            eliminar('textoIsma');
        }else if(objectScreen == "Llave"){
            eliminar('imatgeLlave');
            eliminar('imatgeGetObjeto');
            eliminar('tituloLlave');
            eliminar('textoLlave');
        }else if(objectScreen == "Dialeg"){
            eliminar('imatgeDialeg');
            eliminar('textoDialogo1');
            eliminar('textoDialogo2');
            eliminar('textoDialogo3');
        }
        eliminar('ContinueButton');
    }
    
    if(menuStart && textScreen == false){
    
        if(!pause && !banco){
            if(!bossMode){
    if(tecla.key == 'ArrowUp' || tecla.key == 'w'){
        knight.adalt()
    }
    if(tecla.key == 'ArrowDown' || tecla.key == 's'){
        knight.abaix()
    }
    }
    if(tecla.key == 'ArrowRight' || tecla.key == 'd'){
        knight.dreta()
    }
    if(tecla.key == 'ArrowLeft' || tecla.key == 'a'){
        knight.esquerra()
    }
        if(bossMode){
            if(knight.cooldownAtac < 1){
                if(tecla.key == 'x' || tecla.key == 'm'){
                    knight.dretaAtac()
                }
                if(tecla.key == 'z' || tecla.key == 'n'){
                    knight.esquerraAtac()
                }
            }
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
        eliminar('imatgePausa');
        eliminar('botonContinuar');
        eliminar('botonOpciones');
        eliminar('botonExitGame');
        }
        if(menuOptions){
        menuOptions = false;
        eliminar('imatgeOptions');
        eliminar('botonOpcionesAtrás');
        }
        if(menuVolver){
        menuVolver = false;
        eliminar('imatgeVolverMenu');
        eliminar('questionExit');
        eliminar('textoVolverMenu');
        eliminar('botonExitSí');
        eliminar('botonExitNo');
        }
    }
    if(tecla.key == 'e'){
        if(posicioEspecifica(0,800,450,1) || posicioEspecifica(1,800,450,1)){
            if(numEscenari == 0){
                if(!puerta01 && simpleKeys > 0){
                simpleKeys = simpleKeys-1;
                puerta01 = true;
                numEscenari = 1;
            }else if(puerta01){
                numEscenari = 1;
            }
            }else if(numEscenari == 1){
                numEscenari = 0;
            }
        }else if(posicioEspecifica(0,600,50,10) || posicioEspecifica(1,600,50,10)){
            if(numEscenari == 0){
                numEscenari = 1;
            }else if(numEscenari == 1){
                numEscenari = 0;
            }
        }else if(posicioEspecifica(1,350,250,12)){
            obrirCofre(7);
        }
        if(posicioEspecifica(1,150,600,1) || posicioEspecifica(2,150,600,1)){
            if(numEscenari == 1){
                numEscenari = 2;
                bossMode = true;
            }else if(numEscenari == 2){
                numEscenari = 1;
                bossMode = false;
            }
            
        }
        if(posicioEspecifica(0,800,300,14) || posicioEspecifica(1,450,600,14)){
            if(!banco){
                escenariSpawn = numEscenari;
                xSpawn = knight.x;
                ySpawn = knight.y;
                banco = true;
                mascaras = 5;
            }else if(banco){
                banco = false;
            }
        }
        if(posicioEspecifica(2,1400,600,1)){
            percentatge = percentatge+geo;
            finalJuego();
        }
    }
    }
})

//Otras Funciones.

function menuPausa(){
    crearImatge('./imatges/imgPause.png','imatgePausa','350px','635px','230px');
    crearButton("CONTINUAR",'botonContinuar','30px','720px','340px');
    crearButton("OPCIONES",'botonOpciones','30px','735px','405px');
    crearButton("VOLVER AL MENÚ",'botonExitGame','30px','680px','470px');

    var botonCont = document.getElementById('botonContinuar');
    botonCont.onclick = function(){
        pause = false;
        principal();
    eliminar('imatgePausa');
    eliminar('botonContinuar');
    eliminar('botonOpciones');
    eliminar('botonExitGame');
    menuPause = false;
    }

    var botonOptions = document.getElementById('botonOpciones');
    botonOptions.onclick = function(){
        menuPause = false;
        menuOptions = true;
    eliminar('imatgePausa');
    eliminar('botonContinuar');
    eliminar('botonOpciones');
    eliminar('botonExitGame');
    crearImatge('./imatges/imgMenuOptions.png','imatgeOptions','550px','541px','110px');
    crearButton("ATRÁS",'botonOpcionesAtrás','30px','760px','670px');

    var botonOptBack = document.getElementById('botonOpcionesAtrás');
    botonOptBack.onclick = function(){
        menuOptions = false;
        menuPause = true;
    eliminar('imatgeOptions');
    eliminar('botonOpcionesAtrás');
    menuPausa();
    }
    }

    var botonExit = document.getElementById('botonExitGame');
    botonExit.onclick = function(){
        menuVolver = true;
        menuPause = false;
    eliminar('imatgePausa');
    eliminar('botonContinuar');
    eliminar('botonOpciones');
    eliminar('botonExitGame');
    crearImatge('./imatges/imgVolverMenu.png','imatgeVolverMenu','400px','611px','270px');
    crearText("¿VOLVER AL MENÚ?",'questionExit','35px','645px','295px');
    crearText("NO SE GUARDARÁ EL PROGRESO",'textoVolverMenu','25px','615px','360px');
    crearButton("Sí",'botonExitSí','35px','790px','440px');
    crearButton("No",'botonExitNo','35px','785px','500px');

    var botonExitNo = document.getElementById('botonExitNo');
    botonExitNo.onclick = function(){
        menuVolver = false;
        menuPause = true;
        eliminar('imatgeVolverMenu');
        eliminar('questionExit');
        eliminar('textoVolverMenu');
        eliminar('botonExitSí');
        eliminar('botonExitNo');
        menuPausa();
    }

    var botonExitYes = document.getElementById('botonExitSí');
    botonExitYes.onclick = function(){
        menuVolver = false;
        eliminar('imatgeVolverMenu');
        eliminar('questionExit');
        eliminar('textoVolverMenu');
        eliminar('botonExitSí');
        eliminar('botonExitNo');
        pause = false;
        menuStart = false;
        principal();
        reiniciaVideoJoc();
        borrarPantalla();
        inicializar();
    }
    }
}

function obrirCofre(object){
    canviarEscenari(knight.x,knight.y,13);
            canviarEscenari(150,150,7); canviarEscenari(150,200,7); canviarEscenari(150,250,7);
            canviarEscenari(200,150,7); canviarEscenari(200,200,7); canviarEscenari(200,250,7);
            canviarEscenari(250,150,7); canviarEscenari(250,200,7); canviarEscenari(250,250,7);
            canviarEscenari(300,150,7); canviarEscenari(300,200,7); canviarEscenari(300,250,7);
            canviarEscenari(350,150,7); canviarEscenari(350,200,object);
            canviarEscenari(400,150,7); canviarEscenari(400,200,7); canviarEscenari(400,250,7);
            canviarEscenari(450,150,7); canviarEscenari(450,200,7); canviarEscenari(450,250,7);
            canviarEscenari(500,150,7); canviarEscenari(500,200,7); canviarEscenari(500,250,7);
            canviarEscenari(550,150,7); canviarEscenari(550,200,7); canviarEscenari(550,250,7);
}

function crearText(info,id,tamany,x,y){
    var textInfo = document.createElement('p');
    textInfo.textContent = info;
    textInfo.id = id;
    textInfo.style.color = '#efefef';
    textInfo.style.fontFamily = 'Perpetua';
    textInfo.style.fontSize = tamany;
    textInfo.style.position = 'absolute';
    textInfo.style.top = y;
    textInfo.style.left = x;
    document.body.appendChild(textInfo);
}

function crearImatge(enllaç,id,tamany,x,y){
    var imatge = document.createElement('img');
    imatge.src = enllaç;
    imatge.id = id;
    imatge.style.width = tamany;
    imatge.style.position = 'absolute';
    imatge.style.top = y;
    imatge.style.left = x;
    document.body.appendChild(imatge);
}

function crearButton(nom,id,tamany,x,y){
    var button = document.createElement('button');
    button.textContent = nom;
    button.id = id;
    button.style.color = "#ffffff";
    button.style.fontFamily = 'Perpetua';
    button.style.fontSize = tamany;
    button.style.position = 'absolute';
    button.style.top = y;
    button.style.left = x;
    button.style.backgroundColor = 'transparent';
    button.style.border = 'none';
    document.body.appendChild(button);
}

function posicioEspecifica(n,x,y,p){
    var position = false;
    if(numEscenari == n && knight.x == x && knight.y == y && posicioEscenari(knight.x,knight.y) == p){
        position = true;
        return position;
    }
    return position;
}

function eliminar(id){
    var object = document.getElementById(id);
    object.remove();
}