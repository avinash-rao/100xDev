const express = require('express')
const zod = require('zod');

const app = express();

//rate limiting
let numberOfRequests = 0;


// Middleware
function calculateRequests(req, res, next) {
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}

const schema = zod.array(zod.number());

const userSchema = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal('IN').or(zod.literal('US')),
    kidneys: zod.array(zod.number())
})

app.post('/health-checkup', function(req, res) {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    res.send({
        response
    })
})

// calculateRequests method is called before the control enters this method handler
app.get('/requests', calculateRequests, function(req, res) {
    console.log('Entered ')
});


// global catches (Error-Handling Middleware)
// The control would reach here in case of any error is thrown by program. Also, in case of custom error
app.use(function(err, req, res, next) {
    res.json({
        msg: "Sorry something is up with the server"
    });
})


app.listen(3000, () => {
    console.log('App started at port 3000');
});