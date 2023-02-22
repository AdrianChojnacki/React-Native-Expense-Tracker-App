import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            value: inputValues.amount,
            onChangeText: inputChangedHandler.bind(this, "amount"),
            keyboardType: "decimal-pad",
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            value: inputValues.date,
            onChangeText: inputChangedHandler.bind(this, "date"),
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          value: inputValues.description,
          onChangeText: inputChangedHandler.bind(this, "description"),
          multiline: true,
          //   autoCorrect: false,
          //   autoCapitalize: "none",
        }}
      />
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    marginVertical: 24,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});
