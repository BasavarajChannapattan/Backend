import * as chai from 'chai'; // Import chai as a namespace
const { expect } = chai; // Extract expect from chai
import chaiHttp from 'chai-http'; // Import chai-http

chai.use(chaiHttp); // Use chai-http middleware

describe("Add Food", function() {
    it("Should successfully create a food with the same name",
        function (done) {
            chai.request("http://localhost:3000") // Use the app instance instead of a URL
                .post("/food")
                .set("Accept", "application/json")
                .send({
                    name: "Masala Dosa",
                    price: "120 rupees"
                })
                .end(function (err, res) {
                    expect(res).to.have.status(200); // Check for status 200
                    done(); // Call done to signal Mocha that the test is finished
                });
        });
});
