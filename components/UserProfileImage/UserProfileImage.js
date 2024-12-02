import React from "react";
import { View, Image } from "react-native";
import ProTypes from "prop-types";
import style from "./style";

const UserProfileImage = props => {
    return (
        <View style={[style.userImageContainer,{borderRadius:props.imageDimensions}]}>
            <Image source={props.profileImage} style={{width: props.imageDimensions, height: props.imageDimensions}}/>
        </View>  
    );
};

UserProfileImage.propTypes = {
    profileImage: ProTypes.any.isRequired,
    imageDimensions: ProTypes.number.isRequired,
};

export default UserProfileImage;