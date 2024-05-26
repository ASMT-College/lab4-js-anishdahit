<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JavaScript email Validation</title>
    <link rel="stylesheet" href="style.css">

</head>

<body>
    <form aciton ="" name="myForm" onsubmit="return validateForm()" method="post">
        <div class="formdesign" id="name">
            Name: <input type="text" name="fname" required><b><span class="formerror"> </span></b>
        </div>

        <div class="formdesign" id="email">
            Email: <input type="email" name="femail" required><b><span class="formerror"> </span></b>
        </div>

        <div class="formdesign" id="phone">
            Phone: <input type="phone" name="fphone" required><b><span class="formerror"></span></b>
        </div>

        <div class="formdesign" id="pass">
            Password: <input type="password" name="fpass" required><b><span class="formerror"</span></b>
        </div>

        <div class="formdesign" id="cpass">
            Confirm Password: <input type="password" name="fcpass" required><b><span class="formerror"></span></b>
        </div>

        <input class="but" type="submit" value="Submit">

    </form>
    <script src="index.js"></script>
</body>
</html>
