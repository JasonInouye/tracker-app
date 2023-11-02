import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ( navigation, text, routeName ) => {
    return (
        <>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Spacer>
                    <Text style={styles.link}>Already have an Account?</Text>
                </Spacer>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
});

export default withNavigation(NavLink);
