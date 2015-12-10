$("./body") {
  insert("footer", class: "mw-footer") {
    # Move stuff here
	move_here("..//div[@id='Footer']") {unwrap()}

    insert("p", "Powered by:", id: "Powered")
    insert("div", class:"sprites-moovweb")


  }
}
