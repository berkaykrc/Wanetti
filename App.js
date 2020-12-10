import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class App extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://www.wanetti.com.tr/' }}
      />
    );
  }
}

export default App;
