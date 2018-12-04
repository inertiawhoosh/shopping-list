//check off specific todos by click
$("ul").on("click", ".shopping-item-toggle", function(){
	$(this).parents("li").find(".shopping-item").toggleClass("shopping-item__checked");
})

//delete a todo
$("ul").on("click", ".shopping-item-delete", function(){
	$(this).closest("li").remove();
})


//create the to-do

function buildLi(item) {
	return `<li>
        <span class="shopping-item"> ${item} </span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
};

$("button[type='submit']").on("click", function(event) {
	event.preventDefault();
	$("ul").append(buildLi($("#shopping-list-entry").val()));
});




