import React, {Component} from 'react';
import {
    Image,
    Platform,
    PixelRatio,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    View
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import firebase from 'firebase';
import RNTesseractOcr from 'react-native-tesseract-ocr';
import {Header, Nav} from '../components/common';
import Camera from 'react-native-camera';
import {Actions} from 'react-native-router-flux';

var Button = (Platform.OS === 'android')
    ? TouchableNativeFeedback
    : TouchableOpacity;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8FC2C3"
    },
    imgContainer: {
        borderColor: '#000000',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        borderRadius: 75,
        width: 150,
        height: 150
    },
    bgImageContainer: {
        paddingTop: 60,
        width: 460,
        height: 190,
        opacity: .6
    },
    backdropView: {
        backgroundColor: 'rgba(0,0,0,0)'
    },
    backdropText: {
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        fontWeight: '500'
    },
    imageWrapper: {
        left: 0,
        right: 0,
        marginBottom: 60,
        marginTop: 60
    }
});

class grabReciept extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            imgSource: null,
            ocrResult: null,
            total: 0
        };
    }

    selectPhoto() {
        console.log("Reached me!");
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                var source;

                if (Platform.OS === 'android') {
                    source = {
                        uri: response.uri,
                        isStatic: true
                    };
                } else {
                    source = {
                        uri: response
                            .uri
                            .replace('file://', ''),
                        isStatic: true
                    };
                }

                this.setState({imgSource: source});

                RNTesseractOcr
                    .startOcr(response.path, "LANG_ENGLISH")
                    .then((result) => {

                        const regex = /\d+.?\d*$/; //regex matching decimal value at end of line
                        let newResult = result;
                        console.log(newResult);

                        return newResult
                            .replace(/[|'"]+/g, '')
                            .split('\n')
                            .map(line => {
                                line = line.trim(); //trim whitespace
                                let index = line.search(regex); //returns index of beginning of match
                                return [
                                    line
                                        .substring(0, index)
                                        .trim(),
                                    parseFloat(line.substring(index).trim())
                                ]; //return array of two trimmed strings
                            });

                    })
                    .then((result) => {
                        this.setState({ocrResult: result});
                        Actions.ConfirmItemDetails({ocrResult: result, total: 0});
                    })
                    .catch((err) => {
                        console.log("OCR Error: ", err);
                    })
                    .done(console.log("done!"));
            }
        });
    }

    render() {
        console.log(this.state.ocrResult);
        const {
            container,
            img,
            imgContainer,
            bgImageContainer,
            imageWrapper,
            backdropText,
            backdropView
        } = styles;
        return (
            <View style={container}>
                <View style={imageWrapper}>
                    <Image
                        style={bgImageContainer}
                        source={require('../../public/assets/images/creditcard.jpeg')}>
                        <View style={backdropView}>
                            <Text
                                style={[
                                backdropText, {
                                    color: 'rgba(255, 255, 255, 1)'
                                }
                            ]}>Ready to split?</Text>
                        </View>
                    </Image>

                </View>

                {this.state.imgSource === null
                    ? <Button
                            onPress={this
                            .selectPhoto
                            .bind(this)}>
                            <View
                                style={[
                                img,
                                imgContainer, {
                                    marginBottom: 20,
                                    marginLeft: 125
                                }
                            ]}>
                                <Image style={img} source={require('../../public/assets/images/barcam.png')}/>
                            </View>
                        </Button>
                    : <Text>OCR Result: {this.state.ocrResult}</Text>
}
            </View>
        );
    }
}

export default grabReciept;