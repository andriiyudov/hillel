const getFormValues = () => {
    const {
        name: {value: name},
        age: {value: age},
        card: {value: card},
        email: {value: email},
    } = document.forms[0];

    return {name, age, card, email};
}
