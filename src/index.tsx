import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper } from "uxp/components";
import './styles.scss';

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
 


interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}

const Parking_UtilizationWidget: React.FunctionComponent<IWidgetProps> = (props) => {


    let [data, setData] = React.useState<any>({})
    let [details, setDetails] = React.useState<any>({})
    let [result, setResult] = React.useState<any>([])
    let [parkingLables,setparkingLables]=React.useState<any>([])
    
    let [highchartsOptions, setHighchartsOptions] = React.useState<any>({}) 
    
    React.useEffect(()=>{            
            getParkingDetails('Daily')    
        },[]);

    async function getParkingDetails(DateQuery:string) {
        if(DateQuery == 'Monthly'){
            document.getElementById('Weekly-Btn').style.backgroundColor = '';
            document.getElementById('Daily-Btn').style.backgroundColor = '';
            document.getElementById('Monthly-Btn').style.background = '#D4FDC1';
        } else if(DateQuery == 'Weekly'){
            document.getElementById('Monthly-Btn').style.backgroundColor = '';
            document.getElementById('Daily-Btn').style.backgroundColor = '';
            document.getElementById('Weekly-Btn').style.backgroundColor = '#D4FDC1';
        } else if(DateQuery == 'Daily'){
            document.getElementById('Monthly-Btn').style.backgroundColor = '';
            document.getElementById('Weekly-Btn').style.backgroundColor = '';
            document.getElementById('Daily-Btn').style.backgroundColor = '#D4FDC1';
        }

        let params = {                    
                    DateQuery: DateQuery
                }
        // let cdata = await props.uxpContext.executeAction('AdaniDashboard','PMSOccupancylevel',params,{json:true});

      //  let cdata = await props.uxpContext.executeAction('AdaniDashboard','PMSOccupancy',params,{json:true});


      //  var DateQuery=inputs.DateQuery;
 

var cdata;

if(DateQuery=='Daily')
{
    cdata=
 { "ParkingUtilization": {
    "ParkingSpaceUsed": "30%", 
    "EmployeeParkingSpaceUsed": "15",
    "TotalEmployeeParkingSpace": "200",
    "VisitorParkingSpaceUsed": "25",
    "TotalVistorParkingSpace": "100",
    "AvailableParkingSpace": "6%", 
    "details": {
      "PeakHourOccupancy": "16%", 
      "result": [
        {
          "TotalEmployeeVehicles": "0",
          "TotalVisitorVehicles": "0",
          "Number": "0",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T00:38:35.833"
        }, 
        {
          "TotalEmployeeVehicles": "0",
          "TotalVisitorVehicles": "0",
          "Number": "1",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T01:38:35.833"
        }, 
        {
          "TotalEmployeeVehicles": "1",
          "TotalVisitorVehicles": "0",
          "Number": "2",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T02:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "15",
          "TotalVisitorVehicles": "0",
          "Number": "3",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T03:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "26",
          "TotalVisitorVehicles": "0",
          "Number": "4",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T04:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "-35",
          "TotalVisitorVehicles": "0",
          "Number": "5",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T05:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "-17",
          "TotalVisitorVehicles": "0",
          "Number": "6",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T06:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "5",
          "TotalVisitorVehicles": "0",
          "Number": "7",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T07:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "23",
          "TotalVisitorVehicles": "0",
          "Number": "8",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T08:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "35",
          "TotalVisitorVehicles": "2",
          "Number": "9",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T09:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "28",
          "TotalVisitorVehicles": "3",
          "Number": "10",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T10:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "-56",
          "TotalVisitorVehicles": "7",
          "Number": "11",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T11:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "0",
          "TotalVisitorVehicles": "6",
          "Number": "12",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T12:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "80",
          "TotalVisitorVehicles": "6",
          "Number": "13",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T13:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "90",
          "TotalVisitorVehicles": "0",
          "Number": "14",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T14:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "95",
          "TotalVisitorVehicles": "0",
          "Number": "15",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T15:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "96",
          "TotalVisitorVehicles": "5",
          "Number": "16",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T16:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "96",
          "TotalVisitorVehicles": "5",
          "Number": "17",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T17:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "96",
          "TotalVisitorVehicles": "7",
          "Number": "18",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T18:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "96",
          "TotalVisitorVehicles": "7",
          "Number": "19",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T19:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "106",
          "TotalVisitorVehicles": "10",
          "Number": "20",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T20:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "96",
          "TotalVisitorVehicles": "7",
          "Number": "21",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T21:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "96",
          "TotalVisitorVehicles": "0",
          "Number": "22",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T22:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "9",
          "TotalVisitorVehicles": "0",
          "Number": "23",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T23:38:35.833"
        }        
      ]
    }
  }
}


}

else if (DateQuery=='Weekly')
{
    cdata={
        "ParkingUtilization": {
        "ParkingSpaceUsed": "42%", 
        "EmployeeParkingSpaceUsed": "16",
        "TotalEmployeeParkingSpace": "200",
        "VisitorParkingSpaceUsed": "12",
        "TotalVistorParkingSpace": "100",
        "AvailableParkingSpace": "6%", 
        "details": {
            "PeakHourOccupancy": "18%", 
            "result": [
              {
                  "TotalEmployeeVehicles": "0",
                  "TotalVisitorVehicles": "0",
                  "Number": "1",
                  "Frequency": "Day",
                  "isoDate": "2020-04-19T19:00:46.96"
              },
              {
                  "TotalEmployeeVehicles": "45",
                  "TotalVisitorVehicles": "60",
                  "Number": "2",
                  "Frequency": "Day",
                  "isoDate": "2020-04-20T19:00:46.96"
              },
              {
                "TotalEmployeeVehicles": "80",
                "TotalVisitorVehicles": "43",
                "Number": "3",
                "Frequency": "Day",
                "isoDate": "2020-04-21T19:00:46.96"
            },
            {
                "TotalEmployeeVehicles": "100",
                "TotalVisitorVehicles": "60",
                "Number": "4",
                "Frequency": "Day",
                "isoDate": "2020-04-22T19:00:46.96"
            },
            {
                "TotalEmployeeVehicles": "110",
                "TotalVisitorVehicles": "120",
                "Number": "5",
                "Frequency": "Day",
                "isoDate": "2020-04-23T19:00:46.96"
            },
            {
              "TotalEmployeeVehicles": "65",
              "TotalVisitorVehicles": "153",
              "Number": "6",
              "Frequency": "Day",
              "isoDate": "2020-04-24T19:00:46.96"
          },
          {
              "TotalEmployeeVehicles": "100",
              "TotalVisitorVehicles": "160",
              "Number": "7",
              "Frequency": "Day",
              "isoDate": "2020-04-25T19:00:46.96"
          }, 
            {
                "TotalEmployeeVehicles": "100",
                "TotalVisitorVehicles": "60",
                "Number": "4",
                "Frequency": "Day",
                "isoDate": "2020-04-26T19:00:46.96"
            },
            {
                "TotalEmployeeVehicles": "110",
                "TotalVisitorVehicles": "120",
                "Number": "5",
                "Frequency": "Day",
                "isoDate": "2020-04-27T19:00:46.96"
            },
            {
            "TotalEmployeeVehicles": "65",
            "TotalVisitorVehicles": "153",
            "Number": "6",
            "Frequency": "Day",
            "isoDate": "2020-04-28T19:00:46.96"
        },
        {
            "TotalEmployeeVehicles": "0",
            "TotalVisitorVehicles": "0",
            "Number": "7",
            "Frequency": "Day",
            "isoDate": "2020-04-29T19:00:46.96"
        }
       ]
        }
    }
    }
    
}

else if (DateQuery=='Monthly')
{
    cdata={
        "ParkingUtilization": {
    "ParkingSpaceUsed": "28%", 
    "EmployeeParkingSpaceUsed": "34",
    "TotalEmployeeParkingSpace": "200",
    "VisitorParkingSpaceUsed": "6",
    "TotalVistorParkingSpace": "100",
    "AvailableParkingSpace": "15%", 
    "details": {
      "PeakHourOccupancy": "3%", 
      "result": [
        {
          "TotalEmployeeVehicles": "0",
          "TotalVisitorVehicles": "2",
          "Number": "14",
          "Frequency": "Week",
          "isoDate": "2020-04-01T19:05:27.193"
        },
        {
          "TotalEmployeeVehicles": "98",
          "TotalVisitorVehicles": "230",
          "Number": "15",
          "Frequency": "Week",
          "isoDate": "2020-04-05T19:05:27.193"
        },
        {
          "TotalEmployeeVehicles": "800",
          "TotalVisitorVehicles": "107",
          "Number": "16",
          "Frequency": "Week",
          "isoDate": "2020-04-12T19:05:27.193"
        },
        {
          "TotalEmployeeVehicles": "873",
          "TotalVisitorVehicles": "178",
          "Number": "17",
          "Frequency": "Week",
          "isoDate": "2020-04-19T19:05:27.193"
        },
        {
            "TotalEmployeeVehicles": "498",
            "TotalVisitorVehicles": "106",
            "Number": "18",
            "Frequency": "Week",
            "isoDate": "2020-04-01T19:05:27.193"
          },
          {
            "TotalEmployeeVehicles": "567",
            "TotalVisitorVehicles": "230",
            "Number": "19",
            "Frequency": "Week",
            "isoDate": "2020-04-05T19:05:27.193"
          },
          {
            "TotalEmployeeVehicles": "800",
            "TotalVisitorVehicles": "107",
            "Number": "20",
            "Frequency": "Week",
            "isoDate": "2020-04-12T19:05:27.193"
          },
          {
            "TotalEmployeeVehicles": "873",
            "TotalVisitorVehicles": "178",
            "Number": "21",
            "Frequency": "Week",
            "isoDate": "2020-04-19T19:05:27.193"
          },
          {
            "TotalEmployeeVehicles": "800",
            "TotalVisitorVehicles": "107",
            "Number": "22",
            "Frequency": "Week",
            "isoDate": "2020-04-12T19:05:27.193"
          },
          {
            "TotalEmployeeVehicles": "89",
            "TotalVisitorVehicles": "178",
            "Number": "23",
            "Frequency": "Week",
            "isoDate": "2020-04-19T19:05:27.193"
          }
      ]
    }
  }
}
    }
else
{
    cdata=
 { "ParkingUtilization": {
    "ParkingSpaceUsed": "3%", 
    "EmployeeParkingSpaceUsed": "5",
    "TotalEmployeeParkingSpace": "200",
    "VisitorParkingSpaceUsed": "6",
    "TotalVistorParkingSpace": "100",
    "AvailableParkingSpace": "6%", 
    "details": {
      "PeakHourOccupancy": "3%", 
      "result": [
        {
          "TotalEmployeeVehicles": "1",
          "TotalVisitorVehicles": "0",
          "Number": "0",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T00:38:35.833"
        }, 
        {
          "TotalEmployeeVehicles": "0",
          "TotalVisitorVehicles": "0",
          "Number": "1",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T01:38:35.833"
        }, 
        {
          "TotalEmployeeVehicles": "0",
          "TotalVisitorVehicles": "0",
          "Number": "2",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T02:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "0",
          "TotalVisitorVehicles": "0",
          "Number": "3",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T03:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "0",
          "TotalVisitorVehicles": "0",
          "Number": "4",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T04:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "0",
          "TotalVisitorVehicles": "0",
          "Number": "5",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T05:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "2",
          "TotalVisitorVehicles": "0",
          "Number": "6",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T06:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "5",
          "TotalVisitorVehicles": "0",
          "Number": "7",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T07:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "23",
          "TotalVisitorVehicles": "0",
          "Number": "8",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T08:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "35",
          "TotalVisitorVehicles": "2",
          "Number": "9",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T09:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "28",
          "TotalVisitorVehicles": "3",
          "Number": "10",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T10:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "56",
          "TotalVisitorVehicles": "7",
          "Number": "11",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T11:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "80",
          "TotalVisitorVehicles": "6",
          "Number": "12",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T12:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "80",
          "TotalVisitorVehicles": "6",
          "Number": "13",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T13:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "90",
          "TotalVisitorVehicles": "0",
          "Number": "14",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T14:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "95",
          "TotalVisitorVehicles": "0",
          "Number": "15",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T15:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "96",
          "TotalVisitorVehicles": "5",
          "Number": "16",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T16:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "96",
          "TotalVisitorVehicles": "5",
          "Number": "17",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T17:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "96",
          "TotalVisitorVehicles": "7",
          "Number": "18",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T18:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "96",
          "TotalVisitorVehicles": "7",
          "Number": "19",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T19:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "106",
          "TotalVisitorVehicles": "10",
          "Number": "20",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T20:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "96",
          "TotalVisitorVehicles": "7",
          "Number": "21",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T21:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "96",
          "TotalVisitorVehicles": "0",
          "Number": "22",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T22:38:35.833"
        },
        {
          "TotalEmployeeVehicles": "9",
          "TotalVisitorVehicles": "0",
          "Number": "23",
          "Frequency": "Hour",
          "isoDate": "2020-04-20T23:38:35.833"
        }
        
      ]
    }
  }
}


}    
 










                
        let me=cdata.ParkingUtilization;
        let details=me.details;
        let result=details.result;
                
        constructLables(me);
        setData(me);
        setDetails(details);
        setResult(result);
        gethighchart(result,DateQuery);
    }

    function constructLables(lables:any){
        let lablesOfParking = `<ul>
                                <li>
                                    <div class="user-icon"></div>
                                    <h4> `+ lables.ParkingSpaceUsed +`
                                        <span>Parking utilization</span>
                                    </h4>
                                </li>
                                <li>
                                    <div class="user-icon"></div>
                                    <h4> `+ lables.EmployeeParkingSpaceUsed +`
                                        <span>Employee Parking</span>
                                    </h4>
                                </li>
                                <li>
                                    <div class="user-icon"></div>
                                    <h4> `+ lables.VisitorParkingSpaceUsed +`
                                        <span>Visitor Parking</span>
                                    </h4>
                                </li>
                                <li>
                                    <div class="user-icon"></div>
                                    <h4> `+ lables.details.PeakHourOccupancy +`
                                        <span>Peak hour Utilization</span>
                                    </h4>
                                </li>
                            </ul>`;

        setparkingLables(lablesOfParking);
    }

    function gethighchart(result:any, DateQuery:string){
        let tm:any[] = [], tv:any[] = [], year_list = [],
        parking_final:any[] = [], parking_final_two:any[] = [], 
        parkingString = [], parkingStringTwo = [];
        let frequency=''
        for (var i of result) {
            tm.push(parseInt(i.TotalEmployeeVehicles));
            tv.push(parseInt(i.TotalVisitorVehicles));

            let dtt = new Date(i.isoDate);
            var dows=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            var dow= dows[(dtt).getDay()];  
            if(DateQuery == 'Daily'){
                year_list.push(parseInt(i.Number)+ ':00');
              } 
             else if(DateQuery == 'Weekly'){
                year_list.push(dow); 
             }
             else if(DateQuery == 'Monthly'){
                year_list.push('WK' + i.Number + ' <br/> ' + i.isoDate.substring(0,10)); 
             } 

             parkingString.push(i.TotalEmployeeVehicles);
             parkingStringTwo.push(i.TotalVisitorVehicles); 

        }
        
        // querry send string that we need to convert into numbers
        for (var j = 0; j < parkingString.length; j++) {
            if (parkingString[j] != null) {
            parking_final.push(parseFloat(parkingString[j]))
            } else {
            parking_final.push(null)
            };
        }
        
        for (var k = 0; k < parkingStringTwo.length; k++) {
            if (parkingStringTwo[k] != null) {
            parking_final_two.push(parseFloat(parkingStringTwo[k]))
            } else {
            parking_final_two.push(null)
            };
        }
        
        const options = {
          
            chart: {
                height: 200,
                type: 'areaspline'
            },
            title: {
                text:''
            },
            credits: {
              enabled: false
            },
            tooltip: { 
               pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
                  enabled: true,
               shared: true, 
            },
            legend: {
                reversed: true
            },
            xAxis: {
                categories: year_list,
                tickWidth: 1,
                    tickmarkPlacement:'on',
                    crosshair: {
                      snap: false,
                      width: 1,
                      color: 'red',
                      dashStyle: 'shortdot',
                      zIndex: 10
                    }
            },
            yAxis: [{
                title: { text: 'Count' }
              }],
              navigation: {
                    buttonOptions: {
                        enabled: false
                    }
                },
            series: [{
                 name: 'Level 1',
                data: parking_final,
                 color : '#c55dda'
              }, 
              {
                name: 'Level 2',
                data: parking_final_two,
                color : '#77eadd'
               
            }],
            plotOptions: {
                areaspline: {
                    pointStart: 0,
                   // tickposition:'outside',
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                        }
                        }
            }
        };
        setHighchartsOptions(options)
    }

    const App = () => (
        <div>
          <HighchartsReact highcharts={Highcharts} options={highchartsOptions} />
        </div>
    );

    return (<WidgetWrapper className="parking-widget">
    <TitleBar title="PARKING UTILIZATION" icon="https://static.iviva.com/images/uxp-generic-widgets/car.svg">
        <div className="cafeteria-top-options">                
            <ul className="meeting-room-top-tabs">
                <li id='Monthly-Btn' onClick={() =>{getParkingDetails('Monthly')} }><a>Monthly</a></li>
                <li id='Weekly-Btn' onClick={() =>{getParkingDetails('Weekly')} }><a>Weekly</a></li>
                <li id='Daily-Btn' onClick={() =>{getParkingDetails('Daily')} }><a className="meeting_active">Daily</a></li>
            </ul> 
        </div>
    </TitleBar>

    <div className="body">
        <div className="cafeteria_utilization-cont parking_utilization-cont">
            <div className="cafeteria_utilization-cont-top">
                <div className="parking_data"> 
                    <div className="cafeteria_utilization-list parking_utilization-list" dangerouslySetInnerHTML={{__html: parkingLables }}></div>
                </div> 
            </div>
        </div>
    </div>

        <App/>

        

    </WidgetWrapper>)
}

/**
 * Register as a Widget
 */
registerWidget({
    id: "Parking_Utilization",
    widget: Parking_UtilizationWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});

 