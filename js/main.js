var game = new Phaser.Game(375, 667, Phaser.AUTO, 'mygame');
var isLightOn = false;
var isDollBlinking = false;
var eyeblink;
var isEyeBlinking = false;
var speech1;
var speech2;
var Main = {};
Main.boot = function () {};
Main.boot.prototype = {
    preload: function () {
        game.scale.maxWidth = 375;
        game.scale.maxHeight = 667;
        game.scale.pageAlignVertically = true;
        game.scale.pageAlignHorizontally = true;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.state.start('preloader');
    }
}
Main.preloader = function () {};
Main.preloader.prototype = {
    init: function () {},
    preload: function () {
        game.load.image('preloaderbg', 'assets/Title/bg.png');
        game.load.image('soundbtn', 'assets/Buttons/soundbutton0001.png');
        game.load.image('pausebtn', 'assets/Buttons/pausebutton0001.png');
        game.load.image('nextbtn', 'assets/Buttons/nextbtn.png');
        game.load.image('title', 'assets/Title/title.png')
        game.load.image('tree', 'assets/Title/tree.png');
        game.load.image('dollbdy', 'assets/Title/doll body.png');
        game.load.image('dolldrs', 'assets/Title/doll dress.png');
        game.load.image('cake', 'assets/Title/cake.png');
        game.load.image('playbtn', 'assets/Buttons/play0001.png');
        game.load.image('lightOn', 'assets/Title/ligon.png');
        game.load.image('lightOff', 'assets/Title/ligoff.png');
        game.load.image('eyeopen', 'assets/Title/Eyeblink0002.png');
        game.load.image('eyeclose', 'assets/Title/Eyeblink0003.png');
        game.load.image('levelOneBackground', 'assets/levelup-1/lu1bg.png');
        game.load.image('treeOne', 'assets/levelup-1/lu1tree.png');
        game.load.image('dollOne', 'assets/levelup-1/doll.png');
        game.load.image('eyeblink1', 'assets/levelup-1/eyelashlu1-1.png');
        game.load.image('eyeblink2', 'assets/levelup-1/eyelashlu1-2.png');
        game.load.image('eyeblink3', 'assets/levelup-1/eyelashlu1-3.png');
        game.load.image('speech1', 'assets/levelup-1/sp.png');
        game.load.image('speech2', 'assets/levelup-1/sp2.png');
        game.load.image('speech2', 'assets/levelup-1/sp2.png');



    },
    create: function () {
        preloaderbg = game.add.sprite(game.world.centerX, game.world.centerY, 'preloaderbg');
        preloaderbg.anchor.setTo(0.5);
        preloaderbg.scale.setTo(1.01);

        soundbtn = game.add.sprite(game.world.width - 10, 10, 'soundbtn');
        soundbtn.anchor.setTo(1, 0);
        soundbtn.scale.setTo(0.5);
        soundbtn.inputEnabled = true;
        soundbtn.events.onInputOver.add(function () {
            soundbtn.scale.setTo(0.6);
        }, this);
        soundbtn.events.onInputOut.add(function () {
            soundbtn.scale.setTo(0.5);
        }, this);


        tree = game.add.sprite(game.world.centerX, game.world.centerY, 'tree');
        tree.anchor.setTo(0.5);
        tree.scale.setTo(0.3);

        light = game.add.sprite(game.world.centerX, game.world.centerY - 15, 'lightOff');
        light.anchor.setTo(0.5);
        light.scale.setTo(0.3);
        light.animations.add('lightOn', ['light_on.png'], 10, false);
        light.animations.add('lightOff', ['light_off.png'], 10, false);
        game.time.events.loop(1000, toggleLight, this);

        dollbdy = game.add.sprite(game.world.centerX, game.world.centerY, 'dollbdy');
        dollbdy.anchor.setTo(0.5);
        dollbdy.scale.setTo(0.3);

        blink = game.add.sprite(game.world.centerX, game.world.centerY, 'eyeopen');
        blink.anchor.setTo(0.5);
        blink.scale.setTo(0.3);
        blink.animations.add('closeeye', ['Eyeblink0003.png'], 10, false);
        blink.animations.add('closeopen', ['Eyeblink0002.png'], 10, false);
        game.time.events.loop(1000, toggleDollBlink, this);

        dolldrs = game.add.sprite(game.world.centerX, game.world.centerY, 'dolldrs');
        dolldrs.anchor.setTo(0.5);
        dolldrs.scale.setTo(0.3);

        cake = game.add.sprite(game.world.centerX, game.world.centerY, 'cake');
        cake.anchor.setTo(0.5);
        cake.scale.setTo(0.2);

        title = game.add.sprite(game.world.centerX, game.world.centerY, 'title');
        title.anchor.setTo(0.5);
        title.scale.setTo(0.3);


        playbtn = game.add.sprite(game.world.centerX, game.world.centerY + 230, 'playbtn');
        playbtn.anchor.setTo(0.5);
        playbtn.scale.setTo(0.3);
        playbtn.inputEnabled = true;
        playbtn.events.onInputOver.add(function () {
            playbtn.scale.setTo(0.4);
        }, this);
        playbtn.events.onInputOut.add(function () {
            playbtn.scale.setTo(0.3);
        }, this);

        playbtn.events.onInputDown.add(startLevelOne, this);







    }
}

