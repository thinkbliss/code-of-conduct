# README #

This is a template page for emc.com and delltechnologies.com.

Fork this repository and start a new repository with these files.

Update the NAMESPACE in scss/files, js/files and index_*.html files.

For Template maintenance - use index_dt.htm



### Libraries and Modules: ###

* [Grunt](https://gruntjs.com/)
* [SASS](http://sass-lang.com/)
* Bootstrap v4 - modified 
* Slick v1.6.0
* jquery.matchHeight


Grunt Modules

* [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass/)
* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch/)


### EMC/DELL-TECHNOLOGIES Core CSS and JS: ###

* EMC
	* www.emc.com/etc/designs/uwaem/clientlibs/css/emc-v2.min.2098f97a5a52dd91cbda8190580b7545.css
	* www.emc.com/etc/designs/uwaem/clientlibs/js/emc.min.60a5384e7dca419b49775ccf4218e961.js
	* www.emc.com/etc/designs/uwaem/clientlibs/js/uwcore.min.de1f646fac63574933a3eb0825248f2e.js
		* uses jQuery v3.2.1

* Dell Technologies 
	* www.delltechnologies.com/etc/designs/delltechnologies/clientlibs/css/delltechnologies.min.dd2e8edc442fb1c57bd83c16f721b751.css
	* www.delltechnologies.com/etc/designs/delltechnologies/clientlibs/js/delltechnologies-core.min.3570a01440877a81d152d0e96d85eb9c.js
	* www.delltechnologies.com/etc/designs/delltechnologies/clientlibs/js/delltechnologies.min.79812abf4bb3b4de137469ada21d35f4.js

NOTE: these files are updated by Dell. If files fail to load, download latest version from the emc.com or delltechnologies.com website.


### LOCAL JS: ###
js/NAMESPACE.js
function checkDevAssetPath() - updates link paths if the following strings are in the address bar: "localhost" || "thisisarebellion.com" || rebellion-workspace


###Forking the Repo###
In the ACTIONS menu, click on Fork. This will take you to a form. Select the owner "rebelliondesign", select a Project from the dropdown menu that appears, then type in a unique name for the new repository.

A new Repository will be created and is ready for uses.


###Templates###
Select an index_*.htm template that best suits your project and rename it. 


###Namespace###
Replace **NAMESPACE** placeholder is in these places:

* Gruntfile.js - within the sass object
* index_*.htm - find the line "<div class="NAMESPACE">"
* scss/ - rename the .scss file within that folder, edit the file and rename the .NAMESPACE class on line 3
* js/ - rename the NAMESPACE.js file
	* find and replace the NAMESPACE placeholder within the NAMESPACE.js file
* css/ - remove the NAMESPACE.css and NAMESPACE.css.map, new files will be generated for you from sass
* .sass-cache/ - remove this folder and its contents, a new folder will be generated for you from sass
    * find and replace the NAMESPACE placeholder within the NAMESPACE.css file

### GRUNT ###
In Terminal navigate to your cloned project directory
~~~
$ cd /folder/directory/projects/new-project
~~~

then run the grunt command
~~~
$ grunt
~~~

If you get this warning:

Warning: 
You need to have Ruby and Sass installed and in your PATH for this task to work.

Run this command to install Sass:

~~~
$ sudo gem install -n /usr/local/bin sass
~~~


### Breakpoints ###

small: 640px
medium : 980px
large : 1280px
xlarge : 1600px


* * *

[Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)