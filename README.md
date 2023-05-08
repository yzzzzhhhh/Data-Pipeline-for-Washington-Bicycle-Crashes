# Find Your Safe Biking Routes in Washington, D.C.
By Interacting and Exploring Bike Crash Risk Scores In Different Areas

Ke Zhou, Teresa Chang, Zhonghua Yang
University of Pennsylvania Weitzman School of Design
MUSA 509 Geospatial Cloud Computing Final Project
Taught by Mjumbe Poe
May 7th, 2023

## Description

This project is an extension of the MUSA Capstone project "Spatial Prediction and Risk Factor Analysis of Bicycle Crashes in Washington, D.C." by Zhonghua Yang. This project establishes a website that provides bikers with a service to identify safer biking areas in Washington, D.C., and enables policymakers to identify high-risk biking areas and provide effective solutions. Users can interact with our map on the website to explore the biking risk scores and other basic information about their potential biking areas and design their own biking routes accordingly.

This project collaborates with Google Cloud. For our data pipeline, we extract datasets from the data sources and load them into Google Cloud Storage. Then, we set up an R virtual machine on Google Cloud and load the feature datasets from the storage bucket to transform and run the Random Forest model. We then load the model prediction results in a geojson file back to Google Cloud Storage. Using the model results and the previously extracted datasets, we build our web application with JavaScript. The final application has two layers. The first layer provides a visualization of bike crash risk, which allows users to explore and find their preferred biking area. The second layer provides a grid for users to click on, and the bike risk will show, which can provide an interactive way to help bikers find their safe route to enjoy their trips. Along with an information box that will pop up additional details that we think are important for users or policymakers to be informed, as well as a method for educational purposes.

This repository provides codes for extracting, loading, and automatically running an R virtual machine. Our website is available here:. For more details about our project, please visit this slideshow: https://docs.google.com/presentation/d/15zD-bEzvAscXlibE-5vSxo2s85ZBpjqPRoqmQjemWDg/edit?usp=sharing.

We hope you enjoy our project!



