# IntenseUs Rest api.

Installation:
Make sure you are having node, nodemon, mongodb install on your machine:

#step to start the server on local:
>npm install
>create the folder ./data/db
>mongod --dbpath ./data/db
>nodemon server.js

#How to Access /api

call /api/login API to get the token then pass the token in next subsequent request


Rest Api

GetAll
   Method : get
    *Artist
        `/api/artist`
    * Vendors/Promotors
        `/api/vendors`
    * Venues
        `/api/venues`
    * Owners
        `/api/owners`
    * ContenPages
        `/api/contentPages`

Post Single Node
    Method: post
        * Artist
            `/api/artist`
            --body
                ```
                {
                    "artistId": "InART100",
                    "profilePath": "https://s3.amazonaws.com/web-amc-intenseus.com/assets/sponser/d28d5e22a4cef4604b765e9058355332",
                    "bio": {
                        "artistType": "actor",
                        "birthPlace": "bombay",
                        "college": "SRKET",
                        "dob": "2014-06-30T09:04:21.000Z",
                        "eyeColor": "blue",
                        "height": 5.9,
                        "nickName": "ayeshvarya",
                        "profession": "female actor",
                        "realName": "aysh bachan",
                        "school": "URK",
                        "university": "Bombay",
                        "social": {
                            "artistFacebook": "aysh_fb",
                            "artistInstagram": "i_m_aysh",
                            "artistTwitter": "aysh_twt"
                        }
                    },
                    "personalInfo": {
                        "children": "no",
                        "fatherName": "ab",
                        "motherName": "na",
                        "siblings": "ab",
                        "spouse": "bb"
                    },
                    "career": {
                        "award": "prince award 2018",
                        "workHistory": "work history"
                    },
                    "gossipGraph": {
                        "blogs": "lot",
                        "facts": "Hey baby, facts, bless",
                        "money": "100",
                        "otherLinks": "ayesh.com",
                        "salaryPerGig": "80000",
                        "tags": "ayes, ab, missworld"
                    }
                }
                ```
        * Vendors/Promotors
            `/api/vendors`
             -- Body
                ```
                    {
                        "companyId": "InCMP100",
                        "vendorType": "Vendors",
                        "vendorLogoPath": "https://s3.amazonaws.com/web-amc-intenseus.com/assets/sponser/d28d5e22a4cef4604b765e9058355332",
                        "companyName": "sk creation",
                        "physicalAddress": "India pune",
                        "officeAddress": "shivaji nagar"
                        "contact": [
                            {
                                "name": "dummy user name",
                                "phone": "00000899999",
                                "email": "user1@gmail.com"
                            },
                            {
                                "name": "vendors",
                                "phone": "678899999",
                                "email": "vendor1@gmail.com"
                            }
                        ]
                    }
                ```
        * Venues
            `/api/venues`
            -- body
                ```
                    {
                        "venueId": "InVenue100",
                        "venueName": "JW Hall",
                        "physicalAddress": "India mh yvtl",
                        "officeAddress": "shivaji",
                        "contact": [
                            {
                                "name": "person1",
                                "phone": "888880",
                                "email": "p1@gmail.com"
                            },
                            {
                                "name": "person2",
                                "phone": "8888888888",
                                "email": "p2@gmail.com"
                            }
                        ]
                    }
                ```
        * Owners
            `/api/owners`
            -- body
               ```
               {
                   "ownerId": "InOnw100",
                   "onwerName": "owner name",
                   "aboutOwner": "this is first owners request",
                   "facebookLink": "facebook.com/onwers",
                   "twitterLink": "twitter.com/owners",
                   "profilePath": "s3.website.com/owners"
               }
               ```
        * ContenPages
            `/api/contentPages`
            --  body
                ```
                {
                    "contentId": "InContent100",
                    "title": "AboutUs",
                    "content": "content of the pages",
                    "pageTitle": "pages tiltel goes here",
                    "metaKeywords": "metat key word goes here for the pages",
                    "metaDescription": "description goes here for the content pages",
                    "status": "active"
                }
                ```
update node
    Method: Put
        *Artist
            `/api/artist/:id`
        * Vendors/Promotors
            `/api/vendors/:id`
        * Venues
            `/api/venues/:id`
        * Owners
            `/api/owners/:id`
        * ContenPages
            `/api/contentPages/:id`

Delete node
    Method: delete
        *Artist
            `/api/artist/:id`
        * Vendors/Promotors
            `/api/vendors/:id`
        * Venues
            `/api/venues/:id`
        * Owners
            `/api/owners/:id`
        * ContenPages
            `/api/contentPages/:id`