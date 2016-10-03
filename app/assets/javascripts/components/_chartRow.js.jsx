const RainNumber = React.createClass({
    render() {
        
        if (this.props.rain) {
                return (<span>{this.props.rain} in.</span>);
            }
            
        return (<span></span>);
    }
}); 

const ChartRow = ({site}) => (
    <tr>
		<td>
			<h4 className="table-site">{site.name}</h4>
			{site.address}
		</td>

		<td>
			<h3 className="rainfall">
			    <RainNumber rain={site.rain}/>
			</h3>
		</td>
	</tr>
)
