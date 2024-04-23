function score(dice) {
    dice = dice.join(' ')
    
    let math = dice.match(/[1]/g) != null ? Math.floor(dice.match(/[1]/g).length / 3) * 1000 + (dice.match(/[1]/g).length % 3) * 100 : 0
    math = dice.match(/[6]/g) != null ? math + Math.floor(dice.match(/[6]/g).length / 3) * 600: math
    math = dice.match(/[5]/g) != null ? math + Math.floor(dice.match(/[5]/g).length / 3) * 500 + (dice.match(/[5]/g).length % 3) * 50 : math
    math = dice.match(/[4]/g) != null ? math + Math.floor(dice.match(/[4]/g).length / 3) * 400: math
    math = dice.match(/[3]/g) != null ? math + Math.floor(dice.match(/[3]/g).length / 3) * 300: math
    math = dice.match(/[2]/g) != null ? math + Math.floor(dice.match(/[2]/g).length / 3) * 200: math
    
    return math
  }