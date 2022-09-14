import React from "react"
import Button from "../components/Button"
import Form from "../components/Form"
import Input from "../components/Input"

const SignUp = () => {
  return (
    <Form title='SignUp' description={"Don't have an account yet?"}>
      <Input title='name' htmlFor='name' type="text" ></Input>
      <Input title='password' htmlFor='password' type="password" ></Input>
      <Button title="Sign Up"></Button>
    </Form>
  )

}

export default SignUp
