`📢 Use this project, [contribute](https://github.com/iviteb/instagram-integration) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).`

# Instagram Integration

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

The **Instagram Integration** is a vtex store blocks component that queries the instagram Graph API using an access token given by the client and displays the last X number of posts in your store


## Configuration
You should first install the app on the desired **Account**. To install run: `vtex install iviteb.instagram-integration@0.x` inside the Toolbelt. 

Then, you need to add your App in the Facebook Developers platform and get the **"client_id"** and **"client_secret"** strings (AKA app_id / app_secret) and follow the steps below to generate a long lived token which will last for 60 days.

### Prerequisites:
```
client_id: xxx
client_secret: yyy
redirect_uri: https://yoursite.com/auth/
```
### Capture "code"

Modify the following URL with your info to generate a code (open in browser)
```
https://api.instagram.com/oauth/authorize?client_id=xxx&redirect_uri=https://yoursite.com/auth/&scope=user_profile,user_media&response_type=code
```
The URL will redirect you to te /auth/ page where you will need the URL to get the code:
```
https://yoursite.com/auth/?code=AQB3TxAJbcKH9BnrEMRmNvDXxkZv1Lxv3Mc1m9EuGNn_zbEZyOeo1iyaJBpmAwhr3OXPeQeJVayE3ewjn0isBJxJ7oE00TTu9FG7cjZF19HOSXS87oZXB8sgwR5HUO9PV2vmnFCb-aQlPe-_elre5L4lhZpcYHkXMSMc41RmpBuQjZnaw_PG_leCQ7-bmk6_yzgFnXFcxaJj8AyS6JDYfHucbDWB91JD4MOBnWRgYoCbog#_
```
Strip out the **#_** at the end and copy the code

### Exchange the "code" for a short-lived token

Execute to following CURL with your app info to generate the short-lived token:
```
Request:
curl -X POST \
  https://api.instagram.com/oauth/access_token \
  -F client_id=xxx \
  -F client_secret=yyy \
  -F grant_type=authorization_code \
  -F redirect_uri=https://youtsite.com/auth/ \
  -F code=AQB3TxAJbcKH9BnrEMRmNvDXxkZv1Lxv3Mc1m9EuGNn_zbEZyOeo1iyaJBpmAwhr3OXPeQeJVayE3ewjn0isBJxJ7oE00TTu9FG7cjZF19HOSXS87oZXB8sgwR5HUO9PV2vmnFCb-aQlPe-_elre5L4lhZpcYHkXMSMc41RmpBuQjZnaw_PG_leCQ7-bmk6_yzgFnXFcxaJj8AyS6JDYfHucbDWB91JD4MOBnWRgYoCbog
  
Response:
{"access_token": "IGQVJVcnU4U3lLLWpvU1lYS3lkX1phbnZAULXdpVGJrU3pYUjZArVGJUWl9iWkczWTNoYWNFdmhEV2xsa1k4S1lOTVRnTm12UnZAFWmUxZAy1ZAYnlhVkJmY1BURFhEMHUyWFFJdDhmb0Q0Ql94QjY1ZA01jLVE0dE9idzdPcDM0", "user_id": xxx}
```

### Exchange the "short-lived token" for a "long-lived token" (which will last for 60 days)

Execute the following CURL request
```
Request:
curl -i -X GET "https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=yyy&access_token=IGQVJVcnU4U3lLLWpvU1lYS3lkX1phbnZAULXdpVGJrU3pYUjZArVGJUWl9iWkczWTNoYWNFdmhEV2xsa1k4S1lOTVRnTm12UnZAFWmUxZAy1ZAYnlhVkJmY1BURFhEMHUyWFFJdDhmb0Q0Ql94QjY1ZA01jLVE0dE9idzdPcDM0"

Response:
{"access_token":"IGQVJWdzhVTWZApSU5WNm1pSEZAyNVM2c2dEcWRZAUHVnMEJ2U2dsY1AtNnIyMW9YSWpPQS1OMkRuN1ZAkUExYT0xqRWd2NjBJb0FLdkRkNFNJTDhuNGZApSkh6M0xGRVV4YU45QUVJMDN3","token_type":"bearer","expires_in":5183999}
```

### Use the "long-lived token" in the Instagram App on your VTEX site (admin panel) and you're done

Once installed and configured, you should declare the app as a **Dependency** inside your store's **Store Theme**:
```
"dependencies": { 
    "iviteb.instagram-integration": "0.x"
}
```

After this is completed, you should add the block **instagram-integration** inside your desired page location. Configuration using props object is optional, the values used in this example are the default ones:
```
{
    "store.custom#home": {
        "children": ["flex-layout.row#instagram-container"]
    },
    "flex-layout.row#container-container": {
        "children": ["instagram-integration"]
    },
     "instagram-integration": {
         "props": {
             "imageWidth": 150,
             "imageHeight": 150,
             "imageCount": 5
         }
     }
}
```
### `instagram-integration` props

| Prop name | Type | Description | Default value |
| --- | --- | --- | --- |
| `imageCount` | `number` | The number of instagram posts that will be displayed in your store-theme. | `6` |
| `imageWidth` | `number`  | The width of each instagram image in pixels. | `200`    |
| `imageHeight` | `number`  | The height of each instagram image in pixels. | `200`    |
   

## Customization

| CSS Handles |
| ----------- | 
| `instagramPageContainer` | 
| `imageContainer` | 
| `imageItem` | 

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
