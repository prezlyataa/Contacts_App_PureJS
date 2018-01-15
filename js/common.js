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
    var re = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;

    if(firstname !== '' && lastname !== '' && email !== '' && re.test(email) !== false && phone !== '' && date !== '') {

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

       contacts.forEach(item => {
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
   } else {
        document.getElementById('firstname').classList.add('warning');
        document.getElementById('lastname').classList.add('warning');
        document.getElementById('email').classList.add('warning');
        document.getElementById('phone').classList.add('warning');
        document.getElementById('date').classList.add('warning');
    }

    /*  Clean our array after submit to list  */
    contacts.splice(-1);
};


/*   Function reset our form   */
function reset_form() {
    document.getElementById('form').reset();
    this.default_input();
}

/*   Function reset our inputs   */
function default_input() {
    document.getElementById('firstname').classList.remove('warning');
    document.getElementById('lastname').classList.remove('warning');
    document.getElementById('email').classList.remove('warning');
    document.getElementById('phone').classList.remove('warning');
    document.getElementById('date').classList.remove('warning');
}
