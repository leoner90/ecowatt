<?php
header("Access-Control-Allow-Origin:  *");
header("Set-Cookie: cross-site-cookie=whatever; SameSite=None; Secure");
 


$myfile = file_get_contents("data.txt");
$decoder = json_decode($myfile,true);
foreach ($decoder as $value) {
  foreach ($value as $key => $value) {
    $value= str_replace(',','', $value);
     $dataArray[$key] = number_format($value, 3, '.', '');
  }
}
date_default_timezone_set('Europe/Riga');

if(date("d") == 01 && date("m") == 01 ) {
  $month = 12;
  $year = date("Y") - 1;
  $a_date = $year."-". $month;
  $day =  date("t", strtotime($a_date));
  $data =  $a_date . '-' . $day;
  $data = $day. '-' . $month .'-'. $year;
  
} else if (date("d") == 01) {
  $month = date("m") - 1;
  $month < 10 ? $month = '0'. $month : '';  
  $a_date = date("Y-"). $month;
  $day =  date("t", strtotime($a_date));
  $data = $day. '-' . $month .'-'. date("Y");
} else {
  $day = date("d")-1;
  $day < 10 ? $day = '0'. $day : ''; 
  $data = $day . date("-m") . date("-Y");
}

$myfile2 = file_get_contents($data . ".txt");
$decoder = json_decode($myfile2,true);


foreach ($decoder as $key => $value) {
    $value= str_replace(',','', $value);
  $dataArray[$key.'old'] = number_format($value, 3, '.', '');
  
  }
 

echo json_encode( $dataArray);