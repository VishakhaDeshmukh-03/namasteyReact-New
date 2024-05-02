#Namastey React
#Package.json is a configuration for npm.

#What is parcel is doing:
-It has created Dev Build.
-It has created the local server, it host the app on server.
-Automatically refreshing the page after some change has been happend into the code and which is called HMR(Hot Module Replacement). 
-Parcel uses 'File Watching Algorithm' which has been written in C++. and with the help of this algorithm parcel keeps track of all files and in this way HMR is achived by parcel. 
-Parcel is caching the things so that the next build should be done in a fastest way and hence it is giving faster experence. Cashing things are happening into a parcel-cache file. 
-Image Optimization
-If we do the production build then parcel will do the minification or it minify the code as well.
-It compressed the files to deploy the code or create a build for production
-Consistent Hashing
-Code Splitting
-Differential Bundling:It gives the support to older browsers. Means suppose you can open your web app on older browser on any device.
-Parcel allow us or gives us the way to host the web app on HTTPs.
-Dignostics : If you make an error in your code or configuration, parcel displays beautiful dignostics in your terminal and in the browswe. Every error includes syntax highlighted code frame pointing to exact location where the error occured along with hints about how to fix the issue.
-Tree Shaking: removes unused code
-It creates a different Dev and Prod Build. Because Dev build takes a little time and prod build take a more time to create a build because there are less optimization on dev build and more optimization on prod build.
- All the above things parcel alone is not doing, it is also using some other packages and those other packages are present somewhere in our node_module.



-Q. when we create a build or production build using [npm parcel build index.html] when it creates a production ready app whre does the build goes?
 - ANS:- what exactly dist is, when we executes parcel using command [npx parcel index.html] it generates the development build of the project and it hosted on localhost:1234. so that development build it puts into dist folder.

 -When we use the build command it will bundle, minify the code, it will do all the requird stuff and put all the files into dist folder and currently we are ceating the build for development so dist are containig development build files.

 - when we make a code changes and save the file or refresh the browser it uses the dist and parcel_cache folder and update the view on browswer using HMR.