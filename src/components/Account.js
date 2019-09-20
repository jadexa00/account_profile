import React from "react";
import { Card, } from "semantic-ui-react";
import { AccountConsumer, } from "../providers/AccountProvider";

const Account = () => (
  <AccountConsumer>
    { account => (
    <Card>
      <Card.Content>
        <Card.Header>{account.username}</Card.Header>
        <Card.Meta>
          Date Joined: {account.dateJoined}
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        <p>Membership Level: {account.membershipLevel}</p>
      </Card.Content>
    </Card>
    )}
  </AccountConsumer>
);

export default Account;