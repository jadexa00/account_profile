import React from "react";
import { Form, } from "semantic-ui-react";
import { AccountConsumer, } from "../providers/AccountProvider";


class AccountForm extends React.Component {
  state = { username: "", membershipLevel: "", };

  handleChange = (e, { name, value }) => 
  this.setState({ [name]: value, });

  handleSubmit = (e) => {
    e.preventDefault(); 
    const account = { ...this.state, };
    this.account.updateAccount(account);
  };

  render() {
    const {username, membershipLevel,} = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New Username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
         />
        <Form.Select
          label="Membership Level"
          name="membershipLevel"
          value={membershipLevel}
          onChange={this.handleChange}
          options={membershipOptions}
         />
        <Form.Button color="violet">Save</Form.Button>
        </Form>      
    )
  };
};


const ConnectedAccountForm = (props) => {
  return (
    <AccountConsumer>
      {
         account => (
           <AccountForm
           { ...props }
           Username={account.username}
           membershipLevel={account.membershipLevel}
           UpdateAccount={account.updateAccount}
           />
         )}
    </AccountConsumer>
  );
};

const membershipOptions = [
{ key: "b", text: "Bronze", value: "Bronze", },
{ key: "s", text: "Silver", value: "Silver, "},
{ key: "g", text: "Gold", value: "Gold", },
{ key: "p", text: "Platinum", value: "Platinum", },
];


export default AccountForm;