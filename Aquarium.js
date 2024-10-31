function aquarium(long, width, height, percent){
    let capacity = long * width* height;
    let capacityWithWater = capacity / 1000;
    let needLitersWater = capacityWithWater * (1 - percent / 100);

    console.log(needLitersWater);
}

aquarium(105, 77, 89, 18.5)