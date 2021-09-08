get('/blog').to.json({ title: 'svrx' });
get('/blog2').to.send({ title: 'this is a blog' });
get('/').to.sendFile('./2.html')
