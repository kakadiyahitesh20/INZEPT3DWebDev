/*
import test from 'ava';
import server from 'index';

const requestDefaults = {
    method: 'POST',
    url: '/subscribe',
    payload: {}
};

test('endpoint test | POST /subscribe | empty payload -> 400 Bad Request', t => {
    const request = Object.assign({}, requestDefaults);

return server.inject(request)
    .then(response => {
    t.is(response.statusCode, 400, 'status code is 400');
});
});

test('endpoint test | POST /subscribe | invalid email address -> 400 Bad Request', t => {
    const request = Object.assign({}, requestDefaults, {
        payload: {
            email: 'a'
        }
    });

return server.inject(request)
    .then(response => {
    t.is(response.statusCode, 400, 'status code is 400');
});
});

test('endpoint test | POST /subscribe | valid email address -> 200 OK', t => {
    const request = Object.assign({}, requestDefaults, {
        payload: {
            email: 'test@example.com'
        }
    });

return server.inject(request)
    .then(response => {
    t.is(response.statusCode, 200, 'status code is 200');
});
});*/
