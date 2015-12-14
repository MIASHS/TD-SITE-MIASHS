	$(document).ready(function() {
		
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: '2016-01-06',
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: 'France - Roumanie',
					start: '2016-06-10'
				},
				{
					title: 'Albanie - Suisse',
					start: '2016-06-11'
				},
				{
					title: 'Roumanie - Suisse',
					start: '2016-06-15'
				},
				{
					title: 'France - Albanie',
					start: '2016-06-15'
				},
				{
					title: 'Roumanie - Albanie',
					start: '2016-06-19'
				},
				{
					title: 'France - Suisse',
					start: '2016-06-19'
				}
			]
		});
		
	});