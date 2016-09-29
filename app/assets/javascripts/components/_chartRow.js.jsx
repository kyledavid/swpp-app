var ChartRow = React.createClass({
    render() {
        return (
                <tr>
    				<td>
    					<h4 className="table-site">{this.props.site.name}</h4>
    					{this.props.site.address}
    				</td>
    
    				<td>
    					<h3 className="rainfall">
    					    <RainNumber rain={this.props.site.rain} />
    					</h3>
    				</td>
    			</tr>
            );
    }
});

var RainNumber = React.createClass({
    render() {
        if (this.props.rain){
            return (<span>{this.props.rain} in.</span>);
        }
        
        return (<span></span>);
    }
});