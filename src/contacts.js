const contacts = document.getElementsByClassName('contacts')[0];
const stickyHeader = document.getElementsByClassName('stickyHeader')[0];

async function addContacts() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 50000; i++) {
    const child = document.createElement('div');
    child.textContent = i;
    child.classList.add('contact');
    fragment.appendChild(child);
  }
  contacts.appendChild(fragment);
}

contacts.addEventListener('scroll', (e) => {
  const contact = document.getElementsByClassName('contact')[0];
  stickyHeader.textContent = parseInt(contacts.scrollTop / contact.offsetTop);

});

addContacts();