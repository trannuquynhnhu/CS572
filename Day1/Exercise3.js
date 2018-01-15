function isWeekend(){
    const todayDate = new Date();
    const day = todayDate.getDay(); // 0 - 6 O is Sunday

    var dayArray = ['weekend', 'weekday', 'weekday', 'weekday', 'weekday', 'weekday', 'weekend'];
    return dayArray[day];
}

console.log(isWeekend());
