import React, { useState } from "react";
import {
    SafeAreaView,
    Text,
    View,
    FlatList,
    TouchableOpacity,
} from "react-native";
import style from "./style";
import globalStyle from "../../assets/styles/globalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft  } from "@fortawesome/free-solid-svg-icons"; // Ikonka domčeka

const Profile = ({ navigation }) => {
    // Dáta na zobrazenie šedých obdĺžnikov
    const [data, setData] = useState(Array.from({ length: 12 })); // Predvolene 12 položiek
    const [isLoading, setIsLoading] = useState(false);

    // Funkcia na pridanie nových prvkov pri dosiahnutí konca
    const loadMoreItems = () => {
        if (isLoading) return;
        setIsLoading(true);
        setTimeout(() => {
            setData((prevData) => [...prevData, ...Array.from({ length: 12 })]);
            setIsLoading(false);
        }, 1000); // Simulácia načítania
    };

    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <View style={style.backButtonContainer}>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={style.backButton}>
                    <FontAwesomeIcon icon={faArrowLeft } size={20} color="#000" />
                </TouchableOpacity>
            </View>

            {/* Profilová časť */}
            <View style={style.profileHeader}>
                <View style={style.profileImageContainer}>
                    <View style={style.profileImage} />
                </View>
                <Text style={style.userName}>Emmanuel Robertsen</Text>
                <View style={style.userStats}>
                    <View style={style.stat}>
                        <Text style={style.statNumber}>45</Text>
                        <Text style={style.statLabel}>Following</Text>
                    </View>
                    <View style={style.stat}>
                        <Text style={style.statNumber}>30M</Text>
                        <Text style={style.statLabel}>Followers</Text>
                    </View>
                    <View style={style.stat}>
                        <Text style={style.statNumber}>24</Text>
                        <Text style={style.statLabel}>Posts</Text>
                    </View>
                </View>
            </View>

            {/* Záložky (Photos, Videos, Saved) */}
            <View style={style.tabs}>
                <Text style={[style.tabItem, style.activeTab]}>Photos</Text>
                <Text style={style.tabItem}>Videos</Text>
                <Text style={style.tabItem}>Saved</Text>
            </View>

            {/* Nekonečné rolovanie */}
            <FlatList
                contentContainerStyle={style.postsContainer}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={() => <View style={style.postPlaceholder} />}
                onEndReached={loadMoreItems}
                onEndReachedThreshold={0.5}
                showsVerticalScrollIndicator={false}
                numColumns={2} // Dva obrázky vedľa seba
            />
        </SafeAreaView>
    );
};

export default Profile;
