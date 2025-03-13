# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Installation and Running the Application

### Prerequisites

Make sure you have Node.js and npm installed. You can download them from [nodejs.org](https://nodejs.org/).

### Steps

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Run the application:**

    ```sh
    npm run dev
    ```

    This will start the development server. Open your browser and navigate to `http://localhost:3000` to see your application.

### Additional Libraries

- **Redux:** We have used Redux for state management. You can find more information and documentation [here](https://redux.js.org/).
- **React Router:** We have used React Router for routing. You can find more information and documentation [here](https://reactrouter.com/).

### Building for Production

To create a production build, run:

```sh
npm run build
