//my-app/src/authProvider.js
import { MsalAuthProvider, LoginType } from 'react-aad-msal';

// Msal Configurations
const config = {
    auth: {
        authority: 'https://login.microsoftonline.com/436b1478-267d-4d8f-86ce-30dbd0241146',
        clientId: '6d02ceb1-60bf-4001-8227-9e5c59ea69e8',
        redirectUri: 'http://localhost:3000/callback'
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
    }
};

// Authentication Parameters
const authenticationParameters = {
    scopes: [
        'user.read'
    ]
}

// Options
const options = {
    loginType: LoginType.Popup,
    tokenRefreshUri: window.location.origin + '/auth.html'
}

export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)