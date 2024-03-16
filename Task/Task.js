let arguments = process.argv[2];

const circleArea = ( radius ) => {
    return Math.PI * radius ** 2;  
};
console.log(`Yarıçapı ${arguments} olan dairenin alanı: ${circleArea(arguments)}'`);
