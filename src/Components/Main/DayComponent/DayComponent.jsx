// React Native
import { Text, TouchableOpacity } from "react-native"
import { Icon } from "@rneui/themed"

// Utils
import { COLOR } from "@configs/Enums"

export default function DayComponent({date, state, marking}) {
    return (
        <TouchableOpacity onPress={() => console.log(date, marking)}>
            <Text
                style={{
                    textAlign: "center",
                    color: state === "disabled"
                            ? "gray"
                            : COLOR.WHITE,
                }}
            >
                {date.day}
            </Text>
            {marking && (
                <Icon
                    name="done-all"
                    type="material"
                    size={24}
                    color={COLOR.TINT}
                    containerStyle={{
                        position: "absolute"
                    }}
                    style={{
                        fontWeight: "bold"
                    }}
                />
            )}
        </TouchableOpacity>
    )
}