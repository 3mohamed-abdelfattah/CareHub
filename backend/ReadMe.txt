
POST http://localhost:5000/api/registeration

    "firstname": " ",
    "lastname" : " ",
    "email"    : " ",
    "password" : " ",
    "passwordAgin": " "



POST http://localhost:5000/api/login

    "email" :
    "password" :




GET http://localhost:5000/api/users   ===>   to get all users
             ** Deafult is 10 Users pare page **


GET http://localhost:5000/api/users/:id   ===>   to get One user by id



GET http://localhost:5000/api/user/:id   ===>   to get One user by id with ( Email and Role )
             



GET http://localhost:5000/api/users?limit=(Number of users)&page=(how many users apper in page)

    ex : http//localhost:5000/api/users?limit=3&page=1  ===> it will send 3 users in page
    --you can also change nuber of pages to skip the first 3 users--





            -- Update user info --
PATCH http://localhost:5000/api/update/:(id- mail)  <-- UserID or email

    "newFirstname" : " ",       **\ OPTINAL /**
    "newLastname"  : " ",       **\ OPTINAL /**
    "newEmail"     : " " ,      **\ OPTINAL /**
    "newPassword"  : " ",       **\ OPTINAL /**
    "newRole"  :  " User , Admin , Master , 'Doctor'  'Hospital' 'Lab' 'Center' 'Company' 'Pharmacy          **\ OPTINAL /**       ** it MUST be written like this**




            -- delete User --
DELETE http://localhost:5000/api/delete/:id  <-- User ID



______________________________________________________________________

            -- All Doctors by Specialization --
GET http://localhost:5000/api/doctors/:collection   <-- Collection name





                --- to get One Doctor by id ---
GET http://localhost:5000/api/doctors/:collection/:id  <-- Doctor Id
                                            ^
                                            |
                                            |
                                        Specialization 



                -- Update Doctor info --
PATCH http://localhost:5000/api/doctors/:collection/:id  <-- Admin/Master Id

    "D_id"      : "Doctor id"       **\ REQUIERD /**
    "address"        : " ",         **\ OPTINAL /**
    "phoneNumber"    : " ",         **\ OPTINAL /**


                -- Get hospitals info --
GET http://localhost:5000/api/hospitals 
GET http://localhost:5000/api/hospitals/:id 

            -- Get radiologycenters info --
GET http://localhost:5000/api/radiologycenters
GET http://localhost:5000/api/radiologycenters/:id

            -- Get companies info --
GET http://localhost:5000/api/companies
GET http://localhost:5000/api/companies/:id

        -- Get clinics info --
GET http://localhost:5000/api/clinics
GET http://localhost:5000/api/clinics/:id

            -- Get labs info --
GET http://localhost:5000/api/labs
GET http://localhost:5000/api/labs:id

            -- Get Clinics and medicalCenters info --
GET http://localhost:5000/api/c&mc
GET http://localhost:5000/api/c&mc/:id


______________________________________________________________________

                -- complaints  --

POST http://localhost:5000/api/complaint
    "name" 
    "email"
    "phoneNumber"
    "problem" 


GET http://localhost:5000/api/complaint


______________________________________________________________________

                -- Orders  --

GET http://localhost:5000/api/orders  ---> Get all orders

GET http://localhost:5000/api/orders/:id <-- Order Id

POST http://localhost:5000/api/orders
    name
    order
    address
    image
    phoneNumber 


GET http://localhost:5000/api/order-image/:id ---> Get image Name from order 



GET http://localhost:5000/uploads/(Image name) ---> to get image




______________________________________________________________________

                --send Messages --
POST http://localhost:5000/api/sendmsg/:id  (receverID)
    "message" : " "


        all messages from other users 
GET http://localhost:5000/api/sendmsg/:senderID/:reseverID 


        ---*for sidebar*---
GET http://localhost:5000/api/otherusers/:id  (All users exept the currently sign in user)

        ---messages from one user ---
GET http://localhost:5000/api/messages/:senderID/:receiverId



______________________________________________________________________
                    *** User comments ***


POST http://localhost:5000/api/comment 
name   email   comment   **\ REQUIERD /**

GET http://localhost:5000/api/comments  ----> Get all comments

GET http://localhost:5000/api/comments/:id  ----> Get comment by id



