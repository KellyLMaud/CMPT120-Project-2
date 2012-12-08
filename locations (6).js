      function location0(){//west backyard
        north_button.disabled=true;
        south_button.disabled=false;
        west_button.disabled=true;
        east_button.disabled=false;
        if(first_visit_location0 === true){
          first_visit_location0 = false;
          score = score + 5;
        }        
      }
      
      function location1(){//middle backyard
        north_button.disabled=true;
        south_button.disabled=false;
        west_button.disabled=false;
        east_button.disabled=false;
        if(first_visit_location1 === true){
          first_visit_location1 = false;
          score = score + 5;
        }
      }
      
      function location2(){//east backyard
        north_button.disabled=true;
        south_button.disabled=false;
        west_button.disabled=false;
        east_button.disabled=true;
        if(first_visit_location2 === true){
          first_visit_location2 = false;
          score = score + 5;
        }
      }
      
      function location3(){//parents bedroom
        north_button.disabled=false;
        south_button.disabled=false;
        west_button.disabled=true;
        east_button.disabled=false;
        if(first_visit_location3 === true){
          first_visit_location3 = false;
          score = score + 5;
        }
      }
      
      function location4(){//mud room
        north_button.disabled=false;
        south_button.disabled=false;
        west_button.disabled=false;
        east_button.disabled=false;
        if(first_visit_location4 === true){
          first_visit_location4 = false;
          score = score + 5;
        }         
      }
      
      function location5(){//kitchen
        north_button.disabled=false;
        south_button.disabled=false;
        west_button.disabled=false;
        east_button.disabled=true;
        if(first_visit_location5 === true){
          first_visit_location5 = false;
          score = score + 5;
        }
      }
      
      function location6(){//bathroom
        north_button.disabled=false;
        south_button.disabled=false;
        west_button.disabled=true;
        east_button.disabled=false;
        if(first_visit_location6 === true){
          first_visit_location6 = false;
          score = score + 5;
        }
      }
      
      function location7(){//living room
        north_button.disabled=false;
        south_button.disabled=false;
        west_button.disabled=false;
        east_button.disabled=false;
        if(first_visit_location7 === true){
          first_visit_location7 = false;
          score = score + 5;
        }    
      }
      
      function location8(){//game room
        north_button.disabled=false;
        south_button.disabled=false;
        west_button.disabled=false;
        east_button.disabled=true; 
        if(first_visit_location8 === true){
          first_visit_location8 = false;
          score = score + 5;
        }         
      }
      
      function location9(){//kids room
        north_button.disabled=false;
        south_button.disabled=true;
        west_button.disabled=true;
        east_button.disabled=false;
        if(first_visit_location9 === true){
          first_visit_location9 = false;
          score = score + 5;
        }  
      }
      
      function location10(){//foyer
        north_button.disabled=false;
        south_button.disabled=true;
        west_button.disabled=false;
        east_button.disabled=false;
        if(first_visit_location10 === true){
          first_visit_location10 = false;
          score = score + 5;
        }         
      }
      
      function location11(){//office
        north_button.disabled=false;
        south_button.disabled=true;
        west_button.disabled=false;
        east_button.disabled=true;
        if(first_visit_location11 === true){
          first_visit_location11 = false;
          score = score + 5;
        }          
      }