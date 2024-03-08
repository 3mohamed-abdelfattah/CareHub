|----------------- NORMAL Users -----------------|

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
             


GET http://localhost:5000/api/users?limit=(Number of users)&page=(how many users apper in page)

    ex : http//localhost:5000/api/users?limit=3&page=1  ===> it will send 3 users in page
    --you can also change nuber of pages to skip the first 3 users--


|----------------- ADMINS -----------------|

            -- Update user info --
PATCH http://localhost:5000/api/update/:id  <-- Admin ID

    "id"  : "USER id",        **\ REQUIERD /**
    "newFirstname" : " ",       **\ OPTINAL /**
    "newLastname"  : " ",       **\ OPTINAL /**
    "newEmail"     : " " ,      **\ OPTINAL /**
    "newPassword"  : " ",       **\ OPTINAL /**
    "newRole"  :  " User , Admin , Master " ,           **\ OPTINAL /**       ** it MUST be written like this**

            -- delete User --
DELETE http://localhost:5000/api/delete/:id  <-- Admin ID

    "id"  : "USER id",        **\ REQUIERD /**


|----------------- Doctors -----------------|


            -- All Doctors by Specialization --
GET http://localhost:5000/api/doctors/:collection   <-- Collection name


                --- to get One Doctor by id ---
GET http://localhost:5000/api/doctors/:collection/:id  <-- Doctor Id


                -- Update Doctor info --
PATCH http://localhost:5000/api/doctors/:collection/:id  <-- Admin Id

    "D_id"      : "Doctor id"       **\ REQUIERD /**
    "address"        : " ",         **\ OPTINAL /**
    "phoneNumber"    : " ",         **\ OPTINAL /**
