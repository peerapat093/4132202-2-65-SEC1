<?php
include "../Model/condb.php";
?>
<table>
    <thead>
        <tr>
            <th>#</th>
            <th>NAME</th>
            <th>PASS</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <?php
        $sql = "SELECT * FROM tb_user ORDER BY user_id ASC";
        $result = mysqli_query($link, $sql);
        while ($row = mysqli_fetch_assoc($result)) {
        ?>
        <tr>
            <td><?=$row["user_id"]?></td>
            <td><?=$row["User_name"]?></td>
            <td><?=$row["user_password"]?></td>
            <td><button class="btn_del" data="<?=$row["user_id"]?>">DEL</button></td>
            <td></td>
        </tr>
        <?php
        }
        ?>
    </tbody>
</table>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
<script>
    $(".btn_del").click(function(){
        let data = $(this).attr("data");
        alert(data);
    })
</script>