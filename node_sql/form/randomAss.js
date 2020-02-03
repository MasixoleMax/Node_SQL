async function testAss () {
    try {
        
        let myData = {
            name: 'Thandiwe',
            city: 'LA',
            age: 21
        }

        let me = await fetch("http://localhost:8086/test",{

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                
              },

              body: JSON.stringify(myData)
        });

        let obj = me.json()
        console.log(me);

    } catch (error) {
        console.log(error + "this is an error");
        
    }
}

testAss();