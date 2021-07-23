import React, { Component } from 'react'
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import { Colors,Header,Section,ReloadInstructions,DebugInstructions } from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
    const backgroundStyle = {
        backgroundColor: Colors.darker,
      };
    return (
      <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: '#f5f5f5',
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> yok bisa yok.
            <Image
                style={styles.image}
                source={{uri: 'http://www.reactnativeexpress.com/static/logo.png'}}
                />
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,

  },
})


export default App;