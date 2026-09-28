# Flipkart DevOps Project

## Project Overview

This project is a Flipkart-like e-commerce application developed to demonstrate a complete application deployment and DevOps workflow.

The project contains a frontend, backend, database integration, Docker containers, DockerHub image management, Jenkins CI/CD, and AWS EC2 deployment.

## Architecture

```text
Developer
    |
    | Git Push
    v
GitHub Repository
    |
    v
Jenkins
    |
    |-- Checkout
    |-- Build
    |-- Test
    |-- Docker Build
    |-- Docker Push
    |
    v
DockerHub
    |
    v
AWS EC2
    |
    |-- Frontend Container
    |
    |-- Backend Container
    |
    v
MongoDB Atlas
```

## Technologies Used

* Frontend: React
* Backend: Node.js / Express
* Database: MongoDB Atlas
* Version Control: Git and GitHub
* CI/CD: Jenkins
* Containerization: Docker
* Container Registry: DockerHub
* Cloud Platform: AWS EC2
* Development Environment: VS Code

## Project Development Process

### 1. Created the Project Structure

First, I created the project structure with separate frontend and backend directories.

```text
flipkart-devops-project/
│
├── frontend/
├── backend/
├── Jenkinsfile
├── README.md
└── docker-compose.yml
```

The frontend handles the user interface, while the backend handles APIs and database communication.

### 2. Developed the Frontend

I developed the Flipkart-like frontend using React.

The frontend contains:

* Home page
* Product section
* Product cards
* Login page
* Navigation bar
* Categories
* Cart functionality
* Responsive UI

### 3. Developed the Backend

I created a Node.js and Express backend to handle application APIs.

The backend is responsible for:

* API requests
* User-related operations
* Product-related operations
* Cart-related operations
* Communication with MongoDB Atlas

The frontend communicates with the backend through HTTP APIs.

### 4. Connected MongoDB Atlas

MongoDB Atlas was used as the cloud database.

The application backend connects to MongoDB Atlas using a database connection string stored in environment variables.

```text
React Frontend
       |
       | API Request
       v
Node.js / Express Backend
       |
       | Database Query
       v
MongoDB Atlas
```

### 5. Tested the Application Locally

Before containerizing the application, I tested the frontend and backend locally.

I verified:

* Frontend loading
* Login page
* Product display
* API communication
* Backend connectivity
* Database connectivity

### 6. Created Dockerfiles

I created Dockerfiles for the frontend and backend so that both applications could run inside Docker containers.

```text
Frontend
   |
Dockerfile
   |
Docker Image
   |
Frontend Container
```

```text
Backend
   |
Dockerfile
   |
Docker Image
   |
Backend Container
```

### 7. Built Docker Images

I built Docker images for the frontend and backend.

Example:

```bash
docker build -t flipkart-frontend ./frontend
```

```bash
docker build -t flipkart-backend ./backend
```

### 8. Tested Docker Containers

After building the images, I ran the containers and verified that the application was working through Docker.

I checked:

* Container status
* Application ports
* Frontend access
* Backend API connectivity
* Container logs

### 9. Created DockerHub Images

After successfully testing the Docker images, I tagged and pushed the required image to DockerHub.

DockerHub was used as the container image registry.

```text
Local Docker Image
       |
       v
DockerHub
       |
       v
AWS EC2
```

### 10. Created AWS EC2 Environment

I created an AWS EC2 instance to host the application.

The EC2 instance was configured as the deployment server for the Docker containers.

Docker was installed and configured on the EC2 instance.

### 11. Deployed Containers on AWS EC2

The Docker images were pulled from DockerHub and used to run the application containers on the EC2 instance.

```bash
docker pull <docker-image>
```

Then the containers were started on the EC2 server.

```text
AWS EC2
   |
   |-- Frontend Container
   |
   |-- Backend Container
```

### 12. Configured Jenkins

Jenkins was used to automate the application build and Docker image process.

The Jenkins pipeline performs the required stages such as:

```text
Checkout
   ↓
Build
   ↓
Test
   ↓
Docker Build
   ↓
Docker Push
```

The Jenkins pipeline uses the GitHub repository as the source-code repository.

### 13. Created Jenkins Pipeline

A Jenkinsfile was used to define the pipeline stages.

The pipeline checks out the project source code and performs the required build and Docker operations.

The Docker credentials were configured in Jenkins so that Jenkins could authenticate with DockerHub.

### 14. Verified the Deployment

After deployment, I accessed the application through the EC2 server and verified that the frontend was available.

I also verified that the frontend could communicate with the backend and that the backend could communicate with MongoDB Atlas.

## Final DevOps Flow

```text
Developer
    |
    | Git Push
    v
GitHub
    |
    v
Jenkins
    |
    | Checkout
    | Build
    | Test
    | Docker Build
    | Docker Push
    v
DockerHub
    |
    | Pull Image
    v
AWS EC2
    |
    |-- Frontend Container
    |
    |-- Backend Container
    |
    v
MongoDB Atlas
```

## Key DevOps Concepts Demonstrated

* Git and GitHub
* Version Control
* Jenkins CI/CD
* Docker Containerization
* DockerHub
* AWS EC2
* MongoDB Atlas
* Frontend and Backend Integration
* API-based Communication
* Cloud Deployment

## Project Outcome

The Flipkart-like application was successfully containerized using Docker and deployed on AWS EC2. Jenkins was used to automate the build and Docker image workflow, while MongoDB Atlas was used as the cloud database.
