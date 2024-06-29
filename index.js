const express = require('express');

const app = express();

app.get('/',(request,response)=>{
    response.send('Hello World!')
});

app.listen(process.env.PORT || 3000, () => console.log('App available at http://localhost:3000/'));