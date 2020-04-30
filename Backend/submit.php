<?php 
    require './app.php';

    $phone_no = $_REQUEST['phone_no'];

    $data = new App();
    echo $data->upload($phone_no);

?>