function  OldBooks(input) {
    let favouriteBook = input[0];
    let index = 1;
    let bookIsFound = false;
    let nextBookName = input[index];
    while (nextBookName !== 'No More Books') {
        if (nextBookName === favouriteBook) {
            bookIsFound = true;
            break;
        }
        index++;
        nextBookName = input[index];
    }
    if (bookIsFound === false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index-1} books.`);
    } else{
        console.log(`You checked ${index-1} books and found it.`);
    }
}
OldBooks(["Troy","Stronger","Life Style","Troy"])
OldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])