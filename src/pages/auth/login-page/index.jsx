import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import useApi from "../../../hooks/useApi";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../../../redux/authSlice';
import { useNavigate } from 'react-router-dom';

export default function LoginPage(){
  const navigate = useNavigate();
  const api = useApi();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      //
    })();
  }, []);

  async function onFormSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);

    const exampleArr1 = ["ahmet", "mehmet", "ali", "veli"];
    const exampleArr2 = new Array();
    exampleArr2.push();
    exampleArr1.push();
    exampleArr1[1];

    const formJson = Object.fromEntries(data.entries());

    const loginResult = await api.post("auth/login", formJson);

    if (loginResult.data.status === "success") {
      dispatch(setToken(loginResult.data.data.token))
      dispatch(setUser(loginResult.data.data.userData))

      navigate("/user");
    } else {
      alert("Lütfen bilgilerinizi kontrol ediniz")
    }
  }

    return(
    <>
    <Row className='justify-content-center'>
        <Col sm="12" md="12" lg="6">
        <Form onSubmit={onFormSubmit}>
      <Form.Group className="mb-3" controlId="loginForm.email">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        onChange={(e) => {
          e.target.value;
        }}
        type="email" 
        name="email" 
        placeholder="name@example.com" 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="loginForm.password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password here..." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="loginForm.password">
      <Button variant="primary" className='w-100 mt-3'>
      <i className="fa-solid fa-right-to-bracket"></i>
        &nbsp;Login
      </Button>
      </Form.Group>
    </Form>
        </Col>
    </Row>
    </>
    )
}