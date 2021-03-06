const createMathProblems = () => {
  let problems = {};
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      let problem = `${i} X ${j}`;
      problems[problem] = i * j;
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

const mathProblems = createMathProblems();
console.log(mathProblems);
