//inject jQuery with:
// javascript:(function(e,s){e.src=s;e.onload=function(){jQuery.noConflict();console.log('jQuery injected')};document.head.appendChild(e);})(document.createElement('script'),'//code.jquery.com/jquery-latest.min.js')

circuitJSON=[]
var mytable = {}
page = jQuery.ajax({
	type: "GET",
	url: "http://www.f1db.de/database/circuits/adelaide_gps.html",
	async: false,
	success: function(data){
		page_parsed=jQuery.parseHTML(data)
		for (index in page_parsed){
			if (page_parsed[index].className=='statistic'){
				mytable=page_parsed[index]
				break;
			}
		}
		mytable=jQuery(mytable).find('table.link>tbody>tr')
		mytable.each(function(index){
			instance={
				nr:"",
				id:"",
				date:"",
				GPof:"",
				Name:"",
				version:"",
				length:"",
				laps:"",
				distance:""
			}
			row=jQuery(this).find('td')
			instance.nr=		jQuery(row[0]).text()
			instance.id=		jQuery(row[1]).text()
			instance.date=		jQuery(row[2]).text()
			instance.GPof=		jQuery(row[3]).text()
			instance.Name=		jQuery(row[4]).text()
			instance.version=	jQuery(row[5]).text()
			instance.length=	jQuery(row[7]).text()
			instance.laps=		jQuery(row[8]).text()
			instance.distance=	jQuery(row[9]).text()
			circuitJSON.push(instance)
		})
		
	}
})

