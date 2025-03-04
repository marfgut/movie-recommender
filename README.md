# ★⭒ Movie mood recommender ⭑✰
This mini-application, built with *Electron*, helps you reflect on your current and future happiness, and recommends a movie based on your answers. It includes sound effects and interactive animations to make the experience more engaging.

<p align="center">
  <img src="demo.gif" width="400">
</p>

## Files
- `main.js`: Configures the application window using *Electron*.
- `index.html`: Defines the structure of the user interface.
- `script.js`: Contains all the application logic, including movie selection and event handling.
- `style.css`: Defines the visual styles and animations.
- `package.json`: Specifies the dependencies and scripts required for the application.
- `package-lock.json`: Ensures the consistency of installed dependencies.
- `imágenes.zip/`: Contains the visual resources used in the application.
- `audios.zip/`: Contains interface sound effects (clicks, typing and warnings). The movie-related audio files referenced in the script are not included.

## Usage guide  
1. Install [Node.js](https://nodejs.org/es).  
2. Open a terminal in the project folder and install the necessary dependencies by running:  
   ```sh
   npm install
3. Start the application by running:
   ```sh
    npm start

## Customization
You can modify the recommended movies and associated sounds by editing the arrays in `script.js` and adding new resources in the corresponding folders.
