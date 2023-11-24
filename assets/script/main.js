'use strict';

import { Contact } from './contact.js';

let contacts = [];

document.getElementById('addButton').addEventListener('click', addContact);

function addContact() {
  const contactInfoValue = document.getElementById('contactInfo').value;
  const [name, city, email] = contactInfoValue.split(',').map(s => s.trim());

  if (!name || !city || !email || !email.includes('@')) {
    //alert('Please enter valid name, city, and email separated by commas.');
    document.getElementById('validateInfo').textContent = 'Please enter valid name, city, and email separated by commas.';
    return;
  } else {
    document.getElementById('validateInfo').textContent = '';

  }

  const contact = new Contact(name, city, email);
  contacts.unshift(contact);
  listContacts();
  document.getElementById('contactInfo').value = '';
}

function listContacts() {
  const contactList = document.getElementById('contactList');
  contactList.innerHTML = '';

  contacts.forEach((contact, index) => {
    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact';
    contactDiv.innerHTML = `<p>Name: ${contact.name}</p>
                            <p>City: ${contact.city}</p>
                            <p>Email: ${contact.email}</p>`;
    contactDiv.addEventListener('click', () => deleteContact(index));
    contactList.appendChild(contactDiv);
  });

  document.getElementById('contactCount').textContent = `Contact count: ${contacts.length}`;
}

function deleteContact(index) {
  contacts.splice(index, 1);
  listContacts();
}
