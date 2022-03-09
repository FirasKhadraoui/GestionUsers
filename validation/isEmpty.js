const isEmpty = (value) =>  //value=req.body.Email
value === null || value === undefined
|| typeof(value) === "object" && Object.keys(value).length === 0
|| typeof(value) === "string" && Object.trim().length === 0

module.exports = isEmpty ;