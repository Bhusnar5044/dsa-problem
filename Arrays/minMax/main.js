
//Simple
const findMinMax1 = (arr) => {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE
    for (value of arr){
      if(value > max) max = value;
      if(value < min) min = value;
    }
    return {min, max}
} 