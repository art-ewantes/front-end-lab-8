window.onload = function(){
    var firstSide,
        secondSide,
        thirdSide,
        area,
        perimeter;
    
    firstSide = +prompt("Enter first side of the triangle");
    secondSide = +prompt("Enter second side of the triangle");
    thirdSide = +prompt("Enter third side of the triangle");

    perimeter = (firstSide + secondSide + thirdSide) / 2;

    area = Math.sqrt(perimeter * (perimeter - firstSide) * (perimeter - secondSide) * (perimeter - thirdSide));

    if ((firstSide <= (secondSide + thirdSide)) && (secondSide <= (firstSide + thirdSide)) && (thirdSide <= (firstSide + secondSide))){
        if (firstSide == secondSide && firstSide == thirdSide && secondSide == thirdSide){
            console.log("Type of triangle is Equilateral triangle and square is " + area);
        }else if (
            (secondSide == thirdSide && secondSide != firstSide) ||
            (firstSide == thirdSide && firstSide != secondSide) ||
            (firstSide == secondSide && firstSide != thirdSide)
          ){
            console.log("Type of triangle is Isosceles triangle and square is " + area);
          }else if (
            firstSide * secondSide == secondSide * secondSide + thirdSide * thirdSide ||
            secondSide * secondSide == firstSide * firstSide + thirdSide * thirdSide ||
            thirdSide * thirdSide == firstSide * firstSide + secondSide * secondSide
          ) {
            console.log("Type of triangle is Right triangle and square is " + area);
          }else if (firstSide != secondSide && firstSide != thirdSide && secondSide != thirdSide) {
            console.log("Type of triangle is Scalene triangle and square is " + area);
          }
    }else {
        console.log("Incorrect data");
    }
}