import { format, differenceInMinutes } from "date-fns"


function dateFns() {
    return format(new Date(), "yyyy-MM-dd HH:mm:ss.SSS"); // 2021-10-11 10:30:25.495 
}

function dateDiff(date) {
    // const d = dateFns()
    // date = format(new Date(date), "yyyy-MM-dd HH:mm:ss.SSS")
    // console.log(date, differenceInHours(date, d))

    var date1 = new Date();
    var date2 = new Date(date);

    format(date1, "yyyy-MM-dd HH:mm:ss.SSS"); // 2021-10-11 10:30:25.495
    format(date2, "yyyy-MM-dd HH:mm:ss.SSS"); // 2020-04-08 13:25:30.000

    return differenceInMinutes(date1, date2)
}

export { dateFns, dateDiff }
