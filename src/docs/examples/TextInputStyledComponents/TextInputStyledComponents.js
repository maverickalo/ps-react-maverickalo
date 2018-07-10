import React from "react";
import TextInput from "ps-react/TextInputStyledComponents";

export default class ExampleError extends React.Component {
  render() {
    return (
      <div>
        <TextInput
          htmlId="example-error"
          label="First Name"
          name="firstname"
          onChange={() => {}}
          required
          error="First name is required"
        />
      </div>
    );
  }
}
