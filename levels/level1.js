let level1;

/**
 * An object storing item names and their respective X and Y coordinates.
 * The keys represent the item type and their coordinates in the level.
 */
let koordinatenItems = 
{
    "items": ['Coin', 'LeftBottle', 'VerticalBottle', 'RightBottle'],
    "Coin-X-coordinate": [500, 575, 650, 725,
                            1000, 1000, 1100, 1250, 1250, 1150,    
                            1925, 1940, 1955, 1970, 2000, 2015, 2045, 2060, 2090, 2105, 2120,
                            2500, 2500, 2575, 2575, 2650, 2650, 2725, 2725,
                            3100, 3100, 3250, 3250, 3250, 3400, 3400, 
                            4625, 4700, 4775, 4775, 4775, 4775, 4775, 4850, 4850, 4850, 4850, 4850, 4925, 5000],
    "Coin-Y-coordinate": [60, 120, 120, 60,
                            40, 90, 140, 40, 90, 140,    
                            180, 130, 80, 30, 80, 130, 80, 30, 80, 130, 180,
                            100, 170, 70, 200, 200, 70, 100, 170,
                            40, 90, 40, 90, 140, 40, 90, 
                            130, 80, 30, 100, 170, 240, 310, 30, 100, 170, 240, 310, 80, 130],
    "LeftBottle-X-coordinate": [550, 1550, 2400, 3550],
    "LeftBottle-Y-coordinate": [338, 338, 338],
    "VerticalBottle-X-coordinate": [3000, 5500],
    "VerticalBottle-Y-coordinate": [338, 338],
    "RightBottle-X-coordinate": [1900, 4000, 4025, 5000],
    "RightBottle-Y-coordinate": [338, 338, 338, 338]
};

/**
 * Creates the level and initializes objects such as clouds, end boss, and status bars.
 */
function createLevel(){
    level1 = new Level(
    [
    ],
    [
      new Cloud(0),
      new Cloud(1000)
    ],
    [
      new Endboss(),  
    ],
    [
    ],
        [new HealthBar(-10), new CoinBar(35), new BottleBar(80)]
    );
}

/**
 * Adds objects such as background, items, and enemies to the level.
 */
function addObjectsToTheLevel(){
    fillBackground();
    fillItems(0);
    fillEnemies();
}

/**
 * Fills the background with layers of images.
 */
function fillBackground(){
let j = 2;

    for (let i = -1; i < 10; i++){
        world.level.backgroundObjects.push(new BackgroundObject("img/5_background/layers/air.png", 719 * i));
        world.level.backgroundObjects.push(new BackgroundObject(`img/5_background/layers/3_third_layer/${j}.png`, 719 * i));
        world.level.backgroundObjects.push(new BackgroundObject(`img/5_background/layers/2_second_layer/${j}.png`, 719 * i));
        world.level.backgroundObjects.push(new BackgroundObject(`img/5_background/layers/1_first_layer/${j}.png`, 719 * i));
        if(j == 2){
            j = 1;
        } else {
            j = 2;
        }
    }
}

/**
 * Adds items to the level based on the provided coordinates in `koordinatenItems`.
 * 
 * @param {number} load - Determines which items to load.
 * 0 loads all items, 1 loads only bottles without coins.
 */
function fillItems(load){
    for(let i = load + 0; i < koordinatenItems['items'].length; i++){  
        let itemName = koordinatenItems['items'][i];
        
        for(let j = 0; j < koordinatenItems[`${itemName}-X-coordinate`].length; j++){  
            let x = koordinatenItems[`${itemName}-X-coordinate`][j];
            let y = koordinatenItems[`${itemName}-Y-coordinate`][j];
            
            if(itemName === 'Coin'){
                world.level.items.push(new Coin(x, y));
            }else if(itemName === 'LeftBottle'){
                world.level.items.push(new LeftBottle(x, y));
            }else if(itemName === 'VerticalBottle'){
                world.level.items.push(new VerticalBottle(x, y));
            }else if(itemName === 'RightBottle'){
                world.level.items.push(new RightBottle(x, y));
            }
        }
    }
}

/**
 * Fills the level with enemies such as Chickens and Small Chickens.
 */
function fillEnemies(){
    for(let i = 0; i < 20; i++){
        world.level.enemies.push(new Chicken());
        world.level.enemies.push(new SmallChicken());
    }
}