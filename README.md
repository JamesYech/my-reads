

# myReads Udacity Nanodegree Project
---

## Purpose of Project:

The myReads project was designed to show basic understanding of a React base app.


## Running/Loading the App

This project is uses Node.js and the Create-React-App starter (https://github.com/facebookincubator/create-react-app).   Node 6.x or later is required and can be downloaded at (https://nodejs.org/en/).  If you already have Node.js installed but need to upgrade, see instructions for you version of linux.

You can verify the version of Node.js installed by typing npm -v at the terminal prompt.

After verify Node.js is up-to-date, navigate to the directory you want to load myReads into.

```
### Type to following to clone this prject and install dependencies

https://github.com/JamesYech/my-reads.git
npm install

### Alternatively, you can download the zip from the Clone or download button, extract the zip file into an empty folder then run npm install

After dependencies have installed, type
npm start

A browser window should open with the myReads app displayed.  If it does not, open a browser and enter http://localhost:3000/ into the address bar.
```

A live version of this App can be access at http://myreads.jdtech.net/

## Using the myReads App

Books in the current collection are displayed on three 'shelves': Currently Reading, Want to Read, and Already Read.  A forth shelf, named Recently Removed, will only display book titles if a book has been removed from the other shelfs but selecting None from the drop down list.

To move a book to a different shelf, click on the drop arrow icon and select the new shelf.  If selecting None, the book will be display on the Recently Removed shelf only until the next browser refresh.


## Searching for new books

By clicking on the Add icon in the lower right of the screen you can search for books to add to the collection.

Search terms are limited for this project.  Most single letters will work as well as the following terms:
```
'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
```
Books can be added to the collection from the Search screen by clicking on the drop arrow icon and selecting a shelf from the menu.


## Expectations of App

Books on the main screen will be displayed/updated in real-time.
Books on the main screen will have their current shelf disabled on the drop down menu.
Books on the main screen will maintain their shelf between refreshes of the browser.

Books on the search screen will have their current shelf disabled in the drop down menu if they are already in the collection.
Search criteria will not cause an error.  If no books are returned a message stating as such will be displayed.

Books on both screens will display cover art, full title, and all authors.  If any of these are missing they will be caught and an error will not be thrown.

Navigation will work properly allowing user to move from to and from each screen as expected when using a web browser.