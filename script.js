const closePop = document.querySelector('#close-pop');
const popWrapper = document.querySelector('#blacken-screen');
const popOpen = document.querySelector('#new');
const displayedTable = document.querySelector('table');
const popForm = document.querySelector('form');

class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
}

let books = [];

const storeBook = form => {
	return books.push(new Book(form.title.value.trim, form.author.value.trim, form.pages.value.trim, form.read.value.trim));
}

const createEntry = (object, index) => {
	let injectRead;

	if (object.read.checked) {
		injectRead = `<i class="fas fa-check"></i>`;
	} else {
		injectRead = `<i class="fas fa-times"></i>`;
	};

	const html = `<tr id='${index}'>
					<td class='title'>${object.title.value.trim()}</td>
					<td class='author'>${object.author.value.trim()}</td>
					<td class='pages'>${object.pages.value.trim()}</td>
					<td class='read'>${injectRead}</i></td>
					<td><button class='button-delete del'><i class="far fa-trash-alt del"></i></button></td>
				</tr>`;

	displayedTable.firstElementChild.innerHTML += html;

};

closePop.addEventListener('click', () => {
	popWrapper.classList.toggle('enable');
});

popOpen.addEventListener('click', () => {
	popWrapper.classList.toggle('enable');
});

displayedTable.addEventListener('click', e => {
	// deletes entry
	if (e.target.classList.contains('del')) {
		let row = e.target.closest('tr')
		row.remove();
		books.splice(row.id, 1);
	}
});

popForm.addEventListener('submit', e => {
	e.preventDefault();
	popWrapper.classList.toggle('enable');
	createEntry(e.target, (storeBook(e.target) - 1));
	popForm.reset();
});
