var geoWatch;

// https://love2dev.com/blog/html-geolocation/
// https://www.w3schools.com/html/html5_geolocation.asp

function startWatch() {
    if ( !geoWatch ) {
        if ( "geolocation" in navigator && "watchPosition" in navigator.geolocation ) {
            geoWatch = navigator.geolocation.watchPosition( setCurrentPosition,
                positionError, {
                    enableHighAccuracy: false,
                    timeout: 15000,
                    maximumAge: 0
                } );
        }
    }
}

function stopWatch() {
    navigator.geolocation.clearWatch( geoWatch );
    geoWatch = undefined;
}

function getLocation() {
    if (navigator.geolocation) {
        // navigator.geolocation.getCurrentPosition(setCurrentPosition);
        navigator.geolocation.getCurrentPosition(setCurrentPosition,
            positionError, {
                enableHighAccuracy: false,
                timeout: 15000,
                maximumAge: 0
        } );
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
}
  
function showPosition(position) {
    console.log("Latitude", position.coords.latitude)
    console.log("Longitude", position.coords.longitude)
}

function positionError( error ) {

    switch ( error.code ) {
        case error.PERMISSION_DENIED:
            console.error( "User denied the request for Geolocation." );
            break;
        case error.POSITION_UNAVAILABLE:
            console.error( "Location information is unavailable." );
            break;
        case error.TIMEOUT:
            console.error( "The request to get user location timed out." );
            break;
        case error.UNKNOWN_ERROR:
            console.error( "An unknown error occurred." );
            break;
    }

}


function setCurrentPosition( position ) {
    console.log('accuracy', position.coords.accuracy);
    console.log('altitude' ,position.coords.altitude);
    console.log('altitudeAccuracy' ,position.coords.altitudeAccuracy);
    console.log('heading' ,position.coords.heading);
    console.log('latitude' ,position.coords.latitude);
    console.log('longitude' ,position.coords.longitude);
    console.log('speed' ,position.coords.speed);

}
// getLocation()
startWatch()