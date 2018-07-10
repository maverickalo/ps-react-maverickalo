import React from "react";
import TextInput from "ps-react/TextInput";

export default class ExampleTest extends React.Component {
  render() {
    return (
      <div>
        <TextInput
          htmlId="example-optional"
          label="First Name"
          name="firstname"
          onChange={() => {}}
        />
      </div>
    );
  }
}
