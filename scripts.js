var atticus = ['Atticus', '2405', '47000', 3];
var jem = ['Jem', '62347', '63500', 4];
var boo = ['Boo', '11435', '54000', 3];
var scout = ['Scout', '6243', '74750', 5];

var employees = [atticus, jem, boo, scout];

function calculator() {
  for (var i = 0; i < employees.length; i++) {
    var rate = 0;
    switch (employees[i][3]) {
    case 5: rate = .1;
      break;
    case 4: rate = .06;
      break;
    case 3: rate = .04;
      break;
    default: rate = 0;
      break;
  }
    if (employees[i][1].length == 4) {
      rate += .05;
    }

    var salary = parseInt(employees[i][2]);
    if (salary > 65000) {
      rate -= .01;
    }

    if (rate > .13) {
      rate = .13;
    }

    var bonus = Math.round(rate * salary);
    var employeeBonus = [];
    employeeBonus[0] = employees[i][0];
    employeeBonus[1] = rate;
    employeeBonus[2] = salary + bonus;
    employeeBonus[3] = bonus;
    console.log(employeeBonus);
  }
}

calculator();
