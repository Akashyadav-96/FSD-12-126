fs module directly opperate with system the common opperation the file or the folders are

1. file -> write File, read File , append File
2. folder -> mkdir/md , rmdir , readdir
3. file metadata -> stat, rstat, lstat
4. watch -> watch, unwatch
5. stream -> readstream, writestream
   all function are promise so it must be call with await

appendFile-> if file is not created then it will create the file.
writeFile-> it always create the file
