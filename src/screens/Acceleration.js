import React, { Component } from 'react';
import moment from 'moment';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  Button
} from 'react-native';

import AccelerationItem from '../components/AccelerationItem';

const accelerations = [{
  "slug": "reactnative-online-1",
  "name": "React Native",
  "is_disabled": false,
  "subscription_start_at": "2019-07-08T00:00:00-03:00",
  "subscription_finish_at": "2019-07-28T23:59:59-03:00",
  "start_at": "2019-08-17T00:00:00-03:00",
  "finish_at": "2019-11-03T00:00:00-03:00",
  "location": "Online",
  "banner_url": "https://s3-us-west-1.amazonaws.com/acceleration-assets-highway/reactnative-online-1/banner.jpg",
  "home_banner_url": "",
  "color_scheme": "7800FF",
  "company_count": 1
}, {
  "slug": "adxp-datascience-joinville-1",
  "name": "ADxp Data Science",
  "is_disabled": false,
  "subscription_start_at": "2019-07-09T00:00:00-03:00",
  "subscription_finish_at": "2019-08-19T00:00:00-03:00",
  "start_at": "2019-08-19T00:00:00-03:00",
  "finish_at": "2019-10-23T23:59:59-03:00",
  "location": "DevHub Joinville, SC",
  "banner_url": "",
  "home_banner_url": "",
  "color_scheme": "",
  "company_count": 1
}, {
  "slug": "adxp-datascience-joinville-2",
  "name": "ADxp Data Science",
  "is_disabled": false,
  "subscription_start_at": "2019-07-09T00:00:00-03:00",
  "subscription_finish_at": "2019-08-20T00:00:00-03:00",
  "start_at": "2019-08-20T00:00:00-03:00",
  "finish_at": "2019-10-24T23:59:59-03:00",
  "location": "DevHub Joinville, SC",
  "banner_url": "",
  "home_banner_url": "",
  "color_scheme": "",
  "company_count": 1
}, {
  "slug": "adxp-datascience-sp-1",
  "name": "ADxp Data Science",
  "is_disabled": false,
  "subscription_start_at": "2019-07-09T00:00:00-03:00",
  "subscription_finish_at": "2019-09-23T00:00:00-03:00",
  "start_at": "2019-09-23T00:00:00-03:00",
  "finish_at": "2019-11-27T23:59:59-03:00",
  "location": "a confirmar",
  "banner_url": "",
  "home_banner_url": "",
  "color_scheme": "",
  "company_count": 1
}, {
  "slug": "adxp-datascience-sp-2",
  "name": "ADxp Data Science",
  "is_disabled": false,
  "subscription_start_at": "2019-07-09T00:00:00-03:00",
  "subscription_finish_at": "2019-09-24T00:00:00-03:00",
  "start_at": "2019-09-24T00:00:00-03:00",
  "finish_at": "2019-11-28T23:59:59-03:00",
  "location": "a confirmar",
  "banner_url": "",
  "home_banner_url": "",
  "color_scheme": "",
  "company_count": 1
}, {
  "slug": "python-online-1",
  "name": "Python Women",
  "is_disabled": false,
  "subscription_start_at": "2019-07-22T00:00:00-03:00",
  "subscription_finish_at": "2019-08-11T23:59:59-03:00",
  "start_at": "2019-08-24T00:00:00-03:00",
  "finish_at": "2019-11-02T23:59:59-03:00",
  "location": "Online",
  "banner_url": "https://s3-us-west-1.amazonaws.com/acceleration-assets-highway/python-online-1/banner.jpg",
  "home_banner_url": "",
  "color_scheme": "212133",
  "company_count": 1
}]

export default class Acceleration extends Component {

  state = {
    modalVisible: false,
    accelerationitem:''
  }

  setModalVisible = (visible,accelerationItem) => {
    this.setState({ modalVisible: visible, accelerationitem:accelerationItem});
  }

  render() {
    return (
      <View style={styles.container}>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={()=>this.setModalVisible(false,'')}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalImageContainer}>
              <Image
                style={styles.modalImage}
                source={{ uri: this.state.accelerationitem.banner_url ? this.state.accelerationitem.banner_url : 'http://denrakaev.com/wp-content/uploads/2015/03/no-image.png'}}
              />
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.titleText}>{this.state.accelerationitem.name}</Text>
              <Text style={styles.baseText}>Local: {this.state.accelerationitem.location}</Text>
              <Text style={styles.baseText}>Inscrição + Desafio enviado até: {moment(this.state.accelerationitem.subscription_finish_at).format('DD/MM/YYYY')}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                className="close-modal-btn"
                title="fechar"
                color="#7800ff"
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible,'');
                }} />
            </View>

          </View>
        </Modal>

        <View style={styles.header}>
          <Image
            style={styles.headerImage}
            source={{ uri: 'https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png' }}
          />
          <TouchableOpacity
            style={styles.profileImageContainer}
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Image
              className="user-image-btn"
              style={styles.profileImage}
              source={{ uri: "https://secure.gravatar.com/avatar/f50a9db56e231198af3507f10b5d5491?d=mm" }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Acelerações</Text>
        <FlatList
          data={accelerations}
          keyExtractor={item => item.slug}
          renderItem={({ item, index }) => <TouchableOpacity className="acceleration-item-btn" onPress={() => { this.setModalVisible(true,item) }}><AccelerationItem item={item} /></TouchableOpacity>}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: '#7800ff',
    borderBottomWidth: 2,
    padding: 16,
    paddingTop: 55
  },
  headerImage: {
    height: 45,
    width: 250
  },
  title: {
    color: '#7800ff',
    fontSize: 30,
    padding: 16
  },
  profileImage: {
    height: 45,
    width: 45,
    borderRadius: 22
  },
  profileImageContainer: {
    marginLeft: 60
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  modalImageContainer: {
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 20
  },
  modalImage: {
    height: 200,
    width: 370
  },
  buttonContainer: {
    width: "95%",
    margin: 10,
    marginTop: 20
  },
  descriptionContainer: {
    marginTop: 20,
    marginLeft: 20,
    width: '100%',
    justifyContent: "flex-start",
    alignItems: 'flex-start'
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color:"#7800ff",
    paddingLeft:5
  },
  baseText:{
    marginTop:20,
    fontSize:15,
    paddingLeft:5
  }
});
