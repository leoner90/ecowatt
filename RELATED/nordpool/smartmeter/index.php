<?php
header("Access-Control-Allow-Origin:  *");
header('Content-Type: application/json; charset=utf-8');
if(isset($_GET['json'])){
    $allData = json_decode($_GET['json']);
}
 

 
$myfile = fopen("result/data.txt", "w");
fwrite($myfile, json_encode($allData ));
fclose($myfile);

date_default_timezone_set('Europe/Riga');

if(date("H") == 23 && date("i") == 59 )
{
    $data = date("d-m-Y");
    if(!file_exists( $data . ".txt")) {
        $myfile = file_get_contents("result/data.txt", "w");
        $decoder = json_decode($myfile,true);
    
        
        $filedata['time'] = date("H:i:s");
        foreach ($decoder as $value) {
            foreach ($value as $key => $value) {
                if($key == 'ReverseActiveEnergy') {
                   
                    $filedata['ReverseActiveEnergy'] =  number_format($value, 3, '.', '');
                }
                if($key == 'ReverseActiveEnergy1') {
                    $filedata['ReverseActiveEnergy1'] =  number_format($value, 3, '.', '');
                }
                if($key == 'ReverseActiveEnergy2') {
                    $filedata['ReverseActiveEnergy2'] =  number_format($value, 3, '.', '');
                }
                if($key == 'ReverseActiveEnergy3') {
                    $filedata['ReverseActiveEnergy3'] =  number_format($value, 3, '.', '');
                }
    
                if($key == 'totalActiveConsumed') {
                    $filedata['totalActiveConsumed'] =  number_format($value, 3, '.', '');
                }
                if($key == 'totalActiveConsumed1') {
                    $filedata['totalActiveConsumed1'] =  number_format($value, 3, '.', '');
                }
                if($key == 'totalActiveConsumed2') {
                    $filedata['totalActiveConsumed2'] =  number_format($value, 3, '.', '');
                }
                if($key == 'totalActiveConsumed3') {
                    $filedata['totalActiveConsumed3'] =  number_format($value, 3, '.', '');
                }

                if($key == 'hour') {
                    $filedata['hour'] =  number_format($value, 3, '.', '');
                }

                if($key == 'minutes') {
                    $filedata['minutes'] =  number_format($value, 3, '.', '');
                }

                if($key == 'second') {
                    $filedata['secondsss'] =  number_format($value, 3, '.', '');
                }
          
            }
          }
    
    
        $file = "result/".$data . ".txt";
        file_put_contents($file, json_encode($filedata));
    }
    



}

 


echo json_encode('WORKS');