function toggleLight() {
    if (isLightOn) {
        light.loadTexture('lightOff');
    } else {
        light.loadTexture('lightOn');
    }
    isLightOn = !isLightOn;
}

function toggleDollBlink() {
    if (isDollBlinking) {
        blink.loadTexture('eyeclose');
    } else {
        blink.loadTexture('eyeopen');
    }
    isDollBlinking = !isDollBlinking;
}

function startLevelOne() {
    game.state.start('levelOne');
}




Main.levelOne = function () {};
Main.levelOne.prototype = {

    create: function () {
        levelOneBackground = game.add.sprite(game.world.centerX, game.world.centerY, 'levelOneBackground');
        levelOneBackground.anchor.setTo(0.5);
        levelOneBackground.scale.setTo(0.4);

        treeOne = game.add.sprite(game.world.centerX, game.world.centerY, 'treeOne');
        treeOne.anchor.setTo(0.5);
        treeOne.scale.setTo(0.3);

        dollOne = game.add.sprite(game.world.centerX, game.world.centerY, 'dollOne');
        dollOne.anchor.setTo(0.5);
        dollOne.scale.setTo(0.3);

        eyeblink = game.add.sprite(game.world.centerX, game.world.centerY, 'eyeblink1');
        eyeblink.anchor.setTo(0.5);
        eyeblink.scale.setTo(0.3);
        game.time.events.loop(Phaser.Timer.SECOND * 2, startEyeBlinkAnimation, this);

        speech1 = game.add.sprite(dollOne.x, dollOne.y - 175, 'speech1');
        speech1.anchor.setTo(0.5);
        speech1.scale.setTo(0.3);
        speech1.alpha = 0;

        speech2 = game.add.sprite(dollOne.x, dollOne.y - 175, 'speech2');;
        speech2.anchor.setTo(0.5);
        speech2.scale.setTo(0.3);
        speech2.alpha = 0;
        speech2.visible = false;

        var speech1In = game.add.tween(speech1).to({
            alpha: 1
        }, 500, Phaser.Easing.Linear.In, true,1000);


        game.time.events.add(Phaser.Timer.SECOND * 3, function () {
            var speech1Out = game.add.tween(speech1).to({
                alpha: 0
            }, 500, Phaser.Easing.Linear.Out, true);
            speech2.visible = true;
            var speech2In = game.add.tween(speech2).to({
                alpha: 1
            }, 500, Phaser.Easing.Linear.In, true,1000);
        }, this);

        soundbtn = game.add.sprite(game.world.width, 10, 'soundbtn');
        soundbtn.anchor.setTo(1, 0);
        soundbtn.scale.setTo(0.4);
        soundbtn.inputEnabled = true;
        soundbtn.events.onInputOver.add(function () {
            soundbtn.scale.setTo(0.43);
        }, this);
        soundbtn.events.onInputOut.add(function () {
            soundbtn.scale.setTo(0.4);
        }, this);
        pausebtn = game.add.sprite(game.world.width - 55, 10, 'pausebtn');
        pausebtn.anchor.setTo(1, 0);
        pausebtn.scale.setTo(0.4);
        pausebtn.inputEnabled = true;
        pausebtn.events.onInputOver.add(function () {
            pausebtn.scale.setTo(0.43);
        }, this);
        pausebtn.events.onInputOut.add(function () {
            pausebtn.scale.setTo(0.4);
        }, this);

        nextbtn = game.add.sprite(game.world.width - 10, 560, 'nextbtn');
        nextbtn.anchor.setTo(1, 0);
        nextbtn.scale.setTo(0.3);
        nextbtn.inputEnabled = true;
        nextbtn.events.onInputOver.add(function () {
            nextbtn.scale.setTo(0.33);
        }, this);
        nextbtn.events.onInputOut.add(function () {
            nextbtn.scale.setTo(0.3);
        }, this);


    },
};

function startEyeBlinkAnimation() {
    if (isEyeBlinking) {
        eyeblink.loadTexture('eyeblink1');
    } else {
        eyeblink.loadTexture('eyeblink3');
    }

    isEyeBlinking = !isEyeBlinking;
}



game.state.add('boot', Main.boot);
game.state.add('preloader', Main.preloader);
game.state.add('levelOne', Main.levelOne);
game.state.start('boot');
