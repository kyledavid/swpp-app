const ChartFlowButton = React.createClass({
    getInitialState() {
        return (this.state = {
            descend: false
        });
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
