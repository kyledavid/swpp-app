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


var RainChart = React.createClass({
    getInitialState() {
      return {
          desc: true,
      };  
    },
    handleDescToggle() {
        this.setState({desc: !this.state.desc});
        console.log(this.state.desc);
    },
    _sortSites(sites) {
        if(this.state.desc){
            sites.sort(compareDesc);
        } else {
            sites.sort(compareAsc);
        }
        
        return sites;
    },
    _createChartRows(sites) {
        var comps = [];
        
        sites.forEach(function(site){
            comps.push(<ChartRow site={site} key={site.name}/>);
        });
        
        return comps;
    },
    render() {
        var sites = this.props.sites;
        var comps = [];
        
        sites = this._sortSites(sites);
        comps = this._createChartRows(sites);
        
        return (
        	<div className="chart-panel">
        		<h2 className="zip-title">Rainfall</h2>
        		<table className="rain-table">
        			
        			<ChartHeading descTogg={this.handleDescToggle}></ChartHeading>
        			<tbody>{comps}</tbody>

        		</table>
        		<pre>{JSON.stringify(this.state, null, 2)}<br/>{JSON.stringify(this.props, null, 2)}</pre>
        		<pre></pre>
        	</div>// chart panel
            );
    }
});

