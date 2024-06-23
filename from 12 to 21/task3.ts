

  function yesOrNo(val: number ) : "Yes" | "No" {
    return val > 10 ? "Yes" : "No"
  }
  
  // Do Not Edit Here
  console.log(yesOrNo("100")); // Error
  console.log(yesOrNo(30)); // True
  console.log(yesOrNo(8)); // False



type custom = "Yes" | "No";
  function isHeOld(age: number ) : custom | number {
    return age > 40 ? "Yes" : "No";
  }
  
  // Do Not Edit Here
  console.log(isHeOld("100")); // Error
  console.log(isHeOld(45)); // "Yes"
  console.log(isHeOld(30)); // "No"

