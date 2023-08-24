# Software Architecture Documentation

## Table of Contents

- [Introduction](#introduction)
- [System Overview](#system-overview)
- [Architecture Diagram](#architecture-diagram)

## Introduction

Welcome to the documentation for my static web portofolio. This document provides an overview of the architecture and design decisions behind my software.

## System Overview

The primary objective of this system is to host a secure, fast, and scalable static website using AWS services. The solution focuses on achieving the following goals:

- Hosting a static website on AWS S3 with a root domain bucket that redirects to a sub-domain bucket.
- Implementing HTTPS support for both the root domain and sub-domain for enhanced security.
- Utilizing CloudFront distribution for caching static content, ensuring low-latency access globally.
- Integrating AWS Certificate Manager for SSL/TLS certificates to enable secure connections.
- Leveraging Route 53 for DNS management and domain routing.
- Implementing a CI/CD pipeline using AWS CodePipeline for automated deployments.
- Automating cache invalidation on CloudFront edge locations as part of the CI/CD pipeline.

## Architecture Diagram

<a href="https://ibb.co/CMmBvhY"><img src="https://i.ibb.co/KLb67Ff/portfolio.png" alt="portfolio" border="0"></a>
[Figure: Showing Static Website Hosting Using CloudFront & CI/CD Automation Architecture]

The architecture involves the following workflow:

- Developers commit changes to a CodeCommit repository.
- CodePipeline detects changes and triggers the pipeline.
- CodeBuild is triggered.
- AWS Lambda function is invoked to invalidate old CloudFront cache.
- CloudFront serves content globally with SSL/TLS support.
- Route 53 routes DNS traffic to CloudFront distributions.
