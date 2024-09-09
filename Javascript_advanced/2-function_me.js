function welcomeMessage(fullname) {
    return function () {
        alert(`Welcome` + ' ' + fullname);
    };
}

const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');