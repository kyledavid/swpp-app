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
      return {desc: true};  
    },
    handleDescToggle() {
        this.setState({desc: !this.state.desc});
        console.log(this.state.desc);
    },
    render() {
        var sites = this.props.sites;
        
        var comps = [];
        
        if(this.state.desc){
            sites.sort(compareDesc);
        } else {
            sites.sort(compareAsc);
        }
        
        
        console.log(sites);
        
        sites.forEach(function(site){
            comps.push(<ChartRow site={site} key={site.name}/>);
        });
        return (
        	<div className="chart-panel">
        		<h2 className="zip-title">Rainfall</h2>
        	
        		<table className="rain-table">
        			
        
        			<ChartHeading descTogg={this.handleDescToggle}></ChartHeading>
        			<tbody>{comps}</tbody>

        		</table>
        	</div>// chart panel
            );
    }
});

