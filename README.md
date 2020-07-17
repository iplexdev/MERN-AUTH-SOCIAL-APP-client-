## For Frontend (client side)
## Getting Started

```
git clone https://github.com/iplexdev/React-Authentication-Social-App
cd react-auth-client
npm i && HTTPS=true npm start
```

### Because of Facebook, https is required. Even in development. 
Facebook requires all apps interacting with their api (including those in development) to be served over https.  This means you will need to run create-react-app in https mode. Plus set up certificates for your server. Go ahead and get yourself a cup of coffee. This could take a minute.

#### OS X
To add https to localhost [follow these instructions](https://medium.freecodecamp.org/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec).

You will also need to manually add the https certificate to Chrome as [described here](https://www.comodo.com/support/products/authentication_certs/setup/mac_chrome.php).

You may also need to open a seperate tab for https://localhost:8080 and accept the security warning before the client will push requests through.

#### Windows
Thanks to [Le Gui PPF](https://medium.com/@guillaume.bottius) for providing the following instructions for setting up SSL locally on Windows:

"Hi thanks for the code ! I haven’t tried it yet cause I spent a whole day (hot minute huh !) figuring out how to generate proper ssl certificate with all Chrome requirements… for those who don’t want to lose their time => [https://serverfault.com/a/850961](https://serverfault.com/a/850961) and add:

```
echo authorityKeyIdentifier=keyid,issuer
echo basicConstraints=CA:FALSE
echo keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
```

to v3 req.

Hope that works for you Windows folks!

If you only want to use Twitter/Google/Github authentication (https is not required), follow the instructions in [this branch](https://github.com/funador/react-auth-client/tree/twitter-auth)

## Client

Depending on your OS you will have to flag the HTTPS enviornment variable differently. Documentation for different operating systems is [here](https://facebook.github.io/create-react-app/docs/using-https-in-development). 

## Server

Follow the instructions in the [server repo](https://github.com/iplexdev/React-Authentication-Social-App)

Finally open https://localhost:3000


# react-Auth-Social-App
