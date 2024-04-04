// Exercise 1 Section
function printOdds(count) {
  if (count > 0) {
    for (let i = 0; i <= count; i++) {
      if (i % 2 != 0) {
        console.log(i);
      }
    }
  } else {
    for (let i = 0; i >= count; i--) {
      if (i % 2 != 0) {
        console.log(i);
      }
    }
  }
}

printOdds(-10);

// Exercise 2 Section

function checkAge(userName, age) {
  if (!userName) {
    console.log("Please provide a valid username");
    return;
  }
  const aboveSixteen = `Congrats ${userName}, you can drive!";`;
  const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

  if (age < 16) {
    console.log(belowSixteen);
  } else if (age >= 16) {
    console.log(aboveSixteen);
  } else {
    console.log("Invaild age");
  }
}
checkAge("briyanna", 16);

// Exercise 3 Section

function plane(x, y) {
  if (x === 0 && y === 0) {
    return `(${x},${y}) is on the origin`;

  } else if (x === 0) {
    return `(${x},${y}) is on the y-axis`;

  } else if (y === 0) {
    return `(${x},${y}) is on the x-axis`;

  } else if (y > 0 && x > 0) {
    return `(${x},${y}) is in the Quadrant 1`;

  } else if (y < 0 && x > 0) {
    return `(${x},${y}) is in the Quadrant 2`;

  } else if (y < 0 && x < 0) {
  return `(${x},${y}) is in the Quadrant 3`;
  
  } else if (y < 0 && x > 0) {
  return `(${x},${y}) is in the Quadrant 4`;
  }
}

console.log(plane(3, 5));

// Exercise 4 Section

function validTriangle(n1, n2, n3) {
  if (n1 + n2 < n3 && n2 + n3 > n2 && n1 + n3 > n2) {
    console.log(`Invaild triangle`);
  }

    if (n1 === n2 && n2 === n3) {
      return "equilateral triangle";

    } if (n1 === n2 || n1 === n3 || n2 === n3) {
      return "isosceles triangle";

    }
    return `Scalene triangle`;
  } 



console.log(validTriangle(3, 2, 1));

// Exercise 5 Section

function dataPlan(planLimit, currDay, usageSoFar) {
  const daysRemaining = 30 - currDay;
  const dataRemaining = planLimit - usageSoFar;
  const idealAverage = (planLimit / 30).toFixed(2);
  const currAvgUsage = (usageSoFar / currDay).toFixed(2);
  const projectedUsage = currAvgUsage * 30;
  const exceededUsage = (projectedUsage - planLimit).toFixed(2);
  const underUsage = (planLimit - projectedUsage);
  const newIdealUsage = (dataRemaining / daysRemaining).toFixed(2);

  let output = "";
  output += `${currDay} days used, ${dataRemaining} days remaining\nAverage daily use: ${idealAverage} GB/day\n`;

  if (exceededUsage > 0) {
    output += `you are EXCEEDING your average daily use (${currAvgUsage} GB/day), continuing this high usage, you'll exceed your data plan by ${exceededUsage} GB.\nTo stay below your data plan, use no more than ${newIdealUsage} GB/day.`;

  } else if (currAvgUsage < idealAverage) {
    output +=  `You are UNDER your average daily use (${currAvgUsage} GB/day), continuing this reserved usage level, you'll stil have ${underUsage} GB.\nTo take advantage of every last GB you have, start using ${newIdealUsage} GB/day.`;
  } else {
    output += `You are a pefect human being, We love you. Keep doing what you're doing.`;
  }
    console.log(output);
}


