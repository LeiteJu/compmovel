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
    lightgray: "#E8E8E8",
}

const mediumgray = '#D6D6D6';

export const {pink, lightgreen, darkgreen, gray, blue, white, green, lightgray} = Colors;

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
    background-color:${white}
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

export const Picture = styled.Image`
    width: 90%; 
    height: 40%;
    borderRadius: 15px;
`;

export const Bottom = styled.View`
    width: 100%;
    border-radius: 20px;
    justify-content: center;
    align-items: flex-start;
    background-color:${white};
    padding: 5%;
    margin-top: 5%
`;

export const Box = styled.View`
    width: 95%;
    borderRadius: 15px;
    justify-content: center;
    align-items: flex-start;
    background-color:${lightgray};
    padding: 5%;
    margin-vertical: 5%;
`;

export const Line = styled.View`
    height: 1 px;
    width: 100%;
    background-color: ${white};
    margin-vertical: 10px;
`;

export const Back = styled.View`

    justify-content: flex-start;
    align-items: center;
    background-color: ${pink};
    padding-top: 5%;
    padding-bottom: 5%
`

export const Title = styled.Text`
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    color: ${darkgreen};
    padding: 2%;
`
export const Resume = styled.Text`
    font-size: 14px;
    margin-bottom: 2%;
    text-align: center;
    letter-spacing: 1px;
    color: ${gray};

`

export const Back_Button = styled.TouchableOpacity`

    width: 30%;
    border-radius: 20px;
    justify-content: center;
    align-items: flex-start;
    background-color:${lightgreen};
    padding: 5%;
    margin: 2%;
    margin-bottom: 10%

`
export const Choose_Button = styled.TouchableOpacity`

    width: 60%;
    border-radius: 20px;
    justify-content: center;
    align-items: flex-start;
    background-color:${darkgreen};
    padding: 5%;
    margin: 2%;
    margin-bottom: 10%

`

export const SelectionScreenHotel = styled.View`
    border-radius: 10px;
    border-width: 2px;
    border-color: ${mediumgray};
    background-color: ${white};
    padding-horizontal: 10%;
    width: 90%;
    margin: 1%
`

export const Hotel_Title = styled.Text`
    font-size: 16px;
    margin-vertical: 3%;
    letter-spacing: 1px;
    color: ${darkgreen}
`

export const Hotel_image = styled.Image`
    width: 80%;
    height: 100px;
    align-self: center;
    margin-bottom: 15
`

export const Welcome_Text = styled.Text`
    font-size: 15px;
    margin-bottom: 1%;
    text-align: center;
    letter-spacing: 1px;
    padding: 1%
`

export const Welcome_page = styled.View`

    border-radius: 10px;
    background-color: ${pink};
    width: 100%;
    padding: 3%;

`

export const SelectionScreenColumnHotel = styled.View`

    justify-content: center;
    border-radius: 20px;
    align-items:center;
    width: 100%;
    background-color: ${white}; 

`

export const GoTo = styled.TouchableOpacity`

    width: 40%;
    border-radius: 20px;
    background-color:${darkgreen};
    padding: 5%;
    margin: 2%;


`

// justify-content: center;
// align-items: flex-start;