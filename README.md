# microsoft-graph-token
I am doing some microsoft azure integration with my company internal app using Node.js, I searched
all over NPM to find a package just to manipulate microsoft graph tokens but I didn't succeed, so I
decided to built one myself.

You are welcome to contribute to the package (**Let's make NPM greate again**).

## Install
    npm install microsoft-graph-token

Nothing works yet (Don't do it).

## How it works?

```js
let MicrosoftGraphToken = require('microsoft-graph-token');

let microsoftGraphToken = new MicrosoftGraphToken({
        RESOURCE: 'onenote',
        CLIENT_ID: '...',
        REDIRECT_URI: '...',
        CLIENT_SECRET: '...'
    });
```

### Authorization Code Grant workflow

### Microsoft Graph

* **Get Authorization URI**

* **Get Access Token**

* **Test Token Expiration Time**

* **Refresh Token**


### OneNote

    RESOURCE: 'onenote'

* **Get Authorization URI**

```js
console.log(microsoftGraphToken.oneNote.getAuthorizationURI());
```

* **Get Access Token**

* **Test Token Expiration Time**

* **Refresh Token**


### SharePoint

* **Get Authorization URI**

* **Get Access Token**

* **Test Token Expiration Time**

* **Refresh Token**


### Office 365

* **Get Authorization URI**

* **Get Access Token**

* **Test Token Expiration Time**

* **Refresh Token**


### Skype for Business

* **Get Authorization URI**

* **Get Access Token**

* **Test Token Expiration Time**

* **Refresh Token**


### Azure Rights Management Services

* **Get Authorization URI**

* **Get Access Token**

* **Test Token Expiration Time**

* **Refresh Token**


### Azure Service Management

* **Get Authorization URI**

* **Get Access Token**

* **Test Token Expiration Time**

* **Refresh Token**


## Testing

### Running the tests