//ALL THE DIFFERENT LOCATIONS
      function location_camp(){
        var msg="You are back at camp";
        updateDisplay(msg);
      }
      
      function location_field(){
        var msg = "You have entered a field where you see wild mice and "+
                  "rabbits along with some edible vegitation. If you had a "+
                  "knife and rope you can make a snare and catch a rabbit for food.";
        updateDisplay(msg);
      }
      
      function location_stream(){
        var msg = "You have entered a clear area by the stream. " +
                  "If you have a pot you can take some water back to " +
                  "camp and boil it to clean it. Also if you have a branch " +
                  "and rope you can make a fishing pole and go fishing.";
        updateDisplay(msg);
      }
      
      function location_forest(){
        var msg = "You have entered a forest where there are trees. " +
                   "If you had a knife you can cut down small branches to make a fire " +
                   "to cook your food and if you have rope you can use the branches to make a shelter.";
        updateDisplay(msg);
      }
      
      function location_crash(){
        var msg = "You have entered the crash site of your plane. " +
                   "There is plenty of resources that you can collect from the plane. " + 
                   "There is a knife, rope, a first aid kit, fuel and maybe even a pot.";
        updateDisplay(msg);
      }
      
      function location_second_field(){
        var msg = "You have entered another field where there is plenty "+
                  "of vegetation and some wild life that you may be able "+
                  "to catch.";
        updateDisplay(msg);          
      }
      
      function location_swamp(){
         var msg = "You have come to the edge of a swamp that you cannot pass";
         updateDisplay(msg);
      }