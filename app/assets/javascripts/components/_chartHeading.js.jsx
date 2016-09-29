var ChartHeading = React.createClass({
    render() {
        return (
            <tbody>
                <tr>
    				<td className="table-heading">
    					Site
    				</td>
    
    				<td className="table-heading">
    					Rainfall  <ChartFlowButton togg={this.props.descTogg}/>
    				</td>
    			</tr>
    		</tbody>
            );
    }
});

var ChartFlowButton = React.createClass({
    getInitialState() {
        return {
                descend: false
            }; 
    },
    _toggleDescend() {
        this.props.togg();
        this.setState({descend: !this.state.descend});
    },
    render() {
        if (this.state.descend){
            return (
                    <i className="fa fa-caret-up" onClick={this._toggleDescend}> </i>
                );
        } else {
            return (
                    <i className="fa fa-caret-down" onClick={this._toggleDescend}> </i>
                );
        }
    }
});
