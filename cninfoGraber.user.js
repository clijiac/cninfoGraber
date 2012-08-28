// ==UserScript==
// @name        cninfoGraber
// @namespace   cninfoGraber
// @description grab cninfo company financial report
// @grant       none
// @include     http://www.cninfo.com.cn/information/*
// @version     1
// ==/UserScript==

function getdata()
{
	//var i_nr = document.getElementById("i_nr").contentWindow.document;
	var dd = document.getElementsByClassName("clear");
	var targetTable,trows,tcells;
	var resultArray=new Array()
	var resultArrayP = 0;
	for(var i=0;i<dd.length;i++)
	{
		if(dd[i].childElementCount >0)
		{
			targetTable = dd[i].getElementsByTagName("table");
			break;
		};
	}
	if (targetTable!=null) 
	{
		targetTable = targetTable[0];
		trows = targetTable.rows;
		for(var i=1;i <trows.length;i++)
		{
			tcells = trows[i].cells;
			if (tcells != null) 
			{
				for(var i2=0;i2 <tcells.length;i2++)
				{
					if (tcells[i2].bgColor == "#daf2ff") 
					{
						resultArray[resultArrayP] = tcells[i2].firstElementChild.innerHTML;
						resultArrayP++;
					};							
				}
			};
			
		}
	}
	resultArray.length = 15;
	var resultString = "";
	for(var i3=-1;i3 <resultArray.length;i3++)
	{
		i3++;
		if (i3 <resultArray.length) 
		{
			resultString+=resultArray[i3]+"	";
		};		
	}

	for(var i3=0;i3 <resultArray.length;i3++)
	{
		i3++;
		if (i3 <resultArray.length) 
		{
			resultString+=resultArray[i3]+"	";
		};
	}
	alert(resultString);
	return false;
 }


function span1()
{
	var res=["SpanGetData"], obj; //需要处理的span id
	for(var j=0; j<res.length; j++)
	{
		  obj = document.getElementById(res[j]);
		  obj.title=obj.id;
          obj.j = j;
          obj.onclick= function(){getdata();};
	}
}
 
	var navbar, newElement;
	
	navbar = document.getElementById('cwzbform');
	if (navbar) {
		var icon = document.createElement('span');
	    icon.title = "description";
	    icon.id = "SpanGetData";
	    icon.innerHTML = '获取数据';
	    icon.style.background = "#FFCC00";
	    icon.style.background = "-moz-linear-gradient(top, #FFCC00, #FF9900)";
	    icon.style.border = "1px solid #EE8800";
	    
		navbar.parentNode.insertBefore(icon, navbar.nextSibling);
	}
	span1();



