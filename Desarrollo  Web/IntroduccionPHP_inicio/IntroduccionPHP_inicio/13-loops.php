<?php include 'includes/header.php';

for($i = 1; $i <= 100 ; $i++){

  if($i % 15 === 0){
    echo 'FIZZBUZZ';
  }elseif($i % 5 === 0){
    echo 'BUZZ';
  }elseif($i % 3 === 0){
    echo 'FIZZ';
  }else{
    echo $i;
  }
  echo '<br>';
}


include 'includes/footer.php';