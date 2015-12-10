$("./body") {

	$("//div[@class='Left']") { remove() }
	$("//div[@id='ProductBreadcrumb']") { remove() }
	$("//div[@class='Right']") { remove() }
	$("//div[@id='SimilarProductsByCustomerViews']") { remove() }
	remove("//a[@id='ImageScrollNext']")

	$("//div[contains(@class, 'DetailRow')]") { 
		$("./div[@class='Label']") { 
			move_here("../div[@class='Value']") { unwrap() } 
		}
	}

	$("//div[@class='BulkDiscount']") {
		$("./input") { unwrap() }
		add_class("ProductActionAddProd")
		text("Add to Cart")

	}

	$("//div[@id='ProductByCategory']") { remove() }

}