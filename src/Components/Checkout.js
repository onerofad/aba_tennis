import { PaystackButton } from "react-paystack"
import { useState } from "react"
import { Container, Item, Image, Form, Segment, Grid } from "semantic-ui-react"


const Checkout = () => {
  const publicKey = "pk_test_0091aca0928f0b1654a7aa5d57bd57300c21be38"
  const amount = 10000
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  }

  return (
    <Segment>
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                    <Item>
            <Image />
            <Item.Description>
                <p>Dancing Shoes</p>
                <p>{amount}</p>
            </Item.Description>
        </Item>
        <Form>
            <Form.Field>
                <label>Name</label>
                <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                />
            </Form.Field>
            <Form.Field>
                <label>Email</label>
                <input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Field>
            <Form.Field>
                <label>Phone</label>
                <input
                type="text"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                />

            </Form.Field>

        </Form>
        <PaystackButton {...componentProps} />

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </Segment>
 
       
  )
}
export default Checkout