# ClickBucket

ClickBucket is a simple React application that allows you to manage buckets with different capacities. It demonstrates the usage of React components and state management to create a dynamic user interface.

### Features
1. Add buckets with specified total capacity and increment values.
2. Increment the current capacity of a bucket by clicking on it.
3. Automatically remove a bucket when its capacity reaches the maximum value.


### Prerequisites
Make sure you have the following installed before running the application:

- Node.js (v14 or higher)
- npm (Node Package Manager)


### Getting Started
Follow the steps below to get the ReactLab application up and running on your local machine:

1. Clone this repository to your local machine or download the source code as a ZIP file.
2. Open a terminal and navigate to the project's root directory.
3. Install the project dependencies by running the command: `npm install`
6. Start the development server by running the command: `npm start`
7. Open your browser and go to `http://localhost:3000` to see the ReactLab application.


### Folder Structure
The project structure is organized as follows:

- src: Contains the source code files.
- index.js: Entry point of the application.
- App.js: Main component that renders the game.
- game/Game.js: Component that manages the game logic.
- bucket/Bucket.js: Component representing a bucket.
- status/Status.js: Component that displays the increment animation.
- css: Contains CSS styles for the components.


### Usage
- Click on a bucket to increment its current capacity.
- The bucket's current capacity will increase by the specified increment value.
- If the current capacity reaches the total capacity, the bucket will be automatically removed.

### Acknowledgments
- This project was developed as part of a React lab exercise in FEWD elective course.
- The project was created using [Create React App](https://create-react-app.dev/).

### Contact
For any questions or inquiries, please contact [Ozziekins](https://github.com/Ozziekins)