// app/assets/javascripts/components/_main.js.jsx 
const Main = ({sites}) => {
        var datepicker = document.getElementsByClassName('rains');
        var dateRay = Array.prototype.map.call(datepicker, function(obj){
           return {rain: JSON.parse(obj.dataset.rain), id: JSON.parse(obj.dataset.siteId)}
         });

        console.log(dateRay)
        return ( 
            <div>
                <Body></Body>
                <pre>{JSON.stringify(sites, null, 2)}</pre>
            </div>
        ); 
};