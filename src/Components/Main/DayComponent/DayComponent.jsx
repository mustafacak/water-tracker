// React Native
import { Text, TouchableOpacity } from "react-native"
import { Icon } from "@rneui/themed"

// Utils
import { COLOR } from "@configs/Enums"
import { todayFormattedDate } from "../../../Utils/dateHelper"

export default function DayComponent({date, state, marking}) {


    const today = todayFormattedDate()

    return (
        <TouchableOpacity onPress={() => console.log(date, marking)}>
            <Text
                style={{
                    textAlign: "center",
                    color: state === "disabled"
                            ? "gray"
                            : COLOR.WHITE,
                    borderWidth: date.dateString === today ? 2 : 0,
                    borderColor: COLOR.WHITE,
                    borderRadius: 50,
                    paddingHorizontal: 3
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