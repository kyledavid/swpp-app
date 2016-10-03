// app/assets/javascripts/components/_main.js.jsx 

// ************** USE TO TEST FRONT END SORTING ***********************

var testSites = [
            {name: 'buntu', address: '2383 butt strt', rain: .2},
            {name: 'art', address: '2355 tf', rain: .1},
            {name: ' ARST house', address: '727 rainless ave', rain: null},
            {name: 'wtftff', address: '2383 tarf strt', rain: .7},
            {name: 'tsvx', address: '234 butt strt', rain: .4},
            {name: 'wffff', address: '2383 arst strt', rain: .5},
            {name: ' rain house', address: '2383 rainless ave', rain: null},
            {name: ' tstffta house', address: '6263 rainless ave', rain: null},
        ];

// **********************************************************************


const Body = props => (
     <div className="col col-md-7 col-sm-7">
          <RainChart sites={testSites}></RainChart> 
     </div>
  );