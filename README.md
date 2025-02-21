# React + Node.js Image Upload App with AWS S3

## Overview 📌
This is a full-stack image upload app built with React, Node.js, and AWS S3. Users can upload images, which are then stored in S3 and can view uploaded images in the UI.

### Screenshot 📸
![homepage](/frontend/public/homepage.png)

### Technologies 💻
- Frontend: React, Chakra UI, Axios
- Backend: Node.js, Express, Multer (for file uploads)
- Storage: AWS S3
- Containerisation: Docker

### Prerequisites 📋
- Docker and Docker Compose installed
- AWS S3 Bucket with appropriate permissions
- AWS credentials configured on your local machine

### Environment Variables 🗝️
Create a `.env` file in the `frontend` and `backend` directories with the following environment variables:

#### Frontend
```REACT_APP_API_URL=http://localhost:5000``` (or your backend URL)

#### Backend
```PORT=5000```

```AWS_ACCESS_KEY_ID=your_access_key_id```

```AWS_SECRET_ACCESS_KEY=your_secret_access_key```

```AWS_BUCKET_NAME=your_bucket_name```

### Running the App 🚀
```bash
# Build and start containers
docker-compose up --build

# Tear down containers
docker-compose down
```
The app will be running at `http://localhost:3000`.

### How to Use 📝
1. Upload images by clicking the "Upload" button
2. Images will be stored in AWS S3 under the specified user ID
3. The UI will display all uploaded images

### Example API Requests 📡
#### Upload Image
```bash
POST http://backend:5000/images
Headers:
  x-user-id: 123
Body:
  image: (binary file)
```
#### Get Images
```bash
GET http://localhost:5000/images
Headers:
  x-user-id: 123
```

### Troubleshooting 🛠
- `ERR_NAME_NOT_RESOLVED` when trying to access the app: Make sure Docker is running and the containers are up
- Images not loading? Ensure `x-user-id` is set in the headers of your requests
️

✨ Made by [Chloe Williams](https://github.com/chlo3williams)
