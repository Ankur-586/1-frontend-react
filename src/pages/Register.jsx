import Form from "../components/RegisterForm"

function Register() {
    return <Form route="/api/users/" method="register" />
}

export default Register