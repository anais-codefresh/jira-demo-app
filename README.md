# Posting to Jira from your Codefresh Pipeline
![Jira Comment](./assets/docsheader.png?raw=true "Jira comment")

## Description

Basic Typescript Application to demonstrate custom steps in your Codefresh pipeline, using Jira.

## Use 

Use the application by running

`yarn build`

and

`yarn start`

You can build the Docker image using

`docker build -t NAME-OF-YOUR-DOCKERIMAGE:IMAGE-TAG .`

And run the Docker image by

`docker run NAME-OF-YOUR-DOCKERIMAGE:IMAGE-TAG node build/index.js`

## Further Documentation

You can view how to use the custom Jira step in the [documentation.](https://codefresh.io/docs/docs/yaml-examples/examples/sending-the-notification-to-jira/)

## Using Codefresh Pipeline

With the step provided in the codefres.yml file, you can let everyone know directly in Jira that a build has finished.

Here is the finished pipeline with the Jira step:
![Jira Comment](./assets/codefreshpipeline.png?raw=true "Jira comment")

Here is the comment posted on Jira from the Codefresh pipeline step:
![Jira Comment](./assets/jira-comment.png?raw=true "Jira comment")