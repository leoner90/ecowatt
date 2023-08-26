<?php
date_default_timezone_set('Europe/Berlin');
$dateToday = date("d-m-Y");
 
if (file_exists("data.txt")) {
    $myfile = file_get_contents("data.txt");
    $decoder = json_decode($myfile,true);
} else {
    $decoder['data'] = null;
}

 
if($decoder['data'] == $dateToday) {
   // echo 'FROM MEMORY  FOR '. $decoder['data']. '<br />';
    // for($i = 0; $i <  count($decoder) - 2; $i++) {
    //     echo($i .' - '.$i + 1 . ' PRICE IS: ' . $decoder[$i + 1] . '<br/>');
    // }
    echo(json_encode($decoder));
} else {
    //echo 'FROM NORD POOL <br />';
    $url = "https://www.nordpoolgroup.com/api/marketdata/page/10?currency=,EUR,EUR,EUR&endDate=".$dateToday;
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($curl, CURLOPT_URL, $url);
    $headers = array(
        'Authorization: Bearer <access_token>',
        'Content-Type: application/json'
    );

    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);


    $response = curl_exec($curl);
    curl_close($curl);
    $test = json_decode($response, true);
    $result = $test["data"]["Rows"];

    $matches = array();
    preg_match_all("~\"Name\":\"LV\",\"Value\":\"(.*?)\",\"GroupHeader~",json_encode($result),$matches);


    for($i = 0; $i < 24; $i++) {
    $replace =  str_replace(',', '.',  $matches[1][$i]);
        $data[] = $replace;
    }
    

    // for($i = 0; $i <  count($data) - 1; $i++) {
    //     echo($i .' - '.$i + 1 . ' PRICE IS: ' . $data[$i+1] . '<br/>');
    // }
    echo(json_encode($data));

    $data['data'] = $dateToday;
    $myfile = fopen("data.txt", "w");
    $txt = "John Doe\n";
    fwrite($myfile, json_encode($data));
    fclose($myfile);
    
}

