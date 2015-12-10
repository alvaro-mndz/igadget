$('./body') {
  insert_top("header", class: "mw-header") {
#    Move stuff here
  }

  $("//div[@id='SearchForm']/form//input[@type='image']") {
    wrap("div", class: "mw_search_btn sprites-search")
    attribute("style", "opacity:0;")
  }

  $(".//div[@id='Header']") {
    $("./div[@id='Logo']") {
      # Move top menu into #Logo container
      move_here("../../../div[@id='TopMenu']", "bottom") {
        # Remove unwanted top menu items from upper menu
        remove(".//li[not(contains(@class, 'CartLink') or contains(@class, 'First'))]")

	        $("./ul") {
		        $("./li[@class='CartLink']") {
		        	$("./a") {
		        		wrap("div", class: "sprites-cart") 
		        		text("")
		        		add_class("top-item")
		        	}
		        	unwrap()
		        }
		        $("./li[@class='First']") {
		        	$("./a") {
		        		wrap("div", class: "sprites-user") 
		        		text("")
		        	}
		        	unwrap()
		        }
		        unwrap()
	        }
	        unwrap()

      }

      $("./div[@id='LogoContainer']") {
      	move_here("../div[@class='sprites-cart']", "top") {add_class("top-item")}
      	move_here("../div[@class='sprites-user']", "top") {add_class("top-item")}

      }
 	  remove("./br")
	}

    remove("./br")

    insert("div", class: "mw_header_bottom") {
      attribute("data-ur-set", "toggler")
      insert("div", class: "mw_search")


      	insert("div", class: "sprites-menu", data-ur-toggler-component: "button") { add_class("FloatRight") }
      	move_here("//div[@id='SideCategoryList']") { 
          attribute("data-ur-toggler-component", "content") 

          remove("./h2")

          $(".//ul") {
            $("./li") {
              wrap("div", class: "toggle-menu")
              unwrap()
            }
            unwrap()
          }
        }


    }

    $("..//div[@class='mw_search']") {
      # Move search form into container element
      move_here("//div[@id='SearchForm']", "bottom") {
        remove("./p")

        $("./form") {
  	      remove("./label")

  	      $("./input[@type='text']") {
  	        attribute("placeholder", "Search...")
  	      }
   		  }
  	  }
	  }
  }

  $(".//div[@id='Menu']") { remove() }
  
}
