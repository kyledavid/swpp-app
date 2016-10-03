const RainNumber = React.createClass({
    render() {
        
        if (this.props.rain) {
                return (<span>{this.props.rain} in.</span>);
            }
            
        return (<span></span>);
    }
}); 