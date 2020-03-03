var jeu = {
    scene : null,
    world : world,
    player : player,
    cursor : null,
    level : 1
}

function preload(){
    jeu.scene = this;
    jeu.scene.load.image("terrain","terrain.png");
    jeu.scene.load.image("tilesPerso","tilesPerso.png");
    jeu.scene.load.tilemapTiledJSON("map1","level1.json");
    jeu.scene.load.tilemapTiledJSON("map2","level2.json");
    jeu.scene.load.image("playerBarre","playerBarre.png");
    jeu.scene.load.image("playerCenter","playerCenter.png");
    jeu.scene.load.image("playerIdent","ident.png");
    jeu.scene.load.image("debut","debut.png");
    jeu.scene.load.image("fin","fin.png");
}
function create(){
    jeu.world.initialiserWorld();
    jeu.player.initialiserPlayer();
    jeu.cursor = jeu.scene.input.keyboard.createCursorKeys();
    jeu.world.gererCamera();
    jeu.world.gererCollider();
}
function update(time, delta){
    ajusterTailleEcran();
    jeu.player.gererRotation();
    jeu.player.gererDeplacement();
}

function ajusterTailleEcran(){
    var canvas = document.querySelector("canvas");

    var fenetreWidth = window.innerWidth;
    var fenetreHeight = window.innerHeight;
    var fenetreRatio = fenetreWidth / fenetreHeight;

    var jeuRatio = config.width/config.height;

    if(fenetreRatio < jeuRatio){
        canvas.style.width = fenetreWidth + "px";
        canvas.style.height = (fenetreWidth/jeuRatio) +"px";
    } else {
        canvas.style.width = (fenetreHeight * jeuRatio) + "px";
        canvas.style.height = fenetreHeight + "px";
    }
}
