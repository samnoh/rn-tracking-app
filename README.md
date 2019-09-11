# React Native Tracking App

## `TIL`

### React Native Elements

-   [Docs](https://react-native-training.github.io/react-native-elements/docs/getting_started.html)
-   Pre-built set of common components

```bash
npm install --save react-native-elements
```

-   Usage

```jsx
import { Text } from 'react-native-elements';
...
<Text h3>Example</Text>
```

### AsyncStorage

-   Will be deprecated soon

```jsx
import { AsyncStorage } from 'react-native';

AsyncStorage.setItem('name', data.name);
AsyncStorage.getItem('name');
AsyncStorage.removeItem('name');
```

### Axios

-   `interceptors.request.use((config) => {}, (err) => {})` is executed every time you request

```javascript
const instance = axios.create({
    baseURL: 'http://www.example.com'
});

instance.interceptors.request.use(
    async config => {
        if (token) config.headers.Authorization = `Bearer $helloworld$`;

        return config;
    },
    e => Promise.reject(e)
);
```
