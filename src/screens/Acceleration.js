import React, { PureComponent } from 'react';
import moment from 'moment';
import {
	FlatList,
	Image,
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import AccelerationItem from '../components/AccelerationItem';

const accelerations = [
	{
		slug: 'reactnative-online-1',
		name: 'React Native',
		is_disabled: false,
		subscription_start_at: '2019-07-08T00:00:00-03:00',
		subscription_finish_at: '2019-07-28T23:59:59-03:00',
		start_at: '2019-08-17T00:00:00-03:00',
		finish_at: '2019-11-03T00:00:00-03:00',
		location: 'Online',
		banner_url:
			'https://s3-us-west-1.amazonaws.com/acceleration-assets-highway/reactnative-online-1/banner.jpg',
		home_banner_url: '',
		color_scheme: '7800FF',
		company_count: 1,
	},
	{
		slug: 'adxp-datascience-joinville-1',
		name: 'ADxp Data Science',
		is_disabled: false,
		subscription_start_at: '2019-07-09T00:00:00-03:00',
		subscription_finish_at: '2019-08-19T00:00:00-03:00',
		start_at: '2019-08-19T00:00:00-03:00',
		finish_at: '2019-10-23T23:59:59-03:00',
		location: 'DevHub Joinville, SC',
		banner_url: '',
		home_banner_url: '',
		color_scheme: '',
		company_count: 1,
	},
	{
		slug: 'adxp-datascience-joinville-2',
		name: 'ADxp Data Science',
		is_disabled: false,
		subscription_start_at: '2019-07-09T00:00:00-03:00',
		subscription_finish_at: '2019-08-20T00:00:00-03:00',
		start_at: '2019-08-20T00:00:00-03:00',
		finish_at: '2019-10-24T23:59:59-03:00',
		location: 'DevHub Joinville, SC',
		banner_url: '',
		home_banner_url: '',
		color_scheme: '',
		company_count: 1,
	},
	{
		slug: 'adxp-datascience-sp-1',
		name: 'ADxp Data Science',
		is_disabled: false,
		subscription_start_at: '2019-07-09T00:00:00-03:00',
		subscription_finish_at: '2019-09-23T00:00:00-03:00',
		start_at: '2019-09-23T00:00:00-03:00',
		finish_at: '2019-11-27T23:59:59-03:00',
		location: 'a confirmar',
		banner_url: '',
		home_banner_url: '',
		color_scheme: '',
		company_count: 1,
	},
	{
		slug: 'adxp-datascience-sp-2',
		name: 'ADxp Data Science',
		is_disabled: false,
		subscription_start_at: '2019-07-09T00:00:00-03:00',
		subscription_finish_at: '2019-09-24T00:00:00-03:00',
		start_at: '2019-09-24T00:00:00-03:00',
		finish_at: '2019-11-28T23:59:59-03:00',
		location: 'a confirmar',
		banner_url: '',
		home_banner_url: '',
		color_scheme: '',
		company_count: 1,
	},
	{
		slug: 'python-online-1',
		name: 'Python Women',
		is_disabled: false,
		subscription_start_at: '2019-07-22T00:00:00-03:00',
		subscription_finish_at: '2019-08-11T23:59:59-03:00',
		start_at: '2019-08-24T00:00:00-03:00',
		finish_at: '2019-11-02T23:59:59-03:00',
		location: 'Online',
		banner_url:
			'https://s3-us-west-1.amazonaws.com/acceleration-assets-highway/python-online-1/banner.jpg',
		home_banner_url: '',
		color_scheme: '212133',
		company_count: 1,
	},
];

export default class Acceleration extends PureComponent {
	state = {
		modalVisible: false,
		selectedAcceleration: {},
	};

	openAcceleration = acceleration => {
		this.setState({
			modalVisible: true,
			selectedAcceleration: acceleration,
		});
	};

	closeModal = () =>
		this.setState({
			modalVisible: false,
			selectedAcceleration: {},
		});

	render() {
		const { navigation } = this.props;

		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Image
						style={styles.headerImage}
						source={{
							uri:
								'https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png',
						}}
					/>
					<TouchableOpacity
						className="user-image-btn"
						onPress={() => navigation.navigate('Profile')}
					>
						<Image
							style={styles.profileImage}
							source={{
								uri:
									'https://secure.gravatar.com/avatar/f50a9db56e231198af3507f10b5d5491?d=mm',
							}}
						/>
					</TouchableOpacity>
				</View>
				<Text style={styles.title}>Acelerações</Text>
				<FlatList
					data={accelerations}
					keyExtractor={item => item.slug}
					renderItem={({ item, index }) => (
						<AccelerationItem item={item} openAcceleration={this.openAcceleration} />
					)}
				/>
				<View style={styles.modal}>
					<Modal
						animationType="slide"
						transparent={false}
						visible={this.state.modalVisible}
						onRequestClose={this.closeModal}
						className="modal"
					>
						<View style={styles.modal}>
							<Image
								style={styles.itemImage}
								source={{
									uri: this.state.selectedAcceleration.banner_url
										? this.state.selectedAcceleration.banner_url
										: 'http://denrakaev.com/wp-content/uploads/2015/03/no-image.png',
								}}
							/>
							<View style={styles.itemContent}>
								<Text style={styles.itemName}>
									{this.state.selectedAcceleration.name}
								</Text>
								<Text style={styles.itemLocation}>
									Local: {this.state.selectedAcceleration.location}
								</Text>
								<Text style={styles.itemDate}>
									Inscrição + desafio enviado até{' '}
									{moment(this.state.selectedAcceleration.subscription_finish_at).format(
										'DD/MM/YYYY'
									)}
								</Text>
							</View>
							<TouchableOpacity
								className="close-modal-btn"
								style={styles.closeModalButton}
								onPress={this.closeModal}
							>
								<Text style={styles.c}>FECHAR</Text>
							</TouchableOpacity>
						</View>
					</Modal>
				</View>
			</View>
		);
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
		justifyContent: 'space-between',
		padding: 16,
		paddingTop: 55,
	},
	headerImage: {
		height: 45,
		width: 250,
	},
	profileImage: {
		borderRadius: 22,
		height: 45,
		width: 45,
	},
	title: {
		color: '#7800ff',
		fontSize: 30,
		padding: 16,
	},
	modal: {
		margin: 10,
	},
	itemImage: {
		width: '100%',
		height: 200,
	},
	itemName: {
		color: '#7800ff',
		fontSize: 23,
		padding: 16,
	},
	itemLocation: {
		color: '#565d64',
		fontSize: 18,
		padding: 16,
		paddingTop: 0,
	},
	itemDate: {
		color: '#565d64',
		fontSize: 18,
		padding: 16,
		paddingTop: 0,
	},
	closeModalButton: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 16,
		borderWidth: 1,
		borderColor: '#7800ff',
		margin: 16,
	},
	closeModalButtonTxt: {
		color: '#565d64',
		fontSize: 18,
	},
});
