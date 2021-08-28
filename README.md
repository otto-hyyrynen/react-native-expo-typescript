Getting started:

Launch npm run start

Notice! Sometimes expo start -c is required to clean cache. Typically when making babel.config changes.

HISTORY

02.08.2021
    Added Map and Location services through Expo, but getCurrentLocation is
    really slow. Need to implement getLastKnownPositionAsync() and use it
    to fetch initial coordinates and wait for the current and more accurate
    location in the background, then update map.

13.8.2021
    Implemented Firebase authentication with email/password. Project is LoginApp:
    https://console.firebase.google.com/u/0/project/loginapp-2e410/overview

14.8.2021
    Started testing with firebase realtime database.

28.8.2021
    Using redux-toolkit RTK to fetch Posts from json placeholder API. Changing
    js components to typescript. Implemented absolute imports -> requires adding
    paths to babel.config.js aliases.