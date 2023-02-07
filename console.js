function getGribCorrectEnding(x) {
    key = getCorrectEnding(x);
    res = getEndingByKey(key);
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
    }  else if (gribnoy>=5 && gribnoys<=20 || x === 11 || gribnoys == 0){
        // grib = 'грибов'  
        return 'END_3'    
    }  
}

function getEndingByKey(key) {
    if (key === 'END_1') {
        return 'гриб'
    } else if (key === 'END_2') {
        return 'гриба'
    } else if (key === 'END_3'){
        return 'грибов'
    }
}