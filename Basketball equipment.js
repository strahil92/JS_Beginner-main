function basketballEquipment(yearPrice) {
    let basketballShoеs = yearPrice - (yearPrice * 40 / 100);
    let basketballOutfit = basketballShoеs - (basketballShoеs * 20 / 100);
    let basketballBall = basketballOutfit * 1 / 4;
    let basketballAccessoar = basketballBall * 1 / 5;
    let price = yearPrice + basketballShoеs + basketballOutfit + basketballBall + basketballAccessoar;

    console.log(price.toFixed(2));
}

basketballEquipment(550)