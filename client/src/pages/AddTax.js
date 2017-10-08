import React, { Component } from 'react';
import { Image, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text, Radio, Item, Input } from 'native-base';
import Nav from './../components/common/Nav';

const styles = StyleSheet.create({
    actionButtons: {
        width: 140,
        alignItems: 'center'
    },
    currentBalanceAmount: {
        fontWeight: '800',
        fontSize: 40,
        color: '#8FC2C3'
    },
    currentBalanceText: {
        fontWeight: '100',
        fontSize: 22,
        color: '#5A5A5A'
    },
    alignRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 20
    },
    paymentHeader: {
        fontWeight: '800',
        fontSize: 25,
        color: '#626262'
    },
    negativePayment: {
        fontWeight: '300',
        fontSize: 22,
        color: '#FF8989',
        alignSelf: 'flex-end'
    },
    positivePayment: {
        fontWeight: '300',
        fontSize: 22,
        color: '#70CB9D',
        alignSelf: 'flex-end'
    },
    friendImage: {
        paddingRight: 20
    },
    paddIt: {
        padding: 20
        // paddingLeft: 30
    },
    lightHeaderText: {
        color: '#5E5E5E',
        fontWeight: '100',
        fontSize: 24,
        textAlign: 'center'
    },
    itemText: {
        fontSize: 22,
        marginTop: 0,
        paddingTop: 0
    },
    itemPrice: {
        fontSize: 20
    },
    radioStyle: {
        paddingRight: 20
    },
    itemPadding: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 20,
        paddingLeft: 20
    },
    splitButton: {
        alignSelf: 'center'
    }
});

class AddTax extends Component {
    // .then(response => this.setState({ albums: response.data }));
    constructor(props) {
        super(props);
        this.state = {
            radioButtons: {
                buttonOne: false,
                buttonTwo: false,
                buttonThree: false,
                buttonFour: false
            }
        }
    }
    componentWillMount() {
        console.log("mounting comp");
    }

    render() {
        console.log(this.state);

        const {
            paddIt,
            alignRight,
            itemText,
            splitButton,
            lightHeaderText,
            radioStyle
        } = styles;

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <View>
                            <Title>Confirm Details</Title>
                        </View>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    {/* Title */}
                    <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" }, paddIt]}>
                        {/* <View> */}
                        <Text style={lightHeaderText}>How much tip would you like to add?</Text>
                        {/* </View> */}
                    </View>
                    {/* Content */}
                    <View>
                        <View style={[{ flex: 1, flexDirection: 'row' }, paddIt]}>
                            <View style={radioStyle}>
                                <Radio selected={false} style={{ padding: 10 }} />
                            </View>
                            <View>
                                <Text >
                                    <Text style={itemText}>Service Sucked{'\n'}</Text>
                                    <Text>10% Tip</Text>
                                </Text>
                            </View>
                            <View style={alignRight}>
                                <Text style={itemText}>$3.68</Text>
                            </View>
                        </View>
                        <View style={[{ flex: 1, flexDirection: 'row' }, paddIt]}>
                            <View style={radioStyle}>
                                <Radio selected={false} style={{ padding: 10 }} />
                            </View>
                            <View>
                                <Text >
                                    <Text style={itemText}>Good Service{'\n'}</Text>
                                    <Text>15% Tip</Text>
                                </Text>
                            </View>
                            <View style={alignRight}>
                                <Text style={itemText}>$3.68</Text>
                            </View>
                        </View>
                        <View style={[{ flex: 1, flexDirection: 'row' }, paddIt]}>
                            <View style={radioStyle}>
                                <Radio selected={false} style={{ padding: 10 }} />
                            </View>
                            <View>
                                <Text >
                                    <Text style={itemText}>Great Service{'\n'}</Text>
                                    <Text>20% Tip</Text>
                                </Text>
                            </View>
                            <View style={alignRight}>
                                <Text style={itemText}>$3.68</Text>
                            </View>
                        </View>
                        <View style={[{ flex: 1, flexDirection: 'row' }, paddIt]}>
                            <View style={radioStyle}>
                                <Radio selected={this.state.radioButtons.buttonFour} style={{ padding: 10 }} onPress={() => this.setState({radioButtons: {buttonFour: true}})} />
                            </View>
                            <View>
                                <Text >
                                    <Text style={itemText}>Custom Tip{'\n'}</Text>
                                    <Text>Enter Dollar Amount</Text>
                                </Text>
                            </View>
                            <View style={alignRight}>
                                <Item style={{ width: 70 }}>
                                    {/* <Label>Username</Label> */}
                                    <Input style={{ fontSize: 22 }} />
                                </Item>
                            </View>
                        </View>

                        <View style={[paddIt, splitButton]}>
                            <Button success><Text style={itemText}> Add Tip </Text></Button>
                        </View>
                    </View>
                </Content>
                {/* <Nav /> */}
                <Nav />
            </Container>
        );
    }
}

export default AddTax;