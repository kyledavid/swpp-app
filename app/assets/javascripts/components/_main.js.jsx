// app/assets/javascripts/components/_main.js.jsx 

const Main = ({sites}) => {
    // combine raw site information with rain data and return as a simple object
    var formattedSites = siteProcessor.collateSiteData(sites);
    var zipList = [89118, 89312];
    
    return (
        <div>
            <Body sites={formattedSites} zipList={zipList}></Body>
        </div>
    ); 
};

