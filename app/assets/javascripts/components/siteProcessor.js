// collect the rain data stored in the DOM

var siteProcessor = (function(){
    
    var collateSiteData = function(sites) {
    // get all elements with 'rains' class
        var rains = document.getElementsByClassName('rains');
        // for each rain element return the rain and id values in a new javascript object
        var rainOfSites = Array.prototype.map.call(rains, obj => ({rain: JSON.parse(obj.dataset.rain), id: JSON.parse(obj.dataset.siteId)}));
        // combine the harvested rain values with the appropriate job sites
        console.log("Rain of Sites:");

        if (rainOfSites[0].rain.length === 0) {
            return 'No data found';
        }
        return addRainToSites(sites, rainOfSites);
    }
    
    var addRainToSites = function(sites, rainOfSites) {
        // cycle through array of sites, returns array with rain values appended to sites
        var updatedSites = sites.map(site => {
            let siteId = site.id;
            // get the the array of rain values matching a particular siteId
            let siteRains = rainOfSites.filter(siteRain => siteRain.id === siteId);
            // append rain data to site
            site.rain = siteRains[0].rain;
            
            return site;
        });
        // now strip down the site to the essentials
        return stripDownSites(updatedSites);
    }

    var stripDownSites = function(updatedSites) {
        // now that rainfall has been matched with the appropriate site, get the mean of the rainfall values and strip object down to the essential values
        var strippedSites = updatedSites.map(site => {
            // send rainfall array and return the average
            var averageRain = averageRainFall(site.rain);
            // create our new site object
            var newSite = {
                name: site.job_name,
                address: site.cross_street,
                zipcode : site.zip_code,
                rain: averageRain,
            }
            
            return newSite;
        });
        // return array of processed sites
        return strippedSites;
    }
    // get the average rate of rain based on a set of rain readings for a particular site
    var averageRainFall = function(rains) {
        console.log('rains:' + rains);
        var average = rains.reduce(function(p, c){
            return p + Number(c);
        });
        
        average = average / rains.length;
        
        return average;
        // uncomment this to test table sorting with random rain values
        // return Math.round(Math.random() * 10) / 10;
    }
    
    return {
      collateSiteData: collateSiteData
    };
    
})();