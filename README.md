# Exam Management API  

## Table of Contents  
1. [Contributors](#contributors)  
2. [API Documentation](#api-documentation)  
3. [Submission](#submission)  

## Contributors  
- **Clint Brian Castillo**: GET
- **Ivan Langomez**: UPDATE/PUT
- **Alexis Patac**: POST 

## API Documentation  

### Base URL 

### Endpoints  

#### 1. GET `/`  
- **Description**: Returns a welcome message for the API.  
- **Response**:  
    - **Status**: `200 OK`  
    - **Body**:  
    ```json  
    {  
      "message": "Group B API"  
    }  
    ```  

#### 2. GET `/exams`  
- **Description**: Retrieves a list of all exams.  
- **Response**:  
    - **Status**: `200 OK`  
    - **Body**:  
    ```json  
    [  
      { "id": 1, "name": "Math Exam 1", "date": "2023-10-01" },  
      { "id": 2, "name": "Math Exam 2", "date": "2023-10-02" },  
      { "id": 3, "name": "Math Exam 3", "date": "2023-10-03" }  
    ]  
    ```  

#### 3. POST `/exams`  
- **Description**: Creates a new exam.  
- **Request**:  
    - **Body**:  
    ```json  
    {  
      "name": "New Exam",  
      "date": "2023-11-01"  
    }  
    ```  
- **Response**:  
    - **Status**: `201 Created`  
    - **Body**:  
    ```json  
    { "id": 4, "name": "New Exam", "date": "2023-11-01" }  
    ```  
- **Error Response**:  
    - **Status**: `400 Bad Request`  
    - **Body**:  
    ```json  
    { "error": "Name and date are required" }  
    ```  

#### 4. PUT `/exams/:id`  
- **Description**: Updates an existing exam by ID.  
- **Request**:  
    - **URL Parameter**: `id` - ID of the exam to update.  
    - **Body**:  
    ```json  
    {  
      "name": "Updated Exam",  
      "date": "2023-11-15"  
    }  
    ```  
- **Response**:  
    - **Status**: `200 OK`  
    - **Body**:  
    ```json  
    { "id": 1, "name": "Updated Exam", "date": "2023-11-15" }  
    ```  
- **Error Response**:  
    - **Status**: `404 Not Found`  
    - **Body**:  
    ```json  
    { "message": "Exam not found" }  
    ```  

## Submission  
Submit your GitHub repository link below:  
- [Your GitHub Repository](https://github.com/Rodriguez1718/exam-group-B-api)   
