// Code your solution in this file!

const distanceFromHqInBlocks = (blocks) => {
    const scuber = 42;
    
if(blocks > scuber) {
    return blocks - scuber;

} else if(scuber > blocks) {
    return scuber - blocks;
} else {
    return "you're there";
}
    
};

const distanceFromHqInFeet = (feet) => {
 
const scuberInFeet = distanceFromHqInBlocks(feet) * 264;
const distance = Math.abs(scuberInFeet);
if(distance != 0) {
return distance;
} 

}

const distanceTravelledInFeet = (currentPosition, destination ) => {

    if(currentPosition > destination) {
const differenceInFeet = (currentPosition - destination) * 264;
return differenceInFeet;
} else  if(currentPosition < destination) {
    const differenceInFeet = (destination - currentPosition) * 264;
    return differenceInFeet;
    }

}

const calculatesFarePrice = (start, destination) => {

    const distance = Math.abs(start - destination) * 264;
    
    if (distance <= 400) {
    return 0;
    }
    else if(distance > 400 && distance < 2000) {
        return (distance - 400) * 0.02;
    } 
    else if (distance > 2000 && distance < 2500) {
        return 25;
    } 
    else { 
        return 'cannot travel that far'; }
}
