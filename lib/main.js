
requirejs(['jquery/jquery-1.7.1.min', 
		   'bootstrap/js/bootstrap.min',
		   'queue/queue.min',
		   'd3/d3.v2.min',
		   'underscore/underscore-min',
		   'backbone/backbone-min',
		   'app/js/elections'],
	function(){
		ELEC.main();
	}
);