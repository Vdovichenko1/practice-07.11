import { Field, Formik } from 'formik';
import { Label, StyledForm } from './FormCart.styled';


 const FormCart = ()=>  (
        <div>
        <h1>Shop Cart</h1>
        <Formik
          initialValues={{
            name: '',
            price: '',
            description: '',
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <StyledForm>
            <Label >First Name
            <Field  name="name" placeholder="Name" />
            </Label>
            <Label >Last Name
            <Field  name="price" placeholder="Price" />
            </Label>
            <Label >Email
            <Field
             
              name="description"
              placeholder="Description"
            />
            </Label>
            <button type="submit">Submit</button>
          </StyledForm>
        </Formik>
      </div>
    )

    export default FormCart
