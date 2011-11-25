.Assets in the post and pre-build folders are copied over the top of the source either prior to building (pre-build) or after building (post-build). 

The database folder is for any database snapshots or creation scripts.

ex. a web.config file placed in build\post-build\DEV\ would be copied over the web.config file after the project is built but before deployed.