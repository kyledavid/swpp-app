var ChartRow = React.createClass({
    _rainNumber() {
        if (this.props.site.rain){
            return (<span>{this.props.site.rain} in.</span>);
        }
        
        return (<span></span>);
    },
    render() {
        return (
                <tr>
    				<td>
    					<h4 className="table-site">{this.props.site.name}</h4>
    					{this.props.site.address}
    				</td>
    
    				<td>
    					<h3 className="rainfall">
    					    {this._rainNumber()}
    					</h3>
    				</td>
    			</tr>
            );
    }
});
