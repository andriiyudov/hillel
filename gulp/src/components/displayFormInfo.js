const displayFormInfo = ({name, age, card, email}) => {
    const infoElem = document.querySelector('.info');

    infoElem.innerHTML = `
        <div class="info__field">Name: ${name}</div>
        <div class="info__field">Age: ${age}</div>
        <div class="info__field">Card: ${card}</div>
        <div class="info__field">Email: ${email}</div>
    `;
};
