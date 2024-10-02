var student = {
    fullName: "Sania",
    monthlyFees: 10000,
    tuitionFees: 5000,
    saniaAnnualfund: function () {
        var annualfund = 0;
        for (i = 0; i < 12; i++) {
            var monthlycharge = this.monthlyFees;
            if (this.tuitionFees) {
                monthlycharge += this.tuitionFees;
            }
            annualfund += monthlycharge;
        }
        return annualfund;
    }
}
var schoolAnnualFund = student.saniaAnnualfund();
console.log("Sania's Annual fund is :", schoolAnnualFund);
