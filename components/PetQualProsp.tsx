import { View, Text } from "react-native"

type PetQualProps = {
    qualities: {
        qualOne: string,
        qualTwo: string,
        qualThree: string
        age: number
    }[]
}

export const PetQualities = (props: PetQualProps) => {
    return (
        <View>
            {props.qualities.map((e, i) => {
                if(i === 0) return <Text>Your pet is {e.qualOne}, {e.qualTwo}, {e.qualThree}, and is {e.age} years old.</Text>
            }
            )}
        </View>
    )
}