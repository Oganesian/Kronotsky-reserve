<?php 
$dat_file="counter.dat"; // Файл счетчика
// Открывем файл счетчика и считываем текущий счет
// в переменную $count
$f=fopen($dat_file,"r");
$count=fgets($f,100);
fclose($f);
 
$count=ereg_replace(" ","",$count); // Удаляем символ конца строки
$count++; // Увеличиваем счетчик
// Записываем данные обратно в файл
$f=fopen($dat_file,"w");
fputs($f,"$count ");
fclose($f);
echo '<br><a>Посещений сайта: </a><br><p style="font-size: 36px; margin: 5px;">' . $count . '</p>';
?>