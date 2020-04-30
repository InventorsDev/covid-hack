<?php
    require('./connection.php');

    class App extends Connection{

        public function upload($phone_no)
        {
            $query = "INSERT INTO uploads (phone_no) VALUES('$phone_no')";
            $result = $this->connect()->query($query);
            if ($result) {
                return 'success';
            }else{
                return 'failed';
            }

        }
        
        public function fetch_nos(){
            $query = "SELECT * FROM uploads";
            $array = array();
            $result = $this->connect()->query($query);
            if ($result->num_rows>0) {
                while ($row = $result->fetch_array()) {
                    $array[] = $row;
            }
            return $array;
            }
        }

    }

?>