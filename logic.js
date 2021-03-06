const createMathProblems = (index1Max, index2Max) => {
  let index1 = 0;
  let index2 = 0;
  let problems = [];
  for (index1; index1 <= index1Max; index1++) {
    problems.push(index1 + " x " + index2 + " = ");
    index2++;
    for (index2; index2 <= index2Max; index2++) {
      problems.push(index1 + " x " + index2 + " = ");
    }
  }
  return problems;
};

const generateOneMathProblem = () => {
  if (mathProblems.length > 0) {
    index = Math.floor(Math.random() * mathProblems.length);
    const generatedProblem = mathProblems[index];
    deleteOneMathProblem(index);
    console.log(index);
    return generatedProblem;
  } else {
    return "You have swallowed all of the math gravy in this collection.";
  }
};
const deleteOneMathProblem = (index) => {
  mathProblems.splice(index, 1);
};

const mathProblems = createMathProblems(9, 9);
console.log(generateOneMathProblem());
