// processList=[];
// $(document).ready(function(){
//     $(".add-row").click(function(){
//         var pid = $("#pid").val();
//         var name = $("#processName").val();
//         var arrivalTime = $("#arrivalTime").val();
//         var burstTime = $("#arrivalTime").val();
//         var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + pid+ "</td><td>" + name + "</td><td>" + arrivalTime + "</td><td>" + burstTime + "</td></tr>";
//         processList.push(new Process(pid,name,arrivalTime,burstTime));
//         $("table tbody").append(markup);
//     });
// // Find and remove selected table rows
//     $(".delete-row").click(function(){
//         $("table tbody").find('input[name="record"]').each(function(){
//             if($(this).is(":checked")){
//                 $(this).parents("tr").remove();
//             }
//         });
//     });
// });
// $("#ll").click(function(){
//     myFunction(processList);
// });
// // document.querySelector('#execute').addEventListener('click', (e) => {
// //     myFunction(processList);
// // });
function myFunction(){

    const process1 = new Process(1,"A",1,8);
    const process2 = new Process(2,"B",1,10);
    const process3 = new Process(3,"C",4,4);
    const process4 = new Process(4,"D",6,2);
    const process5 = new Process(5,"E",8,12);
    const process6 = new Process(6,"F",12,6);
    const processList=[process1,process2,process3,process4,process5,process6];
    const s = new Scheduler(processList);

    s.execute();

    const grphData=s.makeGraphData();
    console.log(grphData);

    var chart = AmCharts.makeChart( "chartdiv", {
        "type": "gantt",
        "theme": "light",
        "marginRight": 70,
        "addClassNames": true,
        "period": "hh:mm:ss",
        "dataDateFormat":"YYYY-MM-DD",
        "balloonDateFormat": "JJ:NN",
        "columnWidth": 0.5,
        "valueAxis": {
            "type": "timecose"

        },
        "graph": {
            "fillAlphas": 1,
            "balloonText": "<b>[[task]]</b>: [[open]] [[value]]"
        },
        "rotate": true,
        "categoryField": "category",
        "segmentsField": "segments",
        "colorField": "color",
        "startDate": null,
        "startField": "start",
        "endField": "end",
        "durationField": "duration",
        "dataProvider": grphData,
        "valueScrollbar": {
            "autoGridCount":true
        },
        "chartCursor": {
            "cursorColor":"#55bb76",
            "valueBalloonsEnabled": false,
            "cursorAlpha": 0,
            "valueLineAlpha":0.5,
            "valueLineBalloonEnabled": true,
            "valueLineEnabled": true,
            "zoomable":false,
            "valueZoomable":true
        },
        "export": {
            "enabled": true
        }
    } );
}