/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer, StackActions, CommonActions, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MapView } from 'react-native-amap3d';
import Swiper from 'react-native-swiper';
import Dialog from 'react-native-dialog';
import WebChart from './WebChart';
const Stack = createStackNavigator();
const Stack1 = createStackNavigator();
const Tab = createBottomTabNavigator();
import {
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Button,
  TextInput
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400'
  },
  highlight: {
    fontWeight: '700'
  },
  container: {
    flex: 1,
    display: 'flex',
    position: 'relative'
  },
  map: {
    flex: 1
  },
  chart: {
    flex: 1,
    width: '100%',
    height: 200,
    marginTop: 10,
    marginBottom: 40
  }
});

function HomeScreen({ navigation, route }) {
  useEffect(() => {
    if (route.params?.post) {
      console.log('FFFFFFFUUUUUUUUUUUUUUUU');
    }
  }, [route.params]);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      {
        route.params
          ? <Text>{route.params?.post || '不想搞不想搞不想搞不想搞' }</Text>
          : <Text> 你たま懂个しは </Text>
      }
      <Button
        title="Go to Details"
        onPress={ () => {
          navigation.navigate('Details');
        } }
      />
      <Button
        title="Go to Root Seting"
        onPress={ () => {
          navigation.navigate('Root', {
            screen: 'Setting',
            params: {
              from: 'Home'
            }
          });
        } }
      />
    </View>
  );
}

function DetailsModelHome({ navigation, route }) {
  const { name, params = { count: 0, text: '' }, initialRouteParams } = route;
  const { count = 0, title } = params;
  const [postText, setPostText] = useState(params.text);
  console.log(route);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>{ (name && JSON.stringify(name)) || '不想搞' }</Text>
      <Text>{ (count && JSON.stringify(count)) || 0 }</Text>
      <Button
        title="Go to new Details"
        onPress={ () => {
          navigation.push('Details', {
            name: 'count',
            count: (count !== undefined && (count + 1)) || 0
          });
        } }
      />
      <Button
        title="Go to back"
        onPress={ () => {
          navigation.goBack();
        } }
      />
      <Button
        title="back to Home"
        onPress={ () => {
          navigation.navigate('Home');
        } }
      />
      <TextInput
        multiline
        placeholder="What's on your mind?"
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="提交"
        onPress={ () => {
          navigation.navigate('Home', {
            post: postText
          });
        } }
      />
      <Swiper
        loop={ false }
        dot = {<View style={{ width: 8, height: 8, backgroundColor: 'gray', borderRadius: 4 }}/>}
      >
        <View style={ styles.chart }>
          <WebChart
            style={styles.chart}
            options={
              {
                title: {
                  text: '未来一周气温变化',
                  subtext: '纯属虚构'
                },
                tooltip: {
                  trigger: 'axis'
                },
                legend: {
                  data: ['最高气温', '最低气温']
                },
                toolbox: {
                  show: true,
                  feature: {
                    dataZoom: {
                      yAxisIndex: 'none'
                    },
                    dataView: { readOnly: false },
                    magicType: { type: ['line', 'bar'] },
                    restore: {},
                    saveAsImage: {}
                  }
                },
                xAxis: {
                  type: 'category',
                  boundaryGap: false,
                  data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                  type: 'value',
                  axisLabel: {
                    formatter: '{value} °C'
                  }
                },
                series: [
                  {
                    name: '最高气温',
                    type: 'line',
                    data: [10, 11, 13, 11, 12, 12, 9],
                    markPoint: {
                      data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                      ]
                    },
                    markLine: {
                      data: [
                        { type: 'average', name: '平均值' }
                      ]
                    }
                  },
                  {
                    name: '最低气温',
                    type: 'line',
                    data: [1, -2, 2, 5, 3, 2, 0],
                    markPoint: {
                      data: [
                        { name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }
                      ]
                    },
                    markLine: {
                      data: [
                        { type: 'average', name: '平均值' },
                        [{
                          symbol: 'none',
                          x: '90%',
                          yAxis: 'max'
                        }, {
                          symbol: 'circle',
                          label: {
                            position: 'start',
                            formatter: '最大值'
                          },
                          type: 'max',
                          name: '最高点'
                        }]
                      ]
                    }
                  }
                ]
              }
            }
          />
        </View>
        <View style={ styles.chart }>
          <WebChart
            style={styles.chart}
            options={
              {
                title: {
                  text: '未来一周气温变化',
                  subtext: '纯属虚构'
                },
                tooltip: {
                  trigger: 'axis'
                },
                legend: {
                  data: ['最高气温', '最低气温']
                },
                toolbox: {
                  show: true,
                  feature: {
                    dataZoom: {
                      yAxisIndex: 'none'
                    },
                    dataView: { readOnly: false },
                    magicType: { type: ['line', 'bar'] },
                    restore: {},
                    saveAsImage: {}
                  }
                },
                xAxis: {
                  type: 'category',
                  boundaryGap: false,
                  data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                  type: 'value',
                  axisLabel: {
                    formatter: '{value} °C'
                  }
                },
                series: [
                  {
                    name: '最高气温',
                    type: 'line',
                    data: [10, 11, 13, 11, 12, 12, 9],
                    markPoint: {
                      data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                      ]
                    },
                    markLine: {
                      data: [
                        { type: 'average', name: '平均值' }
                      ]
                    }
                  },
                  {
                    name: '最低气温',
                    type: 'line',
                    data: [1, -2, 2, 5, 3, 2, 0],
                    markPoint: {
                      data: [
                        { name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }
                      ]
                    },
                    markLine: {
                      data: [
                        { type: 'average', name: '平均值' },
                        [{
                          symbol: 'none',
                          x: '90%',
                          yAxis: 'max'
                        }, {
                          symbol: 'circle',
                          label: {
                            position: 'start',
                            formatter: '最大值'
                          },
                          type: 'max',
                          name: '最高点'
                        }]
                      ]
                    }
                  }
                ]
              }
            }
          />
        </View>
      </Swiper>
    </View>
  );
}

