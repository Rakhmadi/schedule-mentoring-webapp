<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
    <script>
        let x = fetch('/api/show_schedule',{
            headers:{
                'Accept':'application/json',
                'Authorization': `Bearer $2y$10$dhw46zOcR9HYajh3bdtMBej3fqArSzkOhSgvFR6fTzj3X.w2.eGTG`
            }
        })
        .then(_=>_.json()).then(x=>console.log(x))
    </script>
</body>
</html>