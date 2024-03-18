Describe(" API Authentication", () =>{ 

// Test case for Basic Authentication
it("Basic Authentication", () =>{
        
    // Making a request with basic authentication
    cy.request({
        method: 'GET',
        url: 'https://postman-echo.com/basic-auth',
        auth: {
            user: 'postman',
            pass: 'password'
        }
    })
    .then((response) => {
        // Verifying the response status
        expect(response.status).to.eq(200);
        // Verifying if the authentication was successful
        expect(response.body.authenticated).to.eq(true);
    })
})

// Test case for Digest Authentication
it("Digest Authentication", () =>{
    
    // Making a request with digest authentication
    cy.request({
        method: 'GET',
        url: 'https://postman-echo.com/basic-auth',
        auth: {
            username: 'postman',
            password: 'password',
            method: 'digest'
        }
    })
    .then((response) => {
        // Verifying the response status
        expect(response.status).to.eq(200);
        // Verifying if the authentication was successful
        expect(response.body.authenticated).to.eq(true);
    })
})

// Test case for API Key Authentication
it("API Key Auth", () => {

    // Making a request with API key authentication
    cy.request(
        {
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=default',
            qs: {
                appid: '434350f16cd099454042af1e9a5ed8c2'
            }
        
        })
        .then((response) => {
            // Verifying the response status
            expect(response.status).to.eq(200);
        });
});
});
