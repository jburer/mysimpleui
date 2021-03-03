# mySimpleApp

The first part of my three part app: The UI.

- _The corresponding **API** is here: (https://github.com/jburer/mysimpleapi)._
- _The corresponding **datastore** is here: (https://github.com/jburer/mysimpledb)._

## myPurpose

It's "concept" is to provide users a way to manage local events around town, or shindigs
as I call them. It provides CRUD capabilities to any user, and allows them to manage the data in the
datastore, through the API, from the UI.

Designed to give me a "clean" system for demonstrating Security and
Privacy principals, the only principals applied to the base is that which is inherent
in the frameworks, software, and services that I'm using to build the system.

As I work through the fundementals of Security and Privacy, I'll apply
them to this app, and create different branches to give you that "before
and after" feel.

For more info on this effort check out my blog: (http://jburer.wordpress.com)

_**PLEASE NOTE:** This is solely_
_intended as a learning and education tool, and in no way represents the_
_full responsibilities needed for a production system. In fact it is_
_specifically designed to omit security and privacy controls (e.g._
_authentication, input validation, logging, etc. - **all those things security and privacy folks care about**)_
_so that their benefits can be demonstrated._

## myArchitecture

This is pretty straightforward UI that sits independently from the API and datastore.

It is designed to be run inside a Docker container.

![mySimpleUI](/images/mySimpleUI.gif)

## myDockerSetup

Create the `mysimplenetwork` network. _**PLEASE NOTE:** All images in this app are pre-configured to use this network by design._
_Because `docker-compose.yml` expects this network, it is required to create it first before running docker compose._
_Creating the network first allows each image to be created independently, although you will want to start the database first_
_before running the API as the API immediately looks for the DB._

<pre>
    docker network create mysimplenetwork
</pre>

Clone the repository and move to the `mysimpleui` directory.

<pre>
    docker compose up -d --build --remove-orphans
</pre>

This will make the UI available at the following URI:

<pre>
    http://localhost:8080
</pre>
