// React Native
import { Modal, Pressable, Text, View } from "react-native"

// Style
import { styles } from "./CustomModal.styles"


export default function CustomModal({ textArray, modalVisible, setModalVisible }) {
	return (
		<Modal
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				setModalVisible(!modalVisible)
			}}
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
                    {textArray?.map(text => (
                        <Text key={text.index} style={styles.modalText}>{text}</Text>
                    ))}
					<Pressable
						style={[styles.button, styles.buttonClose]}
						onPress={() => setModalVisible(!modalVisible)}
					>
						<Text style={styles.textStyle}>OK</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	)
}
