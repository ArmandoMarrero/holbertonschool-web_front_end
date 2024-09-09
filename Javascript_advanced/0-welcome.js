function welcome(firstname, lastname) {
  const fullName = ` ${firstname} ${lastname}`;

  function displayFullName() {
    alert(`Welcome ${fullName}!`);
  }
  displayFullName();
}

welcome('Holberton', 'School');