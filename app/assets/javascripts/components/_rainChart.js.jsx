var compareAsc = function(a, b) {
    if (a.rain > b.rain ){
        return 1;
    } else if (a.rain < b.rain) {
        return -1;   
    } else {
        return 0;
    }
}

var compareDesc = function(a, b) {
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
    _handleDescToggle() {
        this.setState({desc: !this.state.desc});
    },
    _sortSites() {
        var sites = this.props.sites;

        if(this.state.desc){
            sites = sites.sort(compareDesc);
        } else {
            sites = sites.sort(compareAsc);
        }
        
    },
    _createChartRows(sites) {
        var comps = [];
        
        sites.forEach(function(site){
            comps.push(<ChartRow site={site} key={site.name}/>);
        });
        
        return comps;
    },
    componentWillMount() {
        
    },
    render() {
        var comps = [];
        this._sortSites();
        comps = this._createChartRows(this.props.sites);
        
        return (
        	<div className="chart-panel">
        		<h2 className="zip-title">Rainfall</h2>
        		<table className="rain-table">
        			
        			<ChartHeading descTogg={this._handleDescToggle}></ChartHeading>
        			<tbody>{comps}</tbody>

        		</table>
        		<pre>{JSON.stringify(this.state, null, 2)}<br/>{JSON.stringify(this.props, null, 2)}</pre>
        		<pre></pre>
        	</div>// chart panel
            );
    }
});
