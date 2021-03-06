define({ "api": [
  {
    "type": "post",
    "url": "/sessions",
    "title": "Generates the access token for a registered user.",
    "name": "getToken",
    "group": "Login",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectID",
            "optional": false,
            "field": "_id",
            "description": "<p>User identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Access token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"usuario\": {\n       \"_id\": \"5df443dc723c8d312c564471\",\n       \"email\": \"teste@email.com\"\n   },\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkzXVCJ9.eyJfaWQiOiI1ZGY0NDNkYzcyM2M4ZDMxMmM1NjQ0NzEiLCJpYXQiOjE1NzYzNjEyNTcsImV4cCI6MTU3Njc5MzI1N30.c1OF1KWFsf5c09Rj3xw9sxow17o0weOpoBv53mj0wAI\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User-Not-Found",
            "description": "<p>The id of the User was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid-Password",
            "description": "<p>Inputed password does not exists in database for this User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized \n{\n  \"error\": \"User not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized \n{\n  \"error\": \"Password is not valid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/sessionRoute.js",
    "groupTitle": "Login"
  },
  {
    "type": "middleware",
    "url": "Middleware",
    "title": "to verify token.",
    "name": "Token-middleware",
    "group": "Token-middleware",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Send Token in the body of the request.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "other-param",
            "description": "<p>Any other param sent in a request.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Ok",
            "description": "<p>Allow sending requests.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  error:  error: \"Token not provided\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  error:  error: \"Token not valid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/userRoutes.js",
    "groupTitle": "Token-middleware"
  },
  {
    "type": "post",
    "url": "/CPF/:id",
    "title": "Register CPF in User(ID).",
    "name": "Post-CPF",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Send Token in the body of the request.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cpf",
            "description": "<p>CPF is required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User identifier.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   success: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  error: \"Error saving User's CPF\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/userRoutes.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/address/:id",
    "title": "Register user's address in User(ID).",
    "name": "Post-User-Address",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Send Token in the body of the request.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cep",
            "description": "<p>User's postal code. It will auto-complete the fields for: street, city, state.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>User's address number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "complement",
            "description": "<p>User's address complement.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updatedAT",
            "description": "<p>Timestamp for when occurred the last update.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User identifier.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   success: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  error: \"Error adding User's address.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/userRoutes.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/birthday/:id",
    "title": "Register user's birthday in User(ID).",
    "name": "Post-User-Birthday",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Send Token in the body of the request.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>User's birthday is required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User identifier.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   success: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  error: \"Error adding User's birthday.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/userRoutes.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/phone/:id",
    "title": "Register user's phone number in User(ID).",
    "name": "Post-User-PhoneNumber",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Send Token in the body of the request.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>User's phone number is required.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updatedAT",
            "description": "<p>Timestamp for when occurred the last update.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User identifier.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   success: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  error: \"Error adding User's phone Number.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/userRoutes.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/amount/:id",
    "title": "Register user's requested amount (cents) in User(ID).",
    "name": "Post-User-Requested-Amount",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Send Token in the body of the request.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestedAmount",
            "description": "<p>User's requested amount in cents.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User identifier.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   success: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  error: \"Error adding User's requested amount.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/userRoutes.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/fullname/:id",
    "title": "Register username in User(ID).",
    "name": "Post-Username",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Send Token in the body of the request.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>User fullname is required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User identifier.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   success: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  error: \"Error to adding user's name\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/userRoutes.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/signup",
    "title": "Register new user.",
    "name": "User-SignUp",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email is required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password is required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The new Users-ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   \"message\": \"User successfully registered\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"Error saving the user\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/userRoutes.js",
    "groupTitle": "Users"
  }
] });
