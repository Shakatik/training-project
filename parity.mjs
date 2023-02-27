export function getParity(x) {
  const key = getCount(x);
  const res = Endings[key];
  return res;
}

function getCount(x) {
  return x % 2 == 0 ? "END1" : "END2";
}

const Endings = {
  END1: "четное",
  END2: "нечетное",
};
