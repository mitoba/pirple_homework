const validUnits = ["second", "seconds", "minute", "minutes", "hour", "hours", "day", "days"]


// Time adder function
const timeAdder = (value1, label1, value2, label2) => {
  let valid = isValid(value1, label1, value2, label2)
  let valueSum;
  let finalResult = []

  if (valid === true) {

    let valueMinutes_1 = minuteConverter(value1, label1)

    let valueMinutes_2 = minuteConverter(value2, label2)

    valueSum = valueMinutes_1 + valueMinutes_2

    if (valueSum % 1440 === 0) {

      valueSum = valueSum / 1440
      if (valueSum === 1) {
        finalResult.push(valueSum, "day")
      } else {
        finalResult.push(valueSum, "days")
      }

    } else {
      if (valueSum === 1) {
        finalResult.push(valueSum, "minute")
      } else {
        finalResult.push(valueSum, "minutes")
      }
    }
  } else {
    finalResult.push("invalid data")
  }

  return finalResult
}


// function to validate the input data is correct
const isValid = (value1, label1, value2, label2) => {
  if (typeof label1 === "string" && typeof label2 === "string"
    && typeof value1 === "number" && typeof value2 === "number") {
    if (validUnits.find(k => k === label1) && validUnits.find(k => k === label2)) {
      if (((value1 === 1 && label1[label1.length - 1] !== "s") || value1 !== 1) ||((value2 === 1 && label1[label2.length - 1] !== "s") || value2 !== 1)) {
        return true
      } else {
        return false
      }

    } else {
      return false
    }
  } else {
    return false
  }
}


// function using a switch statement to convert to minutes
const minuteConverter = (value, label) => {
  let newValue = value

  switch (label) {
    case "minute":
    case "minutes":
      newValue = newValue
      break;
    case "second":
    case "seconds":
      newValue = newValue / 60
      break;
    case "hour":
    case "hours":
      newValue = newValue * 60
      break;
    case "day":
    case "days":
      newValue = newValue * 1440
      break;
  }
  return newValue
}



console.log(timeAdder(1, "minute", 3, "minutes"))
console.log(timeAdder(7, "days", 3, "hours"))
console.log(timeAdder(1, "day", 3, "days"))
console.log(timeAdder(9, "minutes", 3, "hours"))
console.log(timeAdder(12, "hours", 12, "hours"))
console.log(timeAdder(10, "seconds", 50, "seconds"))
console.log(timeAdder(5, "days", 25, "hours"))
console.log(timeAdder(1, "minute", 240, "seconds"))



