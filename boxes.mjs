export function getBoxQuantity(x) {
    const key = getBoxType(x);
    const res = boxEnd[key];
    return res;
  }
  
function getBoxType(x) {
    const boxes = x % 10;
    if (boxes == 1 || boxes == 0) {
      return "END_1";
    } else if (boxes == 2 || boxes == 3) {
      return "END_2";
    } else if (boxes == 4 || boxes == 5) {
      return "END_3";
    } else if (boxes == 6 || boxes == 7) {
      return "END_4";
    } else if (boxes == 8 || boxes == 9) {
      return "END_5";
    }
  }
  
  const boxEnd = {
    END_1: "1 коробка",
    END_2: "2 коробки",
    END_3: "3 коробки",
    END_4: "4 коробки",
    END_5: "5 коробок",
  };