<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <form enctype="multipart/form-data" action=""id="box_photo" class="form"method="post" name="form" onsubmit="return upload_photo()">
    <div class="">
      <p>Photo</p>
      <input type="file" name="photo"id="photo" value="">
    </div>
    <div class="">
      <p>Name</p>
      <input type="text" name="name" id="name" value="">
      <!-- <p>Phone</p> -->
      <!-- <input type="text" name="phone" id="phone" value=""> -->
      <!-- <p>Email</p>
      <input type="text" name="email" id="email" value="">
      <input type="text" name="send" value="send"> -->
    </div>
    <div class="">
      <button type="button" name="button"></button>
      <button type="submit" value="insert"name="btn"id="btn">Send</button>
    </div>
  </form>
<div id="output"></div>

<script src="upload_image.js" charset="utf-8"></script>


</body>
</html>