<?php
 
header('Content-Type: image/png');
echo base64_decode('R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs');	
 
if(isset($_GET['tid'])) { $tid = $_GET['tid']; } else { $tid = 'UA-127804702-1';}
if(isset($_GET['ec'])) { $ec = $_GET['ec']; } else { $ec = 'Blocking';}
if(isset($_GET['ea'])) { $ea = $_GET['ea']; } else { $ea = 'Something';}
 
$params = array(
'v' => 1,
'tid' => $tid,
'cid' => rand(1000000,9999999),
't' => 'event',
'ec' => $ec,
'ea' => $ea,
'ni' => '0',
'z' => rand(1000000,9999999),
);
 
$url = 'https://www.google-analytics.com/collect';
$content = utf8_encode(http_build_query($params));
$user_agent = '';
 
$ch = curl_init();
curl_setopt($ch,CURLOPT_USERAGENT, $user_agent);
curl_setopt($ch,CURLOPT_URL, $url);
curl_setopt($ch,CURLOPT_HTTPHEADER,array('Content-type: application/x-www-form-urlencoded'));
curl_setopt($ch,CURLOPT_HTTP_VERSION,CURL_HTTP_VERSION_1_1);
curl_setopt($ch,CURLOPT_POST, TRUE);
curl_setopt($ch,CURLOPT_POSTFIELDS, $content);
curl_exec($ch);
curl_close($ch);
 
?>