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

			insert("table", id: "carousel", data-ur-carousel-component: "item") {
				insert("tr", id: "images") 
				insert("tr", id: "details")
				insert("tr", id: "price")
				insert("tr", id: "action")
			}

			$("./li") {
				wrap("div") {
					attribute("class", "Product")
				}

				unwrap()
			}


			$("./div[@class='Product']") {
				$("./div[contains(@class, 'ProductImage')]") {

					wrap("td") {
						move_to("//table[@id='carousel']/tr[@id='images']") 
					}
				}
				$("./div[@class='ProductDetails']") {

					wrap("td") {
						move_to("//table[@id='carousel']/tr[@id='details']") 
					}
				}
				$("./div[@class='ProductPriceRating']") {

					wrap("td") {
						move_to("//table[@id='carousel']/tr[@id='price']") 
					}
				}
				$("./div[@class='ProductActionAdd']") {

					wrap("td") {
						move_to("//table[@id='carousel']/tr[@id='action']") 
					}
				}
				# insert("div", id: "itemz", data-ur-carousel-component: "item")
				unwrap()
			}


			unwrap()


		}

		insert("br")

		insert("div", data-ur-carousel-component: "dots")
	}



	$(".//div[@id='HomeNewProducts']/div") {
		attribute("data-ur-set", "carousel")
		# attribute("data-ur-infinite", "enabled")

		$("./ul") {
			wrap("div") {
				attribute("data-ur-carousel-component", "scroll_container")

			}

			insert("table", id: "carousel") {
				insert("tr", id: "images") 
				insert("tr", id: "details")
				insert("tr", id: "price")
				insert("tr", id: "action")
				insert("tr", id: "itemz")
			}

			$("./li") {
				wrap("div") {
					attribute("class", "Product")
				}

				unwrap()
			}


			$("./div[@class='Product']") {
				$("./div[contains(@class, 'ProductImage')]") {

					wrap("td") {
						move_to("//table[@id='carousel']/tr[@id='images']") 
					}
				}
				$("./div[@class='ProductDetails']") {

					wrap("td") {
						move_to("//table[@id='carousel']/tr[@id='details']") 
					}
				}
				$("./div[@class='ProductPriceRating']") {

					wrap("td") {
						move_to("//table[@id='carousel']/tr[@id='price']") 
					}
				}
				$("./div[@class='ProductActionAdd']") {

					wrap("td") {
						move_to("//table[@id='carousel']/tr[@id='action']") 
					}
				}

				wrap("td", data-ur-carousel-component: "item") {
					move_to("//table[@id='carousel']/tr[@id='itemz']")
				}
				# insert("div", id: "itemz", data-ur-carousel-component: "item")
				# unwrap()
			}


			unwrap()


		}

		# insert("br")

		insert("div", data-ur-carousel-component: "dots")

	}

}