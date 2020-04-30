<?php
class Connection{
    protected function connect()
    {
        $conn = new mysqli("", "", "", "");
        return $conn;
    }
}
?>