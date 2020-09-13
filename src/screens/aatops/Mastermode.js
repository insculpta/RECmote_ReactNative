import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    FlatList,
} from 'react-native';

import { NativeModules } from 'react-native';
const { RNModule } = NativeModules;

//引用插件
import SwiperFlatList from 'react-native-swiper-flatlist';


// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

import {
  Thumbnail,
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Badge,
  Left,
  Right,
  Body,
  Footer,
  Item,
  Input
} from "native-base";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#efefef',
    },
    bannerImg: {
        height: width * 40 / 75,
        width: width,
    },
    wrapper: {
        width: width,
    },
    paginationStyle: {
        bottom: 6,
    },
    dotStyle: {
        width: 22,
        height: 3,
        backgroundColor: '#fff',
        opacity: 0.4,
        borderRadius: 0,
    },
    activeDotStyle: {
        width: 22,
        height: 3,
        backgroundColor: '#fff',
        borderRadius: 0,
    },
    tips: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: width,
        justifyContent: 'space-around',
        paddingTop: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tipItemBox: {
        flexDirection: 'row',
    },
    redyes: {
        width: 16,
        height: 16,
        marginRight: 5,
    },
    tipItem: {
        fontSize: 14,
        color: '#333',
    },
    topic: {
        width: width,
        alignItems:'center',
        backgroundColor: '#fff',
        paddingBottom:10,
        marginBottom:10,
    },
    topicHead:{
        fontSize:16,
        color:'#666',
        padding:15,
    },
    topicItem: {
        width: width*0.7,
        marginLeft:15,
    },
    topicImg: {
        width: width*0.7,
        height: width*0.4,
        borderWidth:0.5,
        borderColor:'#cdcdcd',
        borderRadius:2,
    },
    topicContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop:10,
    },
    topicTitle:{
        fontSize:16,
        color:'#666',
    },
    topicDesc:{
        fontSize:13,
        color:'#999',
        marginTop:3,
    },
    topicPrice:{
        fontSize:14,
        color:'#b4282d',
    },
});


const logo = require("../../../assets/record.png");
const start = require("../../../assets/MasterMode/start.png");
const stop = require("../../../assets/MasterMode/stop.png");
const listen = require("../../../assets/MasterMode/hear1.png");
const listenstop= require("../../../assets/MasterMode/hear2.png");
const connected= require("../../../assets/MasterMode/wifi_connect.png");
const unconnected= require("../../../assets/MasterMode/wifi_unconnect.png");
const action = require("../../../assets/MasterMode/Action.png");
const action2 = require("../../../assets/MasterMode/Action2.jpg");
const banner = require("../../../assets/MasterMode/banner.jpg");

class Mastermode extends Component {
  constructor(props) {
      super(props);
        this.state = {
                    swiperShow: false,
                    tips: ['网易自营品牌', '30天无忧退货', '48小时快速退款'],
                    topic: [
                        {
                            title: '岁末清扫有它们，体验大不同',
                            describe: '更轻松、更美好的大扫除攻略',
                            price: '9.9元起',
                        },
                        {
                            title: '新年一点红，幸运一整年',
                            describe: '那些让你“红”运当头的好物',
                            price: '9.9元起',
                        },
                    ]
                };
    }

 componentDidMount() {
        setTimeout(() => {
            this.setState({
                swiperShow: true,
            });
        }, 0)
    }

    // 轮播图
    renderBanner() {
        if (this.state.swiperShow) {
            return (
                <Swiper
                    style={styles.wrapper}
                    height={width * 40 / 75}
                    showsButtons={false}
                    autoplay={true}
                    paginationStyle={styles.paginationStyle}
                    dotStyle={styles.dotStyle}
                    activeDotStyle={styles.activeDotStyle}
                >
                    <Image source={action} style={styles.bannerImg} />
                    <Image source={action2} style={styles.bannerImg} />
                    <Image source={action} style={styles.bannerImg} />
                    <Image source={action2} style={styles.bannerImg} />
                    <Image ssource={action} style={styles.bannerImg} />
                </Swiper>
            )
        } else {
            return (
                <View style={{ height: width * 40 / 75 }}>
                    <Image source={banner} style={styles.bannerImg} />
                </View>
            );
        }
    }

    // 小标签
    renderTips() {
        let tip = this.state.tips
        return (
            <View style={styles.tips}>
                {
                    tip.map((item, index) => (
                        <View style={styles.tipItemBox} key={index}>
                            <Image source={logo} style={styles.redyes} />
                            <Text style={styles.tipItem}>{item}</Text>
                        </View>
                    ))
                }
            </View>
        )
    }

    // 专题精选（flatList）
    renderTopic() {
        return (
            <View style={styles.topic}>
                <Text style={styles.topicHead}>专题精选</Text>
                <FlatList
                    data={this.state.topic}
                    keyExtractor={(item, index) => index}
                    renderItem={this.renderTopicItem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }
    renderTopicItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.topicItem}>
                <Image source={start} style={styles.topicImg} />
                <View style={styles.topicContainer}>
                    <View style={styles.topicText}>
                        <Text style={styles.topicTitle}>{item.title}</Text>
                        <Text style={styles.topicDesc}>{item.describe}</Text>
                    </View>
                    <Text style={styles.topicPrice}>{item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderBanner()}
                {this.renderTips()}
                {this.renderTopic()}
                {this.renderTopic()}
            </View>
        );
    }







  };




export default Mastermode;