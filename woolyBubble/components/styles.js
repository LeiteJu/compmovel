import styled from "styled-components/native"
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from "expo-constants";

export const Colors = {
    pink: "#F9B6B6",
    lightgreen: "#AFD7CB",
    darkgreen: "#10584B",
    gray: "#8D857A",
    blue: "#1663C7",
    green: "#10B981",
    white: "#ffffff",
}

export const {pink, lightgreen, darkgreen, gray, blue, white, green} = Colors;

export const ExternalContainer = styled.View`
    flex: 1;
    padding: 30px;
    font-size: 16px;
    text-align: center;
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`

export const PageTitle = styled.Text`
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    color: ${pink};
    padding: 10px;
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    text-align: center;
    color: ${darkgreen};
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${pink};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;

    ${(props) => props.google == true && `
        background-color: ${green};
        flex-direction: row;
        justify-content: center;
    `}

    ${(props) => props.facebook == true && `
        background-color: ${blue};
        flex-direction: row;
        justify-content: center;
    `}
`;

export const ButtonText = styled.Text`
    color: ${white};
    font-size: 16px;

    ${(props) => props.google == true && `
        padding: 25px;
        justify-content: center;
        flex-direction: row;
        align-items: center;
    `}

    ${(props) => props.facebook == true && `
        padding: 25px;
        justify-content: center;
        flex-direction: row;
        align-items: center;
    `}
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;