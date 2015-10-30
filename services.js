pricebookApp.service('itemService', function() {
   
    this.getItems = function() {
        var items = {
            "items" : [
            {
            "id" : "1",
            "name" : "Hot Dogs",
            "unit" : "bag",
            "stores" : [
                {
                    "id" : "1",
                    "price" : "1.99"
                },
                {
                    "id" : "2",
                    "price" : "1.50"
                }   
            ]
            },
                {
            "id" : "2",
            "name" : "Apples",
            "unit" : "lbs",        
            "stores" : [
                {
                    "id" : "1",
                    "price" : "0.99"
                },
                {
                    "id" : "2",
                    "price" : "1.20"
                }   
            ]
            }
            ]
        }     
        };
        return items;
    };
});