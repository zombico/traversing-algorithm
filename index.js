const pot1 = [
    [1,0,1,1,1],
    [0,0,1,1,0],
    [1,1,1,1,1],
    [1,1,1,1,0],
    
  ]

const path = (pot) => {
  const myPath = {}
  var result = []
  var i = pot.length
  for (i = 0; i < pot.length; i++) { 
    const rowLength = pot[i].length
    let canGoDown = false;
    let canGoUp = false;
    let now = []
    let next = []
    let before = []
    now = pot[i];
    if(pot[i-1]) {   
    before = pot[i-1];
    }
    if(pot[i+1]) {
    next = pot[i+1]
    }  
    console.log(before, now, next)
    // test to go downward
    if (now.length > 0) {
      for (j = 0; j < rowLength; j++) {
        if (now[j] == next[j] && now[j] === 0 && next[j] === 0) {
          canGoDown = true
        }
      }
    }
    // test to go upward
    if (before.length > 0) {
      for(j = 0; j <rowLength; j++) {
        if(now[j] === before[j] && now[j] === 0) {          
          canGoUp = true
        }
      }
    }
    
    result.push([canGoDown, canGoUp])  
    if (!canGoUp && !canGoDown) {
      return false
    }
}
  // const evaluation =  
  result.forEach(row => {
    if (!row.includes(true)) console.log('hi')
  })
  
  return result;
}


