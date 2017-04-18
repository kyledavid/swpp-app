// app/assets/javascripts/components/_main.js.jsx 

const Main = ({sites}) => {
    // combine raw site information with rain data and return as a simple object
    var formattedSites = siteProcessor.collateSiteData(sites);
    var zipList = [89118, 89312];
    
    console.log("SITES" + formattedSites);
    if (formattedSites == "No data found") {
        return (
            <div className="col col-md-7 col-sm-7">
                <div className="chart-panel">
                    <h2>No Data Found. Hint: try September 30 2016 :)</h2>
                </div>
            </div>
            );
    }
    return (
        <div>
            <Body sites={formattedSites} zipList={zipList}></Body>
        </div>
    ); 
};

