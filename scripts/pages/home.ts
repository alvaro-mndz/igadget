# Place holder/example file
$('./body'){
	add_class(".mw-home")
		
	$("//div[@class='Left']") { remove() }
	remove("//div[@class='Right']")
	remove("//span[contains(@class, 'FeedLink')]")
	remove("//div[@class='QuickViewBtn'")


	$(".//div[@id='HomeFeaturedProducts']/div") {
		attribute("data-ur-set", "carousel")
		attribute("data-ur-infinite", "enabled")




		$("./ul") {
			wrap("div") {
				attribute("data-ur-carousel-component", "scroll_container")

			}

			$("./li") {
				wrap("div") {
					attribute("data-ur-carousel-component", "item")
					attribute("class", "Product")
				}
				
				unwrap()
			}

			unwrap()
		}

		insert("div", data-ur-carousel-component: "dots")
	}



	$(".//div[@id='HomeNewProducts']/div") {
		attribute("data-ur-set", "carousel")
		attribute("data-ur-infinite", "enabled")

		$("./ul") {

			wrap("div") {
				attribute("data-ur-carousel-component", "scroll_container")

			}

			$("./li") {
				attribute("data-ur-carousel-component", "item")
				attribute("class", "Product")
				wrap("td")
			}

			unwrap()
		}

		insert("div", data-ur-carousel-component: "dots")
	}

}