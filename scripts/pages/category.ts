# Place holder/example file
$("./body") {

	$(".//div[@id='SideNewsletterBox']") { remove() }
	remove("//div[@class='Right']")
	remove("//div[@id='CategoryBreadcrumb']")
	remove("//div[@class='SubCategoryList']")

	$(".//div[@id='SideCategoryShopByPrice']") {
		attribute("data-ur-set", "toggler")
		add_class("toggler-div")

		$("./h2") {
			wrap("div", class: "toggler-header") {
				attribute("data-ur-toggler-component", "button")
			}
			insert("div", id: "toggler-sprite", class:"sprites-plus")
			unwrap()
		}

		$("./div[@class='BlockContent']") {
			attribute("data-ur-toggler-component", "content")

			$("./ul") {
				$("./li") {
					wrap("div") {
						insert("div", class: "sprites-menu_go")
					}
					unwrap()
				}
				unwrap()
			}
		}
	}


	$(".//div[@id='SideShopByBrand']") {
		attribute("data-ur-set", "toggler")
		add_class("toggler-div")

		$("./h2") {
			wrap("div", class: "toggler-header") {
				attribute("data-ur-toggler-component", "button")
			}
			insert("div", id: "toggler-sprite", class:"sprites-plus")
			unwrap()
		}

		$("./div[@class='BlockContent']") {
			attribute("data-ur-toggler-component", "content")

			$("./ul") {
				$("./li") {
					wrap("div") {
						insert("div", class: "sprites-menu_go")
					}
					unwrap()
				}
				unwrap()
			}
		}
	}



	$("//div[contains(@class, 'SortBox')]") {
		remove_class("FloatRight")
		add_class("toggler-box")
	}

	$("//form[@id='frmCompare']") {
		$("./ul") { 
			$("./li") {
				wrap("div", class: "ProductText") {
					wrap("div", class: "ProductMain")
				}
				unwrap()
			}
			unwrap()
		}
		unwrap()
	}

	$("//div[@class='ProductMain']") { move_here(".//div[contains(@class, 'ProductImage')]", position("top")) }

	remove("//div[@class='CompareButton']")
	remove("//div[@class='ProductCompareButton']")



}