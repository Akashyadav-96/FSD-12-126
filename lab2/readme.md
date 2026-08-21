fs module directly opperate with system the common opperation the file or the folders are

1. file -> write File, read File , append File
2. folder -> mkdir/md , rmdir , readdir
3. file metadata -> stat, rstat, lstat
4. watch -> watch, unwatch
5. stream -> readstream, writestream
   all function are promise so it must be call with await

appendFile-> if file is not created then it will create the file.
writeFile-> it always create the file

#CRUD Project
(c-create, r-retrive, u-update, d-delete)

assume we are making a cart related project

1. user can add any project (id,name,price,qty) into cart.
2. user can see all the items of cart.
3. user can remove item  from cart.
4. user can also update quantity of product.
5. all the items should be stored after temination of project.
