{
  "_id": ObjectId,
  "name": String,
  "email": String,
  "education": String,
  "skills": [String],
  "projects": [
    {
      "title": String,
      "description": String,
      "skill": [String],
      "links": [String]
    }
  ],
  "work": [String],
  "links": {
    "github": String,
    "linkedin": String,
    "portfolio": String
  },
  "__v": Number
}
