import React from 'react'
import Feed from '../Feed/Feed'
import Head from '../helper/Head'
import { UserContext } from '../../UserContext';

const UserAccount = ({ user }) => {
  const { data } = React.useContext(UserContext);

  return (
    <>
      <Head title="Minha Conta" />
      <Feed user={data.id} />
    </>
  )
}

export default UserAccount