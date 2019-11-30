google.charts.load("current", {packages:["sankey"]});
  google.charts.setOnLoadCallback(drawChart);
   function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Weight');
    data.addRows([
       [ 'V:East Midlands', 'North East', 5 ],
       [ 'V:East Midlands', 'North West', 1 ],
       [ 'V:East Midlands', 'Yorkshire and The Humber', 1 ],
       [ 'V:East Midlands', 'East Midlands', 1 ],
       [ 'V:East Midlands', 'West Midlands', 1 ],
       [ 'V:East Midlands', 'East of England', 5 ],
       [ 'V:East Midlands', 'London', 1 ],
       [ 'V:East Midlands', 'South East', 1 ],
       [ 'V:East Midlands', 'South West', 1 ],
       [ 'V:East Midlands', 'England region unknown', 5 ],
       [ 'V:East Midlands', 'Wales', 1 ],
       [ 'V:East Midlands', 'Scotland', 1 ],
       [ 'V:East Midlands', 'Northern Ireland', 1 ],
       [ 'V:East Midlands', 'Guernsey, Jersey and the Isle of Man', 1 ],
       [ 'V:East Midlands', 'UK region unknown', 5 ],

       [ 'V:East of England', 'East Midlands', 3 ],
       [ 'V:East of England', 'West Midlands', 1 ],
       [ 'V:East of England', 'East of England', 3 ],
       [ 'V:East of England', 'London', 3 ],
       [ 'V:East of England', 'South East', 3 ],
       [ 'V:East of England', 'South West', 1 ],
       [ 'V:East of England', 'England region unknown', 1 ],
       [ 'V:East of England', 'Wales', 3 ],
       [ 'V:East of England', 'Scotland', 1 ],
       [ 'V:East of England', 'Northern Ireland', 1 ],
       [ 'V:East of England', 'Guernsey, Jersey and the Isle of Man', 1 ],
       [ 'V:East of England', 'UK region unknown', 2 ],
       [ 'V:East of England', 'North East', 7 ],
       [ 'V:East of England', 'North West', 5 ],
       [ 'V:East of England', 'Yorkshire and The Humber', 1 ],

       [ 'V:England region unknown', 'East Midlands', 3 ],
       [ 'V:England region unknown', 'West Midlands', 5 ],
       [ 'V:England region unknown', 'East of England', 1 ],
       [ 'V:England region unknown', 'London', 3 ],
       [ 'V:England region unknown', 'South East', 5 ],
       [ 'V:England region unknown', 'South West', 1 ],
       [ 'V:England region unknown', 'England region unknown', 3 ],
       [ 'V:England region unknown', 'Wales', 5 ],
       [ 'V:England region unknown', 'Scotland', 1 ],
       [ 'V:England region unknown', 'Northern Ireland', 3 ],
       [ 'V:England region unknown', 'Guernsey, Jersey and the Isle of Man', 5 ],
       [ 'V:England region unknown', 'UK region unknown', 1 ],
       [ 'V:England region unknown', 'North East', 3 ],
       [ 'V:England region unknown', 'North West', 3 ],
       [ 'V:England region unknown', 'Yorkshire and The Humber', 3 ],

       [ 'V:Guernsey, Jersey and the Isle of Man', 'East Midlands', 3 ],
       [ 'V:Guernsey, Jersey and the Isle of Man', 'West Midlands', 3 ],
       [ 'V:Guernsey, Jersey and the Isle of Man', 'East of England', 3 ],
       [ 'V:Guernsey, Jersey and the Isle of Man', 'London', 3 ],
       [ 'V:Guernsey, Jersey and the Isle of Man', 'South East', 3 ],
       [ 'V:Guernsey, Jersey and the Isle of Man', 'South West', 5 ],
       [ 'V:Guernsey, Jersey and the Isle of Man', 'England region unknown', 1 ],
       [ 'V:Guernsey, Jersey and the Isle of Man', 'Wales', 3 ],
       [ 'V:Guernsey, Jersey and the Isle of Man', 'Scotland', 3 ],
       [ 'V:Guernsey, Jersey and the Isle of Man', 'Northern Ireland', 3 ],
       [ 'V:Guernsey, Jersey and the Isle of Man', 'Guernsey, Jersey and the Isle of Man', 3 ],
       [ 'V:Guernsey, Jersey and the Isle of Man', 'UK region unknown', 3 ],
       [ 'V:Guernsey, Jersey and the Isle of Man', 'North East', 3 ],
       [ 'V:Guernsey, Jersey and the Isle of Man', 'North West', 3 ],       
       [ 'V:Guernsey, Jersey and the Isle of Man', 'Yorkshire and The Humber', 5 ],

       [ 'V:London', 'East Midlands', 3 ],
       [ 'V:London', 'West Midlands', 3 ],
       [ 'V:London', 'East of England', 3 ],
       [ 'V:London', 'London', 3 ],
       [ 'V:London', 'South East', 3 ],
       [ 'V:London', 'South West', 5 ],
       [ 'V:London', 'England region unknown', 1 ],
       [ 'V:London', 'Wales', 3 ],
       [ 'V:London', 'Scotland', 3 ],
       [ 'V:London', 'Northern Ireland', 3 ],
       [ 'V:London', 'Guernsey, Jersey and the Isle of Man', 3 ],
       [ 'V:London', 'UK region unknown', 3 ],
       [ 'V:London', 'North East', 3 ],
       [ 'V:London', 'North West', 3 ],       
       [ 'V:London', 'Yorkshire and The Humber', 5 ],

       [ 'V:North East', 'East Midlands', 3 ],
       [ 'V:North East', 'West Midlands', 3 ],
       [ 'V:North East', 'East of England', 3 ],
       [ 'V:North East', 'London', 3 ],
       [ 'V:North East', 'South East', 3 ],
       [ 'V:North East', 'South West', 5 ],
       [ 'V:North East', 'England region unknown', 1 ],
       [ 'V:North East', 'Wales', 3 ],
       [ 'V:North East', 'Scotland', 3 ],
       [ 'V:North East', 'Northern Ireland', 3 ],
       [ 'V:North East', 'Guernsey, Jersey and the Isle of Man', 3 ],
       [ 'V:North East', 'UK region unknown', 3 ],
       [ 'V:North East', 'North East', 3 ],
       [ 'V:North East', 'North West', 3 ],       
       [ 'V:North East', 'Yorkshire and The Humber', 5 ],

       [ 'V:North West', 'East Midlands', 3 ],
       [ 'V:North West', 'West Midlands', 3 ],
       [ 'V:North West', 'East of England', 3 ],
       [ 'V:North West', 'London', 3 ],
       [ 'V:North West', 'South East', 3 ],
       [ 'V:North West', 'South West', 5 ],
       [ 'V:North West', 'England region unknown', 1 ],
       [ 'V:North West', 'Wales', 3 ],
       [ 'V:North West', 'Scotland', 3 ],
       [ 'V:North West', 'Northern Ireland', 3 ],
       [ 'V:North West', 'Guernsey, Jersey and the Isle of Man', 3 ],
       [ 'V:North West', 'UK region unknown', 3 ],
       [ 'V:North West', 'North East', 3 ],
       [ 'V:North West', 'North West', 3 ],       
       [ 'V:North West', 'Yorkshire and The Humber', 5 ],

       [ 'V:Northern Ireland', 'North East', 3 ],
       [ 'V:Northern Ireland', 'North West', 3 ],       
       [ 'V:Northern Ireland', 'Yorkshire and The Humber', 5 ],
       [ 'V:Northern Ireland', 'East Midlands', 3 ],
       [ 'V:Northern Ireland', 'West Midlands', 3 ],
       [ 'V:Northern Ireland', 'East of England', 3 ],
       [ 'V:Northern Ireland', 'London', 3 ],
       [ 'V:Northern Ireland', 'South East', 3 ],
       [ 'V:Northern Ireland', 'South West', 5 ],
       [ 'V:Northern Ireland', 'England region unknown', 1 ],
       [ 'V:Northern Ireland', 'Wales', 3 ],
       [ 'V:Northern Ireland', 'Scotland', 3 ],
       [ 'V:Northern Ireland', 'Northern Ireland', 3 ],
       [ 'V:Northern Ireland', 'Guernsey, Jersey and the Isle of Man', 3 ],
       [ 'V:Northern Ireland', 'UK region unknown', 3 ],

       [ 'V:Scotland', 'North East', 5 ],
       [ 'V:Scotland', 'North West', 1 ],
       [ 'V:Scotland', 'Yorkshire and The Humber', 1 ],
       [ 'V:Scotland', 'East Midlands', 1 ],
       [ 'V:Scotland', 'West Midlands', 1 ],
       [ 'V:Scotland', 'East of England', 5 ],
       [ 'V:Scotland', 'London', 1 ],
       [ 'V:Scotland', 'South East', 1 ],
       [ 'V:Scotland', 'South West', 1 ],
       [ 'V:Scotland', 'England region unknown', 5 ],
       [ 'V:Scotland', 'Wales', 1 ],
       [ 'V:Scotland', 'Scotland', 1 ],
       [ 'V:Scotland', 'Northern Ireland', 1 ],
       [ 'V:Scotland', 'Guernsey, Jersey and the Isle of Man', 1 ],
       [ 'V:Scotland', 'UK region unknown', 5 ],

       [ 'V:South East', 'North East', 5 ],
       [ 'V:South East', 'North West', 1 ],
       [ 'V:South East', 'Yorkshire and The Humber', 1 ],
       [ 'V:South East', 'East Midlands', 1 ],
       [ 'V:South East', 'West Midlands', 1 ],
       [ 'V:South East', 'East of England', 5 ],
       [ 'V:South East', 'London', 1 ],
       [ 'V:South East', 'South East', 1 ],
       [ 'V:South East', 'South West', 1 ],
       [ 'V:South East', 'England region unknown', 5 ],
       [ 'V:South East', 'Wales', 1 ],
       [ 'V:South East', 'Scotland', 1 ],
       [ 'V:South East', 'Northern Ireland', 1 ],
       [ 'V:South East', 'Guernsey, Jersey and the Isle of Man', 1 ],
       [ 'V:South East', 'UK region unknown', 5 ],

       [ 'V:South West', 'North East', 5 ],
       [ 'V:South West', 'North West', 1 ],
       [ 'V:South West', 'Yorkshire and The Humber', 1 ],
       [ 'V:South West', 'East Midlands', 1 ],
       [ 'V:South West', 'West Midlands', 1 ],
       [ 'V:South West', 'East of England', 5 ],
       [ 'V:South West', 'London', 1 ],
       [ 'V:South West', 'South East', 1 ],
       [ 'V:South West', 'South West', 1 ],
       [ 'V:South West', 'England region unknown', 5 ],
       [ 'V:South West', 'Wales', 1 ],
       [ 'V:South West', 'Scotland', 1 ],
       [ 'V:South West', 'Northern Ireland', 1 ],
       [ 'V:South West', 'Guernsey, Jersey and the Isle of Man', 1 ],
       [ 'V:South West', 'UK region unknown', 5 ],

       [ 'V:UK region unknown', 'North East', 5 ],
       [ 'V:UK region unknown', 'North West', 1 ],
       [ 'V:UK region unknown', 'Yorkshire and The Humber', 1 ],
       [ 'V:UK region unknown', 'East Midlands', 1 ],
       [ 'V:UK region unknown', 'West Midlands', 1 ],
       [ 'V:UK region unknown', 'East of England', 5 ],
       [ 'V:UK region unknown', 'London', 1 ],
       [ 'V:UK region unknown', 'South East', 1 ],
       [ 'V:UK region unknown', 'South West', 1 ],
       [ 'V:UK region unknown', 'England region unknown', 5 ],
       [ 'V:UK region unknown', 'Wales', 1 ],
       [ 'V:UK region unknown', 'Scotland', 1 ],
       [ 'V:UK region unknown', 'Northern Ireland', 1 ],
       [ 'V:UK region unknown', 'Guernsey, Jersey and the Isle of Man', 1 ],
       [ 'V:UK region unknown', 'UK region unknown', 5 ],

       [ 'V:Wales', 'North East', 5 ],
       [ 'V:Wales', 'North West', 1 ],
       [ 'V:Wales', 'Yorkshire and The Humber', 1 ],
       [ 'V:Wales', 'East Midlands', 1 ],
       [ 'V:Wales', 'West Midlands', 1 ],
       [ 'V:Wales', 'East of England', 5 ],
       [ 'V:Wales', 'London', 1 ],
       [ 'V:Wales', 'South East', 1 ],
       [ 'V:Wales', 'South West', 1 ],
       [ 'V:Wales', 'England region unknown', 5 ],
       [ 'V:Wales', 'Wales', 1 ],
       [ 'V:Wales', 'Scotland', 1 ],
       [ 'V:Wales', 'Northern Ireland', 1 ],
       [ 'V:Wales', 'Guernsey, Jersey and the Isle of Man', 1 ],
       [ 'V:Wales', 'UK region unknown', 5 ],

       [ 'V:West Midlands', 'North East', 5 ],
       [ 'V:West Midlands', 'North West', 1 ],
       [ 'V:West Midlands', 'Yorkshire and The Humber', 1 ],
       [ 'V:West Midlands', 'East Midlands', 1 ],
       [ 'V:West Midlands', 'West Midlands', 1 ],
       [ 'V:West Midlands', 'East of England', 5 ],
       [ 'V:West Midlands', 'London', 1 ],
       [ 'V:West Midlands', 'South East', 1 ],
       [ 'V:West Midlands', 'South West', 1 ],
       [ 'V:West Midlands', 'England region unknown', 5 ],
       [ 'V:West Midlands', 'Wales', 1 ],
       [ 'V:West Midlands', 'Scotland', 1 ],
       [ 'V:West Midlands', 'Northern Ireland', 1 ],
       [ 'V:West Midlands', 'Guernsey, Jersey and the Isle of Man', 1 ],
       [ 'V:West Midlands', 'UK region unknown', 5 ],

       [ 'V:Yorkshire and The Humber', 'North East', 5 ],
       [ 'V:Yorkshire and The Humber', 'North West', 1 ],
       [ 'V:Yorkshire and The Humber', 'Yorkshire and The Humber', 1 ],
       [ 'V:Yorkshire and The Humber', 'East Midlands', 1 ],
       [ 'V:Yorkshire and The Humber', 'West Midlands', 1 ],
       [ 'V:Yorkshire and The Humber', 'East of England', 5 ],
       [ 'V:Yorkshire and The Humber', 'London', 1 ],
       [ 'V:Yorkshire and The Humber', 'South East', 1 ],
       [ 'V:Yorkshire and The Humber', 'South West', 1 ],
       [ 'V:Yorkshire and The Humber', 'England region unknown', 5 ],
       [ 'V:Yorkshire and The Humber', 'Wales', 1 ],
       [ 'V:Yorkshire and The Humber', 'Scotland', 1 ],
       [ 'V:Yorkshire and The Humber', 'Northern Ireland', 1 ],
       [ 'V:Yorkshire and The Humber', 'Guernsey, Jersey and the Isle of Man', 1 ],
       [ 'V:Yorkshire and The Humber', 'UK region unknown', 5 ],
    
  
       
    ]);

    // Set chart options
    var options = {
      width: 600,
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
    chart.draw(data, options);
   }