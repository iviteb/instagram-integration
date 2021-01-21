`📢 Use this project, [contribute](https://github.com/iviteb/instagram-integration) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).`

# Instagram Integration

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

The **Instagram Integration** is a vtex store blocks component that queries the instagram Graph API using an access token given by the client and displays the last X number of posts in your store


## Configuration
You should first install the app on the desired **Account**. To install run: `vtex install iviteb.instagram-integration@0.x` inside the Toolbelt. 
Once installed, you should declare the app as a **Dependency** inside your store's **Store Theme**:
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
