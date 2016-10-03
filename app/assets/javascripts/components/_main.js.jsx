// app/assets/javascripts/components/_main.js.jsx 
var collateSiteData = function(sites) {
    var rains = document.getElementsByClassName('rains');
        var rainOfSites = Array.prototype.map.call(rains, function(obj){
           return {rain: JSON.parse(obj.dataset.rain), id: JSON.parse(obj.dataset.siteId)}
         });
        console.log(rainOfSites);
        return addRainToSites(sites, rainOfSites);
}

var addRainToSites = function(sites, rainOfSites) {
    var updatedSites = sites.map(function(site){
        var siteId = site.id;
        
        var siteRains = rainOfSites.filter(function(siteRain){
            return siteRain.id === siteId;
        });
        
        site.rain = siteRains[0].rain;
        
        return site;
        
    });
    
    return stripDownSites(updatedSites);
}

var stripDownSites = function(updatedSites) {
    var strippedSites = updatedSites.map(function(site){
        var averageRain = averageRainFall(site.rain);
        
        var newSite = {
            name: site.job_name,
            address: site.cross_street,
            zipcode : site.zip_code,
            rain: averageRain,
        }
        
        return newSite;
    });
    
    return strippedSites;
}

var averageRainFall = function(rains) {
    
    var average = rains.reduce(function(p, c){
        return p + Number(c);
    });
    
    average = average / rains.length;
    
    return average;
    
    // return Math.round(Math.random() * 10) / 10;
}

const Main = ({sites}) => {
    var formattedSites = collateSiteData(sites);
    
    return (
        <div>
            <Body sites={formattedSites}></Body>
        </div>
    ); 
};