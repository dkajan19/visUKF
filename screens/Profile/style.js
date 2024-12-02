import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const style = StyleSheet.create({
    backButton: {
        padding: 10,
    },
    backButtonText: {
        color: "blue",
        fontSize: 16,
    },
    profileHeader: {
        alignItems: "center",
        marginTop: 20,
    },
    profileImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#C4C4C4",
        justifyContent: "center",
        alignItems: "center",
    },
    profileImage: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: "#EAEAEA",
    },
    userName: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
    },
    userStats: {
        flexDirection: "row",
        marginTop: 10,
    },
    stat: {
        alignItems: "center",
        marginHorizontal: 15,
    },
    statNumber: {
        fontSize: 18,
        fontWeight: "bold",
    },
    statLabel: {
        fontSize: 14,
        color: "#898DAE",
    },
    tabs: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#EAEAEA",
    },
    tabItem: {
        fontSize: 16,
        paddingVertical: 10,
        color: "#898DAE",
    },
    activeTab: {
        color: "black",
        fontWeight: "bold",
        borderBottomWidth: 2,
        borderBottomColor: "black",
    },
    postsContainer: {
        alignItems: "center", // Zarovnanie obsahu na stred
        paddingBottom: 20,
    },
    postPlaceholder: {
        width: (screenWidth - 60) / 2, // Dva obrázky vedľa seba s medzerou
        height: (screenWidth - 60) / 2, // Zachová štvorcový pomer
        margin: 10,
        backgroundColor: "#EAEAEA",
        borderRadius: 10, // Okrúhle rohy pre lepší vzhľad
    },
});

export default style;
