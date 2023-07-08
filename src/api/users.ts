import axios from "axios";

export interface User {
  id: number;
  fullName: string;
  email: string;
  address: string;
}

export const getUsers = async (page: number): Promise<User[]> => {
  const response = await axios.get(`http://localhost:3001/users?page=${page}`);
  const users: User[] = response.data.map(
    ({
      name,
      email,
      city,
      street,
      suite,
      zipcode,
      id
    }: {
      name: string;
      email: string;
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      id: number;
    }) => ({
      id: id,
      fullName: name,
      email: email,
      address: `${street}, ${suite}, ${city}, ${zipcode}`
    })
  );

  return users;
};
