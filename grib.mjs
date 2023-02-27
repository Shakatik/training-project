export function getGribCorrectEnding(x) {
  const key = getCorrectEnding(x);
  const res = GRIB_KEY_COLLECTION[key];
  return res;
}

function getCorrectEnding(x) {
  const gribnoy = x % 10;
  const gribnoys = x % 100;
  if (gribnoy == 1) {
    // grib = 'гриб'
    return "END_1";
  } else if (gribnoy >= 2 && gribnoy <= 4) {
    // grib = 'гриба'
    return "END_2";
  } else if (
    (gribnoys >= 5 && gribnoys <= 20) ||
    gribnoys == 0 ||
    gribnoy == 0
  ) {
    // grib = 'грибов'
    return "END_3";
  }
}

const GRIB_KEY_COLLECTION = {
  END_1: "гриб",
  END_2: "гриба",
  END_3: "грибов",
};


export function CallFunc(key, x) {
  const fun = ProcessKey[key];
  const res = fun(x);
  return res;
}
