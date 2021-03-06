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

const mathProblems = createMathProblems();
