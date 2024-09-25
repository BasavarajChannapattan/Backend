function getMonthName(mo) {
    mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    if (months[mo]) {
        return months[mo];
    } else {
        throw new Error("InvalidMonthNo"); // throw keyword is used here
    }
}

try {
    // statements to try
    monthName = getMonthName(myMonth); // function could throw exception
} catch (e) {
    monthName = "unknown";
    logMyErrors(e); // pass exception object to error handler (i.e. your own function)
}
