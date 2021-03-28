import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Platform
} from 'react-native';
import { WebView } from 'react-native-webview';
import html from './index.html';

const os = Platform.OS;

const stringify = obj => JSON.stringify(obj, (key, val) => {
  if (typeof val === 'function') {
    return val.toString();
  }
  return val;
});

export default function WebChart(props) {
  const {
    options = {},
    exScript = '',
    onMessage = () => {}
  } = props;

  const [webView, setWebView] = useState(null);

  const update = (prevOption = {}) => {
    const optionJson = stringify(options);
    const prevOptionJson = stringify(prevOption);
    if (optionJson !== prevOptionJson) {
      webView?.postMessage(optionJson);
    }
  };

  useEffect(() => {
    update(null);
  });
  return (
    <WebView
      ref={(elem) => { setWebView(elem); }}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0)', width: '100%', height: '100%' }}
      scrollEnabled={ false }
      scalesPageToFit={os !== 'ios'}
      source={os === 'ios' ? html : { uri: 'file:///android_asset/WebChart/index.html' }}
      originWhitelist={['*']}
      injectedJavaScript={`
        const parse = str => JSON.parse(str, (key, val) => {
          if (val.indexOf && val.indexOf('function') > -1) {
            return eval('(' + val + ')')
          }
          return val
        });
        const chart = echarts.init(document.getElementById('Echarts'), null, {renderer: 'canvas'});
        document.addEventListener('message', (e) => {
          chart.setOption(parse(e.data), true);
        });
        ${exScript}
      `}
      onLoadEnd={() => {
        update(null);
      }}
      onMessage={(e) => { onMessage(JSON.parse(e.nativeEvent.data)); }}
    />
  );
}
