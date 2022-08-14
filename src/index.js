module.exports = function toReadable (number) {
    let value = '';
  function oneNineteen(num){
    let res = '';
    if (num==0) {res = 'zero'};
    if (num==1) {res = 'one'};
    if (num==2) {res = 'two'};
    if (num==3) {res = 'three'};
    if (num==4) {res = 'four'};
    if (num==5) {res = 'five'};
    if (num==6) {res = 'six'};
    if (num==7) {res = 'seven'};
    if (num==8) {res = 'eight'};
    if (num==9) {res = 'nine'};
    if (num==10) {res = 'ten'};
    if (num==11) {res = 'eleven'};
    if (num==12) {res = 'twelve'};
    if (num==13) {res = 'thirteen'};
    if (num==14) {res = 'fourteen'};
    if (num==15) {res = 'fifteen'};
    if (num==16) {res = 'sixteen'};
    if (num==17) {res = 'seventeen'};
    if (num==18) {res = 'eighteen'};
    if (num==19) {res = 'nineteen'};
    return(res);
  }
  function doze(Num){
    let res = '';
    if (Num/10>=2 && Num/10<3) {res = 'twenty'};
    if (Num/10>=3 && Num/10<4) {res = 'thirty'};
    if (Num/10>=4 && Num/10<5) {res = 'forty'};
    if (Num/10>=5 && Num/10<6) {res = 'fifty'};
    if (Num/10>=6 && Num/10<7) {res = 'sixty'};
    if (Num/10>=7 && Num/10<8) {res = 'seventy'};
    if (Num/10>=8 && Num/10<9) {res = 'eighty'};
    if (Num/10>=9 && Num/10<10) {res = 'ninety'};
    return(res);
  }
  if (number < 20) {value = oneNineteen(number)};
  if (number >= 20 && number < 100){
    if (number%10==0) {value = doze(number)}
    else {
      value = doze(number) + ' ' + oneNineteen(number%10);
    }
  };
  if (number >= 100) {
    if (number%100==0) {value = oneNineteen(number/100) + ' hundred'}
    else {
      if (number%100 < 20) {value = oneNineteen(Math.floor(number/100)) + ' hundred ' + oneNineteen(number%100)} else {
        if (number%10 == 0) {value = oneNineteen(Math.floor(number/100)) + ' hundred ' + doze(number%100)} else {
        value = oneNineteen(Math.floor(number/100)) + ' hundred ' + doze(number%100) + ' ' + oneNineteen((number%100)%10)}
      }
    }
  };
  return(value);
}
