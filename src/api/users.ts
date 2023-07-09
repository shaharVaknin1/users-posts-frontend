import axios from "axios";

export interface User {
  id: number;
  fullName: string;
  email: string;
  address: string;
}

export const getUsersCount = async (): Promise<number> => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/count`);
  const count: number = response.data.count;
  return count;
};

export const getUsers = async (offset: number, limit: number): Promise<User[]> => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/users?offset=${offset}&limit=${limit}`
  );
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