function DetailsScreen({ navigation, route }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      initialRouteParams={{ title: 'Details' }}
    >
      <Tab.Screen name="Home" component={DetailsModelHome} />
      <Tab.Screen name="菜单" component={DetailsModelHome} options={{ title: '菜单', params: '123' }}/>
      <Tab.Screen name="地图" component={DetailsModelHome} options={{ title: '地图', params: '123' }}/>
    </Tab.Navigator>
  );
}

function SettingScreen({ navigation, route: { name, params } }) {
  useEffect(() => {
    const imsibscribe = navigation.addListener('focus', () => {
      console.log('Profile page is focused!!');
    });
    return imsibscribe;
  }, [navigation]);
  return (
    <View style={ styles.container}>
      <Text>
        {name}
      </Text>
      <Button
        title="Go to Home"
        onPress={ () => {
          navigation.navigate('Home');
        } }
      />

      <MapView
        style={ styles.map }
      />
    </View>
  );
}

function NotSettingScreen({ navigation, route }) {
  return (
    <View>
      <Text>
        NotSettingScreen
      </Text>
    </View>
  );
}

// 导航栏标题按钮
function NavigationTitleDialog({ navigation, route, props }) {
  const [currentTitle, setCurrentTitle] = useState('');
  const [visible, setVisible] = useState(false);
  const Title = getFocusedRouteNameFromRoute(route);
  console.log(Title, Title === 'Home' || typeof Title === 'undefined');
  const switchDialog = () => {
    setVisible(!visible);
  };
  const buttonEventCallBack = (name) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name }]
      })
    );
    switchDialog();
  };
  return (
    <View>
      { (Title === 'Home' || typeof Title === 'undefined') ? <Text onPress={switchDialog}>Show dialog</Text> : <Text>{Title}</Text> }
      <Dialog.Container visible={visible}>
        <Dialog.Title>Account delete</Dialog.Title>
        <View>
          <Button
            title="Home"
            onPress={
              () => buttonEventCallBack('Home')
            }
          />
          <Button
            title="Details"
            onPress={
              () => buttonEventCallBack('Details')
            }/>
          <Button title="SuperMimi2"/>
        </View>
        <Dialog.Button label="Cancel" onPress={switchDialog}/>
      </Dialog.Container>
    </View>
  );
}

function Root() {
  return (
    <Stack1.Navigator
      screenOptions={
        {
          headerShown: false
        }
      }
    >
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="NotSetting" component={NotSettingScreen} />
    </Stack1.Navigator>
  );
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        mode="card"
        headerMode="float"
        screenOptions={ props => ({ title: 'DaShaBi', headerTitleAlign: 'center', headerTitle: () => <NavigationTitleDialog {...props}/> }) }
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Root" component={Root} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
