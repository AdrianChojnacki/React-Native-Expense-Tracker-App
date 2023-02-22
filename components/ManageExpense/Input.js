import { Text, TextInput, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ label, style, textInputConfig }) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    marginBottom: 4,
    color: GlobalStyles.colors.primary100,
    fontSize: 12,
  },
  input: {
    padding: 6,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 6,
    color: GlobalStyles.colors.primary700,
    fontSize: 18,
  },
  inputMultiline: { minHeight: 100, textAlignVertical: "top" },
});
