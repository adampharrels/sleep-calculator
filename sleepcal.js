function getSleepHours (day) {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday'){
      return 7;
    } else if (day === 'wednesday'){
      return 5
    } else if (day === 'thursday'){
      return 3
    } else if (day === 'friday'){
      return 9
    } else if (day === 'saturday'){
      return 5
    } else if (day === 'sunday'){
      return 8
    }
    
  }
  
  const getActualSleepHours = () =>
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday')
  
  function getIdealSleepHours (){
    const idealHours = 8
    return idealHours * 7
  }
  function calculateSleepDebt (){
    const SleepDebt = getActualSleepHours() - getIdealSleepHours()
    return SleepDebt  < 0 ? Math.abs(SleepDebt) : sleepDebt;
  }
  
  console.log('You have slept: '+ getActualSleepHours() + ' hours')
  console.log ('the ideal hours is: ' + getIdealSleepHours())
  
  if (getActualSleepHours() === getIdealSleepHours()){
    console.log('you have a perfect sleep')
  } else if (getActualSleepHours() > getIdealSleepHours() ){
    console.log('Youve slept way too much')
  } else if (getActualSleepHours() < getIdealSleepHours()){
    console.log('You didnt have enough sleep' + ' You need to sleep ' + calculateSleepDebt() + ' hours more')
  }
  
  
  
  
  
  
  
  
  
  