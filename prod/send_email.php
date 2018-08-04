<?
if((isset($_POST['nic'])&&$_POST['nic']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")&&isset($_POST['reglament']) && $_POST['reglament'] == '1'){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'profiservic2@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['nic'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>                        
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Заявка <admin@enjoy.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail


   // Формируем массив для JSON ответа
    $result = array(
    	'name' => $_POST["name"],
    	'phone' => $_POST["phone"]
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
}
?>