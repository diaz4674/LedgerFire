const INITIAL_STATE = {
  transactions: [
    {
      date: "01/20/2019",
      name: "PG&E",
      amount: 50.0,
      type: ""
    },
    {
      date: "01/20/2019",
      name: "At&t",
      amount: 100.0,
      type: ""
    },
    {
      date: "01/20/2019",
      name: "PG&E",
      amount: 50.0,
      type: ""
    },
    {
      date: "01/20/2019",
      name: "PG&E",
      amount: 50.0,
      type: ""
    },
    {
      date: "01/20/2019",
      name: "PG&E",
      amount: 50.0,
      type: ""
    },
    {
      date: "01/20/2019",
      name: "PG&E",
      amount: 50.0,
      type: ""
    }
  ]
};

export default function BankData(state = INITIAL_STATE, action) {
  switch (action.type) {
    // case EMAIL_CHANGED:
    //     return {...state, email: action.payload};
    // case PASSWORD_CHANGED:
    //     return {...state, password: action.payload}
    // case LOGIN_USER:
    //     return {...state, loading: true}
    // case LOGIN_USER_SUCCESS:
    //     return {...state, ...INITIAL_STATE, user: action.payload}
    // case LOGIN_USER_FAIL:
    //     return {...state, error: 'Authentication Failed.', loading: false}
    default:
      return state;
  }
}
