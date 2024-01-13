export interface User {
  _id: String;
  name: String;
  email: String;
  password: String;
  image: String;
  income: Number;
  incomeRatio: {
    investment: Number;
    wants: Number;
    needs: Number;
  };
}
