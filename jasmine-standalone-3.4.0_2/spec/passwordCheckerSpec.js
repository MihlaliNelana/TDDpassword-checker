describe("password checker", function(){
    
    it("password should not be null", function(){
        expect(function(){
            password_is_valid("");
        }).toThrow(new Error("Password should not be null."));
    });

    it("check if password is larger than 8 chars", function(){
        expect(function(){
            password_is_valid("folk21");
        }).toThrow(new Error("Password should be larger than 8 chars"));
    });
    
    it("password should have at least one UPPERCASE letter", function(){
        expect(function(){
            password_is_valid("goldhouse");
        }).toThrow(new Error("Password should have an UPPERCASE"))
    });

    it("password should have at least one lowercase letter", function(){
         expect(function(){
             password_is_valid("GBDFBLZLLJB");
         }).toThrow(new Error("Password should have at least one lowercase letter"));
    });

    it("password should have at least one number", function(){
        expect(function(){
            password_is_valid("MikuFortyFive");
        }).toThrow(new Error("Password should have at least one number"))
    });

    it("password must meet at least three of the criteria", function(){
        expect(password_is_ok("Miku45Nel")).toBe(true);
    })
});