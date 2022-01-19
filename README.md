# cymulate home work

available endpoints:

## to login
POST /login 
Request body: {"email": "user1@mail.com", "password": "1111", "role": "admin"}
Response: {"token": JWT token}

## to send phishing email
POST /generate/create
Request body: {"email": <YOUR_VICTUM_EMAIL>}
Header: Authorization Bearer <YOUR_TOKEN>

## to get list of victums
GET /generate/victums
Header: Authorization Bearer "YOUR_TOKEN"

## to catch victum
GET /catch/<VICTUM_ID>
