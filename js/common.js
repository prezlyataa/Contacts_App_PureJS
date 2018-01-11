/*   Initialize class contact   */
var Contact = function (firstname, lastname, email, phone, date) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.date = date;
};

/*   Initialize array of our contacts   */
var contacts = [];

/*   Function add contact to array   */
function add_contacts() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;

    var new_contact = new Contact(firstname, lastname, email, phone, date);
    contacts.push(new_contact);
    this.reset_form();

    var list = document.getElementById('list');
    var contact = document.createElement('div');
    contact.className = 'contact';
    var firstname = document.createElement('h3');
    var lastname = document.createElement('h3');
    var email = document.createElement('p');
    var phone = document.createElement('p');
    var date = document.createElement('p');
    var remove = document.createElement('button');
    remove.innerHTML = 'Remove';
    remove.className = 'btn';

    /*  Remove item from list function   */
    remove.onclick = function() {
        var listItem = this.parentNode;
        list = listItem.parentNode;
        list.removeChild(listItem);
    };

    contacts.forEach((item, index) => {
        firstname.appendChild(document.createTextNode(item.firstname));
        lastname.appendChild(document.createTextNode(item.lastname));
        email.appendChild(document.createTextNode(item.email));
        phone.appendChild(document.createTextNode(item.phone));
        date.appendChild(document.createTextNode(item.date));
    });

    contact.appendChild(firstname);
    contact.appendChild(lastname);
    contact.appendChild(email);
    contact.appendChild(phone);
    contact.appendChild(date);
    contact.appendChild(remove);
    list.appendChild(contact);
    console.log(contacts);
};


/*   Function reset our form   */
function reset_form() {
    document.getElementById('form').reset();
}
