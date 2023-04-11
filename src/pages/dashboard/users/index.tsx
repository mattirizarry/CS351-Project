import { GetServerSideProps } from 'next';
import prisma from '@/lib/prisma';
import { FC } from 'react';
import ResourceDashboard from '@/src/components/resourceDashboard';
import { User } from '@prisma/client';

const UserRowComponent: FC<User> = (props) => {
  return <section className="user-row">{ props.firstName }</section>
}

interface UserProps {
  serializedUsers: User[]
}

const UserDashboard: FC<UserProps> = ({ serializedUsers }) => {
  return (
    <ResourceDashboard<User> 
      resourceData={serializedUsers}
      resourceComponent={UserRowComponent}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

  const users = await prisma.user.findMany();

  const serializedUsers = users.map((user) => ({
    ...user,
    commission: user.commission.toJSON(),
    rate: user.rate.toJSON()
  }))

  return {
    props: { serializedUsers }
  }
};

export default UserDashboard