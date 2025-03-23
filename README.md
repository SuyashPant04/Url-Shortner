# URL Shortener

**Frontend:** [https://url-shortner-flame-six.vercel.app/](https://url-shortner-flame-six.vercel.app/)

**Backend:** [https://url-shortner-sx48.onrender.com/](https://url-shortner-sx48.onrender.com/)

## Brief Explanation
This project is a simple **URL shortener** that converts long URLs into short, unique URLs. It consists of a **backend** built with **Node.js, Express, and MongoDB**, and a **frontend** built with **React (Vite)**. The backend generates short codes for given URLs and redirects users when they access the short URL. The frontend provides a user-friendly interface for generating and accessing shortened URLs.

---

## Steps to Run the Project Locally

### **1. Clone the Repository**
```bash
git clone https://github.com/SuyashPant04/Url-Shortner.git
cd Url-Shortner
```

### **2. Setup Backend**
```bash
cd backend
npm install
```

#### **3. Configure Environment Variables**
Create a `.env` file in the backend directory with the following values:
```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:8000
FRONTEND_BASE_URL=http://localhost:5173
```

#### **4. Start Backend Server**
```bash
npm run dev
```

### **5. Setup Frontend**
```bash
cd ../frontend
npm install
```

#### **6. Configure Environment Variables**
Create a `.env` file in the frontend directory with the following:
```env
VITE_BASE_URL=http://localhost:8000
```

#### **7. Start Frontend Server**
```bash
npm run dev
```

### **8. Access the Application**
- **Frontend:** Open [http://localhost:5173](http://localhost:5173) in your browser.
- **Backend API:** Runs on `http://localhost:8000`.

---

## API Endpoints

### **1. Shorten URL**
#### **Request:**
```http
POST /shorten
```
**Body:**
```json
{
  "longUrl": "https://example.com"
}
```

#### **Response:**
```json
{
  "shortUrl": "http://localhost:8000/abc123"
}
```

---

### **2. Redirect to Original URL**
#### **Request:**
```http
GET /:shortCode
```
Example:
```
GET /abc123
```
#### **Response:**
Redirects to `https://example.com`.

---

---

## Technologies Used
- **Backend:** Node.js, Express, MongoDB
- **Frontend:** React (Vite), Axios
- **Deployment:** Render (backend), Vercel (frontend)

---

### **Author:**
**Suyash Pant**
