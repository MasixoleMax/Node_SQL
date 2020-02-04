const fetch = require("node-fetch");
const {addNewVisitor, visitorInfo, listAllVisitors, removeById, update, removeAll, viewVisitor} = require('../visitors');

async function postFunc () {
    try {
        
        let myData = addNewVisitor()

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
        console.log(error);
        
    }
}

testfunc();
