# Kubernetes Echo Server

This repository contains Kubernetes deployment files for setting up an Echo Server application.

## Prerequisites

Before getting started, ensure that you have the following prerequisites installed:

- Kubernetes cluster
- kubectl command-line tool

## Deployment

To deploy the Echo Server application, follow these steps:

1. Clone this repository to your local machine:

   git clone https://github.com/Renia274/kubernetes-echoserver.git
   
##Instructions

Change into the repository directory:

cd kubernetes-echoserver

kubectl apply -f echoserver.yaml


2.Apply the Kubernetes configuration file:

kubectl apply -f echoserver.yaml

3.Forward the Kubernetes service to a local port:

kubectl port-forward service/echoserver-service 8889:8080

4.Send a POST request to the Echo Server:

curl -i -X POST -d '{"message": "Hello, echoserver!"}' http://localhost:8889

##Scaling

To scale up the Echo Server deployment, you can use the following command:

kubectl scale deployment echoserver-deployment --replicas=5

##Monitoring 

Get information about running pods:

kubectl get pods

Get information about ReplicaSets:

kubectl get replicasets

Get information about deployments:

kubectl get deployments
