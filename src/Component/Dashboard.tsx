import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Breadcrumb, Button, Label, Sidebar } from "semantic-ui-react"
import { singleUserSelector } from "../Container/UsersSlice"
import { UserDetail } from "./UserDetail"
import { UserList } from "./userList"
import { UserProfile } from "./userProfile"

export const Dashboard = () => {

  const [visible, setVisible] = React.useState(false)
  const handleClick = () => setVisible(false)
  const [nav, setNav] = useState(false)
  const handleUser = () => setNav(true)
  const user = useSelector(singleUserSelector);
  return (
    <Sidebar.Pusher>
      <div className="dashboard">
        <Button content='Create User' color='green' style={{ marginRight: '1300px', marginTop: '100px' }} inverted size='massive' onClick={() => setVisible(!visible)} />
        <Sidebar.Pushable>
          <Sidebar
            direction='right'
            animation='overlay'
            icon='labeled'
            onHide={handleClick}
            visible={visible}
            className="sidebar"
          >
            <UserDetail onClick={handleClick} />
          </Sidebar>
        </Sidebar.Pushable>
      </div>
      <br />
      <Breadcrumb size="large">
        <Breadcrumb.Section ><Label onClick={() => setNav(false)} color='green' pointing='right'>UserList</Label> </Breadcrumb.Section>
        <Breadcrumb.Divider>/</Breadcrumb.Divider>
        {nav &&
          <Breadcrumb.Section link ><Label onClick={handleUser} color='green' pointing='right'> {user ? user.id : 'user'}</Label> </Breadcrumb.Section>}
      </Breadcrumb>
      {!nav ?
        <UserList onClick={handleUser} /> : <UserProfile />
      }
    </Sidebar.Pusher>
  )
}