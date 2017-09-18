
function getNowDate(input) {
    if (input.value == null || input.value == undefined || input.value.length == 0) {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var today = yyyy + '-' + mm + '-' + dd;

        input.value = today;
    }
};
