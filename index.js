// code your solution here
// Function 5: saturdayFun
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function 6: mondayWork
  function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  
  // Function 7: wrapAdjective
  function wrapAdjective(flair = '*') {
    return function (adjective = 'special') {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }