import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import packageJSON from './package.json';

describe('App', () => {
  it('Should have the react-native-navigation configured', () => {
    const instance = renderer.create(<App />).root;

    expect(Object.keys(instance.children[0].props.navigation.router.childRouters)).toEqual(['Acceleration', 'Profile']);
    expect(instance.children[0].props.navigation.state.key).toEqual('StackRouterRoot');
    expect(Object.keys(packageJSON.dependencies).includes('react-navigation')).toBe(true);
  })
})
