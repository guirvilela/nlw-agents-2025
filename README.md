# NLW Agents

This project was developed during the **NLW (Next Level Week)** event hosted by [Rocketseat](https://www.rocketseat.com.br/). NLW Agents is a project to demonstrate a modern web application setup.

## Technical Stack

The project is a monorepo divided into a `server` (backend) and a `web` (frontend) application.

### Backend (`server`)

- **Framework:** [Fastify](https://www.fastify.io/)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **Validation:** [Zod](https://zod.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

### Frontend (`web`)

- **Framework:** [React](https://react.dev/)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router](https://reactrouter.com/)
- **Data Fetching:** [TanStack Query](https://tanstack.com/query/latest)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## Project Structure

The project is organized as a monorepo with two main packages:

- `./server`: Contains the backend application built with Fastify.
- `./web`: Contains the frontend application built with React and Vite.

## Setup and Configuration

### Prerequisites

- [Node.js](https://nodejs.org/) (v20.x or higher)
- [Docker](https://www.docker.com/) and Docker Compose

### Backend Setup

1.  **Navigate to the server directory:**

    ```bash
    cd server
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Setup environment variables:**
    Copy the example environment file and fill in the required values.

    ```bash
    cp .env.example .env
    ```

4.  **Start the database:**
    Make sure Docker is running and execute:

    ```bash
    docker-compose up -d
    ```

5.  **Run database migrations:**
    To apply the latest database schema changes, you can use `drizzle-kit`. First, generate the migration files:

    ```bash
    npx drizzle-kit generate
    ```

    Then, apply the migrations to the database:

    ```bash
    npx drizzle-kit push
    ```

    _Note: For development, you can also use `npm run studio` to open a GUI to manage your database._

6.  **Seed the database (optional):**
    To populate the database with initial data, run:

    ```bash
    npm run db:seed
    ```

7.  **Start the server:**
    ```bash
    npm run dev
    ```
    The server will be running at `http://localhost:3333`.

### Frontend Setup

1.  **Navigate to the web directory:**

    ```bash
    cd web
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the client:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.
