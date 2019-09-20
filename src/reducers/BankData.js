const INITIAL_STATE = {
  transactions: [
    {
      date: "01/02/2019",
      name: "Business ACH",
      amount: 5000.0,
      type: "deposit"
    },
    {
      date: "01/05/2019",
      name: "Business ACH",
      amount: 572.73,
      type: "deposit"
    },
    {
      date: "01/06/2019",
      name: "Business ACH",
      amount: 480.0,
      type: "deposit"
    },
    {
      date: "01/15/2019",
      name: "Business ACH",
      amount: 3790.22,
      type: "deposit"
    },
    {
      date: "01/16/2019",
      name: "Business ACH",
      amount: 45089.0,
      type: "deposit"
    },
    {
      date: "01/21/2019",
      name: "Business ACH",
      amount: 750.0,
      type: "deposit"
    },
    //expenses datat
    {
      date: "01/02/2019",
      name: "Chase Mortgage",
      amount: 2500.0,
      type: "expense"
    },
    {
      date: "01/03/2019",
      name: "Outgoing ACH to B.Rabbit",
      amount: 5000.0,
      type: "expense"
    },
    {
      date: "01/06/2019",
      name: "Inventory Products Inc",
      amount: 420.65,
      type: "expense"
    },
    {
      date: "01/15/2019",
      name: "Dues from Biz  LLC",
      amount: 89.29,
      type: "expense"
    },
    {
      date: "01/16/2019",
      name: "Payroll",
      amount: 3450.0,
      type: "expense"
    },
    {
      date: "01/17/2019",
      name: "Prime membership",
      amount: 2384.68,
      type: "expense"
    },
    {
      date: "01/20/2019",
      name: "Comcast",
      amount: 384.05,
      type: "expense"
    },
    {
      date: "01/21/2019",
      name: "AT&T",
      amount: 75.0,
      type: "expense"
    },
    {
      date: "01/25/2019",
      name: "outgoing ACH to M. Boss",
      amount: 12000.0,
      type: "expense"
    },
    // {
    //   date: "01/30/2019",
    //   name: "Payroll",
    //   amount: 3500.0,
    //   type: "expense"
    // },
    {
      date: "01/30/2019",
      name: "PG&E",
      amount: 675.0,
      type: "expense"
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
