import { View, Text } from "react-native";

type PetProps = {
    petName: {
        firstName: string,
        lastName: string
    }
    type: string
}

export const Pet = (props: PetProps) => {
    const  { firstName, lastName } = props.petName;
    return (
        <View>
            <Text>You own a pet name {firstName} {lastName}</Text>
            <Text>The pet is a {props.type}.</Text>
        </View>
    )
}