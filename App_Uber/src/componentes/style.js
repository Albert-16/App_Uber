import styled from "styled-components";
import { View, Text, Image, TextInput, Touchable, ScrollView } from "react-native";
import Constants from "expo-constants";



const StatusBarHeight = Constants.statusBarHeight;


export const Colors = {
    color1: "#12191D",
    color2: "#1C262D",
    color3: "#26363E",
    color4: "#7C98A9",
    color5: "#F4F4F4",
    color6: "#0072E9",
    color7: "#28A745"
};

const { color1, color2, color3, color4, color5, color6, color7 } = Colors;

export const StyledScroll = styled.ScrollView`
    background-color: ${color1};
`;


export const StyledContainerMap = styled.View`
    flex: 1;
    padding: 0px;
    padding-top: ${StatusBarHeight + 50}px;
    background-color: ${color1};
`;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 30}px;
    background-color: ${color1};
`;

export const StyleScrollView = styled.ScrollView`

`;

export const InnerContainer = styled.View`
    flex: 1;
    width:100%;
    align-items:center;
`;

export const MenuContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 10px;
    justify-content: center;  
`;

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${color6};
    margin-bottom: 10px;
    margin-top: 10px;
`;


export const MenuImagen = styled.Image`
    height: 50%;
    min-width: 100%
`;

export const PageHomeLogo = styled.Image`
    height: 80px;
    width: 80px;
`;

export const PageLogo = styled.Image`
    width:250px;
    height: 200px;
`;

export const PageTitulo = styled.Text`
    font-size:30px;
    text-align:center;
    font-weight:bold;
    color: ${color5};
    padding:10px;

    ${(props) => props.Menu && `
        font-size: 35px;
        
    `} 
`;

export const Subtitle = styled.Text`
    font-size:18px;
    margin-bottom:20px;
    letter-spacing:1px;
    font-weight:bold;
    color: ${color6};

    ${(props) => props.Menu && `
        margin-bottom: 5px;
        font-weight: normal;
         text-align: center;
    `} 
`;

export const Titulo = styled.Text`
    font-size:18px;
    text-align:center;
    font-weight:bold;
    color: ${color6};
`;

export const Subtitulo = styled.Text`
    font-size:16px;
    letter-spacing:1px;
    color: ${color5};


`;

export const StyledFormArea = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled.TextInput`
   background-color: ${color2};
   padding:15px;
   padding-left:55px;
   padding-right:55px;
   border-radius: 5px;
   font-size: 18px;
   height:60px;
   margin-vertical:3px;
   margin-bottom:10px;
   color: ${color5};
`;



export const StyledInputLabel = styled.Text`
    color: ${color6};
    font-size: 14px;
    text-align:left;

`;

export const LeftIcon = styled.View`
    left:15px;
    top:38px;
    position:absolute;
    z-index:1;

    ${(props) => props.center == true && `
        left:15px;
        top:15px;
    `}
`;

export const CenterIcon = styled.View`

`;


export const RightIcon = styled.TouchableOpacity`
    right:15px;
    top:38px;
    position:absolute;
    z-index:1;

    ${(props) => props.center == true && `
        right:20px;
        top: 120px;
    `}
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${color6};
    justify-content: center;
    align-items: center;
    border-radius:5px;
    margin-vertical:5px;
    height:60px;

    ${(props) => props.btn2 == true && `
        background-color: ${color7};
        flex-direction: row;
        justify-content: center;
    `}

    ${(props) => props.btn3 == true && `
    background-color: ${color7};
    border-radius:20px;
    margin:10px;
    margin-left:15px;
    width:150px;
`}

${(props) => props.btn4 == true && `
background-color: ${color6};
border-radius:20px;
margin:10px;
margin-left:15px;
width:150px;
`}
`;

export const StyledButtonFav = styled.TouchableOpacity`
    padding: 30px;
    background-color: ${color2};
    justify-content: center;
    align-items: center;
    border-radius:5px;
    margin-vertical:5px;
    height:80px;
    width: 360px;

`;

export const StyledButtonHome = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${color6};
    justify-content: center;
    align-items: center;
    border-radius:25px;
    margin-vertical:5px;
    height:115px;
    width: 250px;
    margin:10px;

    ${(props) => props.btn2 == true && `
        background-color: ${color7};
        flex-direction: row;
        justify-content: center;
    `}
`;


export const ButtonText = styled.Text`
    color: ${color5};
    font-size: 16px;
 
`;

export const MsgBox = styled.Text`
    font-size: 13px;
    text-align: center;
    color: ${color5}
`;

export const Line = styled.View`
    height: 1px;
    width:100%;
    background-color: ${color5}
    margin-vertical: 10px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding:10px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${color4};
    font-size: 14px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-content: center;
`;

export const TextLinkContent = styled.Text`
    color: ${color6};
    font-size: 15px;
`;


