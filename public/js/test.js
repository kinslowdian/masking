var test;


function test_init()
{
	test = {};
	test.btn = document.querySelector(".test");
	test.seq = null;

	test.btn.addEventListener("click", test_event, false);
}

function test_event(event)
{
	if(test.seq == null)
	{
		test.seq = 0;
	}

	else
	{
		test.seq++;
	}

	if(test.seq > 1)
	{
		test.seq = 0;
	}

	test_apply();
}

function test_apply()
{
	switch(test.seq)
	{
		case 0:
		{
			masking.move.x += 120;
			break;
		}

		case 1:
		{
			masking.move.y += 120;
			break;
		}
	}
}

