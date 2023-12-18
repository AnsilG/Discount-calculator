import './App.css';
import { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function App() {
  const formRef = useRef(null);
  const [amt, setAmt] = useState(0)
  const [rate, setRate] = useState(0)
  const [discountamt, setDiscountamt] = useState(0)
  const [payamt, setPayamt] = useState(0)


  const discount = (e) => {
    e.preventDefault();
    const discountamt = amt * rate / 100;
    const amountpay = amt - discountamt;
    setDiscountamt(discountamt)
    setPayamt(amountpay)

  }
  const reset = () => {
    formRef.current.reset();
    setDiscountamt(0)
    setPayamt(0)
  }
  return (
    <div className="App">
      <Row className='mt-4 mx-5'>
        <Col xl={7} className='form-row  p-4'>
          <Form ref={formRef}>
            <Form.Group className="my-4" controlId="formBasicEmail">
              <Form.Control type="text" width={10} onChange={(e) => setAmt(e.target.value)} placeholder="Enter Amount" />

            </Form.Group>

            <Form.Group className="my-4" controlId="formBasicPassword">
              <Form.Control type="text" onChange={(e) => setRate(e.target.value)} placeholder="Discount %" />
            </Form.Group>
            <Row className='row mt-4   rounded-4'>
              <Col className=''>
                <Button variant="primary" type="submit" onClick={discount} className='btn btn-primary fw-medium '>  Calculate  </Button>

                <Button variant="primary" type="submit" onClick={reset} className='btn btn-warning fw-medium m-3'>  Reset  </Button>
              </Col>
            </Row>
          </Form>
          <Row className='mt-5'>
            <Col>
              <div>
                <h3 className='text-white'>You are Saving </h3>
                <p className='text-white fw-bold amount'>₹ {discountamt} /-</p>

              </div>
            </Col>
            <Col>
              <div>
                <h3 className='text-white'>Amount You Pay</h3>
                <p className='text-white fw-bold amount'> ₹ {payamt} /-</p>

              </div>
            </Col>

          </Row>
        </Col>

      </Row>
    </div>
  );
}

export default App;