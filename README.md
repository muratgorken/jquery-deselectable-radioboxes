# Make radioboxes deselectable.

Hey! I just need simple solution for deselectable radioboxes. I writed that plugin. It's not best solution probably but it works!
It's so simple to use.

![preview of pluging](https://github.com/muratgorken/jquery-deselectable-radioboxes/blob/main/screenshots/jquery-deselectable-radioboxes.gif?raw=truef)

# Getting Started

Add a `script` to your html:

	<script src="src/jquery-deselectable-radioboxes.js"></script>

	<script type="text/javascript">
		$(document).ready(function(){
			$("input[name='select_type']").deSelectable();
		});
	</script>

Example `html`

	<div class="form-check">
		<input class="form-check-input" type="radio" id="flexRadioDefault1" name="select_type" value="espresso"/>
		<label class="form-check-label" for="flexRadioDefault1">Espresso</label>
	</div>
	<div class="form-check">
		<input class="form-check-input" type="radio" id="flexRadioDefault2" name="select_type" value="double_espresso" checked />
		<label class="form-check-label" for="flexRadioDefault2">Double Espresso</label>
	</div>

> **Note**: Please make sure input element has **name** and **value** properties

## Requirements

jQuery above **1.7** (including **2.x** and **3.x**).
