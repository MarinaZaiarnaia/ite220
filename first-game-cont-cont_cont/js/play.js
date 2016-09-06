var playState = {

	create: function(){

		//player
		this.player = game.add.sprite(game.width/2, game.height/2, 'player');
		this.player.anchor.setTo(0.5, 0.5);
		game.physics.arcade.enable(this.player);
		this.player.body.gravity.y = 150;

		//control
		this.cursor = game.input.keyboard.createCursorKeys();

		//walls
		this.walls = game.add.group();
		this.walls.enableBody = true;
		game.add.sprite(0, 0, 'wallV', 0, this.walls);
		game.add.sprite(480, 0, 'wallV', 0, this.walls);

		game.add.sprite(0, 0, 'wallH', 0, this.walls);
		game.add.sprite(300,0, 'wallH', 0, this.walls);
		game.add.sprite(0,320, 'wallH', 0, this.walls);
		game.add.sprite(300,320, 'wallH', 0, this.walls);

		game.add.sprite(-100,160, 'wallH',0, this.walls);
		game.add.sprite(400,160, 'wallH',0, this.walls);

		var middleTop = game.add.sprite(100, 80, 'wallH', 0, this.walls);
		middleTop.scale.setTo(1.5, 1);
		var middleBottom = game.add.sprite(100, 240, 'wallH', 0, this.walls);
		middleBottom.scale.setTo(1.5, 1);

		this.walls.setAll('body.immovable', true);

		//coin
		this.coin = game.add.sprite(60, 140, 'coin');
		game.physics.arcade.enable(this.coin);
		this.coin.anchor.setTo(0.5, 0.5);

		this.scoreLabel = game.add.text(30, 30, 'score: 0',
			{font: '18px Arial', fill: '#ffffff'});
		game.global.score = 0;

		//enemy
		this.enemiesUp = game.add.group();
		this.enemiesUp.enableBody = true;
		this.enemiesUp.createMultiple(10, 'enemy');
		game.time.events.loop(2200, this.addEnemyUp, this);

		this.enemiesDown = game.add.group();
		this.enemiesDown.enableBody = true;
		this.enemiesDown.createMultiple(10, 'enemy');
		game.time.events.loop(2200, this.addEnemyDown, this);



	},

	update: function(){
		game.physics.arcade.collide(this.player, this.walls);
		
		game.physics.arcade.overlap(this.player, this.coin, this.takeCoin, null, this);
		

		game.physics.arcade.collide(this.enemiesUp, this.walls);
		game.physics.arcade.overlap(this.player, this.enemiesUp, this.playerDie, null, this);

		game.physics.arcade.collide(this.enemiesDown, this.walls);
		game.physics.arcade.overlap(this.player, this.enemiesDown, this.playerDie, null, this);
		

		this.movePlayer();
		if (!this.player.inWorld){
			this.playerDie();
		}
	},


	movePlayer: function(){
		if (this.cursor.left.isDown){
			this.player.body.velocity.x = -200;
		}
		else if (this.cursor.right.isDown){
			this.player.body.velocity.x = 200;
		}
		else {
			this.player.body.velocity.x = 0;
		}

		if (this.cursor.up.isDown && this.player.body.touching.down){
			this.player.body.velocity.y = -320;
		}
	},

	playerDie: function(){
		game.state.start("menu");
	},

	takeCoin: function(player, coin){
		this.coin.kill();
		game.global.score += 5;
		this.scoreLabel.text = 'score: ' + game.global.score;
		this.updateCoinPosition();
	},

	updateCoinPosition: function(){
		var coinPosition = [
		{x: 140, y: 60}, {x: 360, y: 60},
		{x: 60, y: 140}, {x: 440, y: 140},
		{x: 130, y: 300}, {x: 370, y: 300},
		];

		for (var i = 0; i < coinPosition.length; i++){
			if(coinPosition[i].x ==this.coin.x) {
				coinPosition.splice(i, 1);
			}
		}
		var newPosition = game.rnd.pick(coinPosition);
		this.coin.reset(newPosition.x, newPosition.y);
	},
	addEnemyUp: function(){
		var enemy = this.enemiesUp.getFirstDead();
		if(!enemy) {
			return;
		}
		enemy.anchor.setTo(0.5, 1);
		enemy.reset(game.width/2, 0);
		enemy.body.gravity.y = 500;
		enemy.body.velocity.x = 100 * game.rnd.pick([-1, 1]);
		enemy.body.bounce.x = 1;
		enemy.checkWorldBounds = true;
		enemy.outOfBoundsKill = true;
	},
	addEnemyDown: function(){
		var enemy = this.enemiesDown.getFirstDead();
		if(!enemy) {
			return;
		}
		enemy.anchor.setTo(0.5, 1);
		enemy.reset(game.width/2, game.height);
		enemy.body.gravity.y = -500;
		enemy.body.velocity.x = 100 * game.rnd.pick([-1, 1]);
		enemy.body.bounce.x = 1;
		enemy.checkWorldBounds = true;
		enemy.outOfBoundsKill = true;
	}

};

