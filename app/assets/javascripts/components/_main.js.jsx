// app/assets/javascripts/components/_main.js.jsx 

const Main = ({sites}) => {
    // combine raw site information with rain data and return as a simple object
    let formattedSites = siteProcessor.collateSiteData(sites);
    let zipList = [89118, 89312];
    let includesData;
    
    formattedSites === "No data found" ? includesData = false : includesData = true;
    
    return (
        <div>
            <Body sites={formattedSites} zipList={zipList} includesData={includesData}></Body>
        </div>
    ); 
};

