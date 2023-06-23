
# Hi, I'm Shourya! 👋
## This is  an example of nodejs/express token generation serever for [100ms](https://www.100ms.live/)





## Installation of server

Install this server

```bash
  npm install
```
Create a copy of .env file and enter the below credentials from [100ms developers](https://dashboard.100ms.live/developer)
``` 
APP_ACCESS_KEY = 'your_access_key'
APP_SECRET= 'your_secret_key'
```
## Run Locally

Clone the project

```bash
  git clone https://github.com/Sho-urya25/hms-nodejs-tokenserver.git
```


Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## License

[MIT](https://choosealicense.com/licenses/mit/)

## Endpoints and responses

Example server url for to generate authentication token
```
your server/hmsatkn/your room id/your uid/your role
```
Response from server
```
{"token":your token}
```
Example server url for to generate management token
```
your server/hmsmtkn/type
```
Response from server
```
{"token":your token}
```
