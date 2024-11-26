import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2024-11-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-01-05"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.59,
    date: new Date("2022-02-18"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 79.99,
    date: new Date("2021-12-22"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 29.29,
    date: new Date("2022-12-05"),
  },
  {
    id: "e8",
    description: "Some bananas",
    amount: 8.99,
    date: new Date("2021-12-22"),
  },
  {
    id: "e9",
    description: "A pencil",
    amount: 13.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e10",
    description: "Another book",
    amount: 19.59,
    date: new Date("2022-03-18"),
  },

  {
    id: "e11",
    description: "Groceries",
    amount: 45.99,
    date: new Date("2024-11-19"), // 7 gün önce
  },
  {
    id: "e12",
    description: "Monthly Subscription",
    amount: 9.99,
    date: new Date("2024-11-21"), // 6 gün önce
  },
  {
    id: "e13",
    description: "Electricity Bill",
    amount: 75.5,
    date: new Date("2024-11-20"), // 5 gün önce
  },
  {
    id: "e14",
    description: "Dinner with Friends",
    amount: 120.0,
    date: new Date("2024-11-23"), // 4 gün önce
  },
  {
    id: "e15",
    description: "Gym Membership",
    amount: 30.0,
    date: new Date("2024-11-19"), // 3 gün önce
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpenses: ({ description, amount, date }) => {},
  deleteExpenses: (id) => {},
  updateExpenses: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );

      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};
const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };
  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const value = {
    expenses: expensesState,
    addExpenses: addExpense,
    updateExpenses: updateExpense,
    deleteExpenses: deleteExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
