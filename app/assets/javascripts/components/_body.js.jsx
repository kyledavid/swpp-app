// app/assets/javascripts/components/_main.js.jsx 

// ************** USE TO TEST FRONT END SORTING **************

var testSites = [
            {name: 'Aces & Ales', address: '2801 N Tenaya Way, 89118', rain: .2, zipcode: 89118},
            {name: 'Hop Nuts Brewing', address: '1120 S Main St, 89118', rain: .1, zipcode: 89118},
            {name: 'Sin City Brewing Company', address: '3377 Las Vegas Blvd, 89118', rain: null, zipcode: 89118},
            {name: 'Tenaya Creek Brewery', address: '831 W. Bonanza Rd, 89118', rain: .7, zipcode: 89118},
            {name: 'Ellis Island Casino & Brewery', address: '4178 Koval Ln, 89312', rain: .4, zipcode: 89312},
            {name: 'Village Pub & Poker', address: '2301 E Sunset Rd, 89118', rain: .5, zipcode: 89118},
            {name: 'Bad Beat Brewing', address: '7380 Eastgate Rd, 89312', rain: null, zipcode: 89312},
            {name: 'Mothership Coffee', address: '2708 N Green Valley Pkwy, 89312', rain: null, zipcode: 89312},
        ];
        


// ************************************************************

const Body = React.createClass({
    _getRainTablesByZip(siteList) {
        // create rain charts for each array of sites provided
        var siteList = this._getSiteList();
        
        return (
            siteList.map(zipGroup => {
            let zip = zipGroup[0].zipcode;
            var length = siteList.length;
            var key = zip + "chart";

            return (
                <RainChart tables={length} sites={zipGroup} key={key}></RainChart>
            );
            
            })  
        );
    },
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
        if (!this.props.includesData) {
            return <NoData />;
        }
        
        return this._getRainTablesByZip();
    },
    render() {
        var comps = this._getComps(this.props.sites);
        
        return (
            <div>
                <div className="col col-md-7 col-sm-7">
                    {comps}
                </div>
            </div>
        );
    }
});
