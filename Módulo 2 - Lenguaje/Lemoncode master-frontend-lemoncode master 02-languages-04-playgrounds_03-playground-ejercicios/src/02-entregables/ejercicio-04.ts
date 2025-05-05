console.log("************** DELIVERABLE 04 *********************");
const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

function isBookRead(books, titleToSearch) {
    const foundBook = books.find((book) => book.title === titleToSearch);
    const isRead = books.find((book) => book.isRead === true);
    if (foundBook) {
        if (foundBook.isRead) {
            console.log(`The book "${titleToSearch}" has already been read.`);
        } else {
            console.log(`The book "${titleToSearch}" has not been read yet.`);
        }
    } else {
        console.log(`The book "${titleToSearch}" is not in the list.`);
    }
}

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false