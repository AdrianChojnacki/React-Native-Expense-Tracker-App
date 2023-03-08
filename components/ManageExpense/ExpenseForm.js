import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import Button from "../UI/Button";

function ExpenseForm({ submitButtonLabel, onSubmit, onCancel }) {
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

  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };
    onSubmit(expenseData);
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
      <View style={styles.buttons}>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
      </View>
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
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
