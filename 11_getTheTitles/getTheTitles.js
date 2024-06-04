const getTheTitles = function(books) {

    let titles = books.map(book => {
        if(book.title){
            return book.title;
        }
    });

    return titles;

};

// Do not edit below this line
module.exports = getTheTitles;
