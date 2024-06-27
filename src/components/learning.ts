type UserName = { name: string };
type UserAge = { age: number };

type TypeUser = UserName & UserAge;

const User: TypeUser = { name: 'string', age: 3 };
