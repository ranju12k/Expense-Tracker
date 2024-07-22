# Expense-Tracker [Currently Working On this Project]

A web application designed to help users track and manage their personal expenses. Built using AngularJS for the frontend, Node.js and Express.js for the backend, and MongoDB for the database.

## Features

- **User Authentication**: Secure login and registration for users.
- **Expense Management**: Add, edit, and delete expenses.
- **Categorization**: Categorize expenses (e.g., food, transportation, entertainment).
- **Monthly Reports**: Generate detailed monthly expense reports.
- **Data Visualization**: Visualize expense data using charts.
- **Export Data**: Export expense data to CSV or PDF.

## Technologies Used

- **Frontend**: AngularJS, HTML, CSS, JavaScript, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/Expense-Tracker.git
    cd Expense-Tracker
    ```

2. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Install frontend dependencies:
    ```bash
    cd ../frontend
    npm install
    npm install -g http-server
    ```

4. Start the backend server:
    ```bash
    cd ../backend
    npm start
    ```

5. Start the frontend server:
    ```bash
    cd ../frontend
    npm start
    http-server
    ```

## Configuration

- **MongoDB**: Ensure MongoDB is installed and running. Update the MongoDB connection string in `backend/server.js`.
- Create a database named `EXPENSE_TRACKER` and add a collection named `UserData`.

## Usage

1. Register a new account or log in with existing credentials.
2. Add your expenses with details such as category, amount, and date.
3. Edit or delete expenses as needed.
4. View monthly reports and visualizations.
5. Export your expense data to CSV or PDF.


## Screen Shot
1.Login Page - ![image](https://github.com/user-attachments/assets/d8c0986e-7e3a-4d35-8a93-238578d9d7e1)
2.Sign-up Page- ![image](https://github.com/user-attachments/assets/d8ff17a2-def0-457d-80bb-45ec2859e7a6)
3.Navbar- ![image](https://github.com/user-attachments/assets/3fe685aa-0299-4af1-be54-2e64b86eaf2e)




## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

