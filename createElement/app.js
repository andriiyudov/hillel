const parent = document.body;

const handlerClick = () => {
    console.log('click')
}
const handlerOver = () => {
    console.log('hover')
}

const main = createElement(
    'div',
    {className: 'green bold big', id: 'main', name: 'qwertyu'},
    {click: handlerClick, mouseover: handlerOver},
    'hello world',
    parent
);

/*
<form>
    <input type="text" name="login" placeholder="Enter login..." /> +
    <input type="password" name="pass" placeholder="qwertyuio" /> +
    <select name="role"> +
      <option value="admin">Admin</option> +
      <option value="user">User</option> +
    </select>
    <input type="button" value="Login" />
  </form>
*/



const form = createElement('form', null, null, '', main);

for (let value of FORM_CONFIG) {
    const currentElement = createElement(value.tagName, value.attributes, value.handlers, value.content, form);
    if (value.tagName === 'select' && value.options.length > 0) {
        for (let option of value.options) {
            createElement('option', option.attributes, option.handlers, option.content, currentElement);
        }
    }
}

