<?php 
$dat_file="counter.dat"; // Файл счетчика
// Открывем файл счетчика и считываем текущий счет
// в переменную $count
$f=fopen($dat_file,"r");
$count=fgets($f,100);
fclose($f);
echo '<br><a>Посещений сайта: </a><br><p style="font-size: 36px; margin: 5px;">' . $count . '</p>';
?>