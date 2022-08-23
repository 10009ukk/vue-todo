import { format, add, differenceInHours, differenceInMinutes } from "date-fns"


function dateFns() {
    return format(new Date(), "yyyy-MM-dd HH:mm:ss.SSS")
}

function dateAdd(date, hours) {
    var date = new Date(date); // Mon Oct 11 2021 10:30:25 GMT+0900 (한국 표준시)
    format(date, "yyyy-MM-dd HH:mm:ss.SSS"); // 2021-10-11 10:30:25.495
    
    return format(
      add(date, {
        hours,
      }),
      "yyyy-MM-dd HH:mm:ss.SSS"
    ); 
}

function dateDiff(date) {
    var date1 = new Date(date);
    var date2 = new Date();

    format(date1, "yyyy-MM-dd HH:mm:ss.SSS"); // 2021-10-11 10:30:25.495
    format(date2, "yyyy-MM-dd HH:mm:ss.SSS"); // 2020-04-08 13:25:30.000

    return differenceInHours(date1, date2)
}


export { dateFns, dateAdd, dateDiff }
