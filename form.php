<?php
				$k = $_POST["kaisya"];
				$s = $_POST["simei"];
				$t = $_POST["tel"];
				$m = $_POST["mail"];
				$c = $_POST["com"];
 ?>
<!DOCTYPE html>
<html lang="ja">
  <head>
  <meta charset="utf-8">
   <title>風雅 ｜お問い合わせ</title>
   </head>
  <body>
  <h4>お問い合わせ</h4>
  <table border="1">
  <tr><th>会社名</th><th>氏名</th><th>電話</th><th>メール</th><th>コメント</th></tr>
  <tr>
  <td><?php print $k; ?></td>
  <td><?php print $s; ?></td>
  <td><?php print $t; ?></td>
  <td><?php print $m; ?></td>
  <td><?php print $c; ?></td>
  </tr>
</table>
  </body>
  </html>