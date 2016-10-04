// app/assets/javascripts/components/_main.js.jsx 

// ************** USE TO TEST FRONT END SORTING ***********************

var testSites = [
            {name: 'buntu', address: '2383 butt strt, 89118', rain: .2, zipcode: 89118},
            {name: 'art', address: '2355 tf, 89118', rain: .1, zipcode: 89118},
            {name: ' ARST house', address: '727 rainless ave, 89118', rain: null, zipcode: 89118},
            {name: 'wtftff', address: '2383 tarf strt, 89118', rain: .7, zipcode: 89118},
            {name: 'tsvx', address: '234 butt strt, 89312', rain: .4, zipcode: 89312},
            {name: 'wffff', address: '2383 arst strt, 89118', rain: .5, zipcode: 89118},
            {name: ' rain house', address: '2383 rainless ave, 89312', rain: null, zipcode: 89312},
            {name: ' tstffta house', address: '6263 rainless ave, 89312', rain: null, zipcode: 89312},
        ];
        
var zipList = [89118, 89312];
var counter = 0;

// **********************************************************************

// const Body = ({sites}) => (
//      <div className="col col-md-7 col-sm-7">
//           <RainChart sites={sites}></RainChart> 
//      </div>
//   );

const sortSites = (sites) => {
    var zipSites = [];
    
    // for each zip code, return the sites assigned to that zipcode
    zipSites = zipList.map(zCode => (sites.filter(site => (site.zipcode === zCode))));
    
    // returns the sites as 2d array divided by zip code
    return zipSites;
    
}

const Body = React.createClass({
    _getComps(sitesByZip) {
        
        let components = sitesByZip.map(zipGroup => {
           let zip = zipGroup[0].zipcode;
           var key = zip + "chart";

           return (
                <RainChart sites={zipGroup} key={key}></RainChart>
            );
        });
        
        console.log(components[0]);
        return components;
    },
    render() {
        var zipSites = sortSites(testSites);
        var comps = this._getComps(zipSites);
        console.log('comps: ' + comps);
    
        return (
            <div className="col col-md-7 col-sm-7">
                {comps}
            </div>
        );
    }
})
