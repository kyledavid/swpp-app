const RainChart = React.createClass({
    getInitialState() {
      return {
          desc: true,
      };  
    },
    _handleDescToggle() {
        this.state.desc = !this.state.desc;
        this.setState({desc:  this.state.desc});
    },
    _sortSites() {
        var sites = this.props.sites;

        if(this.state.desc){
            sites = sites.sort(comparisonFunctions.compareDesc);
        } else {
            sites = sites.sort(comparisonFunctions.compareAsc);
        }
        
    },
    _createChartRows(sites) {
        var comps = [];
        
        sites.forEach(function(site){
            comps.push(<ChartRow site={site} key={site.name}/>);
        });
        
        return comps;
    },
    _getRainfallHeading(){
        // if we have more than one rainfall table, label them by zipcode
        if (this.props.tables > 1) {
            return ("Rainfall for " + this.props.sites[0].zipcode);
        }
        
        return "Rainfall";
    },
    componentWillMount(){
        this._sortSites();  
    },
    componentWillUpdate() {
        this._sortSites();
    },
    render() {
        var comps = [];
        var zip = this.props.sites[0].zipcode;
        
        comps = this._createChartRows(this.props.sites);
        
        return (
        	<div className="chart-panel">
        		<h2 className="zip-title">{this._getRainfallHeading()}</h2>
        		<table className="rain-table">
        			
        			<ChartHeading descTogg={this._handleDescToggle}></ChartHeading>
        			<tbody>{comps}</tbody>

        		</table>
        		 
        	</div>// chart panel
            );
    }
});

// <pre>{JSON.stringify(this.state, null, 2)}<br/>{JSON.stringify(this.props, null, 2)}</pre> goes above table