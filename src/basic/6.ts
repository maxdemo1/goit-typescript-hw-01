interface User_basic {
  name: string;
  age: number;
  email: string;
  address?: { city: string; country: string };
}

const mango: User_basic = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: User_basic = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
