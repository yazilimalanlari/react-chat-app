import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';

import Style from '@styles/Settings';

import Button from '@components/global/Button';

// Redux
import { connect } from 'react-redux';
import { saveUser } from '@app/actions/user';

function Item({ title, value, onChangeText }) {
    return (
        <View style={Style.item}>
            <Text style={Style.itemTitle}>{title}</Text>
            <TextInput 
                style={Style.itemInput}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}

function Settings({ name: _name, phone: _phone, saveUser }) {
    const [name, setName] = useState(_name);
    const [phone, setPhone] = useState(_phone);

    const save = () => {
        saveUser({ name, phone });
        Alert.alert(
            'Ayarlar başarıyla kaydedildi.'
        )
    }

    return (
        <View style={Style.page}>
            <View>
                <Item 
                    title="Adınız"
                    value={name}
                    onChangeText={value => setName(value)}
                />
                <Item 
                    title="Telefon numarası"
                    value={phone}
                    onChangeText={value => setPhone(value)}
                />
            </View>
            <Button 
                title="Kaydet"
                onPress={save}
            />
        </View>
    )
}

const mapStateToProps = ({ user }) => ({ ...user });
export default connect(mapStateToProps, { saveUser }) (Settings);