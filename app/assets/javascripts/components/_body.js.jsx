// app/assets/javascripts/components/_main.js.jsx 

var Body = React.createClass({ 
    render() { 
        return ( <div className="col col-md-7 col-sm-7">
                    <RainChart sites={this.props.sites}></RainChart>
                 </div>
        ); 
        
    } 
    
});