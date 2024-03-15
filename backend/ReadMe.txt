
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
PATCH http://localhost:5000/api/update/:id  <-- User ID

    "newFirstname" : " ",       **\ OPTINAL /**
    "newLastname"  : " ",       **\ OPTINAL /**
    "newEmail"     : " " ,      **\ OPTINAL /**
    "newPassword"  : " ",       **\ OPTINAL /**
    "newRole"  :  " User , Admin , Master , Doctor " ,           **\ OPTINAL /**       ** it MUST be written like this**




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

            -- Get radiologycenters info --
GET http://localhost:5000/api/radiologycenters

            -- Get companies info --
GET http://localhost:5000/api/companies

        -- Get clinics info --
GET http://localhost:5000/api/clinics

            -- Get labs info --
GET http://localhost:5000/api/labs

            -- Get Pharmacies info --
GET http://localhost:5000/api/Pharmacies


______________________________________________________________________

                -- complaints  --

POST http://localhost:5000/api/complaint
    "name" 
    "email"
    "phoneNumber"
    "problem" 


GET http://localhost:5000/api/complaint


