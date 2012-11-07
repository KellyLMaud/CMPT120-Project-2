//ALL THE DIFFERENT LOCATIONS


      function location_bedroom(){ //(0,3)
	north_button.disabled=false;
	south_button.disabled=false;
	west_button.disabled=true;
	east_button.disabled=false;
        var msg="You have entered the parents bedroom where there is a COMFORTER. "+
		"Enter -take comforter- to add the comforter to your inventory.";
        updateDisplay(msg);
      }
      
      function location_back_yard1(){ //(0,4)
	north_button.disabled=true;
	south_button.disabled=false;
	west_button.disabled=true;
	east_button.disabled=false;
        var msg = "You are in the west side of the back yard.";
        updateDisplay(msg);
      }
      
      function location_back_yard2(){ //(1,4)
	north_button.disabled=true;
	south_button.disabled=false;
	west_button.disabled=false;
	east_button.disabled=false;
        var msg = "You are in the middle of the back yard.";
        updateDisplay(msg);
      }
      
      function location_back_yard3(){ //(2,4)
	north_button.disabled=true;
	south_button.disabled=false;
	west_button.disabled=false;
	east_button.disabled=true;
        var msg = "You are in the east side of the back yard.";
        updateDisplay(msg);
      }
      
      function location_kitchen(){ //(2,3)
	north_button.disabled=false;
	south_button.disabled=false;
	west_button.disabled=false;
	east_button.disabled=true;
        var msg = "You have entered the kitchen where there is a CHAIR. "+
		  "Enter -take chair- to add the chair to your inventory.";
        updateDisplay(msg);
      }
      
      function location_bathroom(){ //(0,2)
	north_button.disabled=false;
	south_button.disabled=false;
	west_button.disabled=true;
	east_button.disabled=false;
        var msg = "You have entered the bathroom.";
        updateDisplay(msg);
      }
      
      function location_kids_bedroom(){ //(0,1)
	north_button.disabled=false;
	south_button.disabled=true;
	west_button.disabled=true;
	east_button.disabled=false;
        var msg = "You have entered the kids bedroom.";
        updateDisplay(msg);          
      }
      
      function location_mud_room(){ //(1,3)
	north_button.disabled=false;
	south_button.disabled=false;
	west_button.disabled=false;
	east_button.disabled=false;
        var msg = "You have entered the mudroom where there is a BROOMSTICK. "+
		  "Enter -take broom- to add the broomstick to your inventory.";
        updateDisplay(msg);          
      }
      
      function location_game_room(){ //(2,2)
	north_button.disabled=false;
	south_button.disabled=false;
	west_button.disabled=false;
	east_button.disabled=true;
        var msg = "You have entered the game room";
        updateDisplay(msg);          
      }
      
      function location_office(){ //(2,1)
	north_button.disabled=false;
	south_button.disabled=true;
	west_button.disabled=false;
	east_button.disabled=true;
        var msg = "You have entered the office where there is STRING. "+
		  "Enter -take string- to put the string in your inventory.";
        updateDisplay(msg);          
      }
      
      function location_foyer(){ //(1,1)
	north_button.disabled=false;
	south_button.disabled=true;
	west_button.disabled=false;
	east_button.disabled=false;
        var msg = "You have entered the foyer.";
        updateDisplay(msg);          
      }
      
      function location_living_room(){ //(1,2)
	north_button.disabled=false;
	south_button.disabled=false;
	west_button.disabled=false;
	east_button.disabled=false;
        var msg = "You are in the living room where there is a couch and "+
		  "this is where you are going to make the fort.";
        updateDisplay(msg);          
      }