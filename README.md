
# Toko Play - Getting Started
## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
-  [npm](https://www.npmjs.com/get-npm) (usually comes with Node.js)
-  [MongoDB](https://www.mongodb.com/try/download/community) (installed and running)

##  Getting Started
Follow these steps to set up and run the project locally:

1.  **Clone the Repository:**
    
    Clone this repository to your local machine using Git:
    `git clone https://github.com/harishtaa/gigih-final-project.git` 
    
2.  **Navigate to the Project Directory:**
    Change your current working directory to the project folder:
    `cd gigih-final-project`
    
1.  **Install Dependencies:**
    Install the project dependencies for both the frontend and backend:
    `cd client`
    `npm install`
    
    `cd ../server`
   `npm install` 
   
1.  **Start MongoDB service:**
    -   On macOS or Linux:
        `sudo service mongod start` 
    -   On Windows, open Command Prompt as administrator and run:
        `net start MongoDB` 
        
2.  **Import Sample Data:**
    -   Make sure MongoDB service is running.
    -   Open a new terminal window and navigate to the root directory of the project.
    -  Navigate to the `data` folder: `cd data `
    -   Import sample data into MongoDB:
     ```
     mongoimport --db toko-play --collection comments --file comments.json
     mongoimport --db toko-play --collection products --file products.json
     mongoimport --db toko-play --collection videos --file videos.json
     ```

2.  **Environment Variables:**
    Open the project in your text editor and open the `.env`and `index.js`, ensure that the MongoDB connection string is correctly set according to your MongoDB setup. For example:

```.env
PORT=3000
DATABASE_URL=mongodb://127.0.0.1:27017/toko-play
``` 
```javascript I'm A tab 
mongoose.connect(process.env.DATABASE_URL)
const  db  =  mongoose.connection;
 ```
3.  **Build the React App:**
    Build the frontend React application:
    `cd ../client`
    `npm run build` 
    
4.  **Run the Backend:**
    Run the backend server:
    `cd ../server`
    `npm start` 
    
    The server should start on the port specified in your `.env` file.
    
5.  **Access the App:**
    
    Open your browser and navigate to `http://localhost:3000` to see the running application.
