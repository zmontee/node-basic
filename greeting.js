let currentDate = new Date();
global.date = currentDate;

module.exports.getMessage = function(name){
    let hour = currentDate.getHours();
    if(hour > 16)
        return "Добрий вечір, " + global.name;
    else if(hour > 10)
        return "Добрий день, " + name;
    else
        return "Добрий ранок, " + name;
}


