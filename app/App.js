import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Theme from '@styles/Theme';

// Components
import Header from '@components/global/Header';
import Index from '@components/Index';
import Messages from '@components/messages';
import Settings from '@components/settings';

function App({ page }) {
    return (
        <View style={Theme.app}>
            <Header />
            {page === 'index'
            ? <Index />
            : page === 'messages' 
            ? <Messages />
            : <Settings /> }
        </View>
    )
}

const mapStateToProps = ({ app }) => ({ page: app.page });
export default connect(mapStateToProps) (App);