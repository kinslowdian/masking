// DEBUG
var trace = function(str){ console.log(str); };

var level;
var masking;
var system;

function masking_init()
{
	trace("OK");

	level = {};
	level.w = 3000;
	level.h = 3000;

	masking = {};
	
	masking.move = {};
	masking.move.x = 0;
	masking.move.y = 0;

	masking.mask = {};
	masking.content = {};

	system = {};

	system.loop_functs = new Array();
	system.loop_functs.push(control_loop);
	system.cycleUpdate = false;
	system_loop_init(true);

	masking_setup();
	masking_update();

	// REMOVE
	test_init();
}

function system_loop_init(run)
{
	if(run)
	{
		system.cycleUpdate = true;
		window.requestAnimationFrame(system_loop_event);
	}

	else
	{
		system.cycleUpdate = false;
		window.cancelAnimationFrame(system_loop_event)	
	}
}

function system_loop_event()
{
	for(var i in system.loop_functs)
	{
		system.loop_functs[i]();
	}

	if(system.cycleUpdate)
	{
		window.requestAnimationFrame(system_loop_event);
	}
}

function control_loop()
{
	masking_update();
}

function masking_setup()
{
	masking.mask.e = document.querySelector(".page-wrapper .mask-content");
	masking.content.e = document.querySelector(".page-wrapper .mask-content .bg");
}

function masking_update()
{
	masking.mask.x = masking.move.x;
	masking.mask.y = masking.move.y;

	masking.content.x = -masking.move.x;
	masking.content.y = -masking.move.y;

	masking_form();
}

function masking_form()
{
	// X & Y
	masking.mask.e.style.transform = 'translate(' + masking.mask.x + 'px, ' + masking.mask.y + 'px)';
	masking.content.e.style.transform = 'translate(' + masking.content.x + 'px, ' + masking.content.y + 'px)';
}




