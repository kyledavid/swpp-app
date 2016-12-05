var comparisonFunctions = (function() {
    return {
        compareAsc: function(a, b) {
            if (a.rain > b.rain ){
                return 1;
            } else if (a.rain < b.rain) {
                return -1;   
            } else {
                return 0;
            }
        },
        compareDesc: function(a, b) {
            if (a.rain > b.rain ){
                return -1;
            } else if (a.rain < b.rain) {
                return 1;   
            } else {
                return 0;
            }
        }
    };
})();