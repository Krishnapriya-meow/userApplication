import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Checkbox, Table } from "semantic-ui-react"
import { getSingleUser, getUser, usersSelector, } from "../Container/UsersSlice";

interface userListProps {
  onClick: () => void;
}

export const UserList = (props: userListProps) => {

  const dispatch: any = useDispatch();
  const userList = useSelector(usersSelector);
  const [list, setList] = React.useState(userList);

  useEffect(() => { dispatch(getUser()) }, [])
  useMemo(() => setList(userList), [userList])

  function handleRemove(id: string) {
    const newList = list?.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <div>
      <Table celled color="green">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Check</Table.HeaderCell>
            <Table.HeaderCell>S.No</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>View</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {list && list.map(({ first_name, email, id }) =>
          <Table.Body>
            <Table.Row key={id}>
              <Table.Cell><Checkbox onClick={() => handleRemove(id)} /></Table.Cell>
              <Table.Cell>{id}</Table.Cell>
              <Table.Cell>{first_name}</Table.Cell>
              <Table.Cell>{email}</Table.Cell>
              <Table.Cell><Button content='View' color="green"
                onClick={() => {
                  props.onClick(),
                    dispatch(getSingleUser(id))
                }} />
              </Table.Cell>
            </Table.Row>
          </Table.Body>)}
      </Table>
    </div>
  )
}