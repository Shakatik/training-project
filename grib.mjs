export function getGribCorrectEnding(x) {
  const key = getCorrectEnding(x);
  const res = ara[key];
  return res
  } 


 function getCorrectEnding(x) {
  const gribnoy = x % 10;
  const gribnoys = x % 100;
  if (gribnoy == 1){
      // grib = 'гриб'  
      return 'END_1'  
  } else if (gribnoy>=2 && gribnoy<=4){
      // grib = 'гриба'  
      return 'END_2'    
  }  else if (gribnoys>=5 && gribnoys<=20 || gribnoys == 0 || gribnoy == 0){
      // grib = 'грибов'  
      return 'END_3'    
  }  
}


const ara = {
  END_1: 'гриб',
  END_2: 'гриба',
  END_3: 'грибов',
}




export function getParity(x) {
  const key =  getCount(x);
  const res = Endings[key]
  return res
}

function getCount(x) {
return x % 2 == 0 ? 'END1' : 'END2';
}

const Endings = {
  END1: 'нечетное',
  END2: 'четное',
}






export function getBoxQuantity (x) {
  const key = getBoxType (x);
  const res = boxEnd[key];
  return res
}

function getBoxType (x) {
  const boxes = x % 10;
  if (boxes == 1 || boxes == 0){
      
      return 'END_1'  
  } else if (boxes == 2 || boxes == 3){
      
      return 'END_2'    
  }  else if (boxes == 4 || boxes == 5){
        
      return 'END_3'    
  }   else if (boxes == 6 || boxes == 7){
     
    return 'END_4'    
}   else if (boxes == 8 || boxes == 9){
   
  return 'END_5'    
}  

}

const boxEnd = {
  END_1: '1 коробка',
  END_2: '2 коробки',
  END_3: '3 коробки',
  END_4: '4 коробки',
  END_5: '5 коробок',
}













