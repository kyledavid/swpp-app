var compareDesc = function(a, b) {
    if (a.rain > b.rain ){
        return 1;
    } else if (a.rain < b.rain) {
        return -1;   
    } else {
        return 0;
    }
}

var compareAsc = function(a, b) {
    if (a.rain > b.rain ){
        return -1;
    } else if (a.rain < b.rain) {
        return 1;   
    } else {
        return 0;
    }
}

var testSites = [
            {name: 'buntu', address: '2383 butt strt', rain: .2},
            {name: 'art', address: '2355 tf', rain: .1},
            {name: 'wtftff', address: '2383 tarf strt', rain: .7},
            {name: 'tsvx', address: '234 butt strt', rain: .4},
            {name: 'wffff', address: '2383 arst strt', rain: .5},
            {name: ' rain house', address: '2383 rainless ave', rain: null},
            {name: ' ARST house', address: '727 rainless ave', rain: null},
            {name: ' tstffta house', address: '6263 rainless ave', rain: null},
        ];

var RainChart = React.createClass({
    getInitialState() {
      return {
          desc: true,
          sites: testSites,
          
      };  
    },
    handleDescToggle() {
        this.setState({desc: !this.state.desc});
        console.log(this.state.desc);
    },
    _eachSite() {
        var sites = this.state.sites;
        var comps = [];
        
        sites.forEach(function(site){
            comps.push(<ChartRow site={site} key={site.name}/>);
        });
        
        return (
                comps
            );
    },
    _sortSites() {
        
        var sites = this.state.sites;
        
        if(this.state.desc){
            sites.sort(compareDesc);
        } else {
            sites.sort(compareAsc);
        }    
        
        this.setState({sites: sites});  
    },
    componentWillMount() {
        this._sortSites();
    },
    render() {
        var comps = this._eachSite();
        
        return (
        	<div className="chart-panel">
        		<h2 className="zip-title">Rainfall</h2>
        	
        		<table className="rain-table">
        			
        
        			<ChartHeading descTogg={this.handleDescToggle}></ChartHeading>
        			<tbody>{comps}</tbody>

        		</table>
        		<h2 style={{'text-align': 'center'}}>Debug:</h2>
        		<pre>{JSON.stringify(this.state, null, 2)}</pre>
        	</div>// chart panel
            );
    }
});

