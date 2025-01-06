# My Project

This is a project built using **ReactJS** with **Vite** as the bundler. It utilizes **Ant Design** for the UI, **Formik** for form handling, **Yup** for validation, and **LocalStorage** and **SessionStorage** APIs to manage data. 

## Technologies Used
- **ReactJS**: A JavaScript library for building user interfaces.
- **Vite**: A fast development environment and build tool for modern web applications.
- **Ant Design**: A UI component library for building elegant user interfaces.
- **Formik**: A popular library for handling forms in React.
- **Yup**: A JavaScript schema validator used alongside Formik to validate form inputs.
- **LocalStorage API**: Used to store data that persists across page reloads.
- **SessionStorage API**: Used to store data for the duration of the page session.

## Features
- **User Interface**: A responsive UI built with Ant Design components.
- **Form Handling**: Forms are managed using Formik, with validation powered by Yup.
- **Data Storage**: LocalStorage and SessionStorage are used to handle and persist data.
- **Responsive Design**: The layout adjusts automatically for different screen sizes using Ant Design's grid system.

## Project Setup

### Prerequisites
Before starting, ensure that you have the following tools installed:
- **Node.js**: Make sure you have [Node.js](https://nodejs.org/) installed (v14.0.0 or higher).

### Getting Started

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/yourprojectname.git
    ```

2. Navigate to the project directory:
    ```bash
    cd yourprojectname
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open the project in your browser at `http://localhost:3000`.

## Usage

### Forms

- All forms in the project are handled using **Formik**, which simplifies form validation and submission. The **Yup** validation schema is used for input validation.

### Data Storage

- **LocalStorage**: The data stored in **LocalStorage** persists even after the browser is closed and reopened.
- **SessionStorage**: The data stored in **SessionStorage** is only available for the duration of the page session.

### UI Components

The UI components are styled using **Ant Design**. You can easily customize them by using the provided classes and styles. 

## Screenshots

Here are some screenshots of the project:

![Screenshot 1](../flowtech-crud/src/assets/images/screens/Screenshot%202025-01-06%20191244.png)

![Screenshot 2](../flowtech-crud/src/assets/images/screens/Screenshot%202025-01-06%20191258.png)

![Screenshot 3](../flowtech-crud/src/assets/images/screens/Screenshot%202025-01-06%20191427.png)

## Contributing

If you'd like to contribute to this project, feel free to fork it and submit pull requests. Please ensure that you follow the code style guidelines and test your changes thoroughly.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
