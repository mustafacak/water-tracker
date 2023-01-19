// React Native
import { Modal, Pressable, Text, View } from "react-native"

// Style
import { styles } from "./CustomModal.styles"

export default function CustomModal({
	textArray,
	additionalButton,
	modalVisible,
	setModalVisible,
    hasOkey = true, 
    hasEdit
}) {
	return (
		<Modal
			transparent={true}
			visible={modalVisible}
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					{textArray?.map((text) => (
						<Text key={text} style={styles.modalText}>
							{text}
						</Text>
					))}

					<View style={styles.buttonContainer}>
						<Pressable
							style={[styles.button, styles.buttonClose]}
							onPress={() => setModalVisible(!modalVisible)}
						>
							<Text style={styles.textStyle}>OK</Text>
						</Pressable>
						{additionalButton && (
							<Pressable
								style={[styles.button, styles.buttonDefault]}
								onPress={additionalButton.onPress}
							>
								<Text style={styles.textStyle}>{additionalButton.buttonTitle}</Text>
							</Pressable>
						)}
					</View>
				</View>
			</View>
		</Modal>
	)
}
