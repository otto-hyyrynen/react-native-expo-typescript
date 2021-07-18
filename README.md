-   Added Map and Location services through Expo, but getCurrentLocation is
    really slow. Need to implement getLastKnownPositionAsync() and use it
    to fetch initial coordinates and wait for the current and more accurate
    location in the background, then update map.