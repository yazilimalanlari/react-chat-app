import React, { useState } from 'react';
import { View, TouchableNativeFeedback, FlatList, Text, TouchableHighlight } from 'react-native';
import Style from '@styles/Header';

import ArrowBack from '@icons/ArrowBackWhite';
import Action from '@icons/Action';
import SettingsIcon from '@icons/Settings';


// Redux
import { connect } from 'react-redux';
import { changePage } from '@app/actions/app';


function ActionList({ changePage, close }) {
    const onPress = (page) => {
        close();
        changePage(page);
    }

    return (
        <FlatList 
            data={[
                {
                    key: 'settings',
                    title: 'Ayarlar',
                    Icon: SettingsIcon,
                    page: 'settings'
                }
            ]}
            renderItem={({ item }) => <TouchableHighlight onPress={() => onPress(item.page)}>
                <View key={item.key} style={Style.actionItem}>
                    <item.Icon 
                        width={25}
                        height={25}
                        style={Style.actionItemIcon}
                    />
                    <Text style={Style.actionItemText}>{item.title}</Text>
                </View>
            </TouchableHighlight>}
            style={Style.actionList}>
            
        </FlatList>
    )
}

function Header({ page, lastPage, changePage }) {
    const [actionList, setActionList] = useState(false);
    const openActionList = () => setActionList(!actionList);
    
    const onBack = () => changePage(lastPage ?? 'index');

    return (
        <View style={Style.header}>
            {page !== 'index' && <TouchableNativeFeedback onPress={onBack}>
                <ArrowBack 
                    width={30}
                    height={30}
                    style={Style.arrowBackIcon}
                />
            </TouchableNativeFeedback>}
            <TouchableNativeFeedback onPress={openActionList}>
                <Action 
                    width={30}
                    height={30}
                    style={Style.actionIcon}
                />
            </TouchableNativeFeedback>
            {actionList && <ActionList changePage={changePage} close={() => setActionList(false)} />}
        </View>
    )
}

const mapStateToProps = ({ app }) => ({ 
    page: app.page,
    lastPage: app.lastPage
});
export default connect(mapStateToProps, { changePage })(Header);