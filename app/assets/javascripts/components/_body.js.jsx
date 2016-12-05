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
        


// **********************************************************************

const Body = React.createClass({
    _sortSitesByZip(){
        var zipSites = [];
        // for each zip code, return the sites assigned to that zipcode
        zipSites = this.props.zipList.map(zCode => (testSites.filter(site => (site.zipcode === zCode)))).filter( arrVal => (arrVal.length));
        // returns the sites as 2d array divided by zip code
        console.log(zipSites);
        return zipSites;
    },
    getInitialState(){
        return {
            zipDivide: true,
        };
    },
    _getSiteList(){
        // if we are dividing sites by zip code sort them, otherwise return the untouched sites
        if (this.state.zipDivide) {
            return this._sortSitesByZip();
        }
        
        return [testSites];
    },
    _getComps() {
        // create rain charts for each array of sites provided
        var siteList = this._getSiteList();
        
        let components = siteList.map(zipGroup => {
           let zip = zipGroup[0].zipcode;
           var length = siteList.length;
           var key = zip + "chart";

           return (
                <RainChart tables={length} sites={zipGroup} key={key}></RainChart>
            );
        });
        
        return components;
    },
    render() {
        var comps = this._getComps([testSites]);
    
        return (
            <div>
                <div className="col col-md-7 col-sm-7">
                    {comps}
                </div>
            </div>
        );
    }
});
