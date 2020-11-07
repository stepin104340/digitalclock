



describe('To test class customer', () => {
    let cust = null;
    it('should check partytime is of valid format', () => {
    const cust = new digitalclock("Let's party!");
     
    expect(cust.partytime).toMatch("^[a-zA-Z]+(([' !]+([a-zA-Z ])?([a-zA-Z]*)))*$");
     
     });
     it('should check wakeup is of valid format', () => {
        const cust = new digitalclock("Wake up!");
         
        expect(cust.wakeuptime).toMatch("^[a-zA-Z]+(([' !]+([a-zA-Z ])?([a-zA-Z]*)))*$");
         
    });
    it('should check lunchtime is of valid format', () => {
        const cust = new digitalclock("Let's have some lunch!");
         
        expect(cust.lunchtime).toMatch("^[a-zA-Z]+(([' !]+([a-zA-Z ])?([a-zA-Z]*)))*$");
         
    });
    it('should check naptime is of valid format', () => {
        const cust = new digitalclock("Sleep tight!");
         
        expect(cust.naptime).toMatch("^[a-zA-Z]+(([' !]+([a-zA-Z ])?([a-zA-Z]*)))*$");
         
    });
    it('should check time is of valid format', () => {
        const cust1 = new digitalclock("12:48:55");
         
        expect(cust1.time).toMatch("(((^[01-12]+)([:])(^[00-59]+)([:])(^[00-59]+)?([a-zA-Z]*)))*$");
         
    });
    it('should check whether lets party has min 12 characters', () => {
    const cust = new digitalclock("Let's party!");
    expect(cust.partytime.length).toBe(12);
     
     });
     it('should check whether wake up has min 8 characters',()=>{
        const cust=new digitalclock("Let's party!","Wake up!");
       expect(cust.wakeuptime.length).toBe(8);
    })
    it('should check whether lunch time has min 22 characters',()=>{
        const cust=new digitalclock("Let's party!","Wake up!","Let's have some lunch!");
       expect(cust.lunchtime.length).toBe(22);
    })
    it('should check whether sleep time has min 12 characters',()=>{
        const cust=new digitalclock("Let's party!","Wake up!","Let's have some lunch!","Sleep tight!");
       expect(cust.naptime.length).toBe(12);
    })
    it('should check whether sleep time has min 8 characters',()=>{
        const cust=new digitalclock("Let's party!","Wake up!","Let's have some lunch!","Sleep tight!","12:48:55");
       expect(cust.time.length).toBe(8);
    })
    
    
    });