# Connecting to MongoDB Atlas with Mongoose
## Pre-requisites
- [MongoDB Atlas account created and configured](https://gist.github.com/acidtone/534b025d6212a003a8a8ec3030a4d4ae).
- [Data imported](https://gist.github.com/acidtone/d290d63873b07ffd871cafa39f917c1f) into Atlas collection.
    - Database: projects
    - Collection: definitions
- `.env` file exists in project root with a connection string set:

    ```html
    PORT=3000
    MONGODB_URL=mongodb+srv://tony:password123@cluster0<cluster-sub-domain>.mongodb.net/projects?retryWrites=true&w=majority
    ```

    - `<cluster-sub-domain>` will be replaced with your personal cluster sub-domain (random string of characters).
    - replace `tony:password123` with your DB User credentials.

## Instructions
1. Clone this repo to your machine.
2. Add your `.env` file to the root directory.
3. Navigation to your root directory on the command line.
4. Install dependencies:

    ```
    $ npm install
    ```

5. Connect to your database:

    ```
    $ node server.js
    ```

    - Success: `Connected to DB...`

6. In your browser (or Postman), go to the following URLs to test your endpoints:

    ```js
    http://localhost:3000/api/definitions
    http://localhost:3000/api/definitions/callback
    ```

## Troubleshooting Errors
- `Accessing non-existent property 'MongoError' of module exports inside circular dependency`
  - It's safe to ignore this error.
- `The 'uri' parameter to 'openUri()' must be a string, got "undefined"`
  - You probably don't have a `.env` file or it's not loading correctly.
- The main error you will run into when connecting is `Authentication Failed`. Try the following:
  - Confirm you've set the correct username/password in your connection string. You can reset the password in the Atlas control panel.
  - Confirm you've changed the database in your connection string to `winter-2021` or similar.
  - Confirm you've whitelisted all IPs in Atlas. 

## Other CRUD Operations
- Create: [Mongoose - Creating documents from form data in Express](https://gist.github.com/acidtone/c69a20727a1e11c58fcc9ff0503b1471)
- Read: [Mongoose - Reading MongoDB data in Express](https://gist.github.com/acidtone/de24abff567b3b2bf90b1af35bc3a23a)
- Update: [Mongoose - Update document from form data in Express](https://gist.github.com/acidtone/c7da38b6783d05aa11cd02a1054cfc16)
- Delete: [Mongoose - Delete a document in Express](https://gist.github.com/acidtone/6435085cd7eb57f202ca5a7b1941e447)
