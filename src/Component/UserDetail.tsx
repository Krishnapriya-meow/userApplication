import { Form as FinalForm, Field, } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Segment } from 'semantic-ui-react'
import { postUser } from '../Container/UsersSlice';
import { IUserModel } from '../model/UserModel'

interface UserProps {
  onClick: () => void;
}

export const UserDetail = (props: UserProps) => {

  const dispatch: any = useDispatch();

  return (
    <Segment compact>
      <FinalForm
        onSubmit={(userData: IUserModel) => {
          props.onClick()
          dispatch(postUser(userData))
        }}
        initialValues = {{ stooge: 'larry', employed: false }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <label>Job</label>
              <Field
                name="job"
                component="input"
                type="text"
                placeholder="Job"
              />
            </div>

            <div>
              <br />
              <Button content='Submit' color='green' />

            </div>
          </Form>
        )}
      />
    </Segment>
  )
}