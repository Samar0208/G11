let students = [
  { id: 1, yaer: 1994, name: "Urinov Samariddin" },
  { id: 2, yaer: 1994, name: "Tuychiyev Sohib" },
  { id: 3, yaer: 1999, name: "Qodirobv Rasul" },
  { id: 4, yaer: 2001, name: "Xakimov Sardor" },
  { id: 5, yaer: 1988, name: "Xudayberganov Tohir" },
  { id: 6, yaer: 1991, name: "Tuxtasinov Shaxboz" },
];

// CRUD
// Read

const sortByYear = () => {
  let res = students.sort((a, b) => a.year - b.year);
  students = res;
};
// sortByYear();

const sortByAlphabet = () => {
  let res = students.sort((a, b) => a.name.localeCompare(b.name));
  students = res;
};
// sortByAlphabet();

const deleteUser = (id) => {
  let res = students.filter((value) => value.id !== id);
  students = res;
};

// deleteUser(2);
// console.log(students);

const addUser = (user) => {
  students = [...students, { id: students.length + 1, ...user }];
};

// addUser({ year: 2019, name: "webbrain" });

const updeteUser = (data) => {
  let res = students.map((value) =>
    value.id === data.id ? { ...value, [data.type]: data.value } : value
  );
  students = res;
};
// updeteUser({ id: 2, type: "name", value: "Gulbashakar" });

const getFilterByName = (key) => {
  let res = students.filter((value) =>
    value.name.toLocaleLowerCase().includes(key.toLocaleLowerCase())
  );
  students = res;
};
// getFilter("Shaxboz");

const getFilterById = (key) => {
  let res = students.filter((value) => value.id === key);
  students = res;
};

// getFilterById(5);

const getFilter = ({ key, value }) => {
  let res = students.filter((usr) =>
    `${usr[key]}`.toLocaleLowerCase().includes(`${value}`.toLocaleLowerCase())
  );
  students = res;
};

getFilter({ value: 3, key: "id" });
// getFilter({ value: "Sohib", key: "name" });
console.log(students);
